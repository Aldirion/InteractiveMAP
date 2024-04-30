<script setup lang="ts">
import type { EmployeeTeam } from '@/interfaces/regions';
import { useStoreRegions } from '@/store/store';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import RouterByPagesComponent from '@/components/common/RouterByPagesComponent.vue';
import ListComponent from '@/components/common/ListComponent.vue';
import LoaderComponent from '@/components/common/LoaderComponent.vue';
import ListItemComponent from '@/components/common/ListItemComponent.vue';

const route = useRoute();
const regionCode = route.params.region_code as string;
let employeeTeam = ref<EmployeeTeam | null>(null);
let isLoaded = ref(false);

const store = useStoreRegions();

onMounted(async () => {
  const regionsData = await store.getRegions();

  const regionId = regionsData[regionCode].id;
  employeeTeam.value = await store.getEmployeeByRegionCode(regionId);
  isLoaded.value = true;
});
</script>

<template>
  <RouterByPagesComponent />
  <LoaderComponent v-if="!isLoaded" />
  <div class="team-container" v-if="isLoaded">
    <ListComponent
      v-for="(employee, title) in employeeTeam"
      :key="title"
      :title="`${title} (${employee.count})`"
      :team="employee"
      :opened="employee.count < 5"
    >
      <ListItemComponent v-for="worker in employee.data" :key="worker.id">
        <div class="item-about">
          <p class="item-name">{{ worker.lastname }} {{ worker.firstname }} {{ worker.patronymic }}</p>
          <p class="item-email">{{ worker.email }} {{ worker.region_id }}</p>
        </div>
        <span class="material-symbols-outlined item-img">account_circle</span>
      </ListItemComponent>
    </ListComponent>
  </div>
</template>

<style lang="css" scoped>
.team-container {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 300px;
}
</style>
