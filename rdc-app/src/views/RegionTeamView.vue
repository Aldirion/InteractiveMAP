<script setup lang="ts">
import EmployeeTeamComponent from '@/components/active_region/EmployeeTeamComponent.vue';
import RouterByPagesComponent from '@/components/common/RouterByPagesComponent.vue';
</script>

<template>
  <RouterByPagesComponent />
  <div class="team-container">
    <EmployeeTeamComponent />
    <EmployeeTeamComponent />
    <EmployeeTeamComponent />
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
