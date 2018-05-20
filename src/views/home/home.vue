<template>
  <div id="home">
    <el-container>
      <el-aside width="200px">
        <h5 style="line-height:60px;margin:0;padding:0;height:60px;background-color:#409EFF;font-size:26px;color:#fff;">IMES</h5>
        <el-menu default-active="1" class="el-menu-vertical-demo"  background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" :style="{minHeight:navMinHeight+'px',height:navHeight+'px'}" @open="handleOpen" @close="handleClose">
          <el-submenu :index=item.index v-for="item in navData">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.title}}</span>
            </template>
          <el-menu-item-group>
          <el-menu-item :index=i.index v-for="i in item.children">{{i.name}}</el-menu-item>
          <!-- <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4-1">选项1</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
            </el-aside>
            <el-container>
                <el-header style="padding:0;background-color:#409EFF">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" style="float:left;" mode="horizontal" background-color="#409EFF" text-color="#fff" active-text-color="#303133" @select="handleSelect">
                    <el-menu-item index="1">基础数据</el-menu-item>
                    <el-menu-item index="2">生产计划</el-menu-item>
                    <el-menu-item index="3">生产调度</el-menu-item>
                    <el-menu-item index="4">质量管理</el-menu-item>
                    <el-menu-item index="5">制造资源</el-menu-item>
                    <el-menu-item index="6">人管管理</el-menu-item>
                    <el-menu-item index="7">文档管理</el-menu-item>
                    <el-menu-item index="8">线边仓管理</el-menu-item>
                    <el-menu-item index="9">综合报表</el-menu-item>
                    <el-menu-item index="10">系统管理</el-menu-item>
                    <el-menu-item index="11">质量检测</el-menu-item>
                    <el-menu-item index="12">质量追溯</el-menu-item>
                    </el-menu>
                    <el-dropdown style="float:right;line-height:60px;">
                        <el-button type="primary">
                            系统管理员<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                </el-header>
                <el-main style="padding:0 20px;">
                  <el-tabs v-model="editableTabsValue2" type="card" style="margin:10px 0;" @tab-remove="removeTab">
                    <el-tab-pane
                      v-for="(item, index) in editableTabs2"
                      :key="item.name"
                      :label="item.title"
                      :name="item.name"
                      :closable="item.closable"
                    >
                    </el-tab-pane>
                  </el-tabs>
                  <el-row :gutter="20">
                    <el-col :span="4">
                      <el-card class="box-card" style="background:#E4E7ED">
                        <div slot="header" class="clearfix" >
                          <span style="line-height:20px;height:20px;">今日计划完成</span>
                        </div>
                        <div class="text item">
                          <ul style="height:336px">
                            <li style="padding-bottom:10px;">
                              <p style="line-height:20px;font-size:14px;">计划量</p>
                              <p>
                                <strong style="font-size:26px;color:#409EFF;line-height:56px">800</strong>
                                台
                              </p>
                            </li>
                             <li style="padding-bottom:10px;">
                              <p style="line-height:20px;font-size:14px;">完成量</p>
                              <p>
                                <strong style="font-size:26px;color:#409EFF;line-height:56px">150</strong>
                                台
                              </p>
                            </li>
                             <li style="padding-bottom:10px;">
                              <p style="line-height:20px;font-size:14px;">在制品总数</p>
                              <p>
                                <strong style="font-size:26px;color:#409EFF;line-height:56px">300</strong>
                                台
                              </p>
                            </li>
                             <li>
                              <p style="line-height:20px;font-size:14px;">待交付</p>
                              <p>
                                <strong style="font-size:26px;color:#409EFF;line-height:56px">160</strong>
                                台
                              </p>
                            </li>
                          </ul>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="16">
                      <el-card class="box-card" style="background:#E4E7ED">
                        <div slot="header" class="clearfix" >
                          <span style="line-height:20px;height:20px;">生产管理</span>
                        </div>
                        <div class="text item">
                           <el-table
                              :data="tableData"
                              style="width: 100%"
                              align="left"
                              size="mini">
                              <el-table-column
                                prop="date"
                                label="生产订单"
                                >
                              </el-table-column>
                              <el-table-column
                                prop="name"
                                label="产品型号"
                                >
                              </el-table-column>
                              <el-table-column
                                prop="address"
                                label="产品名称"
                                width="180">
                              </el-table-column>
                              <el-table-column
                                prop="jihua"
                                label="计划数量"
                                >
                              </el-table-column>
                              <el-table-column
                                prop="shiji"
                                label="实际数量"
                                >
                              </el-table-column>
                              <el-table-column
                                prop="zhitong"
                                label="直通率">
                              </el-table-column>
                              <el-table-column
                                prop="qingdan"
                                label="清单率">
                              </el-table-column>
                            </el-table>
                            <el-table
                              :data="tableData2"
                              style="width: 100%;margin-top:10px;"
                              align="left"
                              size="mini">
                              <el-table-column
                                prop="date"
                                label="生产线"
                                >
                              </el-table-column>
                              <el-table-column
                                prop="jihua"
                                label="计划数量"
                                >
                              </el-table-column>
                              <el-table-column
                                prop="shiji"
                                label="实际数量"
                                >
                              </el-table-column>
                              <el-table-column
                                prop="zhitong"
                                label="直通率">
                              </el-table-column>
                              <el-table-column
                                prop="qingdan"
                                label="清单率">
                              </el-table-column>
                            </el-table>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="4">
                      <el-card class="box-card" style="background:#E4E7ED">
                        <div slot="header" class="clearfix" >
                          <span style="line-height:20px;height:20px;">物料配送</span>
                        </div>
                        <div class="text item">
                          <ul style="height:336px">
                            <li style="padding-bottom:10px;">
                              <p style="line-height:20px;font-size:14px;">齐套量</p>
                              <p>
                                <strong style="font-size:26px;color:#409EFF;line-height:56px">800</strong>
                                台
                              </p>
                            </li>
                             <li style="padding-bottom:10px;">
                              <p style="line-height:20px;font-size:14px;">已到位</p>
                              <p>
                                <strong style="font-size:26px;color:#409EFF;line-height:56px">300</strong>
                                台
                              </p>
                            </li>
                             <li style="padding-bottom:10px;">
                              <p style="line-height:20px;font-size:14px;">可用时间</p>
                              <p>
                                <strong style="font-size:26px;color:#409EFF;line-height:56px">50</strong>
                                台
                              </p>
                            </li>
                             <li>
                              <p style="line-height:20px;font-size:14px;">配送中</p>
                              <p>
                                <strong style="font-size:26px;color:#409EFF;line-height:56px">500</strong>
                                台
                              </p>
                            </li>
                          </ul>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                    <el-row :gutter="20" style="margin-top:20px;">
                      <el-col :span="6">
                        <el-card class="box-card" style="background:#E4E7ED">
                        <div slot="header" class="clearfix" >
                          <span style="line-height:20px;height:20px;">生产管理</span>
                        </div>
                        <div class="text item">
                          <div id="myChart1" :style="{width: '100%', height: '300px'}"></div>
                        </div>
                      </el-card>
                      </el-col>
                      <el-col :span="6">
                        <el-card class="box-card" style="background:#E4E7ED">
                        <div slot="header" class="clearfix" >
                          <span style="line-height:20px;height:20px;">生产管理</span>
                        </div>
                        <div class="text item">
                          <div id="myChart2" :style="{width: '100%', height: '300px'}"></div>
                        <el-table
                              :data="tableData3"
                              style="width: 280px;position:absolute;top:260px;"
                              align="left"
                              size="mini">
                              <el-table-column
                                prop="date"
                                label="平均无障碍时间(MTBF):"
                                width="148"
                                >
                              </el-table-column>
                              <el-table-column
                                prop="name"
                                label=""
                                >
                              </el-table-column>
                              <el-table-column
                                prop="address"
                                label=""
                                width="50"
                                >
                              </el-table-column>
                              
                            </el-table>

                        </div>
                      </el-card>
                      </el-col>
                      <el-col :span="6">
                         <el-card class="box-card" style="background:#E4E7ED">
                          <div slot="header" class="clearfix" >
                            <span style="line-height:20px;height:20px;">生产节拍</span>
                          </div>
                          <div class="text item">
                            <div id="myChart3" :style="{width: '100%', height: '300px'}"></div>
                          </div>
                        </el-card>
                      </el-col>
                      <el-col :span="6">
                        <el-card class="box-card" style="background:#E4E7ED">
                          <div slot="header" class="clearfix" >
                            <span style="line-height:20px;height:20px;">质量柏拉图</span>
                          </div>
                          <div class="text item">
                            <div id="myChart4" :style="{width: '100%', height: '300px'}"></div>
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>

                  
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        tableData: [{
            date: 'BCP0519',
            name: 'demo003',
            address: '后吊耳底板',
            jihua: '800',
            shiji: '150',
            zhitong: '75%',
            qingdan: '85%'
          }, {
            date: 'BCP0520',
            name: 'demo002',
            address: '后吊耳销轴',
            jihua: '800',
            shiji: '150',
            zhitong: '75%',
            qingdan: '85%'
          }, {
            date: 'BCP0521',
            name: 'demo002',
            address: '后吊耳销轴',
            jihua: '800',
            shiji: '150',
            zhitong: '75%',
            qingdan: '85%'
          }, {
            date: 'BCP0522',
            name: 'demo001',
            address: '钢板弹簧后吊耳总成',
            jihua: '800',
            shiji: '150',
            zhitong: '75%',
            qingdan: '85%'
          }],
          tableData2: [{
            date: '冲压一车间',
            name: 'demo003',
            address: '后吊耳底板',
            jihua: '800',
            shiji: '150',
            zhitong: '75%',
            qingdan: '85%'
          }, {
            date: '冲压二车间',
            name: 'demo002',
            address: '后吊耳销轴',
            jihua: '800',
            shiji: '150',
            zhitong: '75%',
            qingdan: '85%'
          }, {
            date: '焊接车间',
            name: 'demo002',
            address: '后吊耳销轴',
            jihua: '800',
            shiji: '150',
            zhitong: '75%',
            qingdan: '85%'
          }],
          tableData3: [{
            date: '2230小时',
            name: '22分钟',
            address: '50秒',
            jihua: '800',
            shiji: '150',
            zhitong: '75%',
            qingdan: '85%'
          }
        ],
        navHeight: '',
        navMinHeight:'',
        activeIndex: "1",
        activeIndex2: "1",
        editableTabsValue2: 'home',
        editableTabs2: [{
          title: '首页',
          name: 'home',
          closable: false,
        }, {
          title: 'Tab 2',
          name: '2',
          closable: true,
        }],
        tabIndex: 2,
        navData:[
          {
            title:'选项一',
            index: '1',
            children: [
              {
                index: '1-1',
                name: '选项1-1'
              },
              {
                index: '1-2',
                name: '选项1-2'
              },
              {
                index: '1-3',
                name: '选项1-3'
              }
            ]
          },
          {
            title:'选项二',
            index: '2',
            children: [
              {
                index: '2-1',
                name: '选项2-1'
              },
              {
                index: '2-2',
                name: '选项1-2'
              },
              {
                index: '2-3',
                name: '选项1-3'
              }
            ]
          }
        ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      },
      drawLine1(){
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
        // 绘制图表
        myChart1.setOption({
             tooltip: {
                    trigger: 'axis'
                },
            xAxis: {
                data : ['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'],
                axisLabel :{  
                        interval:0,
                        rotate: 60  
                    }

            },
            yAxis: {
               type: 'value',
                    axisLabel: {
                        formatter: '{value}'
                    }

            },
            series: [
                    {
                        name:'直通率',
                        type:'line',
                        //后台数据
                        data:[85, 78, 72, 90, 89, 88,80,90,92,90]

                    }
                ]

        });
    },
    drawLine2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        // 绘制图表
        myChart2.setOption({
            // title: { text: '设备健康度' },
            grid: {
                    bottom: 0
                },
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                },
            series: [
                    {
                        name: '业务指标',
                        type: 'gauge',
                        radius: '100%',
                        startAngle: 180,
                        //结束角度。
                        endAngle: 0,
                        //仪表盘轴线相关配置。
                        //后台数据
                        axisLine: {
                            show:true,
                            // 属性lineStyle控制线条样式
                            lineStyle: {
                                width: 60,
                                color:[[92/100, '#63869e'], [1, '#c23531']]
                            }
                        },
                        //分隔线样式。
                        splitLine: {
                            show: false,
                        },
                        //刻度样式。
                        axisTick: {
                            show: false,
                        },
                        //刻度标签。
                        axisLabel: {
                            show:false,
                        },
                        //仪表盘指针。
                        pointer: {
                            //这个show属性好像有问题，因为在这次开发中，需要去掉指正，我设置false的时候，还是显示指针，估计是BUG吧，我用的echarts-3.2.3；希望改进。最终，我把width属性设置为0，成功搞定！
                            show: false,
                            //指针长度
                            length:'90%',
                            width:0,
                        },
                        //仪表盘标题。
                        title: {
                            show: true,
                            offsetCenter: [0, '-40%'], // x, y，单位px
                            textStyle: {
                                color: '#63869e',
                                fontSize: 15
                            }
                        },
                        detail: {
                            show: true,
                            offsetCenter: [0, '-10%'],
                            formatter:'{value}%',
                            textStyle: {
                                fontSize: 15
                            }
                        },
                        //后台数据
                        data: [{value: 92}]
                    }
                ]


        });
    },
    drawLine3(){
        // 基于准备好的dom，初始化echarts实例
        let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
        // 绘制图表
        myChart3.setOption({
             color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                    	top: 30,                        
                        y2: '50%'
                    },
                    
                    xAxis : [
                        {
                            type : 'category',
                            //后台数据
                            data : ['模块智能送配', '柔性装配', '模块装配', '用户定制', '智能检测', '定制交付'],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel :{  
                                interval:0,
                                rotate: 60  
                            }

                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            interval: 25
                        }
                    ],
                    series : [
                        {
                            name:'直接访问',
                            type:'bar',
                            barWidth: '50%',
                            //后台数据
                            data:[33, 22, 42, 27, 23, 40],
                            label:{
                                normal:{
                                    show:true,
                                    position:'top',
                                    textStyle:'bolder'
                                }
                            },
                            markLine: {
                                data: [
                                    //后台数据
                                    {name: '目标',yAxis: 25}
                                ] ,
                                lineStyle:{
                                    normal:{
                                        color:'#5DB493',
                                        width:'3',
                                        type: 'solid'
                                    }
                                }
                            }
                        }
                    ]


        });
    },
    drawLine4(){
        // 基于准备好的dom，初始化echarts实例
        let myChart4 = this.$echarts.init(document.getElementById('myChart4'))
        // 绘制图表
        myChart4.setOption({
             tooltip: {
                    trigger: 'axis'
                },
                grid: {
                	x2:'16%',
                	top: 20 
                },
                xAxis:{
                        type : 'category',
                        //boundaryGap : false,
                        axisTick: {
                            alignWithLabel: true
                        },
                        //后台数据
                        data : ['染色不良','刮痕','边缘不重合','色泽差','表面不良','其它'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel :{  
                            interval:0,
                            rotate: 60  
                        }
                    },
                    
                yAxis: [
                    {
                        type: 'value',
                        interval: 36
                    },
                    {
                        type: 'value',
                     
                        axisLabel: {
                        formatter: '{value}%'
                        }
                    }
                ],
                series: [
                    {
                        name:'直通率',
                        type:'line',
                        yAxisIndex: 1,
                        //后台数据
                        data:[33.26, 59.91, 83.79, 95.73, 98.72, 100],
                        itemStyle : { 
                            normal: {
                                label : {show: true}
                            }
                        }
                    }, {
                        name:'预购队列',
                        type:'bar',
                        itemStyle: {
                            normal: {
                                color: '#1E90FF'
                            }
                        },
                        barWidth: 20,
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        //后台数据
                        data:[156, 125, 112, 56, 14, 6]
                    }
                ]


        });
    },
    },
    beforeMount () {
      this.navMinHeight= document.documentElement.clientHeight-60;
    },
    mounted () {
      const that = this;
      this.drawLine1();
      this.drawLine2();
      this.drawLine3();
      this.drawLine4();
      window.onresize = function windowResize () {
        that.navHeight= document.documentElement.clientHeight-60
      }
    }
  };
</script>
<style>
  #home {
    width: 1600px;
    margin: 0 auto;
  }
  #home .el-card__header {
    padding: 0;
    line-height: 40px;
    height: 40px;
    font-size: 14px;
    background: #909399;
    color: #fff;
  }
</style>
