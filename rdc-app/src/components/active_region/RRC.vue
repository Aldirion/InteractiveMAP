<script setup lang="ts">
import DonughtChart from '../charts/DonughtChart.vue';
</script>

<template>
  <div class="region-info">
    <div class="coordinator-about">
      <div class="img-container">
        <img class="coordinator-avatar" src="/partners/regcor.jpeg" />
      </div>
      <div class="about-container">
        <h2 class="coordinator-name">имя</h2>
        <h3 class="coordinator-subtitle">Региональный координатор проекта</h3>
        <a class="coordinator-email" href="mailto:navigatory.detstva.24@rosdetcentr.ru">
          <span class="material-symbols-outlined">mail</span>
          mail
        </a>
        <p class="coordinator-quote">""" Съешь ещё этих мягких французских булок, да выпей же чаю</p>
      </div>
    </div>

    <div class="modal-r">
      <DonughtChart />
    </div>

    <div class="info-grid-indicators">
      <div class="modal-r-container">
        <div class="modal-r-indicator-small">690</div>
        <div>школ в проекте</div>
        <div class="modal-r-indicator-light">22 всего</div>
      </div>
      <div class="modal-r-container">
        <div class="modal-r-indicator-small">72</div>
        <div>СПО в проекте</div>
        <div class="modal-r-indicator-light">22 всего</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.img-container {
  width: 150px;
  height: 150px;
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

.about-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
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
}

.info-grid-indicators {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
}

.modal-r-container {
  width: 100%;
  padding: 20px 10px;
  text-align: center;
  font-weight: bold;
}

.modal-r-indicator {
  color: rgba(149, 145, 253, 1);
  font-size: 5rem;
}

.modal-r-indicator-small {
  color: rgba(149, 145, 253, 1);
  font-size: 2rem;
}

.modal-r-indicator-light {
  color: var(--color-link);
  font-size: 1rem;
  font-weight: lighter;
  border-top: 2px solid var(--color-border);
}

@media only screen and (max-width: 520px) {
  .img-container {
    width: 120px;
    height: 120px;
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
}
</style>
