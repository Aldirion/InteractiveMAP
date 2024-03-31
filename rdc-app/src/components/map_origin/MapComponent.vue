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
		display: flex;
		justify-content: center;
		padding-top: 6vh;
		margin: 0 10vw;
	}
</style>