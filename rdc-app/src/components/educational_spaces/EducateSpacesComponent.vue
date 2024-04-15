<script setup lang="ts">
import { useStoreRegions } from '@/store/store';
import { onMounted, ref, type Ref } from 'vue';
import InstitutionSectionComponent from './InstitutionSectionComponent.vue';
import { Section } from '@/interfaces/regions';

const store = useStoreRegions();
const { getRegionData } = store;
let regionCode = window.location.pathname.split('/')[2];
let activeSection: Ref<Section> = ref(Section.SCHOOL);
let regionName: Ref<string | null> = ref(null);

onMounted(async () => {
  regionName.value = (await getRegionData(regionCode)).title;
});
</script>

<template>
  <div class="educate-rout">
    <div class="region-educate title">{{ !!regionName ? regionName : 'Загрузка...' }}</div>
    <div class="separator">>>></div>
    <div
      :class="{ active: activeSection == Section.SCHOOL }"
      class="region-educate"
      @click="() => (activeSection = Section.SCHOOL)"
    >
      школы
    </div>
    <div
      :class="{ active: activeSection == Section.SPO }"
      class="region-educate"
      @click="() => (activeSection = Section.SPO)"
    >
      СПО
    </div>
  </div>
  <InstitutionSectionComponent :institutionSection="activeSection" />
</template>

<style lang="css" scoped>
.educate-rout {
  display: flex;
  justify-content: center;
  gap: 10px;
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
  border-radius: 5px;
  background-color: var(--color-background-soft);
}

.region-educate:hover {
  cursor: pointer;
}

.title {
  width: auto;
  padding: 0px 10px;
}

.active {
  background-color: var(--vt-c-black-mute);
  color: var(--vt-c-white);
}

.separator {
  height: 30px;
  line-height: 30px;
}
</style>
