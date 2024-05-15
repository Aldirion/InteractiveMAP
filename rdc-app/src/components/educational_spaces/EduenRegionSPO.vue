<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Section, type SPOEduenv } from '@/interfaces/regions';
import InstitutionSectionComponent from './InstitutionSectionComponent.vue';
import RouterByPagesComponent from '../common/RouterByPagesComponent.vue';
import { onMounted, ref } from 'vue';
import { useStoreRegions } from '@/store/store';

const route = useRoute();
const store = useStoreRegions();

const eduenvCode = route.params.institution_eduenv as string;
const regionCode = route.params.region_code as string;
const spoSectionData = ref<null | SPOEduenv>(null);
let regionName = ref<string | ''>('');
let spoName = ref('');

onMounted(async () => {
  const regionData = await store.getRegions();
  regionName.value = regionData[regionCode].title;
  const schoolData = await store.getEduenv(eduenvCode, regionData[regionCode].id);
  spoSectionData.value = schoolData.eduenv as SPOEduenv;
  spoName.value = schoolData.title;
});
</script>

<template>
  <div>
    <RouterByPagesComponent :region-name="regionName" :institution-name="spoName" />
    <InstitutionSectionComponent
      :institutionSection="Section.SPO"
      :schoolSectionData="null"
      :spoSectionData="spoSectionData"
      :eduenv="true"
    />
  </div>
</template>

<style lang="css" scoped></style>
