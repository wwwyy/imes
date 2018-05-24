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
import orderCodeQuery from '@/views/productPlan/orderCodeQuery'
import orderList from '@/views/productPlan/orderList'
import orderWorkcenter from '@/views/productPlan/orderWorkcenter'
import plannedOrderDesign from '@/views/productPlan/plannedOrderDesign'
import productOrder from '@/views/productPlan/productOrder'
import unproductOrder from '@/views/productPlan/unproductOrder'

//productPlan
import productSchedule from '@/views/productSchedule/productSchedule'
import operatelPlanManage from '@/views/productSchedule/operatelPlanManage'
import operatePlanTrack from '@/views/productSchedule/operatePlanTrack'

//qualityManage
import qualityManage from '@/views/qualityManage/qualityManage'
import selfCheckTemplate from '@/views/qualityManage/selfCheckTemplate'
import takeSample from '@/views/qualityManage/takeSample'
import productCheckProject from '@/views/qualityManage/productCheckProject'
import bugCode from '@/views/qualityManage/bugCode'
import failureRepository from '@/views/qualityManage/failureRepository'
import qualityInspectionPlan from '@/views/qualityManage/qualityInspectionPlan'
import qualityInspectionGrade from '@/views/qualityManage/qualityInspectionGrade'
import productQualityEvaluationAndDisposal from '@/views/qualityManage/productQualityEvaluationAndDisposal'
import materialAssemblySheet from '@/views/qualityManage/materialAssemblySheet'
import materialScrapSheet from '@/views/qualityManage/materialScrapSheet'
import materialTrack from '@/views/qualityManage/materialTrack'
import selfCheckQuery from '@/views/qualityManage/selfCheckQuery'

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
          redirect: '/productOrder',
          children: [
            {
              path: '/orderCodeQuery',
              name: 'orderCodeQuery',
              component: orderCodeQuery
            },
            {
              path: '/orderList',
              name: 'orderList',
              component: orderList
            },
            {
              path: '/orderWorkcenter',
              name: 'orderWorkcenter',
              component: orderWorkcenter
            },
            {
              path: '/plannedOrderDesign',
              name: 'plannedOrderDesign',
              component: plannedOrderDesign
            },
            {
              path: '/productOrder',
              name: 'productOrder',
              component: productOrder
            },
            {
              path: '/unproductOrder',
              name: 'unproductOrder',
              component: unproductOrder
            }
          ]
        },
        {
          path: '/productSchedule',
          name: 'productSchedule',
          component: productSchedule,
          redirect: '/operatelPlanManage',
          children: [
            {
              path: '/operatelPlanManage',
              name: 'operatelPlanManage',
              component: operatelPlanManage
            },
            {
              path: '/operatePlanTrack',
              name: 'operatePlanTrack',
              component: operatePlanTrack
            }
          ]
        },
        {
          path: '/qualityManage',
          name: 'qualityManage',
          component: qualityManage,
          redirect: '/selfCheckTemplate',
          children: [
            {
              path: '/selfCheckTemplate',
              name: 'selfCheckTemplate',
              component: selfCheckTemplate
            },
            {
              path: '/takeSample',
              name: 'takeSample',
              component: takeSample
            },
            {
              path: '/productCheckProject',
              name: 'productCheckProject',
              component: productCheckProject
            },
            {
              path: '/bugCode',
              name: 'bugCode',
              component: bugCode
            },
            {
              path: '/failureRepository',
              name: 'failureRepository',
              component: failureRepository
            },
            {
              path: '/qualityInspectionPlan',
              name: 'qualityInspectionPlan',
              component: qualityInspectionPlan
            },
            {
              path: '/qualityInspectionGrade',
              name: 'qualityInspectionGrade',
              component: qualityInspectionGrade
            },
            {
              path: '/productQualityEvaluationAndDisposal',
              name: 'productQualityEvaluationAndDisposal',
              component: productQualityEvaluationAndDisposal
            },
            {
              path: '/materialAssemblySheet',
              name: 'materialAssemblySheet',
              component: materialAssemblySheet
            },
            {
              path: '/materialScrapSheet',
              name: 'materialScrapSheet',
              component: materialScrapSheet
            },
            {
              path: '/materialTrack',
              name: 'materialTrack',
              component: materialTrack
            },
            {
              path: '/selfCheckQuery',
              name: 'selfCheckQuery',
              component: selfCheckQuery
            }
          ]
        },
      ]
    }
  ]
})


