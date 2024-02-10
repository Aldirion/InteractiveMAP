<script>
import { ref } from 'vue'

export default {
  	// реактивные переменные состояния
	data() {
    	return {
      		count: 0,
    	}
  	},
  	// functions that mutate state and trigger updates
  	methods: {
		},
	mounted() {
		console.log(`The initial count is ${this.count}. `)
  	}
}
</script>

<template>
</template>

