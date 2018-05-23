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
            this.navData = [{title:'工序数据维护',index:'1'}]
            break;
        }
      },
      togo(callback){
        console.log(callback)
        this.$router.push(callback.name)
      },
      asideHandleSelect(key, keyPath) {
        this.$router.push(key)
        console.log(key);
        this.addTab(key,event.currentTarget.innerText)
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.$router.push(key)
      },
      addTab(targetName,text) {
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
