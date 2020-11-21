<template>
  <div class="project__wrap">
    <div class="project__item">
      <div class="project__item-description">
        <h4 class="project__item-head">{{project_data.name}}</h4>
        <p class="project__item-sub-head">{{project_data.description}}</p>
        <hr/>
        <div class="project__item-wrap">
          <div class="project__item-text">{{project_data.text}}</div>
          <div class="project__image"><img :src="project_data.img" alt=""></div>
        </div>
        <div class="project__item-link">
          <a :href="project_data.link" target="_blank">Перейти на сайт</a>
          <a class="portfolio-url" @click="selectProject">Назад к портфолио</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    project_data:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    selectProject(){
      this.$emit('selectProject', [])
    }
  }
}
</script>

<style scoped>

</style>