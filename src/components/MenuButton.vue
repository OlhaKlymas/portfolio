<template>
  <div class="menu">
    <div class="menu__wrap" :class="{'menu__wrap--active': !value}" @click.prevent="$emit('click')">
      <span class="menu__item"></span>
      <span class="menu__item"></span>
      <span class="menu__item"></span>
    </div>
    <div class="menu__section-title">{{this.$route.params.id || this.$route.name}}</div>
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