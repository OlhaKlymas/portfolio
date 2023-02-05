<template>
  <div class="main-layout" 
    :class="{'main-layout--active': !isOpen, 'main-layout--hero': isHero, 'main-layout--default': !isHero}"
    >
    <Navbar 
      v-model="isOpen"
      class="main-layout__navbar navbar"
      @click="isOpenFn"
      :isMain="this.$route.path == '/'"
    />
    <main class="main-layout__content">
      <MenuButton v-model="isOpen" @click="isOpen=!isOpen"/>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Navbar from "../components/Navbar"
import HeroPage from "../views/HeroPage";
import MenuButton from "../components/MenuButton";
export default {
  name: "MainLayout",
  data: ()=>({
    isOpen: true,
    breakpoint: 1024
  }),
  components:{MenuButton, HeroPage, Navbar},
  computed: {
    isHero() {
      return this.$route.path == '/'
    }
  },
  methods:{
    isOpenFn(){
      if(window.innerWidth < this.breakpoint){
        this.isOpen = !this.isOpen
      }
    }
  }
}
</script>

<style scoped>

</style>