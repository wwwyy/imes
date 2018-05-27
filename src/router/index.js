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

//deviceManage
import deviceManage from '@/views/deviceManage/deviceManage'
import maintenanceProject from '@/views/deviceManage/maintenanceProject'
import maintenancePlan from '@/views/deviceManage/maintenancePlan'
import planGrade from '@/views/deviceManage/planGrade'
import replacepartRecord from '@/views/deviceManage/replacepartRecord'
import replacePartOutInWare from '@/views/deviceManage/replacePartOutInWare'
import replacePartRepertory from '@/views/deviceManage/replacePartRepertory'
import replacePartCount from '@/views/deviceManage/replacePartCount'
import deviceRunRecord from '@/views/deviceManage/deviceRunRecord'
import faultCode from '@/views/deviceManage/faultCode'
import faultRepository from '@/views/deviceManage/faultRepository'
import deviceFaultRepair from '@/views/deviceManage/deviceFaultRepair'

//personalManage
import personalManage from '@/views/personalManage/personalManage'
import personalTechnical from '@/views/personalManage/personalTechnical'
import attendanceManage from '@/views/personalManage/attendanceManage'
import attendanceInformation from '@/views/personalManage/attendanceInformation'

//personalManage
import documentManage from '@/views/documentManage/documentManage'
import document from '@/views/documentManage/document'

//materialLineManage
import materialLineManage from '@/views/materialLineManage/materialLineManage'
import materialMove from '@/views/materialLineManage/materialMove'
import materialInWare from '@/views/materialLineManage/materialInWare'
import materialOutWare from '@/views/materialLineManage/materialOutWare'
import materialRepertory from '@/views/materialLineManage/materialRepertory'
import supplementaryApply from '@/views/materialLineManage/supplementaryApply'
import materialReturn from '@/views/materialLineManage/materialReturn'

//comprehensiveReport
import comprehensiveReport from '@/views/comprehensiveReport/comprehensiveReport'
import deviceBugCount from '@/views/comprehensiveReport/deviceBugCount'
import deviceRepairHour from '@/views/comprehensiveReport/deviceRepairHour'
import deviceMaitainHour from '@/views/comprehensiveReport/deviceMaitainHour'
import deviceHalt from '@/views/comprehensiveReport/deviceHalt'
import personalAttendance from '@/views/comprehensiveReport/personalAttendance'
import productBugAnalysis from '@/views/comprehensiveReport/productBugAnalysis'
import oneTimePassRate from '@/views/comprehensiveReport/oneTimePassRate'
import productionCapacityTwo from '@/views/comprehensiveReport/productionCapacityTwo'


//systemManage
import systemManage from '@/views/systemManage/systemManage'
import roleSetting from '@/views/systemManage/roleSetting'
import userAuthorSetting from '@/views/systemManage/userAuthorSetting'
import userLoginLog from '@/views/systemManage/userLoginLog'
import userOperateLog from '@/views/systemManage/userOperateLog'
import sysetmVersionLog from '@/views/systemManage/sysetmVersionLog'

//qs
import qs from '@/views/qs/qs'

//qsz
import qsz from '@/views/qsz/qsz'


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
        {
          path: '/deviceManage',
          name: 'deviceManage',
          component: deviceManage,
          redirect: '/maintenanceProject',
          children: [
            {
              path: '/maintenanceProject',
              name: 'maintenanceProject',
              component: maintenanceProject
            },
            {
              path: '/maintenancePlan',
              name: 'maintenancePlan',
              component: maintenancePlan
            },
            {
              path: '/planGrade',
              name: 'planGrade',
              component: planGrade
            },
            {
              path: '/replacepartRecord',
              name: 'replacepartRecord',
              component: replacepartRecord
            },
            {
              path: '/replacePartOutInWare',
              name: 'replacePartOutInWare',
              component: replacePartOutInWare
            },
            {
              path: '/replacePartRepertory',
              name: 'replacePartRepertory',
              component: replacePartRepertory
            },
            {
              path: '/replacePartCount',
              name: 'replacePartCount',
              component: replacePartCount
            },
            {
              path: '/deviceRunRecord',
              name: 'deviceRunRecord',
              component: deviceRunRecord
            },
            {
              path: '/faultCode',
              name: 'faultCode',
              component: faultCode
            },
            {
              path: '/faultRepository',
              name: 'faultRepository',
              component: faultRepository
            },
            {
              path: '/deviceFaultRepair',
              name: 'deviceFaultRepair',
              component: deviceFaultRepair
            }
          ]
        },
        {
          path: '/personalManage',
          name: 'personalManage',
          component: personalManage,
          redirect: '/personalTechnical',
          children: [
            {
              path: '/personalTechnical',
              name: 'personalTechnical',
              component: personalTechnical
            },
            {
              path: '/attendanceManage',
              name: 'attendanceManage',
              component: attendanceManage
            },
            {
              path: '/attendanceInformation',
              name: 'attendanceInformation',
              component: attendanceInformation
            }
          ]
        },
        {
          path: '/documentManage',
          name: 'documentManage',
          component: documentManage,
          redirect: '/document',
          children: [
            {
              path: '/document',
              name: 'document',
              component: document
            }
          ]
        },
        {
          path: '/materialLineManage',
          name: 'materialLineManage',
          component: materialLineManage,
          redirect: '/materialMove',
          children: [
            {
              path: '/materialMove',
              name: 'materialMove',
              component: materialMove
            },
            {
              path: '/materialInWare',
              name: 'materialInWare',
              component: materialInWare
            },
            {
              path: '/materialOutWare',
              name: 'materialOutWare',
              component: materialOutWare
            },
            {
              path: '/materialRepertory',
              name: 'materialRepertory',
              component: materialRepertory
            },
            {
              path: '/supplementaryApply',
              name: 'supplementaryApply',
              component: supplementaryApply
            },
            {
              path: '/materialReturn',
              name: 'materialReturn',
              component: materialReturn
            }
          ]
        },
        {
          path: '/comprehensiveReport',
          name: 'comprehensiveReport',
          component: comprehensiveReport,
          redirect: '/deviceBugCount',
          children: [
            {
              path: '/deviceBugCount',
              name: 'deviceBugCount',
              component: deviceBugCount
            },
            {
              path: '/deviceRepairHour',
              name: 'deviceRepairHour',
              component: deviceRepairHour
            },
            {
              path: '/deviceMaitainHour',
              name: 'deviceMaitainHour',
              component: deviceMaitainHour
            },
            {
              path: '/deviceHalt',
              name: 'deviceHalt',
              component: deviceHalt
            },
            {
              path: '/personalAttendance',
              name: 'personalAttendance',
              component: personalAttendance
            },
            {
              path: '/productBugAnalysis',
              name: 'productBugAnalysis',
              component: productBugAnalysis
            },
            {
              path: '/oneTimePassRate',
              name: 'oneTimePassRate',
              component: oneTimePassRate
            },
            {
              path: '/productionCapacityTwo',
              name: 'productionCapacityTwo',
              component: productionCapacityTwo
            }
          ]
        },
        {
          path: '/systemManage',
          name: 'systemManage',
          component: systemManage,
          redirect: '/roleSetting',
          children: [
            {
              path: '/roleSetting',
              name: 'roleSetting',
              component: roleSetting
            },
            {
              path: '/userAuthorSetting',
              name: 'userAuthorSetting',
              component: userAuthorSetting
            },
            {
              path: '/userLoginLog',
              name: 'userLoginLog',
              component: userLoginLog
            },
            {
              path: '/userOperateLog',
              name: 'userOperateLog',
              component: userOperateLog
            },
            {
              path: '/sysetmVersionLog',
              name: 'sysetmVersionLog',
              component: sysetmVersionLog
            }
          ]
        },
        {
          path: '/qs',
          name: 'qs',
          component: qs,
        },
        {
          path: '/qsz',
          name: 'qsz',
          component: qsz,
        },
      ]
    }
  ]
})


