<script setup lang="ts">
import { onMounted, ref } from 'vue';
import EmployeeComponent from '@/components/active_region/EmployeeComponent.vue';
import type { EmployeeTeamData } from '@/interfaces/regions';

const props = defineProps<{
  title: string | number;
  team: EmployeeTeamData;
}>();

let isShowMembers = ref(false);

onMounted(() => {
  if (props.team.count <= 3) {
    isShowMembers.value = true;
  }
});

function showMembers() {
  isShowMembers.value = !isShowMembers.value;
}
</script>
<template>
  <div class="team-elem">
    <div class="team-elem-title" @click="showMembers">
      <p>{{ title }} ({{ team.count }})</p>
      <span class="material-symbols-outlined arrow" v-if="isShowMembers">arrow_drop_down</span>
      <span class="material-symbols-outlined arrow" v-else>arrow_drop_up</span>
    </div>
    <Transition>
      <div v-if="isShowMembers" :class="{ 'team-members': team.count > 3, 'team-members-low': team.count <= 3 }">
        <EmployeeComponent v-for="member in team.data" :memberData="member" :key="member.id" />
      </div>
    </Transition>
  </div>
</template>

<style lang="css" scoped>
.team-elem {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: 0.5s ease;
}

.team-elem-title {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--vt-c-black-mute);
  color: var(--vt-c-white);
  transition: background-color 0.2s ease;
  border-radius: 5px;
  font-size: 1.2rem;
}

.team-elem-title:hover {
  cursor: pointer;
}

.team-members {
  height: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
  gap: 10px;
}

.team-members-low {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.arrow {
  font-size: 2rem;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

::-webkit-scrollbar {
  width: 16px;
}

::-webkit-scrollbar-track {
  background: var(--color-background-soft);
  border-radius: 100px;
}

::-webkit-scrollbar-thumb {
  background: var(--vt-c-black-mute);
  border-radius: 100px;
}

::-webkit-scrollbar-thumb:hover {
  cursor: pointer;
}
</style>
