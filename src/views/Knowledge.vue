<template>
  <section class="content">
    <Loader v-if="IS_LOADED"/>
    <Error v-else-if="IS_ERROR"/>
    <div v-else class="knowledge">
      <div class="knowledge__button-group">
        <button v-for="(val, key) in KNOWLEDGES.getFilterData" class="knowledge__button" :class="key === filterOption && 'knowledge__button--checked'" @click="filter(key)">{{key}}
        </button>
      </div>
      <isotope ref="cpt" class="knowledge__list" :item-selector="'knowledge__item'" :list="KNOWLEDGE_LIST" :options='KNOWLEDGES' @filter="filterOption=arguments[0]">
        <div v-for="(element, index) in KNOWLEDGE_LIST" :class="`knowledge__item knowledge__item--${element.category}`" :key="index">
          <h4>{{element.name}}</h4>
        </div>
      </isotope>
    </div>
  </section>
</template>

<script>
import isotope from 'vueisotope/dist/vue_isotope.min'
import Loader from '@/components/Loader'
import Error from '@/components/Error'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "Knowledge",
  data:()=>({
    selected: null,
    filterOption: "All"
  }),
  components: {isotope, Loader, Error},
  computed:{
    ...mapGetters([
      "IS_LOADED", "IS_ERROR", "KNOWLEDGE_LIST", "KNOWLEDGES"
    ])
  },
  mounted() {
    this.GET_KNOWLEDGE_LIST_FROM_API()
  },
  methods: {
    ...mapActions([
      "GET_KNOWLEDGE_LIST_FROM_API"
    ]),
    filter: function(key) {
      this.$refs.cpt.filter(key);
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/knowledgePage.scss';
</style>
