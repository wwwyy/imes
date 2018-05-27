<template>
    <div id="productionCapacityTwo">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>综合报表</el-breadcrumb-item>
            <el-breadcrumb-item>质量报表</el-breadcrumb-item>
            <el-breadcrumb-item>一次性通过率</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" style="width:100px"> 导 出 </el-button>
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
            <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">型号：</span>
                <el-checkbox v-model="checked"></el-checkbox>
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
        <el-tabs type="border-card" @tab-click="tabChoose">
            <el-tab-pane label="图形">
                <div id="productionRhythm" style="height:500px;overflow: hidden;"></div>
            </el-tab-pane>
            <el-tab-pane label="产品产量图形">
                <div id="modelCapacity" style="height:500px;overflow: hidden;"></div>
            </el-tab-pane>
        </el-tabs>
        
    </div>
</template>
<script>
export default {
    name: 'productionCapacityTwo',
    data () {
        return {
            checked: true,
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
        let myChart1 = this.$echarts.init(document.getElementById('productionRhythm'))
        // 绘制图表
        myChart1.setOption({
           title: {
                        text: '人员产量',
                        x:'center'
			            },
			            legend: {
		                    data:['产量'],
		                    right: '25%'
		                },
			            color: ['#3398DB'],
			            tooltip : {
			                trigger: 'axis',
			                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			                }
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
			            /*grid: {
			                left: '3%',
			                right: '4%',
			                bottom: '3%',
			                containLabel: true
			            },*/
			            xAxis : [
			                {
			                	name : "人员",
			                    type : 'category',
			                    //后台数据
			                    data : ["王军","王峰","姜健","赵云","孙全","钱多多","周聪","吴迪","李聪聪","陈健","高元","高丽","吴云","段金","李好","于一","丁一","丁云"],
			                    axisTick: {
			                        alignWithLabel: true
			                    },
			                    axisLabel :{  
			                        interval: 0,
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
			            yAxis : [
			                {
			                	name : '数量',
			                    type : 'value',
			                    axisLine:{
		                            lineStyle:{
		                                color:'#008BCE'
		                            }
		                        },
		                        axisLabel :{  
			                        textStyle: {
			                        	color: '#000000'
			                        }
			                    }
			                }
			            ],
			            series : [
			                {
			                    name:'产量',
			                    type:'bar',
			                    barWidth: '50%',
			                     color: ['#3398DB'],
			                    //后台数据
			                    data: [220,210,150,160,130,120,110,170,210,220,230,120,150,160,160,110,130,220],
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
    drawLine2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart2 = this.$echarts.init(document.getElementById('modelCapacity'))
        // 绘制图表
        myChart2.setOption({
            title: {
			                text: '产品产量',
			                x:'center'
			            },
			            grid: {
		                    y2: '30%'
		                },
			            legend: {
		                    data:['产量'],
		                    right: '25%'
		                },
			            color: ['#3398DB'],
			            tooltip : {
			                trigger: 'axis',
			                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			                }
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
			            /*grid: {
			                left: '3%',
			                right: '4%',
			                bottom: '3%',
			                containLabel: true
			            },*/
			            xAxis : [
			                {
			                	name : '产品名称',
			                    type : 'category',
			                    //后台数据
			                    data : ["总成支架","传感器支架","燃油软管支架","涡轮支撑左支架","平垫片","换挡支架","锁加强板焊接总成","锁紧挡圈"],
			                    axisTick: {
			                        alignWithLabel: true
			                    },
			                    axisLabel :{  
			                        interval: 0,
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
			                }
			            ],
			            yAxis : [
			                {
			                	name : '数量',
			                    type : 'value',
			                    axisLine:{
		                            lineStyle:{
		                                color:'#008BCE'
		                            }
		                        },
		                        axisLabel :{  
			                        textStyle: {
			                        	color: '#000000'
			                        }
			                    }
			                }
			            ],
			            series : [
			                {
			                    name:'产量',
			                    type:'bar',
			                    barWidth: '50%',
			                    color: ['#3398DB'],
			                    //后台数据
			                    data:[560,430,570,340,450,410,650,150],
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
      },
      tabChoose(callback){
          if(callback.index==='1') {
              setTimeout(() => {
                this.drawLine2();
            }, 200);
          }
      }
    },
    mounted () {
      const that = this;
      setTimeout(() => {
         this.drawLine1();
      }, 200);
    }
}
</script>
