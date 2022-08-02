import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import('../views/CounterView.vue')
  },
  {
    path: '/countries',
    name: 'Countries',
    component: () => import('../views/CountriesView.vue')
  },
  {
    path: '/countries/:id',
    name: 'Country',
    props: true,
    component: () => import('../views/CountryView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
