import Vue from 'vue'
import VueRouter from 'vue-router'
import MainScreen from "../views/MainScreen";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainScreen
  },
  {
    path: '/about',
    name: 'Обо мне',
    component: () => import('../views/About.vue')
  },
  {
    path: '/knowledge',
    name: 'Знания',
    component: () => import('../views/Knowledge.vue')
  },
  {
    path: '/portfolio',
    name: 'Портфолио',
    component: () => import('../layouts/PortfolioLayout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
