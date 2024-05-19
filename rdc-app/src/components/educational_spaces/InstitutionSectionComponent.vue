<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';
import { Section, type SPOEduenv, type SPORegion, type SchoolEduenv, type SchoolRegion } from '@/interfaces/regions';
import { TITLES_EDUEVN } from '@/interfaces/variables';

const props = defineProps<{
  institutionSection: Section;
  schoolSectionData: SchoolRegion | null | SchoolEduenv;
  spoSectionData: SPORegion | null | SPOEduenv;
  eduenv?: boolean;
}>();

let sectionData: ComputedRef<SchoolRegion | SchoolEduenv | SPORegion | SPOEduenv | null> = computed(() => {
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
      <div class="section-element-title" v-if="eduenv">{{ TITLES_EDUEVN[`total_${key}`] }}</div>
      <div class="section-element-title" v-else>{{ TITLES_EDUEVN[key] }}</div>
      <span class="material-symbols-outlined check" v-if="typeof elem == 'boolean'"> check </span>
      <div class="" v-else>
        <div class="section-element-count">{{ elem }}</div>
        <div class="section-element-subtitle">Количество обучающихся, вовлеченных в деятельность</div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
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
  position: relative;
  background-color: var(--color-background-soft);
  border-radius: 5px;
}

.check {
  color: var(--vt-accept-color);
  font-size: 5rem;
  padding-top: 35px;
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
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
}

.school-title {
  text-align: center;
  margin: 50px 0;
  font-size: 24px;
}

@media only screen and (min-width: 3000px) {
  .school-title {
    text-align: center;
    margin: 50px 0;
    font-size: 1.2vw;
  }

  .section-element-title {
    height: 4vw;
    padding: 0 0.3vw;
    font-size: 1vw;
    border-radius: 0.3vw 0.3vw 0px 0px;
  }

  .section-element-count {
    font-size: 3vw;
  }

  .section-element {
    width: 20%;
    gap: 0.3vw;
    border-radius: 0.3vw;
  }
}

@media only screen and (max-width: 1600px) {
  .section-element {
    width: 30%;
  }
}

@media only screen and (max-width: 1350px) {
  .section-element-count {
    font-size: 3rem;
  }

  .check {
    padding-top: 20px;
  }
}

@media only screen and (max-width: 1120px) {
  .section-element-title {
    font-size: 0.9rem;
  }

  .section-element-count {
    font-size: 2.5rem;
  }

  .section-element-subtitle {
    font-size: 0.8rem;
  }

  .check {
    font-size: 4rem;
  }
}

@media only screen and (max-width: 1024px) {
  .section-element {
    width: 45%;
  }
}

@media only screen and (max-width: 690px) {
  .section-element {
    width: 100%;
  }

  .check {
    padding: 10px 0;
  }
}
</style>
