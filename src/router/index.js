import Vue from 'vue'
import Router from 'vue-router'

//首页
import home from '@/views/home/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})


