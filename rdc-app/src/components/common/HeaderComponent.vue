<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStoreAuthorization } from '@/store/authorization';

const store = useStoreAuthorization();

let currentThemeIcon = ref('light_mode');
let currentTheme = ref('');
let isOpenHeader = ref(false);

onMounted(() => {
  const localTheme = localStorage.getItem('theme');
  if (localTheme) {
    currentTheme.value = localTheme === 'dark' ? 'dark' : 'light';
    currentThemeIcon.value = localTheme === 'dark' ? 'dark_mode' : 'light_mode';
  } else {
    const prefersDarkColorScheme =
      window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    currentTheme.value = prefersDarkColorScheme ? 'dark' : 'light';
    currentThemeIcon.value = prefersDarkColorScheme ? 'dark_mode' : 'light_mode';
  }
  setTheme();
});

function changeTheme() {
  if (currentThemeIcon.value === 'dark_mode') {
    currentTheme.value = 'light';
    currentThemeIcon.value = 'light_mode';
  } else {
    currentTheme.value = 'dark';
    currentThemeIcon.value = 'dark_mode';
  }
  setTheme();
}

function setTheme() {
  let app = document.querySelector('#app');
  app?.setAttribute('data-theme', currentTheme.value);
  localStorage.setItem('theme', currentTheme.value);
}

function toggleHeader() {
  isOpenHeader.value = !isOpenHeader.value;
}

function logout() {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
}
</script>

<template>
  <header>
    <div class="img-container">
      <img class="logo" src="../../assets/logo_purple.png" alt="logotype" />
    </div>
    <nav class="wrapper" :class="{ 'wrapper-phone-open': isOpenHeader, 'wrapper-phone-close': !isOpenHeader }">
      <RouterLink to="/map" v-if="store.isAuthorized">Карта</RouterLink>
      <RouterLink to="/personal-account" class="account" v-if="store.isAuthorized">
        <span class="material-symbols-outlined">person</span>
        <span>Кабинет</span>
      </RouterLink>
      <RouterLink to="/" class="logout" @click="logout" v-if="store.isAuthorized">
        <span class="material-symbols-outlined">logout</span>
        <span>Выйти</span>
      </RouterLink>
    </nav>
    <div class="theme-toggle">
      <span @click="changeTheme()" class="material-symbols-outlined">{{ currentThemeIcon }}</span>
      <span class="material-symbols-outlined menu" @click="toggleHeader">{{ !isOpenHeader ? 'menu' : 'close' }}</span>
    </div>
  </header>
  <div class="pop-up-back" :style="{ display: isOpenHeader ? 'block' : 'none' }"></div>
</template>

<style lang="css" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 0 10vw;
  z-index: 20;
  background-color: var(--color-background-soft);
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 2vw;
  width: 100%;
  font-size: 18px;
}

nav a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: color 0.2s linear;
  color: var(--color-text);
}

.theme-toggle {
  display: flex;
  align-items: center;
  gap: 30px;
}

.theme-toggle:hover {
  cursor: pointer;
}

nav a.router-link-exact-active {
  color: rgb(70, 70, 182);
}

nav a:hover,
.logout:hover {
  color: rgb(94, 94, 192);
}

.menu {
  display: none;
}

.img-container {
  height: 60%;
  margin: auto 0;
}

.logo {
  height: 100%;
}

.pop-up-back {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  right: 0px;
  z-index: 19;
  background-color: rgba(0, 0, 0, 0.507);
  transition: display 0.3s linear;
}

.wrapper-phone-open {
  right: 0px;
}

.wrapper-phone-close {
  right: -60%;
}

.logout,
.account {
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s linear;
}

@media only screen and (max-width: 1130px) {
  header {
    height: 40px;
    justify-content: space-between;
    padding: 0 10vw;
  }

  .wrapper {
    position: fixed;
    flex-direction: column;
    top: 40px;
    width: 60%;
    height: 100%;
    justify-content: center;
    background-color: var(--color-background-soft);
    transition: right 0.2s linear;
  }

  nav a {
    justify-content: center;
    width: 100%;
    height: 50px;
  }

  .menu {
    display: block;
  }
}
</style>
