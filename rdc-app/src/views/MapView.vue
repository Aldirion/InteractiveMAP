<template>
	<main>
		<Map 
	  		@setHoverRegion="setHoverRegion" 
	  		@setActiveRegion="setActiveRegion"
			@setTooltipCoords="setTooltipCoords"
		/>
		<TooltipHoverRegion v-if="hoverRegion" :region="hoverRegion"
		:coords="tooltipCoords"/>
		<ModalActiveRegion v-if="activeRegion" :region="activeRegion"  @close="closeModalReg"/>

	</main>
</template>


<script >
import Map from '../components/map_origin/Map.vue'
import TooltipHoverRegion from '../components/map_origin/TooltipHoverRegion.vue'
import ModalActiveRegion from '@/components/map_origin/ModalActiveRegion.vue'


export default {
	data (){
		return {
			hoverRegion: null,
			activeRegion: null,
			tooltipCoords: {},
			isShowModalReg: false,
		}
	},
	methods: {
		setHoverRegion (regionCode = null) {
			// console.log(regionCode)
			this.hoverRegion = regionCode
		},
		setActiveRegion (regionCode = null) {
			// console.log('hel')
			this.activeRegion = regionCode
			// console.log(regionCode)
		},
		setTooltipCoords (mouse = null) {
			this.tooltipCoords.x = mouse?.pageX
			this.tooltipCoords.y = mouse?.pageY
		},
		closeModalReg (){
			this.activeRegion = null;
		},
		
	},
	components: { Map, TooltipHoverRegion, ModalActiveRegion }
}
</script>


<!-- <style>
.rf-map [data-code] {
  fill: rgb(152, 162, 189);
  stroke: rgb(245, 246, 250);

<script >
import Map from '../components/Map.vue'
import TooltipRegionHover from '../components/TooltipRegionHover.vue'


export default {
	data (){
		return {
			hoverRegion: null,
			activeRegion: null,
			tooltipCoords: {},
		}
	},
	methods: {
		setHoverRegion (regionCode = null) {
			// console.log(regionCode)
			this.hoverRegion = regionCode
		},
		setActiveRegion (regionCode = null) {
			this.activeRegion = regionCode
		},
		setTooltipCoords (mouse = null) {
			this.tooltipCoords.x = mouse?.pageX
			this.tooltipCoords.y = mouse?.pageY
		}
		
	},
	components: {Map, TooltipRegionHover}
}