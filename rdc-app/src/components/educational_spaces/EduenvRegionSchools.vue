<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Section, type SchoolEduenv } from '@/interfaces/regions';
import InstitutionSectionComponent from './InstitutionSectionComponent.vue';
import RouterByPagesComponent from '../common/RouterByPagesComponent.vue';
import { onMounted, ref } from 'vue';
import { useStoreRegions } from '@/store/store';

const route = useRoute();
const store = useStoreRegions();

const eduenvCode = route.params.institution_eduenv as string;
const regionCode = route.params.region_code as string;
const schoolSectionData = ref<null | SchoolEduenv>(null);
let regionName = ref<string | ''>('');
let schoolName = ref('');

onMounted(async () => {
  const regionData = await store.getRegions();
  regionName.value = regionData[regionCode].title;
  const schoolData = await store.getEduenv(eduenvCode, regionData[regionCode].id);
  schoolSectionData.value = schoolData.eduenv as SchoolEduenv;
  schoolName.value = schoolData.title;
});
</script>

<template>
  <div>
    <RouterByPagesComponent :region-name="regionName" :institution-name="schoolName" />
    <InstitutionSectionComponent
      :institutionSection="Section.SCHOOL"
      :schoolSectionData="schoolSectionData"
      :spoSectionData="null"
      :eduenv="true"
    />
  </div>
</template>

<style lang="css" scoped></style>
