<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<script setup lang="ts">
  import HeaderComponent from './components/common/HeaderComponent.vue';
  import FooterComponent from './components/common/FooterComponent.vue';
</script>

<style scoped></style>
