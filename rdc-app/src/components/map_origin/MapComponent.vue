<script setup lang="ts">
import { watch, onMounted, onUnmounted, ref, type Ref } from 'vue';
import { useStoreRegions } from '@/store/store';
import ToolTipComponent from '../common/ToolTipComponent.vue';
import type { Municipalities, Region } from '@/interfaces/regions';

import panzoom, { type PanZoom } from 'panzoom';
import { svgLoad } from 'virtual:svg-loader';
import { BASE_MAP_COLORS } from '@/interfaces/variables';

const props = defineProps<{
  componentRegionCode: string;
}>();

const store = useStoreRegions();
let mapContainer: Ref<HTMLElement | null> = ref(null);

const emit = defineEmits<{
  regionSelected: [regionCode: string];
}>();

let mouseCoords = ref([0, 0]);
let showToolTip = ref(false);

const mapSvg = svgLoad[props.componentRegionCode];

let hoveredRegionCode = ref<string | null>(null);
let hoveredRegionData = ref<Region | Municipalities | null>(null);

let regionsData: { [key: string]: Region };
let municipalitiesData: { [key: string]: Municipalities };

watch(hoveredRegionCode, async () => {
  if (hoveredRegionCode.value && props.componentRegionCode === 'global') {
    hoveredRegionData.value = regionsData[hoveredRegionCode.value];
  }
  if (hoveredRegionCode.value && props.componentRegionCode !== 'global') {
    hoveredRegionData.value = municipalitiesData[hoveredRegionCode.value];
  }
});

function onMouseMove(region: Element, event: MouseEvent) {
  const regionCode = region.getAttribute('data-code');

  if (hoveredRegionCode.value != regionCode) {
    showToolTip.value = true;
    hoveredRegionCode.value = region.getAttribute('data-code');
  }

  mouseCoords.value = [event.pageX, event.pageY];
}

let panzoomInstance: null | PanZoom = null;
let eventListeners: [SVGElement, string, (event: Event) => void][] = [];

onMounted(async () => {
  const allRegions = [
    ...Array.from(document.querySelectorAll<SVGElement>('path[data-code]')),
    ...Array.from(document.querySelectorAll<SVGElement>('g[data-code]')),
  ];

  regionsData = await store.getRegions();
  if (props.componentRegionCode !== 'global') {
    municipalitiesData = await store.getMunicipalities(regionsData[props.componentRegionCode].id);
  }

  allRegions.forEach(async (region) => {
    BASE_MAP_COLORS.forEach((color) => {
      let currentRegion;
      if (props.componentRegionCode === 'global') {
        currentRegion = regionsData[region.dataset.code!];
      } else {
        currentRegion = municipalitiesData[region.dataset.code!];
      }

      if (!currentRegion) {
        return;
      }

      const value = currentRegion.comp_indicator_count_eduinst;

      if (value >= color.from && value <= color.to) {
        region.style.fill = color.color;
        region.style.opacity = '0.8';
        region.style.stroke = 'var(--color-text)';
      }
    });
  });

  allRegions.map((region) => {
    const cb = (event: Event) => onMouseMove(region, event as MouseEvent);
    region.addEventListener('mousemove', cb);

    eventListeners.push([region, 'mousemove', cb]);
  });

  allRegions.map((region) => {
    const cb = () => {
      showToolTip.value = false;
      hoveredRegionCode.value = null;
    };
    region.addEventListener('mouseleave', cb);

    eventListeners.push([region, 'mouseleave', cb]);
  });

  allRegions.map((region) => {
    const activeRegionCode = region.getAttribute('data-code')!;

    let startClick: number;
    let endClick: number;

    const mouseDownCb = () => {
      startClick = new Date().getTime();
    };

    region.addEventListener('mousedown', mouseDownCb);
    region.addEventListener('touchstart', mouseDownCb);

    eventListeners.push([region, 'mousedown', mouseDownCb]);
    eventListeners.push([region, 'touchstart', mouseDownCb]);

    const mouseUpCb = () => {
      endClick = new Date().getTime();

      if (endClick! - startClick! < 150) {
        if (props.componentRegionCode == 'global') {
          emit('regionSelected', activeRegionCode);
        }
      }
    };

    region.addEventListener('mouseup', mouseUpCb);
    region.addEventListener('touchend', mouseUpCb);

    eventListeners.push([region, 'mouseup', mouseUpCb]);
    eventListeners.push([region, 'touchend', mouseUpCb]);
  });

  panzoomInstance = panzoom(mapContainer.value!, { transformOrigin: { x: 0.5, y: 0.5 }, minZoom: 1, maxZoom: 3 });
});

onUnmounted(() => {
  eventListeners.forEach(([region, eventName, cb]) => {
    region.removeEventListener(eventName, cb);
  });
});
</script>

<template>
  <ToolTipComponent
    :title="hoveredRegionData?.title ?? 'Загрузка...'"
    v-if="showToolTip"
    :mouse-x="mouseCoords[0]"
    :mouse-y="mouseCoords[1]"
  >
    Кол-во школ:
    {{ hoveredRegionData ? hoveredRegionData.comp_count_school || 0 : 'Загрузка...' }}
    <br />
    Кол-во СПО: {{ hoveredRegionData?.comp_count_spo ?? 'Загрузка...' }}
  </ToolTipComponent>

  <div class="container">
    <div class="zoom-panel">
      <span class="material-symbols-outlined zoom" @click="panzoomInstance?.zoomTo(0, 0, 1.2)">zoom_in</span>
      <span class="material-symbols-outlined zoom" @click="panzoomInstance?.zoomTo(0, 0, 0.8)">zoom_out</span>
      <span
        class="material-symbols-outlined zoom"
        @click="
          panzoomInstance?.zoomTo(0, 0, 0);
          panzoomInstance?.moveTo(0, 0);
        "
      >
        restart_alt
      </span>
    </div>

    <div ref="mapContainer" class="map-container" v-html="mapSvg"></div>
  </div>
</template>

<style>
[data-code] {
  fill: rgba(149, 145, 253, 1);
  stroke: rgb(245, 246, 250);
  transition: opacity 0.3s linear;
}

[data-code]:hover {
  opacity: 1 !important;
  cursor: pointer;
}

.container {
  position: relative;
}

.map-container {
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 700px;
}

.zoom-panel {
  position: absolute;
  z-index: 19;
}

.zoom {
  border: 1px solid var(--color-background-mute);
  padding: 2.5px 20px;
  background-color: var(--color-background);
  transition: background-color 0.3s ease;
}

.zoom:hover {
  background-color: var(--color-background-soft);
  cursor: pointer;
}

.zoom:first-child {
  border-right: none;
}

.zoom:last-child {
  border-left: none;
}

@media only screen and (max-width: 850px) {
  .map-container {
    max-height: 550px;
  }
}

@media only screen and (min-width: 3000px) {
  .map-container {
    max-height: 40vw;
  }
}
</style>
