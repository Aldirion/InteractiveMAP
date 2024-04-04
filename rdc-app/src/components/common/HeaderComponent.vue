<script setup lang="ts">
  import { ref } from 'vue';

  let currentTheme = ref("dark_mode");

  function changeTheme() {
    currentTheme.value = currentTheme.value === "dark_mode" ? "light_mode" : "dark_mode";
  }
</script>

<template>
  <header>
      <nav class="wrapper">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/map">Карта</RouterLink>
      </nav>
      <a class="theme-toggle">
          <span @click="changeTheme()" class="material-symbols-outlined">{{ currentTheme }}</span>
      </a>
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
    background-color: var(--color-background);
  }

  .wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 18px;
  }

  nav a {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 2vw;
    border-left: 2px solid var(--color-border);
    transition: background-color .4s linear;
    color: rgb(183, 183, 185);
  }

  nav a:first-of-type {
    border: 0;
  }

  .theme-toggle{
    border-color: transparent;
    display: flex;
    align-items: center;
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
</style>