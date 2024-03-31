<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';
  import ToolTipComponent from '../common/ToolTipComponent.vue';
  
  import MapSVG from '@/assets/map.svg';
  
  const emit = defineEmits<{
    regionSelected: [regionCode: string]
  }>()

  let mouseCoords = ref([0, 0]);
  let showToolTip = ref(false);

  type Listeners = [Element, (event: Event) => void][];

  let onMouseMoveListeners: Listeners = [];
  let onMouseLeaveListeners: Listeners = [];
  let onMouseClickListeners: Listeners = [];


  function onMouseMove(region: Element, event: MouseEvent) {
    showToolTip.value = true;
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
      const cb = (event: Event) => showToolTip.value = false;
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
  <ToolTipComponent v-if="showToolTip" :mouse-x="mouseCoords[0]" :mouse-y="mouseCoords[1]">
  mkmkmkm
  </ToolTipComponent>

  <MapSVG/>
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