<template>
    <div id="personalManage">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            navData:[
          {
            title:'人员管理',
            index: '1',
            children: [
              {
                index: 'personalTechnical',
                name: '人员技能/资质维护'
              },
              {
                index: 'attendanceManage',
                name: '考勤信息维护'
              },
              {
                index: 'attendanceInformation',
                name: '考勤信息查询'
              }
            ]
          }
        ]
        }
    }
}
</script>
