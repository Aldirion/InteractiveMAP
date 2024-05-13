<script setup lang="ts">
function logout() {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
}
</script>

<template>
  <div class="control-panel">
    <div class="control-panel-nav">
      <div class="panel-title active-title">
        <span class="material-symbols-outlined">person</span>
        <span>Личные данные</span>
      </div>

      <div class="panel-title">
        <span class="material-symbols-outlined">post</span>
        <span>Должность</span>
      </div>
    </div>

    <div class="setting">
      <RouterLink to="/" class="panel-title link" @click="logout">
        <span class="material-symbols-outlined">logout</span>
        <span>Выйти</span>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="css" scoped>
.control-panel {
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--color-background-mute);
  border-radius: 0.25rem;
  padding: 15px;
  user-select: none;
  flex-shrink: 0;
}

.control-panel-nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.active-title {
  background-color: var(--color-background-soft);
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
}

.active-title:hover {
  background-color: var(--color-background-mute);
}

.panel-title {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
}

.panel-title:hover {
  cursor: pointer;
}

.link {
  color: var(--color-tex);
}

@media only screen and (min-width: 3000px) {
  .control-panel {
    width: 15vw;
    height: 35vw;
    border: 0.1vw solid var(--color-background-mute);
    border-radius: 0.3vw;
    padding: 1vw;
  }

  .panel-title {
    gap: 0.5vw;
    padding: 0.2vw;
  }

  .material-symbols-outlined {
    font-size: 1vw;
  }
}

@media only screen and (max-width: 1120px) {
  .control-panel {
    width: 220px;
    height: 620px;
  }
}

@media only screen and (max-width: 890px) {
  .control-panel {
    width: 100%;
    height: 200px;
  }
}
</style>
