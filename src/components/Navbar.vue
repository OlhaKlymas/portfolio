<template>
  <nav  @click.prevent="$emit('click')">
    <div class="nav-wrapper">
      <router-link to="/"><div class="nav-photo"></div></router-link>
      <router-link v-for='link in links'
                   :key="link.url"
                   :to="link.url"
                   :exact="link.exact"
                   class="nav-wrapper__item" active-class="active">
                    {{link.title}}
      </router-link>
    </div>
  </nav>
</template>

<script>
import MenuButton from '@/components/MenuButton';
export default {
  name: "Navbar",
  data:() => ({
    links: [
      { title: 'Обо мне', url: '/about' },
      { title: 'Знания', url: '/knowledge' },
      { title: 'Портфолио', url: '/portfolio' },
    ],
  }),
  props: ['value'],
  components:{MenuButton}
}
</script>

<style scoped>

</style>