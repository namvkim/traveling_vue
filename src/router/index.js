import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Details from '../views/Details.vue'
import NotFound from '../views/NotFound.vue'
import Function from '../views/Function.vue'
import SignUpForm from '../views/SignUpForm.vue'
import Schedule from '../views/Schedule.vue'
import Friend from '../views/Friend.vue'
import Message from '../views/Message.vue'
import Notificate from '../views/Notificate.vue'
import Personal from '../views/Personal.vue'
import Search from '../views/Search.vue'
import Multitasking from '../views/Multitasking.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/multitasking',
    name: 'Multitasking',
    component: Multitasking
  },
  {
    path: '/friend',
    name: 'Friend',
    component: Friend
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/notificate',
    name: 'Notificate',
    component: Notificate
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
  {
    path: '/function',
    name: 'Function',
    component: Function,
  },
  {
    path: '/signup',
    name: 'SignUpForm',
    component: SignUpForm,
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
