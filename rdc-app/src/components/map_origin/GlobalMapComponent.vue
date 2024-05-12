<template>
  <div class="rf-map">
    <MapComponent v-on:regionSelected="onRegionSelected" component-region-code="global" />
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import MapComponent from './MapComponent.vue';

function onRegionSelected(regionCode: string) {
  router.push({ name: 'active_region', params: { region_code: `${regionCode}` } });
}
</script>

<style scoped>
.rf-map {
  margin: 0 auto;
  width: 100%;
  min-height: 80vh;
  overflow: hidden;
}

@media only screen and (max-width: 1440px) {
  .rf-map {
    min-height: 70vh;
  }
}

@media only screen and (max-width: 1280px) {
  .rf-map {
    min-height: 60vh;
  }
}

@media only screen and (max-width: 1280px) {
  .rf-map {
    min-height: 50vh;
  }
}
</style>
