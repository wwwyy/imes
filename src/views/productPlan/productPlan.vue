<template>
    <div id="productPlan">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            navData:[
          {
            title:'生产订单设计',
            index: '1',
            children: [
              {
                index: 'productOrder',
                name: '成品订单维护'
              },
              {
                index: 'unproductOrder',
                name: '半成品订单维护'
              },
              {
                index: 'plannedOrderDesign',
                name: '计划订单设计'
              }
            ]
          },
          {
            title:'生产订单编制',
            index: '2',
            children: [
              {
                index: 'orderCodeQuery',
                name: '产品编码查询'
              },
              {
                index: 'orderWorkcenter',
                name: '订单工作中心维护'
              }
            ]
          },
          {
            title:'生产订单跟踪',
            index: '3',
            children: [
              {
                index: 'orderList',
                name: '订单清单查询'
              }
            ]
          }
        ]
        }
    }
}
</script>
