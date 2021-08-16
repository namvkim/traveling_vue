import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Details from '../views/Details.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
    props: true
  },

  //redirect
  {
    path: '/redirect',
    redirect: '/about'
  },
  //catchAll 404
  {
    path: '/:catchAll(.*)',
    name: "NotFound",
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
