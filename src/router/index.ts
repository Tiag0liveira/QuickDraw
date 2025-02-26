import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/size',
      name: 'size',

      component: () => import('../views/SizeView.vue'),
    },
    {
      path: '/teams',
      name: 'teams',

      component: () => import('../views/TeamsView.vue'),
    },
    {
      path: '/league',
      name: 'league',

      component: () => import('../views/LeagueView.vue'),
    },
    {
      path: '/name',
      name: 'name',

      component: () => import('../views/NameView.vue'),
    },
    {
      path: '/bracket',
      name: 'bracket',

      component: () => import('../views/BracketView.vue'),
    },
    {
      path: '/login',
      name: 'login',

      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
