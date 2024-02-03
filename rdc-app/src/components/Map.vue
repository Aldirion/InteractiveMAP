<template>
	<div class="rf-map" style="position: relative">
	  	<mapSVG ref="svg"></mapSVG>
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
	function unsetHoverRegion(e) {
		if (!e.target.classList.contains('modal'))
			self.$emit('setHoverRegion')
	}
	function onMouseMove(mouse) {
		// console.log("move")
		self.$emit('setTooltipCoords', mouse)
	}

	const regions = this.$el.querySelectorAll('.rf-map > svg > *')
	for (let region of regions) {
		// console.log(region)
		region.addEventListener('mouseover', setHoverRegion)
		region.addEventListener('mouseleave', unsetHoverRegion)
	}
	
	window.addEventListener("mousemove", onMouseMove)
	//Чистим слушатели когда уходим на другие сущности
	emitter.on('hook:beforeDestroy', () => {
		for (let region of regions) {
			region.removeEventListener('mouseover', setHoverRegion)
			region.removeEventListener('mouseleave', unsetHoverRegion)
		}
		window.removeEventListener("mousemove", onMouseMove)
	})
	
  },
  components:{mapSVG}
}
</script>

<style >
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
</style>