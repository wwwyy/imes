<template>
    <div id="systemManage">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            navData:[
          {
            title:'用户权限设置',
            index: '1',
            children: [
              {
                index: 'roleSetting',
                name: '角色设置'
              },
              {
                index: 'userAuthorSetting',
                name: '用户认证设置'
              }
            ]
          },
          {
            title:'系统日志',
            index: '2',
            children: [
              {
                index: 'userLoginLog',
                name: '用户登录日志'
              },
              {
                index: 'userOperateLog',
                name: '用户操作日志'
              },
              {
                index: 'sysetmVersionLog',
                name: '系统版本日志'
              }
            ]
          }
        ]
        }
    }
}
</script>
