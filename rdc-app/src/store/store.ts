import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useStoreRegions = defineStore('storeRigions', () => {
  const regions = ref(null);
  
  function getREgions() {
    // if regions === null then API else regions
  }

  const doubleCount = computed(() => {

  });

  return { regions, getREgions }
});