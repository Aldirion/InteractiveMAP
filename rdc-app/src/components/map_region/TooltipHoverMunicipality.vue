<template>
  <Transition name="tooltip">
	<div class="tooltip-hover-municipality" :style="style">
		<h4 class="tooltip-hover-municipality-h">{{ municipality.title }}</h4> 
		<!-- <br> -->
		<div class="tooltip-hover-municipality-b">
			<!-- {{ municipality.code }} -->
			Кол-во школ: {{ municipality.schoolCount }}
			<br>
			Кол-во СПО: {{ municipality.spoCount }}
			<!-- <br> -->
			{{ coords }}
		</div>
	</div>
  </Transition>
</template>

<script>
export default {
	props: {
		municipality: {type: Object, default: () => ({title: ""})},
		coords: {type: Object, default: () => ({ x: 0, y: 0 })}
	},
	data() {
		return {
			height: 0,
		}
	},
	computed: {
		x() {
			// console.log("x:",this.coords.x)
			return this.coords.x || 0
		},
		y() {
			// console.log("y:",this.coords.y)
			return (this.coords.y || 0) - this.height - 10
		},
		style() {
			// return `top: ${this.coords.y}px; left: ${this.coords.x}px;`
			return `top: ${this.y}px; left: ${0+this.x}px;`
		}
	},
	mounted() {
		this.height = this.$el?.offsetHeight
		console.log("mounted", this.municipality, " || ", this.height)
	}
}
</script>

<style>
/* Общий стиль тултипа */
.tooltip-hover-municipality
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
.tooltip-hover-municipality-h
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
.tooltip-hover-municipality-b
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