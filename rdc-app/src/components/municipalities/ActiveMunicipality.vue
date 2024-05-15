<script setup lang="ts">
import { useStoreRegions } from '@/store/store';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import RouterByPagesComponent from '../common/RouterByPagesComponent.vue';
import UnderDevelopmentPage from '../pages/UnderDevelopmentPage.vue';

const store = useStoreRegions();
const route = useRoute();

let regionName = ref('');
let municipalityName = ref('');

const regionCode = route.params.region_code as string;
const municipalityCode = route.params.municipality_code as string;

onMounted(async () => {
  const regionsData = await store.getRegions();
  const regionId = regionsData[regionCode].id;

  const municipalityData = await store.getMunicipalities(regionId);
  regionName.value = regionsData[regionCode].title;
  municipalityName.value = municipalityData[municipalityCode].title;
});
</script>

<template>
  <div>
    <RouterByPagesComponent :region-name="regionName" :municipality-name="municipalityName" />
    <UnderDevelopmentPage />
  </div>
</template>

<style lang="css"></style>
