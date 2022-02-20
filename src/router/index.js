import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import createNewAccount from '@/components/createNewAccount.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  } ,

  {
    path: '/createNewAccount',
    name: 'newAccount',
    component: createNewAccount
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
