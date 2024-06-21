import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductView
    },
    {
      path: '/shoppingcar',
      name: 'shoppingcar',
      component: () => import('../views/ShoppingCar.vue')
    }
  ]
})

export default router
