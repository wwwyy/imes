<template>
    <div id="qualityManage">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            navData:[
          {
            title:'基础数据管理',
            index: '1',
            children: [
              {
                index: 'selfCheckTemplate',
                name: '开工自检模板设定'
              },
              {
                index: 'takeSample',
                name: '取样方案维护'
              },
              {
                index: 'productCheckProject',
                name: '产品检验项目维护'
              },
              {
                index: 'bugCode',
                name: '缺陷代码维护'
              },
              {
                index: 'failureRepository',
                name: '故障知识库维护'
              }
            ]
          },
          {
            title:'质检管理',
            index: '2',
            children: [
              {
                index: 'qualityInspectionPlan',
                name: '（离线）质检计划维护'
              },
              {
                index: 'qualityInspectionGrade',
                name: '（离线）质检实绩维护'
              }
            ]
          },
          {
            title:'质量判定与处置',
            index: '3',
            children: [
              {
                index: 'productQualityEvaluationAndDisposal',
                name: '质量判定与处置'
              }
            ]
          },
          {
            title:'数据管理',
            index: '4',
            children: [
              {
                index: 'materialAssemblySheet',
                name: '物料装配单'
              },
              {
                index: 'materialScrapSheet',
                name: '物料报废单'
              },
              {
                index: 'materialTrack',
                name: '物料追溯与跟踪'
              },
              {
                index: 'selfCheckQuery',
                name: '自检查询'
              }
            ]
          }
        ]
        }
    }
}
</script>
