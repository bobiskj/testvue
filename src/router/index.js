import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AssortmentPage from '../components/AssortmentPage.vue'
import CartPage from '../components/CartPage.vue' // Импортируем компонент корзины

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/assortment',
    name: 'assortment',
    component: AssortmentPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router