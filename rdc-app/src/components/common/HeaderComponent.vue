<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStoreAuthorization } from '@/store/authorization';
import type { UserData } from '@/interfaces/user';

const store = useStoreAuthorization();

let currentThemeIcon = ref('light_mode');
let currentTheme = ref('');
let showUserPanel = ref(false);
let user = ref<UserData | null>(null);

onMounted(async () => {
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
  user.value = await store.getUserData();
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
    <nav class="wrapper">
      <RouterLink to="/map" v-if="store.isAuthorized">Карта</RouterLink>
      <span class="material-symbols-outlined user" v-if="store.isAuthorized" @click="showUserPanel = !showUserPanel"
        >person</span
      >
    </nav>
  </header>

  <div class="pop-up-account" v-if="showUserPanel">
    <div class="user-acc">
      <span class="material-symbols-outlined img">account_circle</span>

      <div class="user-data">
        <div class="name">{{ user?.lastname }} {{ user?.firstname }} {{ user?.patronymic }}</div>
        <div class="email">{{ user?.email }}</div>
      </div>
    </div>

    <div class="user-nav">
      <RouterLink to="/personal-account" @click="changeTheme()" class="account" v-if="store.isAuthorized">
        <span class="material-symbols-outlined">person</span>
        <span>Личный кабинет</span>
      </RouterLink>

      <span class="theme" @click="changeTheme()">
        <span class="material-symbols-outlined">{{ currentThemeIcon }}</span>
        Сменить тему
      </span>

      <RouterLink to="/" class="logout" @click="logout" v-if="store.isAuthorized">
        <span class="material-symbols-outlined">logout</span>
        <span>Выйти</span>
      </RouterLink>
    </div>
  </div>
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

.theme:hover,
.user:hover {
  cursor: pointer;
}

.user-acc {
  display: flex;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-background-mute);
}

.user-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.img {
  font-size: 55px;
}

nav a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: color 0.2s linear;
  color: var(--color-text);
}

.pop-up-account {
  width: 250px;
  height: 200px;
  position: absolute;
  top: 50px;
  right: 10vw;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-background-mute);
  padding: 10px;
  border-radius: 5px;
}

.name {
  font-size: 0.8rem;
}

.email {
  font-size: 0.7rem;
  color: var(--vt-orage-light);
}

.user-data {
  width: 100px;
}

nav a.router-link-exact-active {
  color: rgb(70, 70, 182);
}

nav a:hover {
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

.logout,
.account,
.theme {
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s linear;
  color: var(--color-text);
}

.logout:hover,
.account:hover,
.theme:hover {
  color: var(--vt-orage-light);
}

@media only screen and (max-width: 1130px) {
  header {
    height: 40px;
    padding: 0 10vw;
  }
}

@media only screen and (max-width: 520px) {
  .pop-up-account {
    right: 5vw;
  }
}
</style>
