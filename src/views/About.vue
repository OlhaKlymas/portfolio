<template>
  <section class="content">
    <Loader v-if="IS_LOADED"/>
    <div v-else class="about">
      <div class="about__wrap">
        <div class="about__text">
          <h2 class="about__title">Olha Klymas</h2>
          <p>Engaged in development: {{ Math.floor((this.date - this.start) / (24 * 3600 * 365.25 * 1000)) }} years</p>
          <div class="about__photo">
            <img src="@/assets/img/myphoto.png" alt="Olha Klymas">
          </div>

          <div>
            <p>Calgary, Kyiv</p>
            <p>Email: <a href="mailto:olhaklymas@gmail.com" class="about__link">olhaklymas@gmail.com</a></p>
            <p>Account GitHub: <a href="https://github.com/OlhaKlymas" class="about__link" target="_blank">https://github.com/OlhaKlymas</a></p>
            <p>Link to Portfolio code: <a href="https://github.com/OlhaKlymas/portfolio" class="about__link" target="_blank">https://github.com/OlhaKlymas/portfolio</a></p>
            <p class="about__wage">Desired salary:
              <span class="about__wage-wrap" :class="amount && 'about__wage--amount'"> 
                <span>{{amount || wage}}</span>
                <span v-if="CURRENCY && Object.keys(CURRENCY).length !== 0" class="about__select-wrap">
                  <select class="about__select" @change="onChange($event)">
                    <option
                        class="about__select-option"
                        v-for="cur of currencies"
                        :key="cur"
                        :value="cur"
                    >{{ cur }}
                    </option>
                  </select>
                </span>
                <span v-else>{{currencies[0]}}</span>
                <span>per hour</span>
              </span>
            </p>
            <a href="../OlhaKlymasCV.pdf" target="_blank" class="about__btn btn btn--pink">
              <i class="fas fa-download"></i>
              Download CV
            </a>
          </div>
        </div>
        <div class="about__addition">
          <ul class="about__description">
            <li v-for="(text, key) in ABOUT" :key="key">{{ text }}</li>
          </ul>
          <p>More about me you can find in <router-link to="/knowledge" class="about__link-text">KNOWLEDGE</router-link> and about my works in <router-link to="/portfolio" class="about__link-text">PORTFOLIO</router-link>.</p>
        </div>
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
    start: new Date(2018, 2, 1),
    currencies: ['USD', 'CAD', 'EUR'],
    wage: 25,
    amount: null
  }),
  components:{Loader, Error},
  computed:{
    ...mapGetters([
      "IS_LOADED", "CURRENCY", "ABOUT"
    ])
  },
  mounted () {
    this.GET_CURRENCY_FROM_API(),
    this.GET_ABOUT_FROM_API()
  },
  methods:{
    ...mapActions([
      "GET_CURRENCY_FROM_API",
      "GET_ABOUT_FROM_API"
    ]),
    onChange(event){
      return this.amount = (this.CURRENCY.rates[event.target.value] * this.wage).toFixed(0)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/aboutPage.scss';
</style>
