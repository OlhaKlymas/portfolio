<template>
  <section class="main-screen">
    <Loader v-if="loading"/>
    <div v-else class="main-screen__wrap">
        <div class="main-screen__top">
          <div class="main-screen__position">
            <h1>Front End Developer</h1>
          </div>
        </div>
        <div class="main-screen__bottom">
          <div class="main-screen__description">
            <div class="main-screen__name">
              <p>Olh<span class="main-screen__mark-color">a</span></p>
              <p class="main-screen__family">Kl<span class="main-screen__mark-remove-color">y</span>mas</p>
            </div>
            <div class="main-screen__head">
              <p class="main-screen__mark-color">P</p>
              <p class="main-screen__mark-color">o</p>
              <p class="main-screen__mark-color">r</p>
              <p class="main-screen__mark-color">t</p>
              <p class="main-screen__mark-remove-color">f</p>
              <p class="main-screen__mark-remove-color">o</p>
              <p class="main-screen__mark-remove-color">l</p>
              <p class="main-screen__mark-remove-color">i</p>
              <p class="main-screen__mark-remove-color">o</p>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import Loader from "@/components/Loader";

export default {
  name: "MainScreen",
  data:()=>({
      loading: true
  }),
  mounted () {
    setTimeout(()=>this.loading = false, 500)
  },
  components:{
    Loader
  }
}
</script>

<style scoped>

</style>