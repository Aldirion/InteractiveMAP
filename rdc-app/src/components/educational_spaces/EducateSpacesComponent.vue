<script setup lang="ts">
import { useStoreRegions } from '@/store/store';
import { onMounted, ref, type Ref } from 'vue';
import InstitutionSectionComponent from './InstitutionSectionComponent.vue';
import RouterByPagesComponent from '@/components/common/RouterByPagesComponent.vue';
import { Section } from '@/interfaces/regions';

const store = useStoreRegions();

let regionCode = window.location.pathname.split('/')[2];
let activeSection: Ref<Section> = ref(Section.SCHOOL);
let regionName: Ref<string | null> = ref(null);

onMounted(async () => {
  regionName.value = (await store.getRegionData(regionCode)).title;
});
</script>

<template>
  <RouterByPagesComponent />
  <div class="educate-rout">
    <!-- <div class="region-educate title">
      {{ !!regionName ? regionName : 'Загрузка...' }}
    </div> -->
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
  <InstitutionSectionComponent :institutionSection="activeSection" />
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
