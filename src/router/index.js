import Vue from 'vue'
import VueRouter from 'vue-router'
import center from '@/views/Center'
import home from '@/views/Home'
import room from '@/views/Room'
import hot from '@/views/Detail/Hot'
import game from '@/views/Detail/Game'

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
  },
  {
    path: '/hot/:myid', // 6-动态路由
    name: 'hot',
    component: hot
  },
  {
    path: '/game/:myid', // 6-动态路由
    name: 'game',
    component: game
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
