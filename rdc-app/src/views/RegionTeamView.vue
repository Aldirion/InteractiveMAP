<script setup lang="ts">
import EmployeeTeamComponent from '@/components/active_region/EmployeeTeamComponent.vue';
import RouterByPagesComponent from '@/components/common/RouterByPagesComponent.vue';
import type { EmployeeTeam } from '@/interfaces/regions';
import { useStoreRegions } from '@/store/store';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import LoaderComponent from '@/components/common/LoaderComponent.vue';

const route = useRoute();
const regionCode = route.fullPath.split('/')[2];
let employeeTeam = ref<EmployeeTeam | null>(null);
let isLoaded = ref(false);

const store = useStoreRegions();

onMounted(async () => {
  const regionId = (await store.getRegionData(regionCode)).id;
  employeeTeam.value = await store.getEmployeeByRegionCode(regionId);
  isLoaded.value = true;
});
</script>

<template>
  <RouterByPagesComponent />
  <LoaderComponent v-if="!isLoaded" />
  <div class="team-container" v-if="isLoaded">
    <EmployeeTeamComponent v-for="(employee, title) in employeeTeam" :key="title" :title="title" :team="employee" />
  </div>
</template>

<style lang="css" scoped>
.team-container {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
