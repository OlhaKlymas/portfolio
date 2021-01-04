<template>
  <section class="loader">
    <Loader v-if="IS_LOADED"/>
    <Error v-else-if="IS_ERROR"/>
    <div v-else class="about">
      <div class="about__description">
        <div class="about__text">
          <div class="about__info">
            <h2>Ольга Климась</h2>
            <p>Возраст: {{ Math.floor((this.date - this.birth) / (24 * 3600 * 365.25 * 1000)) }} лет</p>
            <p>Занимаюсь разработкой: более {{ Math.floor((this.date - this.start) / (24 * 3600 * 365.25 * 1000)) }} лет</p>
            <p>г.Киев</p>
            <p>Желаемая ЗП:
              <span> от {{amount || wage}}
                <select class="browser-default" @change="onChange($event)">
                  <option
                      v-for="cur of currencies"
                      :key="cur"
                      :value="cur"
                  >{{ cur }}
                  </option>
                </select>
              </span>
            </p>
          </div>
          <p class="about__text-center">Привет!</p>
          <p>Я занимаюсь Frontend-разработкой с 2017 года. Бo&#x301;льшую часть этого времени я работаю на фрилансе, но также был опыт работы в команде большой web-студии.</p>
          <p>За это время мной реализовано несколько интересных проектов разных уровней сложностей - от простого одностраничного сайта до интернет-магазина.</p>
          <p>На сегодняшний день я изучаю Vue.js. Это портфолио также реализовано с помошью этого фреймворка. Ознакомиться его с кодом можно в <a href="https://github.com/OlhaKlymas/portfolio">репозитории</a>.</p>
          <p>Больше о моих знаниях можно узнать в разделе <router-link to="/knowledge">ЗНАНИЯ</router-link>, а с моими работами - в разделе <router-link to="/portfolio">ПОРТФОЛИО</router-link>.</p>
        </div>
      </div>
      <div class="about__photo">
        <img src="@/assets/img/myphoto.png" alt="Olha Klymas">
        <a href="../OlhaKlymasCV.pdf" target="_blank" class="download-cv">
          <i class="fas fa-download"></i>
          Распечатать CV
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Loader from '@/components/Loader'
import Error from '@/components/Error'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "About",
  data:() => ({
    date: new Date(),
    birth: new Date(1991,9, 27),
    start: new Date(2017, 6, 1),
    currencies: ['EUR', 'USD', 'UAH'],
    wage: 500,
    amount: null
  }),
  components:{
    Loader, Error
  },
  computed:{
    ...mapGetters([
      "IS_LOADED", "IS_ERROR", "CURRENCY"
    ])
  },
  mounted () {
    this.GET_CURRENCY_FROM_API()
  },
  methods:{
    ...mapActions([
      "GET_CURRENCY_FROM_API"
    ]),
    onChange(event){
      return this.amount = (this.CURRENCY.rates[event.target.value] * this.wage).toFixed(0)
    }
  }
}
</script>

<style scoped>

</style>