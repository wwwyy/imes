<template>
    <div id="oneTimePassRate">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>综合报表</el-breadcrumb-item>
            <el-breadcrumb-item>质量报表</el-breadcrumb-item>
            <el-breadcrumb-item>一次性通过率</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
              <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">查询粒度：</span>
             <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">开始日期：</span>
             <el-date-picker
                v-model="startDate"
                type="date"
                placeholder="选择日期"
                style="width:194px"
                size="small">
            </el-date-picker>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">结束日期：</span>
             <el-date-picker
                v-model="endDate"
                type="date"
                placeholder="选择日期"
                style="width:194px"
                size="small">
            </el-date-picker>
        </div>
        <div id="oneTimePass" style="height:450px;overflow: hidden;">

        </div>
    </div>
</template>
<script>
export default {
    name: 'oneTimePassRate',
    data () {
        return {
            num: [10, 8, 15, 20, 5,8,11,20,25,15,20,14],
            copyOptions: [
                {
                    value: '存储',
                    label: '存储'
                }, 
                {
                    value: '温度',
                    label: '温度'
                },
                {
                    value: '容量',
                    label: '容量'
                }, 
                {
                    value: '面积',
                    label: '面积'
                },
                {
                    value: '重量',
                    label: '重量'
                }, 
                {
                    value: '长度',
                    label: '长度'
                }
            ],
            markOptions: [
                {
                    value: '启用',
                    label: '启用'
                }, 
                {
                    value: '停用',
                    label: '停用'
                }
            ],
            copyType: '',
            markType: '',
            copyCode: '',
            copyName: '',
            startDate: '',
            endDate: '',
            tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        currentPage: 1
        }
    },
    methods: {
        drawLine1(){
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = this.$echarts.init(document.getElementById('oneTimePass'))
        // 绘制图表
        myChart1.setOption({
           title: {
                    text: "一次性通过率(工位)",
                    x:'center'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	                }
                },
                legend: {
                    data:['产品一次性通过率'],
                    right: '25%'
                },
                grid: {
                    y2: '30%'
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {readOnly: false},
                        magicType: {type: ['bar', 'line']},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis : {
                        type : 'category',
                        name : "工位",
                        //后台数据
                        data : ["装配", "成型", "拉伸", "修边","精修边","包装入库","落料成型","半成品入库","翻边","冲断","落料冲孔","拉延","成型","侧冲孔", "预折弯","精修边", "倒角","切边"],
                        axisTick: {
                            alignWithLabel: true
                        },
                    	axisLabel :{  
	                        interval:0,
	                        rotate: 60,
	                        textStyle: {
	                        	color: '#000000'
	                        }
	                    },
	                    axisLine:{
	                        lineStyle:{
	                            color:'#008BCE'
	                        }
	                    }
                    },
                yAxis : [
                    {
                        type : 'value',
                        name : '一次性通过率(%)',
                        axisLabel :{  
	                        textStyle: {
	                        	color: '#000000'
	                        }
	                    },
                        axisLine:{
	                        lineStyle:{
	                            color:'#008BCE'
	                        }
	                    }
                    }
                ],
                series : [
                    {
                        name:'产品一次性通过率',
                        type:'bar',
                        barWidth: '30%',
                        color: ['#3398DB'],
                        //后台数据
                        data: [94,95.66,97.5,93.4,98.88,99.5,98.2,95, 98, 88.87, 93.22, 86,93,92,97.2,99,98.33,95.44],
                        label:{
                            normal:{
                                show:true,
                                position:'top',
                                textStyle:'bolder'
                            }
                        }
                    }
                ]


        });
    },
      handleClick(row) {
        console.log(row);
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    mounted () {
      const that = this;
      this.drawLine1();
    }
}
</script>
