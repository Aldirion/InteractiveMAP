<template>
  <Transition name="tooltip">
	<div class="tooltip-hover-region" :style="style">
		<h4 class="tooltip-hover-region-h">{{ region.title }}</h4> 
		<!-- <br> -->
		<div class="tooltip-hover-region-b">
			<!-- {{ region.code }} -->
			Кол-во школ: {{ region.schoolCount }}
			<br>
			Кол-во СПО: {{ region.spoCount }}
			<!-- <br> -->
			<!-- {{ coords }} -->
		</div>
	</div>
  </Transition>
</template>

<script>
export default {
	props: {
		region: {type: Object, default: () => ({title: ""})},
		coords: {type: Object, default: () => ({ x: 0, y: 0 })}
	},
	data() {
		return {
			height: 0,
		}
	},
	computed: {
		x() {
			return this.coords.x || 0
		},
		y() {
			return (this.coords.y || 0) - this.height - 10
		},
		style() {
			return `top: ${this.y}px; left: ${this.x}px;`
		}
	},
	mounted() {
		this.height = this.$el?.offsetHeight
		// console.log("mounted", this.region, " || ", this.height)
	}
}
</script>

<style>
/* Общий стиль тултипа */
.tooltip-hover-region
{
	position: absolute;
	min-width: 300px;
	top: 0;
	left: 0;
	background: #fff;
	border-radius: 15px;
	box-shadow: 1px 4px 10px 1px rgba(0, 0, 0, .2);
	/* padding: 15px; */
	color: #333;
	display: block;
}
/* Хэадер тултипа */
.tooltip-hover-region-h
{
	position: static;
	min-width: 100px;
	width: 100%;
	background: #5044ed;
	border-radius: 3px 3px 0 0;
	padding: 5px;
	color: #f5f5f5;
	font-weight: bold;
}
/* Тело тултипа */
.tooltip-hover-region-b
{
	position: flex;
	min-width: 100px;
	width: 100%;
	background: #fff;
	padding: 5px 10px 5px 10px;
	border-radius: 0 0 3px 3px;
	color: #333;
}
</style>