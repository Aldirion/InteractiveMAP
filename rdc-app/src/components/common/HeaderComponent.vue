<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStoreAuthorization } from '@/store/authorization';

const store = useStoreAuthorization();

let currentThemeIcon = ref('light_mode');
let currentTheme = ref('');
let showUserPanel = ref(false);

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
    <div class="logo-container">
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
      <div class="img-container">
        <img class="user-img" :src="store.imgPath" alt="user photo" />
      </div>

      <div class="user-data">
        <div class="name">
          {{ store.userData?.lastname }} {{ store.userData?.firstname }} {{ store.userData?.patronymic }}
        </div>
        <div class="email">{{ store.userData?.email }}</div>
      </div>
    </div>

    <div class="user-nav">
      <RouterLink to="/personal-account" class="account" v-if="store.isAuthorized">
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
  <div v-if="showUserPanel" class="pop-up-back" @click="showUserPanel = false"></div>
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
  gap: 20px;
  margin-top: 10px;
}

nav a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: color 0.2s linear;
  color: var(--color-text);
}

.img-container {
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
}

.logo-container {
  width: 40px;
  height: 40px;
  margin: auto 0;
}

.user-img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  object-position: center;
}

.pop-up-account {
  width: 250px;
  height: 230px;
  position: fixed;
  top: 50px;
  right: 10vw;
  z-index: 22;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-background-mute);
  padding: 10px;
  border-radius: 5px;
}

.pop-up-back {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 21;
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
  color: var(--vt-c-purple);
}

nav a:hover {
  color: var(--vt-c-purple);
}

.logo {
  width: 40px;
  height: 40px;
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
  color: var(--vt-c-purple);
}

@media only screen and (max-width: 1130px) {
  header {
    height: 40px;
    padding: 0 10vw;
  }

  .logo-container {
    width: 30px;
    height: 30px;
  }

  .logo {
    width: 30px;
    height: 30px;
  }
}

@media only screen and (max-width: 520px) {
  .pop-up-account {
    right: 5vw;
  }
}

@media only screen and (min-width: 3000px) {
  header {
    height: 4vh;
    gap: 30px;
  }

  nav a,
  .user {
    font-size: 1.2vw;
  }

  .pop-up-account {
    width: 15vw;
    height: 17vw;
    top: 4vh;
    padding: 1vw;
    border: 0.2vw solid var(--color-background-mute);
    border-radius: 0.3vw;
  }

  .user-acc {
    gap: 0.5vw;
    padding-bottom: 1vw;
  }

  .user-nav .material-symbols-outlined {
    font-size: 1.5vw;
  }

  .user-nav {
    gap: 1.5vw;
    margin-top: 1vw;
    font-size: 1.2vw;
  }

  .user-data {
    width: 8.5vw;
  }

  .name {
    font-size: 0.9vw;
  }

  .email {
    font-size: 0.7vw;
  }

  .logout,
  .account,
  .theme {
    gap: 0.5vw;
  }

  .img-container[data-v-c7b76637] {
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
  }
}
</style>
