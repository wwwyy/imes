<template>
    <div id="personalAttendance">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>综合报表</el-breadcrumb-item>
            <el-breadcrumb-item>人员报表</el-breadcrumb-item>
            <el-breadcrumb-item>人员技能资质报表</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
              <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">设备：</span>
             <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <el-row>
            <el-col :span="12">
                <div id="personalSkillLine" style="height:400px;overflow: hidden;">

                </div>
            </el-col>
            <el-col :span="12">
                <div id="personalSkillPie" style="height:400px;overflow: hidden;">

                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'personalAttendance',
    data () {
        return {
            productSkillPieMap: [{name:'一级钳工',value:10},{name:'二级钳工',value:8},{name:'三级钳工',value:15},{name:'四级钳工',value:15},{name:'五级钳工',value:15},{name:'一级电工',value:5},{name:'二级电工',value:13},{name:'三级电工',value:8},{name:'一级焊工',value:11},{name:'二级焊工',value:20},{name:'三级焊工',value:25},{name:'一级车工',value:15},{name:'二级车工',value:20},{name:'一级车工',value:14}],
            xname: ["一级钳工", "二级钳工","三级钳工","四级钳工","五级钳工", "一级电工", "二级电工","三级电工", "一级焊工","二级焊工","三级焊工","五级钳工", "一级车工", "二级车工"],
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
        let myChart1 = this.$echarts.init(document.getElementById('personalSkillLine'))
        // 绘制图表
        myChart1.setOption({
            title: {
                    text: '人员技能资质报表',
                    x:'left'
                },
                //color: ['#3398DB'],
                legend: {
                    data:['获得某资质的人员数量'],
                    right: '32%'
                },
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
                xAxis : {
                        type : 'category',
                        name : '资质',
                        //后台数据
                        data : this.xname,
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
                    },
                yAxis : [
                    {
                        type : 'value',
                        name : '人员数量',
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
                        name:'获得某资质的人员数量',
                        type:'bar',
                        barWidth: '30%',
                        color: ['#3398DB'],
                        //后台数据
                        data: this.num,
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
        let myChart2 = this.$echarts.init(document.getElementById('personalSkillPie'))
        // 绘制图表
        myChart2.setOption({
             title : {
            		        text: '资质-人员占比',
            		        x:'center'
            		    },
           		    tooltip : {
           		        trigger: 'item',
           		        formatter: "{a} <br/>{b} : {c} ({d}%)"
           		    },
           		    legend: {
           		        orient: 'vertical',
           		        left: '0%',
           		        data: this.xname
           		    },
           		    series : [
           		        {
           		            name: '资质：人员（占比）',
           		            type: 'pie',
           		            radius : '70%',
           		            center: ['50%', '60%'],
           		            data: this.productSkillPieMap,
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
           		                    formatter: "{d}%"
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
