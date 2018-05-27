<template>
  <div id="home">
    <el-container>
      <el-aside width="200px">
        <h5 style="line-height:60px;margin:0;padding:0;height:60px;background-color:#409EFF;font-size:26px;color:#fff;">IMES</h5>
        <el-menu default-active="1" class="el-menu-vertical-demo"  background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" :unique-opened="true" :style="{minHeight:navMinHeight+'px',height:navHeight+'px'}" @open="handleOpen" @close="handleClose" @select="asideHandleSelect">
          <el-submenu :index=item.index v-for="item in navData">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.title}}</span>
            </template>
          <el-menu-item-group>
          <el-menu-item :index=i.index v-for="i in item.children" :name="111" :route="{name:'aaa'}">{{i.name}}</el-menu-item>
       
        </el-menu-item-group>
      </el-submenu>
    
    </el-menu>
            </el-aside>
            <el-container>
                <el-header style="padding:0;background-color:#409EFF">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" style="float:left;" mode="horizontal" background-color="#409EFF" text-color="#fff" active-text-color="#303133" @select="handleSelect" :route="{name:'aaa'}">
                    <el-menu-item index="home" @click="asidNavChange(1)">基础数据</el-menu-item>
                    <el-menu-item index="productPlan" @click="asidNavChange(2)">生产计划</el-menu-item>
                    <el-menu-item index="productSchedule" @click="asidNavChange(3)">生产调度</el-menu-item>
                    <el-menu-item index="qualityManage" @click="asidNavChange(4)">质量管理</el-menu-item>
                    <el-menu-item index="deviceManage" @click="asidNavChange(5)">制造资源</el-menu-item>
                    <el-menu-item index="personalManage" @click="asidNavChange(6)">人管管理</el-menu-item>
                    <el-menu-item index="documentManage" @click="asidNavChange(7)">文档管理</el-menu-item>
                    <el-menu-item index="materialLineManage" @click="asidNavChange(8)">线边仓管理</el-menu-item>
                    <el-menu-item index="comprehensiveReport" @click="asidNavChange(9)">综合报表</el-menu-item>
                    <el-menu-item index="systemManage" @click="asidNavChange(10)">系统管理</el-menu-item>
                    <el-menu-item index="qs" @click="asidNavChange(11)">质量检测</el-menu-item>
                    <el-menu-item index="qsz" @click="asidNavChange(12)">质量追溯</el-menu-item>
                    </el-menu>
                    <el-dropdown style="float:right;line-height:60px;" @command="togo">
                        <el-button type="primary">
                            系统管理员<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown" >
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                </el-header>
                <el-main style="padding:0 20px;">
                    <el-tabs v-model="editableTabsValue2" type="card" style="margin:10px 0;" @tab-remove="removeTab" @tab-click="togo">
                    <el-tab-pane
                      v-for="(item, index) in editableTabs2"
                      :key="item.name"
                      :label="item.title"
                      :name="item.name"
                      :closable="item.closable"
                    >
                    </el-tab-pane>
                  </el-tabs>
                  <router-view></router-view>
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
        navHeight: '',
        navMinHeight:'',
        activeIndex: "1",
        activeIndex2: "1",
        editableTabsValue2: 'home',
        editableTabs2: [
          {
            title: '首页',
            name: 'home',
            closable: false,
          }
        ],
        tabIndex: 2,
        navData:[
          {
            title:'公共数据管理',
            index: '1',
            children: [
              {
                index: 'exRate',
                name: '汇率维护'
              },
              {
                index: 'measureData',
                name: '计量维护'
              },
              {
                index: 'unitTrans',
                name: '单位转换'
              },
              {
                index: 'holidayManage',
                name: '节假日维护'
              },
              {
                index: '1-2',
                name: '工作日历生成'
              },
              {
                index: 'codeType',
                name: '代码类别'
              },
              {
                index: 'codeDef',
                name: '代码定义'
              },
              {
                index: 'supplyInfo',
                name: '供应商信息维护'
              },
              {
                index: 'codeRule',
                name: '编码规则维护'
              },
              {
                index: 'businessParameter',
                name: '业务参数维护'
              },
              {
                index: 'businessRule',
                name: '业务规则维护'
              }
            ]
          },
          {
            title:'制造资源管理',
            index: '2',
            children: [
              {
                index: 'organizationalTree',
                name: '组织结构维护'
              },
              {
                index: 'personnelMaintenanceTree',
                name: '人员维护'
              },
              {
                index: 'workCenter',
                name: '工作中心维护'
              },
              {
                index: 'equipMent',
                name: '设备维护'
              },
              {
                index: 'wareHouse',
                name: '仓库维护'
              },
              {
                index: 'location',
                name: '库位维护'
              }
            ]
          },
          {
            title:'物料数据管理',
            index: '3',
            children: [
              {
                index: 'materialInfo',
                name: '物料数据维护'
              }
            ]
          },
          {
            title:'产品数据管理',
            index: '4',
            children: [
              {
                index: 'productModel',
                name: '产品型号维护'
              },
              {
                index: 'productStructure',
                name: '产品结构数据维护'
              }
            ]
          },
          {
            title:'工艺数据管理',
            index: '5',
            children: [
              {
                index: 'processData',
                name: '工序数据维护'
              },
              {
                index: 'processRoute',
                name: '工艺路线维护'
              }
            ]
          }
        ]
      };
    },
    methods: {
      asidNavChange(key) {
        switch (key) {
          case 1:
            this.navData = [{title:'公共数据管理',index:'1',children:[{index:'exRate',name:'汇率维护'},{index:'measureData',name:'计量维护'},{index:'unitTrans',name:'单位转换'},{index:'holidayManage',name:'节假日维护'},{index:'1-2',name:'工作日历生成'},{index:'codeType',name:'代码类别'},{index:'codeDef',name:'代码定义'},{index:'supplyInfo',name:'供应商信息维护'},{index:'codeRule',name:'编码规则维护'},{index:'businessParameter',name:'业务参数维护'},{index:'businessRule',name:'业务规则维护'}]},{title:'制造资源管理',index:'2',children:[{index:'organizationalTree',name:'组织结构维护'},{index:'personnelMaintenanceTree',name:'人员维护'},{index:'workCenter',name:'工作中心维护'},{index:'equipMent',name:'设备维护'},{index:'wareHouse',name:'仓库维护'},{index:'location',name:'库位维护'}]},{title:'物料数据管理',index:'3',children:[{index:'materialInfo',name:'物料数据维护'}]},{title:'产品数据管理',index:'4',children:[{index:'productModel',name:'产品型号维护'},{index:'productStructure',name:'产品结构数据维护'}]},{title:'工艺数据管理',index:'5',children:[{index:'processData',name:'工序数据维护'},{index:'processRoute',name:'工艺路线维护'}]}]
            break;
          case 2:
            this.navData = [{title:'生产订单设计',index:'1',children:[{index:'productOrder',name:'成品订单维护'},{index:'unproductOrder',name:'半成品订单维护'},{index:'plannedOrderDesign',name:'计划订单设计'}]},{title:'生产订单编制',index:'2',children:[{index:'orderCodeQuery',name:'产品编码查询'},{index:'orderWorkcenter',name:'订单工作中心维护'}]},{title:'生产订单跟踪',index:'3',children:[{index:'orderList',name:'订单清单查询'}]}]
            break;
          case 3:
            this.navData = [{title:'作业计划',index:'1',children:[{index:'operatelPlanManage',name:'作业计划管理'},{index:'operatePlanTrack',name:'作业计划跟踪'}]}]
            break;
          case 4:
            this.navData = [{title:'基础数据管理',index:'1',children:[{index:'selfCheckTemplate',name:'开工自检模板设定'},{index:'takeSample',name:'取样方案维护'},{index:'productCheckProject',name:'产品检验项目维护'},{index:'bugCode',name:'缺陷代码维护'},{index:'failureRepository',name:'故障知识库维护'}]},{title:'质检管理',index:'2',children:[{index:'qualityInspectionPlan',name:'（离线）质检计划维护'},{index:'qualityInspectionGrade',name:'（离线）质检实绩维护'}]},{title:'质量判定与处置',index:'3',children:[{index:'productQualityEvaluationAndDisposal',name:'质量判定与处置'}]},{title:'数据管理',index:'4',children:[{index:'materialAssemblySheet',name:'物料装配单'},{index:'materialScrapSheet',name:'物料报废单'},{index:'materialTrack',name:'物料追溯与跟踪'},{index:'selfCheckQuery',name:'自检查询'}]}]
            break;
          case 5:
            this.navData = [{title:'维修保养管理',index:'1',children:[{index:'maintenanceProject',name:'维保项目维护'},{index:'maintenancePlan',name:'维保计划维护'},{index:'planGrade',name:'计划实绩维护'}]},{title:'备件仓库管理',index:'2',children:[{index:'replacepartRecord',name:'备件档案'},{index:'replacePartOutInWare',name:'备件出入库管理'},{index:'replacePartRepertory',name:'备件库存管理'},{index:'replacePartCount',name:'备件盘点'}]},{title:'设备监控',index:'3',children:[{index:'deviceRunRecord',name:'设备运行记录'},{index:'faultCode',name:'故障代码维护'},{index:'faultRepository',name:'设备故障知识库维护'},{index:'deviceFaultRepair',name:'设备故障维修'}]}]
            break;
          case 6:
            this.navData = [{title:'人员管理',index:'1',children:[{index:'personalTechnical',name:'人员技能/资质维护'},{index:'attendanceManage',name:'考勤信息维护'},{index:'attendanceInformation',name:'考勤信息查询'}]}]
            break;
          case 7:
            this.navData = [{title:'文档管理',index:'1',children:[{index:'document',name:'文档维护'}]}]
            break;
          case 8:
            this.navData = [{title:'线边仓管理',index:'1',children:[{index:'materialMove',name:'物料移动需求'},{index:'materialInWare',name:'物料入库管理'},{index:'materialOutWare',name:'物料出库管理'},{index:'materialRepertory',name:'物料库存管理'},{index:'supplementaryApply',name:'补料申请'},{index:'materialReturn',name:'退料管理'}]}]
            break;
          case 9:
            this.navData = [{title:'设备报表',index:'1',children:[{index:'deviceBugCount',name:'设备故障统计'},{index:'deviceRepairHour',name:'设备维修工时统计'},{index:'deviceMaitainHour',name:'设备保养工时统计'},{index:'deviceHalt',name:'设备停机情况'}]},{title:'人员报表',index:'2',children:[{index:'personalAttendance',name:'人员技能资质报表'}]},{title:'质量报表',index:'3',children:[{index:'productBugAnalysis',name:'产品缺陷分析'},{index:'oneTimePassRate',name:'一次性通过率'}]},{title:'产量报表',index:'4',children:[{index:'productionCapacityTwo',name:'产量报表'}]},]
            break;
          case 10:
            this.navData = [{title:'用户权限设置',index:'1',children:[{index:'roleSetting',name:'角色设置'},{index:'userAuthorSetting',name:'用户认证设置'}]},{title:'系统日志',index:'2',children:[{index:'userLoginLog',name:'用户登录日志'},{index:'userOperateLog',name:'用户操作日志'},{index:'sysetmVersionLog',name:'系统版本日志'}]}]
            break;
          case 11:
            this.navData = [{title:'质量检测',index:'1',children:[{index:'qs',name:'质量检测'}]}]
            break;
          case 12:
            this.navData = [{title:'质量追溯',index:'1',children:[{index:'qsz',name:'质量追溯'}]}]
            break;
        }
      },
      togo(callback){
        console.log(callback)
        this.$router.push(callback.name)
      },
      asideHandleSelect(key, keyPath) {
        this.$router.push(key)
        this.addTab(key,event.currentTarget.innerText)
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        this.$router.push(key)
        setTimeout(() => {
          this.addTab(this.navData[0].children[0].index,this.navData[0].children[0].name)
        }, 200);
      },
      addTab(targetName,text) {
        console.log(1231)
        for (let index = 0; index < this.editableTabs2.length; index++) {
             if(this.editableTabs2[index].title===text){
                this.editableTabsValue2 = this.editableTabs2[index].name;
                return
              }
        }
        console.log(targetName)
        let newTabName = targetName;
        this.editableTabs2.push({
          title: text,
          name: newTabName,
          closable: true,
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
      
    },
    beforeMount () {
      this.navMinHeight= document.documentElement.clientHeight-60;
    },
    mounted () {
      const that = this;
     
      window.onresize = function windowResize () {
        that.navHeight= document.documentElement.offsetHeight-60
      }
    }
  };
</script>
<style>
  #home {
    min-width: 1600px;
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
