<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStoreRegions } from '@/store/store';
import { Section, type SPORegion, type SchoolRegion } from '@/interfaces/regions';
import InstitutionSectionComponent from './InstitutionSectionComponent.vue';
import RouterByPagesComponent from '@/components/common/RouterByPagesComponent.vue';
import LoaderComponent from '@/components/common/LoaderComponent.vue';

const store = useStoreRegions();
const route = useRoute();

const regionCode = route.params.region_code as string;
let regionName = ref<string | null>(null);

let activeSection: Ref<Section> = ref(Section.SCHOOL);
let schoolSectionData: Ref<SchoolRegion | null> = ref(null);
let spoSectionData: Ref<SPORegion | null> = ref(null);

let isLoaded = ref(false);

onMounted(async () => {
  const regionsData = await store.getRegions();

  schoolSectionData.value = regionsData[regionCode].school;
  spoSectionData.value = regionsData[regionCode].spo;

  regionName.value = regionsData[regionCode].title;
  isLoaded.value = true;
});
</script>

<template>
  <LoaderComponent v-if="!isLoaded" />

  <div v-if="isLoaded">
    <RouterByPagesComponent :regionName="regionName!" />
    <div class="educate-rout">
      <div
        :class="{ active: activeSection == Section.SCHOOL }"
        class="region-educate border-l"
        @click="() => (activeSection = Section.SCHOOL)"
      >
        школы
      </div>
      <div
        :class="{ active: activeSection == Section.SPO }"
        class="region-educate border-r"
        @click="() => (activeSection = Section.SPO)"
      >
        СПО
      </div>
    </div>
    <InstitutionSectionComponent
      :institutionSection="activeSection"
      :schoolSectionData="schoolSectionData!"
      :spoSectionData="spoSectionData!"
    />
  </div>
</template>

<style lang="css" scoped>
.educate-rout {
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  margin: 30px 0px;
}

.region-educate {
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--color-background-soft);
}

.region-educate:hover {
  cursor: pointer;
}

.active {
  background-color: var(--vt-c-black-mute);
  color: var(--vt-c-white);
}

.border-l {
  border-radius: 5px 0px 0px 5px;
}

.border-r {
  border-radius: 0px 5px 5px 0px;
}
</style>
