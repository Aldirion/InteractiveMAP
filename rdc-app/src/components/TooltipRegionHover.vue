<template>
  <Transition name="modal">
	<div class="tooltip-hover-region" :style="style">
		<h4 class="tooltip-hover-region-h">{{ region.title }}</h4> 
		<!-- <br> -->
		<div class="tooltip-hover-region-b">
			{{ region.code }}
			<!-- <br> -->
			{{ coords }}
		</div>
	</div>
    <!-- <div class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">{{region}}</slot>
        </div>

        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            default footer
            <button class="modal-default-button" @click="$emit('close')">OK</button>
          </slot>
        </div>
      </div>
    </div> -->
  </Transition>
</template>
<!-- 
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33); */
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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
</style> -->

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
</style>