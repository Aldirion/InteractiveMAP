<template>
	<div class="rf-map">
		<MainMapComponent v-on:regionSelected="onRegionSelected"/>
	</div>
</template>

<script setup lang="ts">
	import router from '@/router';
	import MainMapComponent from './MainMapComponent.vue';

	function onRegionSelected(regionCode: string) {
		router.push({ name: 'active_region', params: { region_code: `${regionCode}` }})
	}
</script>
	
<style scoped>
	.rf-map{
		margin: 0 auto;
		width: 90%;
	}
</style>