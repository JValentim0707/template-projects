// Composables
import { createRouter, createWebHistory } from 'vue-router'

import HomeComponent from '@/views/Home.vue'
import EeveeComponent from '@/views/Eevee.vue'
import PsyduckComponent from '@/views/Psyduck.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/eevee',
    name: 'Eevee',
    component: EeveeComponent,
  },
  {
    path: '/psyduck',
    name: 'Psyduck',
    component: PsyduckComponent,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
