<template>
  <HeaderComponent />
  <RouterView />
</template>

<script>
  import HeaderComponent from './components/common/HeaderComponent.vue'

  export default {
    components: {
      HeaderComponent,
    }
  }
</script>

<style scoped>

</style>
