<template>
  <section class="loader-top">
    <Loader v-if="loading"/>
    <div v-else class="portfolio__wrapper">
      <Project
          v-if="[...PROJECT].length"
          :project_data="PROJECT"
          @selectProject="selectProject"
      />
      <Portfolio
          v-else
          :project_data="PROJECT"
          :projects_data="PROJECTS"
          @selectProject="selectProject"
      />
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Portfolio from "../views/Portfolio";
import Project from "../views/Project";
export default {
  name: "PortfolioLayout",
  data: ()=>({
    loading: true,
  }),
  components: {Project, Portfolio},
  computed:{
    ...mapGetters([
      "PROJECTS", "PROJECT"
    ])
  },
  mounted() {
    this.GET_PROJECTS_FROM_API()
    setTimeout(()=>this.loading = false, 500)
  },
  methods: {
    ...mapActions([
      "GET_PROJECTS_FROM_API", "GET_PROJECT"
    ]),
    selectProject(data){
      this.GET_PROJECT(data)
    }
  },
  beforeDestroy() {
    this.selectProject([])
  }
}
</script>

<style scoped>

</style>