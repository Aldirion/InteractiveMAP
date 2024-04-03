<template>
	<div class="r-map">
	  <component ref="svg" v-if="currentRegionIs" :is="currentRegionIs"></component>
	</div>
</template>

<script>
import mitt from 'mitt'
import RU_KYA from './regions/RU-KYA.vue'
import RU_AMU from './regions/RU-AMU.vue'
import RU_CR from './regions/RU-CR.vue'
import RU_ALT from './regions/RU-ALT.vue'
import { mapActions } from 'vuex';

const emitter = mitt()

export default {
	components:{RU_KYA, RU_AMU, RU_CR, RU_ALT},
	props: {
		municipality: {type: Object, default: () => ({title: ""})},
		activeRegionId: null,
	},
	emits: ['setHoverMunicipality', 'setActiveMunicipality', 'setTooltipCoords'],
	
	data(){
		return {
		}
	},
	computed: {
		currentRegionIs() {
			var currentRegion = this.$route.params.region_code
			currentRegion = currentRegion.split("-").join("_")
			return currentRegion
		}
	},
	mounted() {
		var currentRegion=this.currentRegionIs.split("_").join("-")

	var self = this

	function setHoverMunicipality() {
		self.$emit('setHoverMunicipality', {
			title: this.getAttribute('title'),
			code: this.getAttribute('code'),
			schoolCount: this.getAttribute('data-sccnt'), 
			spoCount: this.getAttribute('data-spcnt'),
		})
	}
	function setActiveMunicipality() {
		var _code = this.getAttribute('code')

		self.$emit('setActiveMunicipality', {
			title: this.getAttribute('title'),
			code: _code.replace(`${currentRegion}-`, ""),
		})
		console.log(this.getAttribute('title'))
	}
	function unsetHoverMunicipality(e) {
		if (!e.target.classList.contains('tooltip'))
			self.$emit('setHoverMunicipality')
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
  
}
</script>

<style scoped>
	/* .r-map {
		width: auto;
		height: 90%;
	} */

	.r-map [data-code] {
		fill: rgba(149, 145, 253, 1);
		stroke: rgb(245, 246, 250);
		transition: fill 0.2s linear;
		margin: 0 auto;
	}
	.r-map [data-code]:hover {
		fill: rgba(202, 200, 254, 1);
		cursor: pointer;
	} 
</style>