<template>
  <div id="app">
    <MainLayout>
      <router-view/>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
export default {
  name: 'App',
  components: {MainLayout}
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
