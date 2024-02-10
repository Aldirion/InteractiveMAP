<template>
	<div class="rf-map" style="position: relative">
	  	<mapSVG ref="svg" style="width:100%"></mapSVG>
	</div>
</template>

<script>
import mitt from 'mitt'
import mapSVG from './MapSVG.vue'
const emitter = mitt()

export default {
  //Прицепили 2 события из TestView и зарегистрировали
  emits: ['setHoverRegion', 'setActiveRegion', 'setTooltipCoords'],
  mounted() {
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
		console.log(this.getAttribute('data-title'))
	}
	function unsetHoverRegion(e) {
		if (!e.target.classList.contains('tooltip'))
			self.$emit('setHoverRegion')
		// console.log('tooltip')
	}
	function unsetActiveRegion(e) {
		if (!e.target.classList.contains('modal'))
			self.$emit('setActiveRegion')
	}
	function onMouseMove(mouse) {
		self.$emit('setTooltipCoords', mouse)
	}
	function getIndicator(){

	}
	

	const regions = this.$el.querySelectorAll('.rf-map > svg > *')
	for (let region of regions) {
		region.addEventListener('mouseover', setHoverRegion)
		region.addEventListener('mouseleave', unsetHoverRegion)
		region.addEventListener('click', setActiveRegion)
	}
	window.addEventListener("mousemove", onMouseMove)
	window.addEventListener("click.self", unsetActiveRegion)
	//Чистим слушатели когда уходим на другие сущности
	emitter.on('hook:beforeDestroy', () => {
		for (let region of regions) {
			region.removeEventListener('mouseover', setHoverRegion)
			region.removeEventListener('mouseleave', unsetHoverRegion)
			region.removeEventListener('click', setActiveRegion)
		}
		window.removeEventListener("mousemove", onMouseMove)
	})
	
  },
  components:{mapSVG}
}
</script>

<style >
.rf-map [data-code] {
  fill: rgba(149, 145, 253, 1);
  stroke: rgb(245, 246, 250);

  transition: fill 0.2s;
  margin: 0 auto;
}
.rf-map [data-code]:hover {
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