<template>
    <div id="productBugAnalysis">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>综合报表</el-breadcrumb-item>
            <el-breadcrumb-item>质量报表</el-breadcrumb-item>
            <el-breadcrumb-item>产品缺陷分析</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
              <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">产品型号：</span>
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
        <el-row>
            <el-col :span="12">
                <div id="productBugLineBar" style="height:400px;overflow: hidden;">

                </div>
            </el-col>
            <el-col :span="12">
                <div id="productBugPie" style="height:400px;overflow: hidden;">

                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'productBugAnalysis',
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
        let myChart1 = this.$echarts.init(document.getElementById('productBugLineBar'))
        // 绘制图表
        myChart1.setOption({
            title: {
                    text: '产品缺陷分析(发动机油底壳调节板)' ,
                    x:'center'
                },
                grid: {
                	x2:'15%'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	                }
                },
                xAxis:{
                        type : 'category',
                        name : '缺陷名称',
                        //后台数据
                        data : ["发泡失败", "使用寿命短", "有突起", "形状异常"],
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
                yAxis: [
                    {
                        type: 'value',
                        name : '产品缺陷占比(%)',
                        max: '100',
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
                    },
                    {
                        type: 'value',
                        max: '100',
                        axisLabel :{  
	                        textStyle: {
	                        	color: '#000000'
	                        },
	                    },
                        axisLine:{
	                        lineStyle:{
	                            color:'#008BCE'
	                        }
	                    }
                    }
                ],
                series: [
                    {
                        name:'产品缺陷百分比',
                        type:'bar',
                        barWidth: '30%',
                        yAxisIndex: 0,
                        color: ['#3398DB'],
                        //后台数据
                        data: [50, 25, 12.5, 12.5],
                        label:{
                            normal:{
                                show:true,
                                position:'inside',
                                color:'#fff',
                                textStyle:'bolder'
                            }
                        }
                    },
                    {
                        name:'产品缺陷百分比',
                        type:'line',
                        yAxisIndex: 1,
                        //后台数据
                        data: [50, 75, 87.5, 100],
                        itemStyle : { 
                            normal: {
                                label : {show: true}
                            }
                        }
                    }, 
                 ]

        });
    },
    drawLine2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart2 = this.$echarts.init(document.getElementById('productBugPie'))
        // 绘制图表
        myChart2.setOption({
             title : {
            		        text: "产品缺陷饼图(发动机油底壳调节板)",
            		        x:'center'
            		    },
            		    tooltip : {
            		        trigger: 'item',
            		        formatter: "{a} <br/>{b} : {c} ({d}%)"
            		    },
            		    legend: {
            		        orient: 'vertical',
            		        left: 'left',
            		        data: ["发泡失败", "使用寿命短", "有突起", "形状异常"]
            		    },
            		    series : [
            		        {
            		            name: '缺陷：个数（占比）',
            		            type: 'pie',
            		            radius : '70%',
            		            center: ['50%', '60%'],
            		            data: [{name:'使用寿命短',value:2},{name:'发泡失败',value:4},{name:'有突起',value:1},{name:'形状异常',value:2}],
            		            itemStyle: {
            		                emphasis: {
            		                    shadowBlur: 10,
            		                    shadowOffsetX: 0,
            		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
            		                }
            		            },
            		            label: {
            		            	normal: {
            		            		show: true,
            		            		position: 'outside',
               		                    formatter: "{b}： \n{d}%"
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
      this.drawLine2();
    
    }
}
</script>
