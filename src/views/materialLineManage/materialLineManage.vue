<template>
    <div id="materialLineManage">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            navData:[
          {
            title:'线边仓管理',
            index: '1',
            children: [
              {
                index: 'materialMove',
                name: '物料移动需求'
              },
              {
                index: 'materialInWare',
                name: '物料入库管理'
              },
              {
                index: 'materialOutWare',
                name: '物料出库管理'
              },
              {
                index: 'materialRepertory',
                name: '物料库存管理'
              },
              {
                index: 'supplementaryApply',
                name: '补料申请'
              },
              {
                index: 'materialReturn',
                name: '退料管理'
              }
            ]
          }
        ]
        }
    }
}
</script>
