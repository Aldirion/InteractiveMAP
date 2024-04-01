<template>
	<main class="map-view">
		<MapComponent 
	  		@setHoverRegion="setHoverRegion" 
	  		@setActiveRegion="setActiveRegion"
			@setTooltipCoords="setTooltipCoords"
		/>
		<TooltipHoverRegion v-if="hoverRegion" :region="hoverRegion"
		:coords="tooltipCoords"/>
	</main>
</template>


<script >
import MapComponent from '../components/map_origin/MapComponent.vue'
import TooltipHoverRegion from '../components/map_origin/TooltipHoverRegion.vue'

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
		setHoverRegion (region = null) {
			this.hoverRegion = region
		},
		setActiveRegion (region = null) {
			this.activeRegion = region
				this.$router.push({ name: 'active_region', params: { region_code: `${this.activeRegion.code}` } })
			console.log(region)
		},
		setTooltipCoords (mouse = null) {
			this.tooltipCoords.x = mouse?.pageX
			this.tooltipCoords.y = mouse?.pageY
		},
		closeModalReg (){
			this.activeRegion = null;
		},
		goHome(){
			this.$router.push('')
		}
		
	},
	components: { 
		MapComponent, 
		TooltipHoverRegion
	}
}
</script>

<style scoped>
	.map-view {
    max-width: 80vw;
    margin: 0 10vw;
		padding-top: 6vh;
	}
</style>
