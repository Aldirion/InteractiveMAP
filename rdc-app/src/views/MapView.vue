<template>
	<main>
        <!-- <h1>text</h1> -->
		<Map 
	  		@setHoverRegion="setHoverRegion" 
	  		@setActiveRegion="setActiveRegion"
			@setTooltipCoords="setTooltipCoords"
		/>
		<TooltipHoverRegion v-if="hoverRegion" :region="hoverRegion"
		:coords="tooltipCoords"/>
		<!-- <ModalActiveRegion v-if="activeRegion" :region="activeRegion"  @close="closeModalReg"/> -->
        <!-- <router-link to="" v-if="activeRegion" :region="activeRegion"></router-link> -->

	</main>
</template>


<script >
import Map from '../components/map_origin/Map.vue'
import TooltipHoverRegion from '../components/map_origin/TooltipHoverRegion.vue'
// import ModalActiveRegion from '../components/map_origin/ModalActiveRegion.vue'

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
			// console.log(regionCode)
			this.hoverRegion = region
		},
		setActiveRegion (region = null) {
			// console.log('hel')
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
	components: { Map, TooltipHoverRegion}
}
</script>

