<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';

const props = defineProps<{
  mouseX: number;
  mouseY: number;
  title: string;
}>();
const container: Ref<Element | null> = ref(null);
const topPosition = computed(() => {
  const height = container.value?.clientHeight!;
  if (props.mouseY - height < 0) {
    return props.mouseY + 25;
  }

  return props.mouseY - height;
});
const leftPosition = computed(() => {
  const width = container.value?.clientWidth!;
  if (props.mouseX + width >= window.innerWidth) {
    return props.mouseX - width;
  }

  return props.mouseX;
});
</script>

<template>
  <div ref="container" :style="{ left: `${leftPosition}px`, top: `${topPosition}px` }" class="container">
    <div class="tooltip-title">
      {{ props.title }}
    </div>
    <div class="tooltip-text">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  width: 200px;
  height: auto;
  background-color: var(--vt-c-text-dark-2);
  color: var(--vt-c-black-soft);
  pointer-events: none;
  z-index: 21;
}

.tooltip-title {
  background-color: rgb(75, 75, 253);
  width: 100%;
  height: auto;
  color: var(--vt-c-text-dark-2);
  padding: 3px 3px 3px 10px;
}

.tooltip-text {
  padding: 10px;
}
</style>
