<template>
  <div class="menu-wrap">
    <div class="menu" :class="{full: value}" @click.prevent="$emit('click')">
      <span class="menu__item"></span>
      <span class="menu__item"></span>
      <span class="menu__item"></span>
    </div>
    <div class="section-head">
      <h3>{{this.$route.name}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuButton",
  props: ['value']
}
</script>

<style scoped>

</style>