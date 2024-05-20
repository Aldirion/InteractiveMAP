<script setup lang="ts">
import router from '@/router';
import DonughtChart from '../charts/DonughtChart.vue';
import type { Region } from '@/interfaces/regions';
import { useRoute } from 'vue-router';
import type { EmployeeData } from '@/interfaces/employee';

const props = defineProps<{
  regionData: Region;
  supervizorData: EmployeeData | null;
  email: string | null;
  address: string | null;
}>();
const allInstitunions = props.regionData.count_school + props.regionData.count_spo;
const notCoveredInstitunions = allInstitunions - (props.regionData.comp_count_school + props.regionData.comp_count_spo);
const route = useRoute();

function checkoutToSchools() {
  router.push(`${route.fullPath}/schools`);
}

function checkoutToSPO() {
  router.push(`${route.fullPath}/spo`);
}
</script>

<template>
  <div class="region-info">
    <div class="coordinator-about" v-if="supervizorData">
      <div class="img-container">
        <img :src="supervizorData.avatar" class="icon" alt="supervizor image" />
      </div>
      <div class="about-container">
        <h2 class="coordinator-name">
          {{ supervizorData.lastname }} {{ supervizorData.firstname }} {{ supervizorData.patronymic }}
        </h2>
        <h3 class="coordinator-subtitle">Региональный координатор проекта</h3>
        <a class="coordinator-email" href="mailto:navigatory.detstva.24@rosdetcentr.ru" v-if="email">
          <span class="material-symbols-outlined">mail</span>
          {{ email }}
        </a>
        <p class="coordinator-quote" v-if="address">{{ address }}</p>
        <p class="coordinator-quote" v-if="supervizorData.quote !== 'nan'">{{ supervizorData?.quote }}</p>
      </div>
    </div>
    <div class="coordinator-about" v-else>
      <span class="material-symbols-outlined icon-acc">account_circle</span>
      <div class="about-container">
        <h2 class="coordinator-name">Вакансия доступна</h2>
        <h3 class="coordinator-subtitle">Региональный координатор проекта</h3>
      </div>
    </div>

    <div class="modal-r">
      <DonughtChart :not-covered-institutions="notCoveredInstitunions" :count-institutions="allInstitunions" />
    </div>

    <div class="info-grid-indicators">
      <div class="modal-r-container" @click="checkoutToSchools()">
        <div class="modal-r-indicator-small">{{ regionData.comp_count_school }}</div>
        <div>школ в проекте</div>
        <div class="modal-r-indicator-light">{{ regionData.count_school }} всего</div>
      </div>
      <div class="modal-r-container" @click="checkoutToSPO()">
        <div class="modal-r-indicator-small">{{ regionData.comp_count_spo }}</div>
        <div>СПО в проекте</div>
        <div class="modal-r-indicator-light">{{ regionData.count_spo }} всего</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.img-container {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.icon {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  object-position: center;
}

.icon-acc {
  font-size: 150px;
  color: var(--color-background-mute);
}

.coordinator-avatar {
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: top center;
  border-radius: 50%;
}

.coordinator-about {
  display: flex;
  gap: 30px;
  align-items: center;
  margin-bottom: 50px;
}

.coordinator-name {
  font-size: 18px;
}

.coordinator-subtitle {
  font-size: 14px;
  color: rgb(189, 187, 187);
}

.coordinator-quote {
  font-style: italic;
}

.coordinator-email {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.info-grid-indicators {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
  user-select: none;
}

.modal-r-container {
  width: 100%;
  padding: 20px 10px;
  text-align: center;
  font-weight: bold;
}

.modal-r-container:hover {
  cursor: pointer;
}

.modal-r-indicator-small {
  color: rgba(149, 145, 253, 1);
  font-size: 2rem;
}

.modal-r-indicator-light {
  color: var(--vt-orage-light);
  font-size: 1rem;
  font-weight: lighter;
  border-top: 2px solid var(--color-border);
}

@media only screen and (max-width: 535px) {
  .img-container {
    width: 120px;
    height: 120px;
  }

  .icon-acc {
    font-size: 120px;
  }

  .coordinator-avatar {
    width: 120px;
    height: 120px;
  }

  .coordinator-about {
    gap: 15px;
    margin-bottom: 50px;
  }

  .info-grid-indicators {
    gap: 30px;
    margin-top: 15px;
  }

  .modal-r-indicator-small {
    font-size: 1.5rem;
  }

  .coordinator-email {
    font-size: 0.8rem;
    margin-top: 10px;
    gap: 5px;
  }

  .coordinator-quote {
    font-size: 0.9rem;
  }
}

@media only screen and (max-width: 435px) {
  .img-container {
    width: 150px;
    height: 150px;
  }

  .coordinator-about {
    flex-direction: column;
  }
}

@media only screen and (min-width: 3000px) {
  .img-container {
    width: 7vw;
    height: 7vw;
  }

  .icon-acc {
    font-size: 7vw;
  }

  .coordinator-name {
    font-size: 1.2vw;
  }

  .coordinator-subtitle {
    font-size: 0.8vw;
    color: rgb(189, 187, 187);
  }

  .coordinator-about {
    gap: 2vw;
    margin-bottom: 2vw;
  }

  .coordinator-email {
    gap: 0.5vw;
    margin-top: 1vw;
    font-size: 0.8vw;
  }

  .coordinator-quote {
    font-size: 0.8vw;
  }

  .modal-r-container {
    width: 50%;
    padding: 1vw 1vw;
  }

  .modal-r-indicator-small {
    font-size: 2.2vw;
  }

  .modal-r-indicator-light {
    font-size: 1.2vw;
  }
}
</style>
