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
    min-width: 1500px;
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
