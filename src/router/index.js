import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'
import HelloWorld from '../views/HelloWorld'
import PersonalPage from '../views/PersonalPage'
import FoodListPage from '../views/FoodListPage'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/hello',
    name: 'helloworld',
    component: HelloWorld
  },
  {
    path:'/personal',
    name:'personal',
    component:PersonalPage
  },
  {
    path:'/fooddata',
    name:'fooddata',
    component:FoodListPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
