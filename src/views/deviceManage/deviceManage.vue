<template>
    <div id="deviceManage">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            navData:[
          {
            title:'维修保养管理',
            index: '1',
            children: [
              {
                index: 'maintenanceProject',
                name: '维保项目维护'
              },
              {
                index: 'maintenancePlan',
                name: '维保计划维护'
              },
              {
                index: 'planGrade',
                name: '计划实绩维护'
              }
            ]
          },
          {
            title:'备件仓库管理',
            index: '2',
            children: [
              {
                index: 'replacepartRecord',
                name: '备件档案'
              },
              {
                index: 'replacePartOutInWare',
                name: '备件出入库管理'
              },
              {
                index: 'replacePartRepertory',
                name: '备件库存管理'
              },
              {
                index: 'id="replacePartCount"',
                name: '备件盘点'
              } 
            ]
          },
          {
            title:'设备监控',
            index: '3',
            children: [
              {
                index: 'deviceRunRecord',
                name: '设备运行记录'
              },
              {
                index: 'faultCode',
                name: '故障代码维护'
              },
              {
                index: 'faultRepository',
                name: '设备故障知识库维护'
              },
              {
                index: 'deviceFaultRepair',
                name: '设备故障维修'
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
