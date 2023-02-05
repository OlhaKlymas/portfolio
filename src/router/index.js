import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroPage from "../views/HeroPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HeroPage
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/knowledge',
    name: 'Knowledge',
    component: () => import('../views/Knowledge.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/portfolio/:id',
    name: 'Project',
    component: () => import('../views/Project.vue')
  },
  {
    path: '*',
    name: 'ErrorPage',
    component: () => import('../views/ErrorPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
