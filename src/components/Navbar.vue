<template>
  <nav  @click.prevent="$emit('click')">
    <div class="navbar__wrapper">
      <router-link to="/">
        <div class="navbar__photo"
          :class="isMain && 'navbar__photo--active'"
        ></div>
      </router-link>
      <router-link v-for='link in links'
                   :key="link.url"
                   :to="link.url"
                   :exact="link.exact"
                   class="navbar__item" active-class="navbar__item--active">
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
      { title: 'About', url: '/about' },
      { title: 'Knowledge', url: '/knowledge' },
      { title: 'Portfolio', url: '/portfolio' },
    ],
  }),
  props: ['value', 'isMain'],
  components:{MenuButton}
}
</script>

<style scoped>

</style>