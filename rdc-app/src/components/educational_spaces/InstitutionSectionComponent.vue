<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';
import { Section, type SPORegion, type SchoolRegion } from '@/interfaces/regions';
import { TITLES_EDUEVN } from '@/interfaces/variables';

const props = defineProps<{
  institutionSection: Section;
  schoolSectionData: SchoolRegion;
  spoSectionData: SPORegion;
}>();

let sectionData: ComputedRef<SchoolRegion | SPORegion | null> = computed(() => {
  switch (props.institutionSection) {
    case Section.SCHOOL:
      return props.schoolSectionData;
    case Section.SPO:
      return props.spoSectionData;
    default:
      throw Error('Unhandled value');
  }
});
</script>

<template>
  <div class="school-title">Воспитательные пространства и объединения</div>

  <div class="school-section">
    <div class="section-element" v-for="(elem, key) in sectionData" :key="key">
      <div class="section-element-title">{{ TITLES_EDUEVN[key] }}</div>
      <div class="section-element-count">{{ elem }}</div>
      <div class="section-element-subtitle">Количество обучающихся, вовлеченных в деятельность</div>
    </div>
  </div>
</template>

<style lang="css">
.school-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.section-element {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: var(--color-background-soft);
  border-radius: 5px;
}

.section-element-title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55px;
  padding: 0 10px;
  color: var(--vt-c-white);
  text-transform: uppercase;
  text-align: center;
  font-size: 1rem;
  background-color: var(--vt-c-black-mute);
  border-radius: 5px 5px 0px 0px;
}

.section-element-count {
  text-align: center;
  color: rgba(149, 145, 253, 1);
  font-weight: bold;
  font-size: 4rem;
}

.section-element-subtitle {
  color: var(--color-subtext);
  width: 80%;
  text-align: center;
  padding-bottom: 10px;
}

.school-title {
  text-align: center;
  margin: 50px 0;
  font-size: 24px;
}
</style>
