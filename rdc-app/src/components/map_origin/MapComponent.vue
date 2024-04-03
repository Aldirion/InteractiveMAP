<script setup lang="ts">
  import { watch, onMounted, onUnmounted, reactive, ref } from 'vue';
  import { useStoreRegions } from '@/store/store'
  import ToolTipComponent from '../common/ToolTipComponent.vue';
  import MapSVG from '@/assets/map.svg';
  import AmuSVG from '@/assets/regions/RU-AMU.svg';
  import KyaSvg from '@/assets/regions/RU-KYA.svg';
  import TomSvg from '@/assets/regions/RU-AD.svg';
  import type { Region } from '@/interfaces/regions';

  const props = defineProps<{
    componentRegionCode: string,
  }>();

  const store = useStoreRegions();
  const { getRegions, getRegionData } = store;

  const emit = defineEmits<{
    regionSelected: [regionCode: string];
  }>();

  let mouseCoords = ref([0, 0]);
  let showToolTip = ref(false);

  let hoveredRegionCode = ref<string | null>(null);

  let hoveredRegionData = ref<Region | null>(null)
  watch(hoveredRegionCode, () => {
    if(hoveredRegionCode.value) {
      hoveredRegionData.value = getRegionData(hoveredRegionCode.value)!;
    }
  });

  onMounted(async () => {
    await getRegions();
  });

  type Listeners = [Element, (event: Event) => void][];
  let onMouseMoveListeners: Listeners = [];
  let onMouseLeaveListeners: Listeners = [];
  let onMouseClickListeners: Listeners = [];

  function onMouseMove(region: Element, event: MouseEvent) {
    const regionCode = region.getAttribute("data-code");

    if (hoveredRegionCode.value != regionCode) {
      showToolTip.value = true;
      hoveredRegionCode.value = region.getAttribute("data-code");
    }

    mouseCoords.value = [event.pageX, event.pageY];
  }

  onMounted(() => {
    const allRegions = [
      ...Array.from(document.querySelectorAll("path[data-code]")),
      ...Array.from(document.querySelectorAll("g[data-code]")),
    ];
    
    onMouseMoveListeners = allRegions.map((region) => {
      const cb = (event: Event) => onMouseMove(region, <MouseEvent>event);
      region.addEventListener("mousemove", cb);

      return [region, cb];
    });

    onMouseLeaveListeners = allRegions.map((region) => {
      const cb = (event: Event) => {
        showToolTip.value = false;
        hoveredRegionCode.value = null;
      };
      region.addEventListener("mouseleave", cb);

      return [region, cb];
    });

    onMouseClickListeners = allRegions.map((region) => {
      const cb = (event: Event) => emit("regionSelected", region.getAttribute("data-code")!);
      region.addEventListener("click", cb);

      return [region, cb];
    });
  });

  onUnmounted(() => {
    onMouseMoveListeners.forEach(([region, cb]) => {
      region.removeEventListener("mousemove", cb);
    });

    onMouseLeaveListeners.forEach(([region, cb]) => {
      region.removeEventListener("mouseleave", cb);
    });

    onMouseClickListeners.forEach(([region, cb]) => {
      region.removeEventListener("click", cb);
    });
  });
</script>

<template>
  <ToolTipComponent :title="hoveredRegionData?.title ? hoveredRegionData.title : 'Загрузка...' " v-if="showToolTip" :mouse-x="mouseCoords[0]" :mouse-y="mouseCoords[1]">
    Кол-во школ: {{ hoveredRegionData?.countschool ? hoveredRegionData.countschool : 'Загрузка...' }}
    <br>
    Кол-во СПО:  {{ hoveredRegionData?.countspo ? hoveredRegionData.countspo : 'Загрузка...' }}
  </ToolTipComponent>

  <MapSVG v-if="componentRegionCode == 'global'"/>
  <KyaSvg v-if="componentRegionCode == 'RU-KYA'"/>
  <AmuSVG v-if="componentRegionCode == 'RU-AMU'"/>
  <TomSvg v-if="componentRegionCode == 'RU-TOM'"/>
</template>

<style>
	[data-code] {
		fill: rgba(149, 145, 253, 1);
		stroke: rgb(245, 246, 250);
		transition: fill .5s linear;
		margin: 0 auto;
	}
	
	[data-code]:hover {
		fill: rgb(99, 94, 138);
		transition: fill .5s linear;
		cursor: pointer;
	}
</style>