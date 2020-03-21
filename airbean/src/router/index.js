import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Menu from '../views/Menu.vue'
import Status from '../views/Status.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
   {
    path: '/status',
    name: 'Status',
    component: Status
  },

]

const router = new VueRouter({
  routes
})

export default router
