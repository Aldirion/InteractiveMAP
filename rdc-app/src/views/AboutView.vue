<script>
import { ref } from 'vue'
const hoverValue = ref('mouse')
const showModal=ref(false)
const open = ref(false)
import Modal from '../components/Modal.vue'

export default {
	el:'#rf-map',
  // reactive state
  data() {
    return {
      count: 0,
	  hvalue: ""
    }
  },

  // functions that mutate state and trigger updates
  methods: {
    increment() {
      this.count++
    },
	changeHoverValue(hvalue){
		let parent = hvalue.target.parentNode
    	let title = parent.dataset.title
    	let code = parent.dataset.code
    	if (!title) {
    		title = hvalue.target.dataset.title
    	}
    	if (!code) {
      		code = hvalue.target.dataset.code
    	}
    	if (title != null && code != null) {
      		hvalue = title
      		// hoverValue.value = title
      		console.log(code, '||', title)
			this.$el.querySelector("span").innerText = title
    	}
	}
	
	
  },
  showModalRegion(){
	console.log('click')
	let parent = hvalue.target.parentNode
    	let title = parent.dataset.title
    	let code = parent.dataset.code
    	if (!title) {
    		title = hvalue.target.dataset.title
    	}
    	if (!code) {
      		code = hvalue.target.dataset.code
    	}
    	if (title != null && code != null) {
      		hvalue = title
      		// hoverValue.value = title
      		console.log(code, '||', title)
			this.$el.querySelector("span").innerText = title
    	}
	showModal.value=true;
  },
  closeModalRegion(){
	showModal.value=false;
  },
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
  
  }
</script>

<template>
  <div class="map-container">
    <h1>Карта реализации проекта "Патриотическое воспитание граждан" в регионах РФ</h1>

    <!-- <h2>dfgdf: {{ hvalue }}</h2> -->
	<!-- <button @click="showModalRegion">is {{  count }}</button> -->
	<p></p>
    <b><span></span></b>
    <div class="rf-map" style="position: relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 808.9 458.9"
        enable-background="new 0 0 808.9 458.9"
        xml:space="preserve"
        @mouseover="changeHoverValue"
		@click="open = true"
      >
        <path
          data-title="Республика Крым"
          data-code="RU-CR"
          d="M1.6,328.6H4l1.2,0.8l1.5,0.2v-0.9l1.3-0.2l0.8,1.3h3.3l0.1-1.1
		l1.2,0.3v2.1l1.4,1.3l-0.8,2l1.6,1.6v2.9l0.4,1.1l-0.5,1.3l-0.8,1.1l1.2,1.2l0.5,1.2l2,0.6l2.1,0.3l2.5,4.2l-1.5,0.2l-1.3,1.3
		l-2.6-0.9l-2-1.8l-0.4-1.1l-0.2-1l-1.3-0.9l-2.6,0.6l-1.7-0.9l-2.1-1.2l-3,0.5l-2.2-0.4l-1-1.7l-0.7-2.6l1.6-0.1l1.9-2.3l0.5-2.4
		L4.2,334v-1.7l-1-1.6l-1.6-1.2L1.6,328.6z"
        />
        <path
          data-title="Мурманская область"
          data-code="RU-MUR"
          d="M160,158.1l6.1,5.5l-0.3,2.3l-0.7,1.9l1.4,1.4l2.1-0.5l1.3,0.8
		l1.6-0.1l0,0l-0.5-2.8l1.2-1.2l0.8-2.2l1.8,1.8l-1.5,1.5l-0.6,2.9l1.8,0.8l0.9,4.7l1.6,2.8l0.9,2.5l1.1,2.7l2.4,2.4v3.4l2.3,2.3
		l3.7,2.1l3.4,1.3l3.9-0.8h3.5l3.4-3.4l2.2-3.9l0.5-4.6l0.1-2.8l-2.2-2.2l-0.1-3.9l-0.8-1.8l0.6-3.2v-3.7l-1-3.6l-2.1-2.1v-2.9
		l-1.8-0.9v-2.7l-1.6-1.6l-2.2-1.1v-2.4l-0.6-2.4l1.3-1.3l1.5,1.5l1.4,0.9l-0.6-2.3v-2l-3-0.1l-2.2,0.3l0.5-2.7l-2.2,1.5l-1.8-1.8
		h-2.2l-3.7-1.4l-5.3,2.7l-4.1,2v6.8l-2,3.5h-6.5l-3.9,3.9L160,158.1L160,158.1"
        />
        <path
          data-title="Псковская область"
          data-code="RU-PSK"
          d="M75.6,243l1.7,2.1l0.8-2.2h1.8l0.8-1.3l0.7-1.5l0.3-2.7l1.1-1.1
		l0.2-1.6l2-1.6l-1.1-1.1l1-1l1.1-0.6v-1.8l1.1-0.6l1.3-1.3l1.7-0.8l0.6-1.8l-1.3-1l-0.4-1l0.9-0.9v-1.6l1-1l2.1-0.2l-0.5-2.5
		l0.7-2.3l-0.8-1.8l-0.1-1.8l-1.6-1.6l0.8-1.7l-1.5-1.8l-2.9-0.1l-2.2,2.9l-2.7,1l-0.1,1.9l-1.4,1.6l-3.2,0.1L76,214v2.7l-3,1.9
		l-2,0.5l0.6,2.3l-1.4,2.5l-2.4,2.4l-0.4,1.8l1.1,2.5l1.8,1.8l-0.6,2l-0.8,1.9l2.4,0.6l2.2,2v4.3L75.6,243"
        />
        <path
          data-title="Смоленская область"
          data-code="RU-SMO"
          d="M71.1,245.3l-0.9,1.9l-2.5,0.8l-1,2.8l-1.4,3.3l-0.8,3l0.1,2.2
		l-1.3,0.9l1.9,1.9l-0.8,2.8l-0.6,2.5l1.9,1v2.2l1.2-1.2l1.3-2.1l1.6,0.1l1.9-1l1.7-0.4l1.8-1.8H77l1.3,1.3l0.4,1.5l1.8,0.2l0.6-0.6
		l1,0.3l1.8,1.4l1.4-1.1h1.8l2.3-0.5l0.9-1.4l1.7-1.7l2.3-0.9l0.6-2.1l-0.6-1.3l-1.5-1.2l-1-1.9l-1-1v-1.3l-2.2-0.6l-2,0.6l-2.5-0.6
		l-1.2-1.2l-1.9-1.1l-1.4-1.4l-0.5-2.6l-1.7-1l-0.2-0.8l-1.7-2.1l-2.2,0.2L71.1,245.3"
        />
      </svg>
    </div>
	<Teleport to="body">
  		<div v-if="open" class="modal">
   			<p>Hello from the m1odal!</p>
    		<button @click="open = false">Close</button>
  		</div>
	</Teleport>
  </div>
</template>

<style>
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
