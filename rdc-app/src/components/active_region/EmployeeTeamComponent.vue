<script setup lang="ts">
import { ref } from 'vue';
import EmployeeComponent from '@/components/active_region/EmployeeComponent.vue';

let isShowMembers = ref(false);
const members = [
  {
    id: 1,
    name: 'ФИО',
    phone: '+79999999999',
    email: 'navigatory.detstva.70@rosdetcentr.ru',
  },
  {
    id: 2,
    name: 'Фамилия Имя',
    phone: '+79999999999',
    email: 'navigatory.detstva.70@rosdetcentr.ru',
  },
  {
    id: 3,
    name: 'ФИО',
    phone: '+79999999999',
    email: 'navigatory.detstva.70@rosdetcentr.ru',
  },
  {
    id: 4,
    name: 'ФИО',
    phone: '+79999999999',
    email: 'navigatory.detstva.70@rosdetcentr.ru',
  },
  {
    id: 5,
    name: 'ФИО',
    phone: '+79999999999',
    email: 'navigatory.detstva.70@rosdetcentr.ru',
  },
  {
    id: 6,
    name: 'ФИО',
    phone: '+79999999999',
    email: 'navigatory.detstva.70@rosdetcentr.ru',
  },
  {
    id: 7,
    name: 'ФИО',
    phone: '+79999999999',
    email: 'navigatory.detstva.70@rosdetcentr.ru',
  },
  {
    id: 8,
    name: 'ФИО',
    phone: '+79999999999',
    email: 'navigatory.detstva.70@rosdetcentr.ru',
  },
  {
    id: 9,
    name: 'ФИО',
    phone: '+79999999999',
    email: 'navigatory.detstva.70@rosdetcentr.ru',
  },
  {
    id: 10,
    name: 'ФИО',
    phone: '+79999999999',
    email: 'navigatory.detstva.70@rosdetcentr.ru',
  },
];

function showMembers() {
  isShowMembers.value = !isShowMembers.value;
}
</script>
<template>
  <div class="team-elem">
    <div class="team-elem-title" @click="showMembers">
      <p>РК (5)</p>
      <span class="material-symbols-outlined arrow" v-if="isShowMembers">arrow_drop_down</span>
      <span class="material-symbols-outlined arrow" v-else>arrow_drop_up</span>
    </div>
    <Transition>
      <div class="team-members" v-if="isShowMembers">
        <EmployeeComponent v-for="member in members" :memberData="member" :key="member.id" />
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
  background-color: var(--color-background-soft);
  transition: background-color 0.2s ease;
  border-radius: 5px;
  font-size: 1.2rem;
}

.team-elem-title:hover {
  cursor: pointer;
  background-color: var(--vt-c-divider-light-2);
}

.team-members {
  height: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
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
