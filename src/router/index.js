import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/signup',
    name: 'SignUpForm',
    component: () => import(/* webpackChunkName:"SignUpForm" */"../views/SignUpForm.vue"),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName:"Login" */"../views/Login.vue"),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName:"Home" */"../views/Home.vue"),
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import(/* webpackChunkName:"Personal" */"../views/Personal.vue"),
  },
  {
    path: '/personalfriend',
    name: 'PersonalFriend',
    component: () => import(/* webpackChunkName:"PersonalFriend" */"../views/PersonalFriend.vue"),
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import(/* webpackChunkName:"Schedule" */"../views/Schedule.vue"),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName:"Search" */"../views/Search.vue"),
  },
  {
    path: '/multitasking',
    name: 'Multitasking',
    component: () => import(/* webpackChunkName:"Multitasking" */"../views/Multitasking.vue"),
  },
  {
    path: '/friend',
    name: 'Friend',
    component: () => import(/* webpackChunkName:"Friend" */"../views/Friend.vue"),
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName:"Message" */"../views/Message.vue"),
  },
  {
    path: '/notificate',
    name: 'Notificate',
    component: () => import(/* webpackChunkName:"Notificate" */"../views/Notificate.vue"),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName:"About" */"../views/About.vue"),
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import(/* webpackChunkName:"Details" */"../views/Details.vue"),
    props: true
  },
  {
    path: '/function',
    name: 'Function',
    component: () => import(/* webpackChunkName:"Function" */"../views/Function.vue"),
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
    component: () => import(/* webpackChunkName:"NotFound" */"../views/NotFound.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // chuyển đến trang login nếu chưa được login
  const publicPages = ['/login', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  const accessToken = localStorage.getItem('accessToken');
  const tokenType = localStorage.getItem('tokenType');

  if (authRequired && (!accessToken || !tokenType)) {
    return next('/login');
  }

  next();
})

export default router
