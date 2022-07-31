import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddItem from '../views/AddItem.vue'
import EditItem from '../views/EditItem.vue'

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
  },
  {
    path: '/list/:id',
    name: 'EditItem',
    component: EditItem,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
