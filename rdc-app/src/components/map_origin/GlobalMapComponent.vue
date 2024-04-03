<template>
	<div class="rf-map">
		<MapComponent v-on:regionSelected="onRegionSelected" component-region-code="global"/>
	</div>
</template>

<script setup lang="ts">
	import router from '@/router';
	import MapComponent from './MapComponent.vue';

	function onRegionSelected(regionCode: string) {
		router.push({ name: 'active_region', params: { region_code: `${regionCode}` }});
	}
</script>
	
<style scoped>
	.rf-map{
		margin: 0 auto;
		width: 90%;
	}
</style>