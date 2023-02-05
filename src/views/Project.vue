<template>
  <section class="content">
    <Loader v-if="IS_LOADED"/>
    <Error v-else-if="IS_ERROR"/>
    <div v-else class="project">
      <div class="project__head">
        <h1 class="project__title">{{PROJECT.name}}</h1>
        <p class="project__subtitle">{{PROJECT.description}}</p>
        <hr class="project__divider divider">
      </div>
      <div class="project__wrap">
        <div class="project__description">
          <div class="project__text">{{PROJECT.text}}</div>
          <div class="project__image"><img :src="`../${PROJECT.img}`" :alt="PROJECT.name"></div>
        </div>
        <div class="project__button-group">
          <a :href="PROJECT.link" target="_blank" class="project__button btn btn--pink">Go to website</a>
          <router-link to="/portfolio" class="project__button btn">Portfolio</router-link>
        </div>
      </div>
      <div class="project__other">
        <router-link v-if="prevProject" class="project__other-btn project__other-btn--prev" :to="`/portfolio/${prevProject}`">
          <span class="project__other-text">Previous - </span>
          <span class="project__other-name">{{ prevProject }}</span>
        </router-link>
        <router-link v-if="nextProject" class="project__other-btn project__other-btn--next" :to="`/portfolio/${nextProject}`">
          <span class="project__other-text">Next - </span>
          <span class="project__other-name">{{ nextProject }}</span>
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
  name: "Project",
  components: {Loader, Error},
  computed:{
    ...mapGetters([
    "IS_LOADED", "IS_ERROR", "PROJECTS", "PROJECT"
    ]),
    currentProject() {
      return this.GET_PROJECT_FROM_API(this.$route.params.id)
    },
    currentProjectIndex() {
      this.currentProject
      return this.PROJECTS.findIndex(item => item.id === this.$route.params.id)
    },
    nextProject() {
      return this.PROJECTS[this.currentProjectIndex + 1]?.id
    },
    prevProject() {
      return this.PROJECTS[this.currentProjectIndex - 1]?.id     
    }
  },
  mounted() {
    this.GET_PROJECTS_FROM_API(),
    this.GET_PROJECT_FROM_API(this.$route.params.id)
  },
  methods: {
    ...mapActions([
      "GET_PROJECTS_FROM_API",
      "GET_PROJECT_FROM_API"
    ])
  }
}

</script>

<style lang="scss">
@import '@/assets/scss/pages/projectPage.scss';
</style>
