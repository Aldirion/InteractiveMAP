<script setup lang="ts">
import router from '@/router';
import { useRoute } from 'vue-router';
import { onMounted, ref, type Ref } from 'vue';
import { useStoreRegions } from '@/store/store';
import RRC from '@/components/active_region/RRC.vue';
import MapComponent from '@/components/map_origin/MapComponent.vue';
import LineChart from '@/components/charts/LineChart.vue';
import type { EmployeeData, Region } from '@/interfaces/regions';
import LoaderComponent from '@/components/common/LoaderComponent.vue';

const route = useRoute();
const store = useStoreRegions();
const regionCode = route.params.region_code as string;

let regionData: Ref<Region | null> = ref(null);
let supervizorData: Ref<EmployeeData | null> = ref(null);

let allInstitutionsCount: Ref<number | null> = ref(null);
let allEmployeeCount: Ref<number | null> = ref(null);

onMounted(async () => {
  const regionsData = await store.getRegions();

  regionData.value = regionsData[regionCode];
  allInstitutionsCount.value = regionData.value.count_school + regionData.value.count_spo;

  let employee = await store.getEmployeeByRegionCode(regionData.value.id);
  let totalCount = 0;
  for (const post in employee) {
    totalCount += employee[post].count;
  }
  allEmployeeCount.value = totalCount;
  supervizorData.value = employee['Главный эксперт'].data[0];
});

function regionTeam() {
  router.push({ name: 'active_region_team', params: { region_code: `${regionCode}` } });
}

function underDevelopment() {
  router.push({ name: 'active_region_develop', params: { region_code: `${regionCode}` } });
}

function educationalSpaces() {
  router.push({ name: 'active_region_educate', params: { region_code: `${regionCode}` } });
}

function onRegionSelected(regionCode: string) {
  router.push({ name: 'active_region', params: { region_code: `${regionCode}` } });
}
</script>

<template>
  <main class="region">
    <h1 class="region-map-title">{{ regionData?.title }}</h1>
    <div class="region-main-data">
      <div class="region-map">
        <MapComponent v-on:regionSelected="onRegionSelected" :component-region-code="regionCode" />
      </div>
      <RRC
        v-if="regionData && supervizorData"
        :address="regionData.rrc_address"
        :email="regionData.rrc_email"
        :region-data="regionData"
        :supervizor-data="supervizorData"
      />
      <LoaderComponent v-else />
    </div>

    <div class="modal-r">
      <div class="modal-r-card hover-component" @click="regionTeam">
        <div class="modal-r-h">Региональная команда</div>
        <div class="modal-r-container">
          <div class="modal-r-indicator">{{ allEmployeeCount ?? 'Загрузка...' }}</div>
          <h2 style="text-align: center">Сотрудников</h2>
        </div>
      </div>

      <div class="modal-r-card hover-component" @click="educationalSpaces">
        <div class="modal-r-h">Воспитательные пространства и объединения</div>
        <div class="modal-r-container">
          <div class="modal-r-indicator">{{ allInstitutionsCount ?? 'Загрузка...' }}</div>
          <h2 style="text-align: center">Воспитательных пространств и объединений</h2>
        </div>
      </div>

      <div class="modal-r-card" @click="underDevelopment">
        <div class="modal-r-h">Повышение квалификации</div>
        <div class="modal-r-container">
          <div class="modal-r-indicator">630</div>
          <h2 style="text-align: center">Сотрудников, прошедших обучение по программам повышения квалификации</h2>
        </div>
      </div>
    </div>

    <h1 class="region-title">Проекты Росдетцентра</h1>
    <div class="modal-r">
      <div class="modal-r-card" @click="underDevelopment">
        <div class="modal-r-h">Навигаторы детства</div>
        <div class="modal-r-container">
          <div class="modal-r-indicator">1254</div>
          <h2 style="text-align: center">Участников конкурса</h2>
        </div>
      </div>
      <div class="modal-r-card" @click="underDevelopment">
        <div class="modal-r-h">Лига Вожатых</div>
        <div class="modal-r-container">
          <div class="modal-r-indicator">72</div>
          <h2 style="text-align: center">Участника конкурса</h2>
        </div>
      </div>
      <div class="modal-r-card" @click="underDevelopment">
        <div class="modal-r-h">Добро не уходит на каникулы</div>
        <div class="modal-r-container">
          <div class="modal-r-indicator">130</div>
          <h2 style="text-align: center">Заявок на грантовый конкурс</h2>
        </div>
      </div>
      <div class="modal-r-card" @click="underDevelopment">
        <div class="modal-r-h">Орлята России</div>
        <div class="modal-r-container">
          <div class="modal-r-indicator">20000</div>
          <h2 style="text-align: center">Орлят</h2>
        </div>
      </div>
      <div class="modal-r-card" @click="underDevelopment">
        <div class="modal-r-h">Профильные смены</div>
        <div class="modal-r-container">
          <div class="modal-r-indicator">1000</div>
          <h2 style="text-align: center">Участников программ</h2>
        </div>
      </div>
    </div>

    <h1 class="region-title">Мероприятия календарного плана воспитательной работы</h1>
    <div class="modal-r">
      <div class="modal-r-container">
        <LineChart />
      </div>
      <div class="modal-r-container">
        <!-- Календарь -->
      </div>
    </div>

    <h1 class="region-title">Партнеры</h1>
    <div class="modal-r partners">
      <img style="padding: 5px" src="/partners/unarmy.png" />
      <img style="padding: 5px" src="/partners/unarmy.png" />
      <img style="padding: 5px" src="/partners/unarmy.png" />
      <img style="padding: 5px" src="/partners/unarmy.png" />
      <img style="padding: 5px" src="/partners/unarmy.png" />
    </div>
  </main>
</template>

<style scoped>
.region {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.region-title {
  text-align: center;
  margin: 100px 0;
  font-size: 24px;
}

.region-main-data {
  display: flex;
  width: 100%;
  gap: 2vw;
  margin-bottom: 150px;
}

.region-map {
  width: 40vw;
  max-height: 700px;
}

.region-map-title {
  text-align: center;
  font-size: 24px;
  padding: 20px 0 50px;
}

.modal-r {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px calc(3rem - 8px);
}

.modal-r-card {
  width: 30%;
  border-radius: 0px 0px 5px 5px;
  background: var(--color-background-soft);
  text-align: center;
  font-weight: bold;
  user-select: none;
}

.modal-r-card:hover {
  cursor: pointer;
}

.modal-r-h {
  padding: 10px;
  color: var(--color-text);
  font-size: 1rem;
  background: var(--color-background-mute);
  border-radius: 5px 5px 0px 0px;
}

.modal-r-container {
  width: 100%;
  padding: 20px 10px;
}

.modal-r-indicator {
  color: rgba(149, 145, 253, 1);
  font-size: 5rem;
}

.hover-component:hover {
  cursor: pointer;
}

@media only screen and (max-width: 1050px) {
  .modal-r {
    gap: 20px;
  }

  .region-title {
    margin: 50px 0;
  }

  .region-main-data {
    margin-bottom: 80px;
  }
}

@media only screen and (max-width: 1050px) {
  .region-main-data {
    flex-direction: column;
    align-items: center;
  }

  .region-map {
    order: 2;
  }

  .region-info {
    order: 1;
  }

  .modal-r-indicator {
    font-size: 4rem;
  }

  .modal-r-card {
    font-size: 0.9rem;
  }
}

@media only screen and (max-width: 865px) {
  .modal-r-card {
    width: 250px;
  }
}

@media only screen and (max-width: 675px) {
  .modal-r-card {
    width: 100%;
  }
}
</style>
