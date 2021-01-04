<template>
  <section class="loader-top">
    <Loader v-if="IS_LOADED"/>
    <Error v-else-if="IS_ERROR"/>
    <div v-else class="isotope">
      <div class="isotope__button-group">
        <button v-for="(val, key) in option.getFilterData" class="isotope__button" :class="[key===filterOption? 'is-checked' : '']" @click="filter(key)">{{key}}
        </button>
      </div>
      <isotope ref="cpt" class="isotope-wrap" :item-selector="'isotope-item'" :list="KNOWLEDGE_LIST" :options='option' @filter="filterOption=arguments[0]">
        <div v-for="(element, index) in KNOWLEDGE_LIST" :class='[element.category]'  :key="index">
          <h4 class="isotope-item__name">{{element.name}}</h4>
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
    filterOption: "Все",
    option: {
      getFilterData: {
        "Все": function () {
          return true;
        },
        "Основные языки": function (el) {
          return el.category === "lang";
        },
        "Шаблонизатор": function (el) {
          return el.category === "templates";
        },
        "Компилятор": function (el) {
          return el.category === "compiler";
        },
        "Диспетчер задач": function (el) {
          return el.category === "taskManagers";
        },
        "CRM": function (el) {
          return el.category === "crm";
        },
        "Среда разработки": function (el) {
          return el.category === "ide";
        },
        "Плагин JS": function (el) {
          return el.category === "plugin";
        },
        "Фраймворк JS": function (el) {
          return el.category === "framework";
        },
        "Препроцессоры CSS": function (el) {
          return el.category === "preprocessor";
        },
        "Система контроля версий": function (el) {
          return el.category === "control";
        },
        "База данных": function (el) {
          return el.category === "base";
        },
      }
    }
  }),
  components: {isotope, Loader, Error},
  computed:{
    ...mapGetters([
      "IS_LOADED", "IS_ERROR", "KNOWLEDGE_LIST"
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

<style scoped>

</style>