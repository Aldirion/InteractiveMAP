<template>
  <HeaderComponent />
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
  import HeaderComponent from './components/common/HeaderComponent.vue';
</script>

<style scoped>
	.container {
    width: 100vw;
    padding: 6vh 10vw 0;
	}
</style>
