import type { EmployeeTeam, Region, RegionCardData, RegionSPOData, RegionSchoolsData } from '@/interfaces/regions';
import { BASE_URL } from '@/interfaces/variables';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStoreRegions = defineStore('storeRigions', () => {
  const regions = ref<Region[] | null>(null);
  const employeeTeam = ref<EmployeeTeam | null>(null);

  async function getRegions(): Promise<Region[]> {
    if (regions.value === null) {
      const response = await fetch(`${BASE_URL}/region`);
      const data: Region[] = await response.json();
      regions.value = data;

      return data;
    } else {
      return regions.value;
    }
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

  async function getRegionData(regionCode: string): Promise<Region> {
    const regions = await getRegions();
    return regions.find((reg) => reg.codegost === regionCode)!;
  }

  async function getRegionSchoolData(): Promise<RegionCardData[]> {
    return [
      {
        title: 'Музей',
        value: 32,
        description: 'Кол-во обучающихся, вовлеченных в деят-ть музея',
      },
      {
        title: 'Медиацентр',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть медиацентра',
        value: 12,
      },
      {
        title: 'Театр',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть театра',
        value: 42,
      },
      {
        title: 'Туристический клуб',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть туристического клуба',
        value: 19,
      },
      {
        title: 'Киноклуб',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть киноклуба',
        value: 142,
      },
      {
        title: 'Патриотический клуб',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть патриотического клуба',
        value: 68,
      },
      {
        title: 'Спортивный клуб',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть спортивного клуба',
        value: 232,
      },
      {
        title: 'Волонтерский отряд',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть волонтерского отряда',
        value: 142,
      },
      {
        title: 'Вожатский отряд',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть вожатского отряда',
        value: 10,
      },
      {
        title: 'Отряд юных инспекторов движения',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть отряда ЮИД',
        value: 22,
      },
      {
        title: 'Отряд юных спасателей',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть отряда юных спасателей',
        value: 37,
      },
    ];
  }

  async function getRegionSPOData(): Promise<RegionCardData[]> {
    return [
      {
        title: 'Музей (комнаты Боевой славы)',
        value: 14,
        description: 'Кол-во обучающихся, вовлеченных в деят-ть музея(комнаты Боевой славы)',
      },
      {
        title: 'Медиацентр',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть медиацентра',
        value: 122,
      },
      {
        title: 'Театр (театральный кружок)',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть театра(театрального кружка)',
        value: 55,
      },
      {
        title: 'Туристический клуб',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть туристического клуба',
        value: 32,
      },
      {
        title: 'Киноклуб',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть киноклуба',
        value: 27,
      },
      {
        title: 'Патриотический клуб',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть патриотического клуба',
        value: 68,
      },
      {
        title: 'Спортивный клуб',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть спортивного клуба',
        value: 232,
      },
      {
        title: 'поисковый отряд',
        description: 'Кол-во зарегистрированных поисковиков',
        value: 232,
      },
      {
        title: 'Волонтерский отряд',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть волонтерского отряда',
        value: 142,
      },
      {
        title: 'Вожатский отряд',
        description: 'Кол-во обучающихся, вовлеченных в деят-ть вожатского отряда',
        value: 10,
      },
      {
        title: 'Команда КВН',
        description: 'Количество обучающихся, участвующих в команде КВН',
        value: 22,
      },
    ];
  }

  return {
    regions,
    employeeTeam,
    getRegions,
    getEmployeeByRegionCode,
    getRegionSPOData,
    getRegionSchoolData,
    getRegionData,
    getSchoolsByRegionCode,
    getSPOByRegionCode,
  };
});
