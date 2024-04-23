<script setup lang="ts">
import { watch, onMounted, onUnmounted, ref } from 'vue';
import { useStoreRegions } from '@/store/store';
import ToolTipComponent from '../common/ToolTipComponent.vue';
import type { Region } from '@/interfaces/regions';

import { svgLoad } from 'virtual:svg-loader';

const props = defineProps<{
  componentRegionCode: string;
}>();

const store = useStoreRegions();

const emit = defineEmits<{
  regionSelected: [regionCode: string];
}>();

let mouseCoords = ref([0, 0]);
let showToolTip = ref(false);

const mapSvg = svgLoad[props.componentRegionCode];

let hoveredRegionCode = ref<string | null>(null);
let hoveredRegionData = ref<Region | null>(null);

watch(hoveredRegionCode, async () => {
  if (hoveredRegionCode.value) {
    hoveredRegionData.value = await store.getRegionData(hoveredRegionCode.value)!;
  }
});

type Listeners = [Element, (event: Event) => void][];
let onMouseMoveListeners: Listeners = [];
let onMouseLeaveListeners: Listeners = [];
let onMouseClickListeners: Listeners = [];

function onMouseMove(region: Element, event: MouseEvent) {
  const regionCode = region.getAttribute('data-code');

  if (hoveredRegionCode.value != regionCode) {
    showToolTip.value = true;
    hoveredRegionCode.value = region.getAttribute('data-code');
  }

  mouseCoords.value = [event.pageX, event.pageY];
}

onMounted(() => {
  const allRegions = [
    ...Array.from(document.querySelectorAll<SVGElement>('path[data-code]')),
    ...Array.from(document.querySelectorAll<SVGElement>('g[data-code]')),
  ];

  onMouseMoveListeners = allRegions.map((region) => {
    const cb = (event: Event) => onMouseMove(region, event as MouseEvent);
    region.addEventListener('mousemove', cb);

    return [region, cb];
  });

  onMouseLeaveListeners = allRegions.map((region) => {
    const cb = () => {
      showToolTip.value = false;
      hoveredRegionCode.value = null;
    };
    region.addEventListener('mouseleave', cb);

    return [region, cb];
  });

  onMouseClickListeners = allRegions.map((region) => {
    const activeRegionCode = region.getAttribute('data-code')!;
    const cb = () => {
      if (props.componentRegionCode == 'global') {
        emit('regionSelected', activeRegionCode);
      }
    };
    region.addEventListener('click', cb);

    return [region, cb];
  });
});

onUnmounted(() => {
  onMouseMoveListeners.forEach(([region, cb]) => {
    region.removeEventListener('mousemove', cb);
  });

  onMouseLeaveListeners.forEach(([region, cb]) => {
    region.removeEventListener('mouseleave', cb);
  });

  onMouseClickListeners.forEach(([region, cb]) => {
    region.removeEventListener('click', cb);
  });
});
</script>

<template>
  <ToolTipComponent
    :title="hoveredRegionData?.title ? hoveredRegionData.title : 'Загрузка...'"
    v-if="showToolTip"
    :mouse-x="mouseCoords[0]"
    :mouse-y="mouseCoords[1]"
  >
    Кол-во школ: {{ hoveredRegionData?.comp_count_school ? hoveredRegionData.comp_count_school : 'Загрузка...' }}
    <br />
    Кол-во СПО: {{ hoveredRegionData?.comp_count_spo ? hoveredRegionData.comp_count_spo : 'Загрузка...' }}
  </ToolTipComponent>

  <div class="map-container" v-html="mapSvg"></div>
</template>

<style>
[data-code] {
  fill: rgba(149, 145, 253, 1);
  stroke: rgb(245, 246, 250);
  transition: fill 0.3s linear;
  margin: 0 auto;
}

[data-code]:hover {
  fill: rgb(99, 94, 138);
  cursor: pointer;
}

.map-container {
  display: flex;
  justify-content: center;
}
</style>
