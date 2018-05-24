<template>
    <div id="productSchedule">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            navData:[
          {
            title:'作业计划',
            index: '1',
            children: [
              {
                index: 'operatelPlanManage',
                name: '作业计划管理'
              },
              {
                index: 'operatePlanTrack',
                name: '作业计划跟踪'
              }
            ]
          }
        ]
        }
    }
}
</script>
