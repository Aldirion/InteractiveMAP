<script setup lang="ts">
import { type MunicipalitiesData, type RegionData } from '@/interfaces/regions';
import { ref } from 'vue';
defineProps<{
  regionsData: RegionData | MunicipalitiesData | null;
}>();

const emit = defineEmits<{
  regionNameSelected: [regionCode: string];
}>();

let isOpen = ref(false);
const selectedRegion = ref<null | string>(null);

function optionSelect(regionName: string, regionCode: string) {
  selectedRegion.value = regionName;
  isOpen.value = false;
  emit('regionNameSelected', regionCode);
}
</script>

<template>
  <div class="dropdown-wrapper" v-if="regionsData">
    <div class="dropdown-selected" @click="isOpen = !isOpen">
      {{ selectedRegion || 'Выбрать регион' }}
    </div>

    <div class="options-wrapper" v-if="isOpen">
      <div
        class="option"
        v-for="region in regionsData"
        :key="region.codegost"
        @click="optionSelect(region.title, region.codegost)"
      >
        {{ region.title }}
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dropdown-wrapper {
  cursor: pointer;
  min-width: 250px;
}

.dropdown-selected {
  padding: 2.5px 15px;
  border: 1px solid var(--color-background-mute);
  box-sizing: border-box;
  margin-bottom: 4px;
  background-color: var(--color-background);
  color: var(--color-text);
}

.options-wrapper {
  height: 500px;
  overflow: hidden;
  overflow-y: auto;
}

.option:hover {
  background-color: var(--color-background-mute);
}

.option {
  padding: 5px 15px;
  border: 1px solid var(--color-background-mute);
  box-sizing: border-box;
  background-color: var(--color-background);
  color: var(--color-text);
}
</style>
