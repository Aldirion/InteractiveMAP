<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { EmployeeFederalTeam, EmpoloyeeDepartments } from '@/interfaces/employee';
import ListComponent from '@/components/common/ListComponent.vue';
import LoaderComponent from '@/components/common/LoaderComponent.vue';
import ListItemComponent from '@/components/common/ListItemComponent.vue';
import router from '@/router';
import { BASE_URL } from '@/interfaces/variables';

let employeeTeam = ref<EmployeeFederalTeam | null>(null);
let isLoaded = ref(false);

onMounted(async () => {
  const teamData = await fetch(`${BASE_URL}/rdc_team/`);
  employeeTeam.value = await teamData.json();
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
        :opened="employee.count < 5"
      >
        <ListItemComponent
          v-for="worker in employee.employees"
          :key="worker.id"
          @click="routedToUserProfile(worker.user)"
        >
          <div class="item-about">
            <p class="item-name">{{ worker.lastname }} {{ worker.firstname }} {{ worker.patronymic }}</p>
            <p class="item-email">{{ worker.email }} {{ worker.region_id }}</p>
            <p class="item-address">{{ worker.post_title }}</p>
          </div>
          <div class="img-container">
            <img :src="worker.avatar" class="item-img" alt="worker photo" />
          </div>
        </ListItemComponent>

        <div v-if="Object.keys(employee.departments).length > 0" class="sub-list">
          <ListComponent
            v-for="(department, title) in employee.departments as EmpoloyeeDepartments"
            :key="title"
            :title="`${title} (${department.count})`"
            :opened="department.count < 6"
          >
            <ListItemComponent
              v-for="worker in department.data"
              :key="worker.id"
              @click="routedToUserProfile(worker.user)"
            >
              <div class="item-about">
                <p class="item-name">{{ worker.lastname }} {{ worker.firstname }} {{ worker.patronymic }}</p>
                <p class="item-email">{{ worker.email }} {{ worker.region_id }}</p>
                <p class="item-address">{{ worker.post_title }}</p>
              </div>
              <div class="img-container">
                <img :src="worker.avatar" class="item-img" alt="worker photo" />
              </div>
            </ListItemComponent>
          </ListComponent>
        </div>
      </ListComponent>
    </div>
  </div>
</template>

<style lang="css" scoped>
.team-container {
  min-height: 50vh;
  padding: 0 10vw;
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

.sub-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media only screen and (max-width: 1050px) {
  .team-container {
    min-height: 50vh;
    padding: 0 0;
  }
}
</style>
