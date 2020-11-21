<template>
  <div class="main-layout__wrapper">
    <Navbar v-model="isOpen" :class="{show: !isOpen}" @click="isOpenFn"/>
    <main :class="{full:isOpen}">
      <MenuButton v-model="isOpen" @click="isOpen=!isOpen"/>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Navbar from "../components/Navbar"
import MainScreen from "../views/MainScreen";
import MenuButton from "../components/MenuButton";
export default {
  name: "MainLayout",
  data: ()=>({
    isOpen: true
  }),
  components:{MenuButton, MainScreen, Navbar},
  methods:{
    isOpenFn(){
      if(window.innerWidth < 666){
        this.isOpen = !this.isOpen
      }
    }
  }
}
</script>

<style scoped>

</style>