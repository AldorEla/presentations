import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PiniaView from '../views/PiniaView.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'AppLayout'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
      meta: {
        layout: 'AppLayout'
      }
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: PiniaView,
      meta: {
        layout: 'DefaultLayout'
      }
    }
  ]
})

export default router
