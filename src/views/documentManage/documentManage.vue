<template>
    <div id="documentManage">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            navData:[
          {
            title:'文档管理',
            index: '1',
            children: [
              {
                index: 'document',
                name: '文档维护'
              }
            ]
          }
        ]
        }
    }
}
</script>
