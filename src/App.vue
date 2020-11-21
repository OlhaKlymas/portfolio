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
@import "~materialize-css/dist/css/materialize.min.css";
@import 'assets/css/index.scss';
@import 'assets/css/media.scss';
</style>
