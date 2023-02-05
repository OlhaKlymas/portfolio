<template>
  <section class="content">
    <Loader v-if="IS_LOADED"/>
    <Error v-else-if="IS_ERROR"/>
    <div v-else class="portfolio">
      <div class="portfolio__item" v-for="project in PROJECTS" >
        <router-link :to="`/portfolio/${project.id}`" class="portfolio__link"
          :style="{'background-image':`url('${project.img}')`}"
          >
          <span class="portfolio__item-description">
            <h4 class="portfolio__item-title">{{project.name}}</h4>
            <hr class="portfolio__divider divider">
            <span class="portfolio__item-text">{{project.description}}</span>
          </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Loader from '@/components/Loader'
import Error from '@/components/Error'
export default {
  name: "Portfolio",
  components: {Loader, Error},
  computed:{
    ...mapGetters([
    "IS_LOADED", "IS_ERROR", "PROJECTS"
    ])
  },
  mounted() {
    this.GET_PROJECTS_FROM_API()
    this.loading = false
  },
  methods: {
    ...mapActions([
      "GET_PROJECTS_FROM_API"
    ])
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/portfolioPage.scss';
</style>
