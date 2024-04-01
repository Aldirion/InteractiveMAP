<template>
	<div class="rf-map">
		<MainMapComponent v-on:regionSelected="onRegionSelected" ref="svg"/>
	</div>
</template>

<script setup lang="ts">
	import MainMapComponent from './MainMapComponent.vue';

	function onRegionSelected(regionCode: string) {
		console.log(regionCode);
	}
</script>
	
<style scoped>
	.rf-map{
		margin: 0 auto;
		width: 90%;
	}
</style>