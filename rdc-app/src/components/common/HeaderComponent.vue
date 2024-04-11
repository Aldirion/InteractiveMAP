<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import LogoSVG from '@/assets/logo-min.svg';

  let currentThemeIcon = ref("light_mode");
  let currentTheme = ref('');

  onMounted(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      currentTheme.value = localTheme === "dark" ? "dark" : "light";
      currentThemeIcon.value = localTheme === "dark" ? "dark_mode" : "light_mode";
    } else {
      const prefersDarkColorScheme = window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
      currentTheme.value = prefersDarkColorScheme ? "dark" : "light";
      currentThemeIcon.value = prefersDarkColorScheme ? "dark_mode" : "light_mode";
    }
    setTheme();
  });

  function changeTheme() {
    if (currentThemeIcon.value === "dark_mode") {
      currentTheme.value = "light";
      currentThemeIcon.value = "light_mode";
    } else {
      currentTheme.value = "dark";
      currentThemeIcon.value = "dark_mode";
    }
    setTheme();
  }

  function setTheme() {
    let app = document.querySelector('#app');
    app?.setAttribute('data-theme', currentTheme.value)
    localStorage.setItem('theme', currentTheme.value);
  }
</script>

<template>
  <header>
      <LogoSVG />
      <nav class="wrapper">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/map">Карта</RouterLink>
      </nav>
      <div class="theme-toggle">
        <span class="material-symbols-outlined">group</span>
        <span @click="changeTheme()" class="material-symbols-outlined">{{ currentThemeIcon }}</span>
      </div>
  </header>
</template>

<style lang="css" scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    height: 5vh;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 10vw;
    z-index: 20;
    background-color: var(--color-background-soft);
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 18px;
  }

  nav a {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 2vw;
    letter-spacing: 1.4px;
    transition: background-color .4s linear;
    color: var(--color-text);
  }

  .theme-toggle{
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .theme-toggle:hover{
    cursor: pointer;
  }

  nav a.router-link-exact-active {
    color: rgb(70, 70, 182);
  }

  nav a:hover {
    color: rgb(94, 94, 192);
    background-color: rgba(149, 145, 253, 0.2);
    transition: background-color .4s linear;
  }

  @media only screen and (max-width: 1130px){
    
  }
</style>