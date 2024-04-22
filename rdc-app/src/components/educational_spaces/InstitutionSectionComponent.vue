<script setup lang="ts">
import { computed, onMounted, ref, type ComputedRef, type Ref } from 'vue';
import { useStoreRegions } from '@/store/store';
import { Section, type RegionCardData } from '@/interfaces/regions';

const props = defineProps<{
  institutionSection: Section;
}>();

const store = useStoreRegions();

let schoolSectionData: Ref<RegionCardData[]> = ref([]);
let spoSectionData: Ref<RegionCardData[]> = ref([]);

onMounted(async () => {
  schoolSectionData.value = await store.getRegionSchoolData();
  spoSectionData.value = await store.getRegionSPOData();
});

let sectionData: ComputedRef<RegionCardData[]> = computed(() => {
  switch (props.institutionSection) {
    case Section.SCHOOL:
      return schoolSectionData.value;
    case Section.SPO:
      return spoSectionData.value;
    default:
      throw Error('Unhandled value');
  }
});
</script>

<template>
  <div class="school-title">Воспитательные пространства и объединения</div>
  <div class="school-section">
    <div class="section-element" v-for="elem in sectionData" :key="elem.title">
      <div class="section-element-title">{{ elem.title }}</div>
      <div class="section-element-count">{{ elem.value }}</div>
      <div class="section-element-subtitle">{{ elem.description }}</div>
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
