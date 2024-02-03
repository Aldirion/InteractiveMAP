<template>
	<main>
		<Map 
	  		@setHoverRegion="setHoverRegion" 
	  		@setActivveRegion="setActiveRegion"
			@setTooltipCoords="setTooltipCoords"
		/>
		<!-- <h2>Регион: {{ hoverRegion }}</h2> -->
		<ModalRegionHover v-if="hoverRegion" :region="hoverRegion"
		:coords="tooltipCoords"/>
	</main>
</template>


<script >
import Map from '../components/Map.vue'
import ModalRegionHover from '../components/ModalRegionHover.vue'


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
	components: {Map, ModalRegionHover}
}

</script>




