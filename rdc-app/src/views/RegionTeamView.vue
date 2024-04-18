<script setup lang="ts">
import EmployeeTeamComponent from '@/components/active_region/EmployeeTeamComponent.vue';
import RouterByPagesComponent from '@/components/common/RouterByPagesComponent.vue';
import type { EmployeeTeam } from '@/interfaces/regions';
import { useStoreRegions } from '@/store/store';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const regionCode = route.fullPath.split('/')[2];
let employeeTeam = ref<EmployeeTeam | null>(null);

const store = useStoreRegions();
const { getRegionData, getEmployeeByRegionCode } = store;

onMounted(async () => {
  const regionId = (await getRegionData(regionCode)).id;
  console.log(regionId);
  employeeTeam.value = await getEmployeeByRegionCode(regionId);
});
console.log(employeeTeam);
</script>

<template>
  <RouterByPagesComponent />
  <div class="team-container">
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
