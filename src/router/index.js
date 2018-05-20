import Vue from 'vue'
import Router from 'vue-router'

//首页
import home from '@/views/home/home'

//仪表台
import dashboard from '@/views/home/dashboard'

// 基础数据
import baseData from '@/views/baseData/baseData'
import exRate from '@/views/baseData/exRate'
import measureData from '@/views/baseData/measureData'
import unitTrans from '@/views/baseData/unitTrans'
import holidayManage from '@/views/baseData/holidayManage'

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
      component: home,
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: dashboard
        },
        {
          path: '/baseData',
          name: 'baseData',
          component: baseData,
          children: [
            {
              path: '/exRate',
              name: 'exRate',
              component: exRate
            },
            {
              path: '/measureData',
              name: 'measureData',
              component: measureData
            },
            {
              path: '/unitTrans',
              name: 'unitTrans',
              component: unitTrans
            },
            {
              path: '/holidayManage',
              name: 'holidayManage',
              component: holidayManage
            }
          ]
        }
      ]
    }
  ]
})


