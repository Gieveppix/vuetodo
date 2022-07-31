import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddItem from '../views/AddItem.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddItem',
    component: AddItem
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
