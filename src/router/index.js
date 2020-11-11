import Vue from 'vue'
import VueRouter from 'vue-router'
import center from '@/views/Center'
import home from '@/views/Home'
import room from '@/views/Room'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/room',
    component: room
  },
  {
    path: '/center',
    component: center
  },
  {
    path: '*',
    redirect: '/home' // 2. 重定向
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
