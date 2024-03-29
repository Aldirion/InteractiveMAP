<template>
	<div class="rf-map" style="position: relative">
	  	<mapSVG ref="svg" style="width:90%"></mapSVG>
	</div>
</template>

<script>
import mitt from 'mitt'
import mapSVG from './MapSVG.vue'
const emitter = mitt()


export default {
	emits: ['setHoverRegion', 'setActiveRegion', 'setTooltipCoords'],
	mounted() {
		this.$store.dispatch('GET_REGIONS')
		var self = this

		function setHoverRegion() {
			self.$emit('setHoverRegion', {
				title: this.getAttribute('data-title'),
				code: this.getAttribute('data-code'),
			})
		}

		function setActiveRegion() {
			self.$emit('setActiveRegion', {
				title: this.getAttribute('data-title'),
				code: this.getAttribute('data-code'),
			})

			.$router.push({ name: 'test', params: { region_code: `${this.getAttribute('data-code')}` } })
		}

		function unsetHoverRegion(e) {
			if (!e.target.classList.contains('tooltip'))
				self.$emit('setHoverRegion')
		}

		function unsetActiveRegion(e) {
			if (!e.target.classList.contains('modal'))
				self.$emit('setActiveRegion')
		}

		function onMouseMove(mouse) {
			self.$emit('setTooltipCoords', mouse)
		}

		const regions = this.$el.querySelectorAll('.rf-map > svg > *')
		for (let region of regions) {
			region.addEventListener('mouseover', setHoverRegion)
			region.addEventListener('mouseleave', unsetHoverRegion)
			region.addEventListener('click', setActiveRegion)
		}
		
		window.addEventListener("mousemove", onMouseMove)
		window.addEventListener("click.self", unsetActiveRegion)

		emitter.on('hook:beforeDestroy', () => {
			for (let region of regions) {
				region.removeEventListener('mouseover', setHoverRegion)
				region.removeEventListener('mouseleave', unsetHoverRegion)
				region.removeEventListener('click', setActiveRegion)
			}
			window.removeEventListener("mousemove", onMouseMove)
		})
		
	},
	methods: {
		
	},
	components:{mapSVG}
	}
	</script>
	
<style>
	.rf-map [data-code] {
		fill: rgba(149, 145, 253, 1);
		stroke: rgb(245, 246, 250);
		transition: fill 0.2s linear;
		margin: 0 auto;
	}
	
	.rf-map [data-code]:hover {
		fill: rgba(202, 200, 254, 1);
		cursor: pointer;
	}

	.rf-map{
		padding-top: 5vh;
		max-height: 100vh;
		margin: 0 10vw;
	}
</style>