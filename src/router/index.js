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
import codeType from '@/views/baseData/codeType'
import codeDef from '@/views/baseData/codeDef'
import supplyInfo from '@/views/baseData/supplyInfo'
import codeRule from '@/views/baseData/codeRule'
import businessParameter from '@/views/baseData/businessParameter'
import businessRule from '@/views/baseData/businessRule'

import organizationalTree from '@/views/baseData/organizationalTree'
import personnelMaintenanceTree from '@/views/baseData/personnelMaintenanceTree'
import workCenter from '@/views/baseData/workCenter'
import equipMent from '@/views/baseData/equipMent'
import wareHouse from '@/views/baseData/wareHouse'
import location from '@/views/baseData/location'

import materialInfo from '@/views/baseData/materialInfo'
import productModel from '@/views/baseData/productModel'
import productStructure from '@/views/baseData/productStructure'
import processData from '@/views/baseData/processData'
import processRoute from '@/views/baseData/processRoute'

//productPlan
import productPlan from '@/views/productPlan/productPlan'

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
            },
            {
              path: '/codeType',
              name: 'codeType',
              component: codeType
            },
            {
              path: '/codeDef',
              name: 'codeDef',
              component: codeDef
            },
            {
              path: '/supplyInfo',
              name: 'supplyInfo',
              component: supplyInfo
            },
            {
              path: '/codeRule',
              name: 'codeRule',
              component: codeRule
            },
            {
              path: '/businessParameter',
              name: 'businessParameter',
              component: businessParameter
            },
            {
              path: '/businessRule',
              name: 'businessRule',
              component: businessRule
            },
            {
              path: '/organizationalTree',
              name: 'organizationalTree',
              component: organizationalTree
            },
            {
              path: '/personnelMaintenanceTree',
              name: 'personnelMaintenanceTree',
              component: personnelMaintenanceTree
            },
            {
              path: '/workCenter',
              name: 'workCenter',
              component: workCenter
            },
            {
              path: '/equipMent',
              name: 'equipMent',
              component: equipMent
            },
            {
              path: '/wareHouse',
              name: 'wareHouse',
              component: wareHouse
            },
            {
              path: '/location',
              name: 'location',
              component: location
            },
            {
              path: '/materialInfo',
              name: 'materialInfo',
              component: materialInfo
            },
            {
              path: '/productModel',
              name: 'productModel',
              component: productModel
            },
            {
              path: '/productStructure',
              name: 'productStructure',
              component: productStructure
            },
            {
              path: '/processData',
              name: 'processData',
              component: processData
            },
            {
              path: '/processRoute',
              name: 'processRoute',
              component: processRoute
            }
          ]
        },
        {
          path: '/productPlan',
          name: 'productPlan',
          component: productPlan,
          children: [
            {
              path: '/processRoute',
              name: 'processRoute',
              component: processRoute
            }
          ]
        },
      ]
    }
  ]
})


