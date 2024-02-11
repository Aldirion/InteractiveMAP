<script>
// import RU_CR from './regions/RU-CR.vue'
export default {
	props: {
		region: {type: Object, default: () => ({title: ""})},
		// show: {type: Boolean, default: () => true}
	},
	data() {
		return {
			baseUrl: '/regions/',
			height: 0,
		}
	},
	methods:
	{
		closeModal() {
      		this.$emit('close');
    	},
	},
	computed: {
		x() {
			return this.width || 0
		},
		y() {
			return this.height || 0
		},
		svgURL(){
			return this.baseUrl + this.region.code + '.svg'
			console
		},
	},
	mounted() {
		this.height = this.$el?.offsetHeight
		console.log("mounted", this.region, " || ", this.height)
	},
	// components:{RU_CR}
}

</script>



<template>
  <Transition name="modal">
	<div class="modal-mask">
		<h2 class="modal-r-h">
			{{ region.title }}
			<button class="material-symbols-outlined" @click="closeModal">
				close
			</button>
		</h2>
		<div class="modal-r">	
			<div class="modal-r-map">
				<img :src="svgURL"  style=" width:100%">
				<!-- <object :data="svgURL" type="image/svg+xml" class="rmap" width="100%"></object> -->
				<!-- <RU_CR ref="svg" style="width:100%"></RU_CR> -->
			</div>
			<div class="modal-r-container">
				
				
				<div class="modal-r-indicators">
					some text
					{{ region.code }}
				</div>
				<div class="modal-r-body" @click.stop>
					some body
				</div>
				<div class="modal-r-footer">
					<!-- <button @click="closeModal">fsdi</button> <button>ghbjgdfkjh</button> -->
				</div>
			</div>
			<div>
				ffdkgh
			</div>
		</div>
		<div class="modal-r">	
			<div class="modal-r-container">
				
				
				<div class="modal-r-indicators">
					some text
					{{ region.code }}
				</div>
				<div class="modal-r-body" @click.stop>
					some body
				</div>
				<div class="modal-r-footer">
					<!-- <button @click="closeModal">fsdi</button> <button>ghbjgdfkjh</button> -->
				</div>
			</div>
			<div class="modal-r-container">
				
				
				<div class="modal-r-indicators">
					some text
					{{ region.code }}
				</div>
				<div class="modal-r-body" @click.stop>
					some body
				</div>
				<div class="modal-r-footer">
					<!-- <button @click="closeModal">fsdi</button> <button>ghbjgdfkjh</button> -->
				</div>
			</div>
			<div>
				ffdkgh
			</div>
		</div>
	</div>
  </Transition>
</template>



<style>
.modal-mask {
	max-width: 1280px;
	position: absolute;
	top:0;
	/* z-index: 9998; */
	/* margin: 0 auto; */
	/* left: calc(var(--section-gap) / 2); */
	width: 100%;
	height: 100%;
	/* background-color: rgba(172, 220, 253, 0.7); */
	/* background-color: #fff; */
	background: var(--color-background);
	
	/* display:inline-block; */
	transition: opacity 1s ease;
	/* align-content: center; */
	
}

.modal-r {
	position:flex;
	max-width: 1280px;
	width: 100%;
	border-radius: 2px;
	transition: all 0.7s ease;
	/* display:grid;
	grid-template-columns: 1fr 2fr; */
	display:flex;
}

.modal-r-map{
	scale: auto;
	place-items: center;
	display:inline-block;
	margin: 10px;
	padding: 10px;
}
.rmap [data-code]{
	fill: rgba(149, 145, 253, 1);
	margin: 10px;
	padding: 10px;
}
.rmap [data-code] :hover{
	fill: rgba(202, 200, 254, 1);
}

.modal-r-container {
  width: 100%;
  padding: 20px 30px;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.modal-r-h {
  margin: auto;
  padding: 5px;
  /* width: 100%; */
  color: #fff;
  font-weight: bold;
  background-color: rgba(98, 94, 195, 1);
}
.modal-r-indicators {
  margin-top: 0;
  color: #42b983;
  /* background-color: #212121; */
}

.modal-r-body {
  margin: 20px 0;
  color: #333;
}

.material-symbols-outlined{
	float: right;
	display: inline-block;
	background-color: transparent;
	border-color: transparent;
	color:#fff
}

.material-symbols-outlined :hover{
	background-color:rgba(255, 255, 255, 0)
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/* @media (min-width: 1024px) {
  .modal-mask{
    min-height: 100vh;
    display: flex;
    align-items: center;
    //text-align: center;
  }
} */
</style>


<!-- <style>
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
	border-radius: 5px 5px 0 0;
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
	color: #333;
}
</style> -->