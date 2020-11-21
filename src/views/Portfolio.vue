<template>
  <div class="portfolio">
    <div class="portfolio__item-wrap" v-for="project in projects_data" >
      <div class="portfolio__item"
           :style="{'background-image':`url('${project.img}')`}"
           @click="selectProject(project)"
           >
        <div class="portfolio__item-description">
          <h4 class="portfolio__item-head">{{project.name}}</h4>
          <hr/>
          <p class="portfolio__item-text">{{project.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  props: {
    projects_data:{
      type: Array,
      default(){
          return {}
      }
    }
  },
  methods: {
    selectProject(project){
     this.$emit('selectProject', project)
    }
  }
}
</script>

<style scoped>

</style>