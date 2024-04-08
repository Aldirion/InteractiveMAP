<template>
  <HeaderComponent />
  <div class="app">
    <RouterView />
  </div>
  <FooterComponent />
</template>

<script setup lang="ts">
  import HeaderComponent from './components/common/HeaderComponent.vue';
  import FooterComponent from './components/common/FooterComponent.vue';
</script>

<style scoped>
  .app {
    padding: 6vh 10vw 0;
  }
</style>
