<template>
  <HeaderComponent />
  <RouterView />
</template>

<script>
  import { defineComponent } from 'vue';
  import HeaderComponent from './components/common/HeaderComponent.vue'

  export default defineComponent({
    components: {
      HeaderComponent,
    }
  })
</script>

<style scoped>

</style>
