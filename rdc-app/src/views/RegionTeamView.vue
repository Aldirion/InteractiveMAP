<script setup lang="ts">
import { useStoreRegions } from '@/store/store';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import type { EmployeeTeam } from '@/interfaces/employee';
import RouterByPagesComponent from '@/components/common/RouterByPagesComponent.vue';
import ListComponent from '@/components/common/ListComponent.vue';
import LoaderComponent from '@/components/common/LoaderComponent.vue';
import ListItemComponent from '@/components/common/ListItemComponent.vue';

const route = useRoute();
const regionCode = route.params.region_code as string;
let employeeTeam = ref<EmployeeTeam | null>(null);
let isLoaded = ref(false);
let regionName = ref<string | null>(null);

const store = useStoreRegions();

onMounted(async () => {
  const regionsData = await store.getRegions();

  regionName.value = regionsData[regionCode].title;
  const regionId = regionsData[regionCode].id;
  employeeTeam.value = await store.getEmployeeByRegionCode(regionId);
  isLoaded.value = true;
});
</script>

<template>
  <LoaderComponent v-if="!isLoaded" />

  <div v-if="isLoaded">
    <RouterByPagesComponent :regionName="regionName!" />
    <div class="team-container">
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
          <div class="img-container">
            <img :src="worker.avatar" class="item-img" alt="worker photo" />
          </div>
        </ListItemComponent>
      </ListComponent>
    </div>
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
