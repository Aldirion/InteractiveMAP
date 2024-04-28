<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  title: string | number;
  opened: boolean;
}>();

const isOpened = ref(props.opened);
</script>
<template>
  <div class="list-elem">
    <div class="list-elem-title" @click="() => (isOpened = !isOpened)">
      <p>{{ title }}</p>
      <span class="material-symbols-outlined arrow" v-if="isOpened">arrow_drop_down</span>
      <span class="material-symbols-outlined arrow" v-else>arrow_drop_up</span>
    </div>
    <Transition>
      <div v-if="isOpened" :class="{ 'list-elem-few ': opened, 'list-elem-a-lot': !opened }">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<style lang="css" scoped>
.list-elem {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: 0.5s ease;
}

.list-elem-title {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  transition: background-color 0.2s ease;
  border-radius: 5px;
  font-size: 1.2rem;
}

.list-elem-title:hover {
  cursor: pointer;
}

.list-elem-a-lot {
  height: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
  gap: 10px;
  padding-right: 10px;
}

.list-elem-few {
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
  background: var(--color-background-mute);
  border-radius: 100px;
}

::-webkit-scrollbar-thumb:hover {
  cursor: pointer;
}
</style>
