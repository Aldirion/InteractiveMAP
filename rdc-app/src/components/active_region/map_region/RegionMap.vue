<template>
	<div class="r-map">
		<!-- <h3>{{ region.title }}</h3> -->
	  	<component ref="svg" style="width:100%" v-if="currentRegionIs" :is="currentRegionIs"></component>
		<!-- <MapSVG ref="svg" style="width:100%"></MapSVG> -->
	</div>
</template>

<script>
import mitt from 'mitt'
import RU_KYA from '../../regions/RU-KYA.vue'
import RU_AMU from '../../regions/RU-AMU.vue'
// import MapSVG from '../map_origin/MapSVG.vue'
import {ref} from 'vue';
import {useFloating} from '@floating-ui/vue';
import { mapActions, mapGetters } from 'vuex';
// const reference = ref(virtualEl);
// const floating = ref(null);
// const {floatingStyles} = useFloating(reference, floating);
const emitter = mitt()

export default {
	props: {
		municipality: {type: Object, default: () => ({title: ""})},
		activeRegionId: null,
	},
  	//Прицепили 2 события из TestView и зарегистрировали
	emits: ['setHoverMunicipality', 'setActiveMunicipality', 'setTooltipCoords'],
	
	data(){
		return {
			
		}
	},
	computed: {
		currentRegionIs() {
			var currentRegion = this.$route.params.region_code
			currentRegion = currentRegion.split("-").join("_")
			// console.log("123", currentRegion)
			return currentRegion
		}
	},
	async mounted() {
		// await this.GET_ACTIVE_REGION(this.activeRegionId)

	// 	const element=document.querySelector("#app")
	// const getmgleft=window.getComputedStyle(element).marginLeft

		// console.log(this.$route.params.region_code)
		// console.log(getmgleft)

	var self = this

	function setHoverMunicipality() {
		self.$emit('setHoverMunicipality', {
			title: this.getAttribute('data-title'),
			code: this.getAttribute('data-code'),
			schoolCount: this.getAttribute('data-sccnt'), 
			spoCount: this.getAttribute('data-spcnt'),
		})
		console.log(this.getAttribute('data-code'))
	}
	function setActiveMunicipality() {
		self.$emit('setActiveMunicipality', {
			title: this.getAttribute('data-title'),
			code: this.getAttribute('data-code'),
		})
		console.log(this.getAttribute('data-title'))
		// this.$router.push({ name: 'test', params: { region_code: `${this.getAttribute('data-code')}` } })
	}
	function unsetHoverMunicipality(e) {
		if (!e.target.classList.contains('tooltip'))
			self.$emit('setHoverMunicipality')
		// console.log('tooltip')
	}
	function unsetActiveMunicipality(e) {
		if (!e.target.classList.contains('modal'))
			self.$emit('setActiveMunicipality')
	}
	function onMouseMove(mouse) {
		self.$emit('setTooltipCoords', mouse)
	}	

	const municipalities = this.$el.querySelectorAll('.r-map > svg > g > *')
	
	for (let municipality of municipalities) {
		municipality.addEventListener('mouseover', setHoverMunicipality)
		municipality.addEventListener('mouseleave', unsetHoverMunicipality)
		municipality.addEventListener('click', setActiveMunicipality)
	}
	window.addEventListener("mousemove", onMouseMove)
	
	window.addEventListener("click.self", unsetActiveMunicipality)
	//Чистим слушатели когда уходим на другие сущности
	emitter.on('hook:beforeDestroy', () => {
		for (let municipality of municipalities) {
			municipality.removeEventListener('mouseover', setHoverMunicipality)
			municipality.removeEventListener('mouseleave', unsetHoverMunicipality)
			municipality.removeEventListener('click', setActiveMunicipality)
		}
		window.removeEventListener("mousemove", onMouseMove)
	})
	
  },
  methods: {
	...mapActions([
			'GET_ACTIVE_REGION',
		]),
  },
  components:{RU_KYA, RU_AMU}
}
</script>

<style >
.r-map [data-code] {
  fill: rgba(149, 145, 253, 1);
  stroke: rgb(245, 246, 250);

  transition: fill 0.2s;
  margin: 0 auto;
}
.r-map [data-code]:hover {
  fill: rgba(202, 200, 254, 1);
  cursor: pointer;
  /* width: 100%;
	height:100%;
  transform:scale(1.01); */
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
  .rf-map{
    min-height: 100vh;
    display: flex;
    align-items: center;
    /* text-align: center; */
  }
}
</style>