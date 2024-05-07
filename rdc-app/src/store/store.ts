import type { EmployeeTeam, Municipalities, Region, RegionSPOData, RegionSchoolsData } from '@/interfaces/regions';
import { BASE_URL } from '@/interfaces/variables';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStoreRegions = defineStore('storeRigions', () => {
  const regions = ref<{ [key: string]: Region } | null>(null);
  const employeeTeam = ref<EmployeeTeam | null>(null);

  async function getRegions(): Promise<{ [key: string]: Region }> {
    if (regions.value === null) {
      const response = await fetch(`${BASE_URL}/region`);
      const data: Region[] = await response.json();

      const regionData = data.reduce<{ [key: string]: Region }>((acc, curr) => {
        acc[curr.codegost] = curr;

        return acc;
      }, {});

      regions.value = regionData;

      return regionData;
    } else {
      return regions.value;
    }
  }

  async function getMunicipalities(regionCode: number): Promise<{ [key: string]: Municipalities }> {
    const response = await fetch(`${BASE_URL}/region/${regionCode}/municipalities/`);
    const data: Municipalities[] = await response.json();

    const municipalityData = data.reduce<{ [key: string]: Municipalities }>((acc, curr) => {
      acc[curr.title] = curr;

      return acc;
    }, {});

    return municipalityData;
  }

  async function getEmployeeByRegionCode(regionCode: number): Promise<EmployeeTeam> {
    const response = await fetch(`${BASE_URL}/region/${regionCode}/employee`);
    const data: EmployeeTeam = await response.json();
    employeeTeam.value = data;

    return data;
  }

  async function getSchoolsByRegionCode(regionCode: number): Promise<RegionSchoolsData> {
    const response = await fetch(`${BASE_URL}/region/${regionCode}/eduinstitutions/schools`);
    const data = await response.json();

    return data.data;
  }

  async function getSPOByRegionCode(regionCode: number): Promise<RegionSPOData> {
    const response = await fetch(`${BASE_URL}/region/${regionCode}/eduinstitutions/spo`);
    const data = await response.json();

    return data.data;
  }

  return {
    regions,
    employeeTeam,
    getRegions,
    getEmployeeByRegionCode,
    getSchoolsByRegionCode,
    getSPOByRegionCode,
    getMunicipalities,
  };
});
