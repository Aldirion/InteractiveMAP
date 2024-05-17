<script setup lang="ts">
import { useStoreRegions } from '@/store/store';
import { onMounted, ref } from 'vue';
import type { EmployeeTeam } from '@/interfaces/employee';
import ListComponent from '@/components/common/ListComponent.vue';
import LoaderComponent from '@/components/common/LoaderComponent.vue';
import ListItemComponent from '@/components/common/ListItemComponent.vue';
import router from '@/router';

let employeeTeam = ref<EmployeeTeam | null>(null);
let isLoaded = ref(false);

const store = useStoreRegions();

onMounted(async () => {
  employeeTeam.value = await store.getEmployeeByRegionCode(91);

  isLoaded.value = true;
});

function routedToUserProfile(userId: number) {
  router.push({ name: 'rdc_employee', params: { user_id: `${userId}` } });
}
</script>

<template>
  <LoaderComponent v-if="!isLoaded" />

  <div v-if="isLoaded">
    <h1 class="team-title">Федеральная команда</h1>

    <div class="team-container">
      <ListComponent
        v-for="(employee, title) in employeeTeam"
        :key="title"
        :title="`${title} (${employee.count})`"
        :team="employee"
        :opened="employee.count < 5"
      >
        <ListItemComponent v-for="worker in employee.data" :key="worker.id" @click="routedToUserProfile(worker.user)">
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

.team-title {
  text-align: center;
  margin: 30px 0;
  font-size: 1.5rem;
}
</style>
