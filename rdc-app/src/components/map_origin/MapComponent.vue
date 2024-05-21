<script setup lang="ts">
import { watch, onMounted, onUnmounted, ref, type Ref } from 'vue';
import { useStoreRegions } from '@/store/store';
import ToolTipComponent from '../common/ToolTipComponent.vue';
import type { Municipalities, Region } from '@/interfaces/regions';

import panzoom, { type PanZoom } from 'panzoom';
import { svgLoad } from 'virtual:svg-loader';
import { BASE_MAP_COLORS } from '@/interfaces/variables';
import CustomSelectComponent from '../common/CustomSelectComponent.vue';

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
let selectedRegionName = ref<null | string>(null);

let regionsData = ref<{ [key: string]: Region } | null>(null);
let municipalitiesData = ref<{ [key: string]: Municipalities } | null>(null);

watch(hoveredRegionCode, async () => {
  if (hoveredRegionCode.value && props.componentRegionCode === 'global') {
    hoveredRegionData.value = regionsData.value![hoveredRegionCode.value];
  }
  if (hoveredRegionCode.value && props.componentRegionCode !== 'global') {
    hoveredRegionData.value = municipalitiesData.value![hoveredRegionCode.value];
  }
});

let animationInterval: NodeJS.Timeout | null = null;
let animationTimeout: NodeJS.Timeout | null = null;

function onRegionNameSelected(regionCode: string) {
  if (animationInterval) {
    clearInterval(animationInterval);

    animationInterval = null;
  }

  if (animationTimeout) {
    clearTimeout(animationTimeout);

    animationTimeout = null;
  }

  const allRegions = [
    ...Array.from(document.querySelectorAll<SVGElement>('path[data-code]')),
    ...Array.from(document.querySelectorAll<SVGElement>('g[data-code]')),
  ];

  const selectedRegion = allRegions.find((region) => region.dataset.code == regionCode);
  if (selectedRegion) {
    let width = 1;
    let increase = true;

    if (selectedRegionName.value) {
      const preferSelectedRegion = allRegions.find((region) => region.dataset.code == selectedRegionName.value);
      preferSelectedRegion!.style.stroke = 'var(--color-text)';
      preferSelectedRegion!.style.strokeWidth = '1px';
    }
    selectedRegionName.value = regionCode;

    animationInterval = setInterval(() => {
      if (width > 3) {
        increase = false;
      } else if (width == 1) {
        increase = true;
      }

      if (increase) {
        width += 1;
      } else {
        width -= 1;
      }

      selectedRegion!.style.stroke = 'red';
      selectedRegion!.style.strokeWidth = `${width}px`;
    }, 80);

    animationTimeout = setTimeout(() => {
      if (animationInterval) {
        clearInterval(animationInterval);
      }
    }, 5000);
  }
}

function onMouseMove(region: Element, event: MouseEvent) {
  const regionCode = region.getAttribute('data-code');

  if (hoveredRegionCode.value !== regionCode) {
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

  regionsData.value = await store.getRegions();
  if (props.componentRegionCode !== 'global') {
    municipalitiesData.value = await store.getMunicipalities(regionsData.value[props.componentRegionCode].id);
  }

  allRegions.forEach(async (region) => {
    BASE_MAP_COLORS.forEach((color) => {
      let currentRegion;
      if (props.componentRegionCode === 'global') {
        currentRegion = regionsData.value![region.dataset.code!];
      } else {
        currentRegion = municipalitiesData.value![region.dataset.code!];
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
        emit('regionSelected', activeRegionCode);
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

  if (animationInterval) {
    clearInterval(animationInterval);

    animationInterval = null;
  }

  if (animationTimeout) {
    clearTimeout(animationTimeout);

    animationTimeout = null;
  }
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
    <CustomSelectComponent
      v-if="regionsData"
      :regions-data="componentRegionCode !== 'global' ? municipalitiesData : regionsData"
      class="search"
      v-on:regionNameSelected="onRegionNameSelected"
    />

    <div class="map-wrapper">
      <div ref="mapContainer" class="map-container" v-html="mapSvg"></div>
    </div>
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

.search {
  position: absolute;
  z-index: 20;
  left: 200px;
}

@media only screen and (max-width: 750px) {
  .search {
    top: 35px;
    left: 0;
  }
}

@media only screen and (max-width: 850px) {
  .map-container {
    max-height: 550px;
  }
}

@media only screen and (min-width: 2300px) {
  .map-container {
    min-height: 40vw;
  }

  .search {
    left: 350px;
  }

  .container {
    font-size: 1vw;
  }

  .zoom {
    font-size: 1.2vw;
    padding: 10px 30px;
  }
}
</style>
