<template>
    <div id="comprehensiveReport">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            navData:[
          {
            title:'设备报表',
            index: '1',
            children: [
              {
                index: 'deviceBugCount',
                name: '设备故障统计'
              },
              {
                index: 'deviceRepairHour',
                name: '设备维修工时统计'
              },
              {
                index: 'deviceMaitainHour',
                name: '设备保养工时统计'
              },
              {
                index: 'deviceHalt',
                name: '设备停机情况'
              }
            ]
          },
          {
            title:'人员报表',
            index: '2',
            children: [
              {
                index: 'personalAttendance',
                name: '人员技能资质报表'
              }
            ]
          },
          {
            title:'质量报表',
            index: '3',
            children: [
              {
                index: 'productBugAnalysis',
                name: '产品缺陷分析'
              },
              {
                index: 'oneTimePassRate',
                name: '一次性通过率'
              }
            ]
          },
          {
            title:'产量报表',
            index: '4',
            children: [
              {
                index: 'productionCapacityTwo',
                name: '产量报表'
              }
            ]
          },
        ]
        }
    }
}
</script>
