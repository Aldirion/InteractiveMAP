import type { Region } from '@/interfaces/regions';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useStoreRegions = defineStore('storeRigions', () => {
  const regions = ref<Region[] | null>(null);
  
  async function getRegions(): Promise<Region[]>  {
    if (regions.value === null) {
      const response = await fetch("http://localhost:8000/api/v1/region");
      const data: Region[] = await response.json();

      regions.value = data;

      return data;
    } else {
      return regions.value;
    }
  }

  function getRegionData(regionCode: string) {
    return regions.value?.find(reg => reg.codegost === regionCode);
  }

  const checkRegion = computed(() => {
    
  });

  return { regions, getRegions, checkRegion, getRegionData }
});