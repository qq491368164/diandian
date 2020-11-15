import Vue from 'vue'
import VueRouter from 'vue-router'
import center from '@/views/Center'
import home from '@/views/Home'
import room from '@/views/Room'
import hot from '@/views/Detail/Hot'
import game from '@/views/Detail/Game'
import fuwu from '@/views/Detail/Hot/fuwu'
import dongtai from '@/views/Detail/Hot/dongtai'

import login from '@/views/Login'
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
    component: hot,
    children: [
      {
        path: 'fuwu',
        name: 'fuwu',
        component: fuwu
      },
      {
        path: 'dongtai',
        name: 'dongtai',
        component: dongtai
      },
      {
        path: '/hot/:myid',
        redirect: '/hot/:myid/fuwu' // 重定向
      }
    ]
  },
  {
    path: '/center',
    component: center
  },
  {
    path: '/login',
    component: login
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

router.beforeEach((to, from, next) => {
  // console.log(to)

  var permission = ['/order', '/card', '/money', '/center']

  if (permission.includes(to.path)) {
    // 是否已经登录
    // console.log("检查")
    if (localStorage.getItem('token')) {
      next()
    } else {
      // 重定向到 login
      next('/login')
    }
  } else {
    next()
  }
})

export default router
