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

  transition: fill 0.2s;
  margin: 0 auto;
}
.rf-map [data-code]:hover {
  fill: rgb(192, 205, 239);
  cursor: pointer;
  /* width: 100%;
	height:100%; */
  /* transform:scale(1.01); */
}
/* path{
	fill:white;
	border: 2pt;
	border-color: brown;
	


} */
/* path:hover{
	fill:violet;
} */
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    /* text-align: center; */
  }
}
</style> -->
