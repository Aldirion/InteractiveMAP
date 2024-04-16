<script setup lang="ts">
const props = defineProps<{
  memberData: {
    id: number;
    name: string;
    phone: string;
    email: string;
  };
}>();
</script>

<template>
  <div class="team-member">
    <div class="member-about">
      <p class="member-name">{{ props.memberData.name }}</p>
      <p class="member-phone">{{ props.memberData.phone }}</p>
      <p class="member-email">{{ props.memberData.email }}</p>
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
  margin-right: 10px;
}

.member-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--vt-c-black-mute);
}

.member-name {
  font-size: 1.2rem;
  color: var(--color-text);
}

.member-about {
  color: var(--vt-c-subtext-light-1);
}
</style>
