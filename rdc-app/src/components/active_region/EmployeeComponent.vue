<script setup lang="ts">
import type { EmployeeData } from '@/interfaces/regions';

defineProps<{
  memberData: EmployeeData;
}>();
</script>

<template>
  <div class="team-member">
    <div class="member-about">
      <p class="member-name">{{ memberData.lastname }} {{ memberData.firstname }} {{ memberData.patronymic }}</p>
      <p class="member-email">{{ memberData.email }} {{ memberData.region_id }}</p>
    </div>
    <div class="member-img"></div>
  </div>
</template>

<style lang="css" scoped>
.team-member {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-background-soft);
  border-radius: 5px;
  padding: 10px;
}

.member-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--vt-c-divider-dark-1);
}

.member-name {
  font-size: 1.2rem;
  color: var(--color-text);
}

.member-about {
  color: var(--vt-c-subtext-light-1);
}
</style>
