<script setup lang="ts">
import { useStoreRegions } from '@/store/store';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import type { RegionSchoolsData } from '@/interfaces/regions';
import RouterByPagesComponent from '@/components/common/RouterByPagesComponent.vue';
import ListComponent from '@/components/common/ListComponent.vue';
import ListItemComponent from '@/components/common/ListItemComponent.vue';
import LoaderComponent from '../common/LoaderComponent.vue';

const route = useRoute();
const regionCode = route.params.region_code as string;
let schoolsData = ref<RegionSchoolsData | null>(null);
let isLoaded = ref(false);
let regionName = ref<string | null>(null);

const store = useStoreRegions();

onMounted(async () => {
  const regionsData = await store.getRegions();
  regionName.value = regionsData[regionCode].title;

  const regionId = regionsData[regionCode].id;
  schoolsData.value = await store.getSchoolsByRegionCode(regionId);

  isLoaded.value = true;
});
</script>

<template>
  <LoaderComponent v-if="!isLoaded" />

  <div v-else>
    <RouterByPagesComponent :regionName="regionName!" />
    <div class="schools-container">
      <ListComponent
        v-for="(students, title) in schoolsData"
        :key="title"
        :title="`${title} (${students.count})`"
        :opened="students.count < 5"
      >
        <ListItemComponent v-for="school in students.schools" :key="school.id">
          <div class="item-about">
            <p class="item-name">{{ school.title }}</p>
            <p class="item-sub">{{ school.sign }}</p>
            <p class="item-address">{{ school.address }}</p>
          </div>
          <div class="item-count" v-if="school.contingent">{{ school.contingent }} учащихся</div>
        </ListItemComponent>
      </ListComponent>
    </div>
  </div>
</template>

<style lang="css" scoped>
.schools-container {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
