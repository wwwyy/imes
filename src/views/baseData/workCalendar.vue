<template>
    <div id="workCalendar">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>公共数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>工作中心维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-upload2" style="width:100px"> 导 入  </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <full-calendar :events="fcEvents" locale="en"></full-calendar>
    </div>
</template>
<script>
var demoEvents = [
	{
      title : 'Sunny Out of Office',
      start : '2018-05-25',
      end : '2018-06-15'
    },
    {
      title : '上合峰会',
      start : '2018-06-09',
      end : '2018-06-10'
    }
]
export default {
    name: 'workCalendar',
    data () {
        return {
            fcEvents : demoEvents
        }
    },
    components : {
	'full-calendar': require('vue-fullcalendar')	
  },
    methods: {
      
    },
}
</script>
<style>
    .comp-full-calendar {
        max-width: 1920px;
    }
</style>
