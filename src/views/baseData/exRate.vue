<template>
    <div id="exRate">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>公共数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>汇率维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="toAdd">新增</el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px">导出</el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px" @click="reset"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
            <span style="line-height:32px;font-size:14px;">原币名称：</span>
                <el-select v-model="nameType" placeholder="请选择" size="small" clearable>
                <el-option
                v-for="item in nameOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <span style="margin-left:40px;line-height:32px;font-size:14px;" >可用标识：</span>
            <el-select v-model="markType" placeholder="请选择" size="small" clearable>
                <el-option
                v-for="item in markOptions"
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
                size="small">
            </el-date-picker>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">结束日期：</span>
             <el-date-picker
                v-model="endDate"
                type="date"
                placeholder="选择日期"
                size="small">
            </el-date-picker>
        </div>
        <el-table
    :data="tables"
    border
    align='left'
    style="width: 100%"
    size="mini">
     <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      fixed
      prop="standardMoneyName"
      label="本币名称"
     >
    </el-table-column>
    <el-table-column
      prop="exchangeMoneyName"
      label="原币名称"
      >
    </el-table-column>
    <el-table-column
      prop="exchangeUnit"
      label="原币换算单位"
      >
    </el-table-column>
    <el-table-column
      prop="transform"
      label="原币折算价"
     >
    </el-table-column>
    <el-table-column
      prop="publishDate"
      label="发布时间"
      >
    </el-table-column>
    <el-table-column
      prop="version"
      label="版本号"
      >
    </el-table-column>
    <el-table-column
      prop="markAble"
      label="可用标识"
      >
    </el-table-column>
    <el-table-column
      prop="createUserName"
      label="创建人"
      >
    </el-table-column>
    <el-table-column
      prop="createDate"
      label="创建时间"
      >
    </el-table-column>
    <el-table-column
      prop="updateUserName"
      label="最后更新人"
      >
    </el-table-column>
    <el-table-column
      prop="updateDate"
      label="最后更新时间"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      >
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
   <div style="margin:15px 0">
       <el-pagination
       background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
   </div>
    </div>
</template>
<script>
export default {
    name: 'exRate',
    data () {
        return {
            nameOptions: [
                {
                    value: '欧元',
                    label: '欧元'
                }, 
                {
                    value: '人民币',
                    label: '人民币'
                }
            ],
            markOptions: [
                {
                    value: '1',
                    label: '启用'
                }, 
                {
                    value: '0',
                    label: '停用'
                }
            ],
            nameType: '',
            markType: '',
            startDate: '',
            endDate: '',
            tableData: [{
		"createDate": "1487756496000",
		"createDateStr": "2017-02-22 17:41:36",
		"createUser": "admin",
		"createUserName": "administrator",
		"exchangeMoneyCode": "RMB",
		"exchangeMoneyName": "人民币",
		"exchangeUnit": "1",
		"id": "1002",
		"markAble": "1",
		"publishDate": "2017-02-22",
		"publishDateStr": "2017-02-22 17:40:00",
		"reMark": "",
		"standardMoneyCode": "EUR",
		"standardMoneyName": "欧元",
		"transform": "0.1100",
		"updateDate": "1487756496000",
		"updateDateStr": "2017-02-22 17:41:36",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V1.97"
	}, {
		"createDate": "1487755818000",
		"createDateStr": "2017-02-22 17:30:18",
		"createUser": "admin",
		"createUserName": "administrator",
		"exchangeMoneyCode": "RMB",
		"exchangeMoneyName": "人民币",
		"exchangeUnit": "1",
		"id": "1001",
		"markAble": "0",
		"publishDate": "2017-02-22",
		"publishDateStr": "2017-02-22 17:30:00",
		"reMark": "",
		"standardMoneyCode": "EUR",
		"standardMoneyName": "欧元",
		"transform": "3.0000",
		"updateDate": "1487755818000",
		"updateDateStr": "2017-02-22 17:30:18",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V1.96"
	}, {
		"createDate": "1487755226000",
		"createDateStr": "2017-02-22 17:20:26",
		"createUser": "admin",
		"createUserName": "administrator",
		"exchangeMoneyCode": "EUR",
		"exchangeMoneyName": "欧元",
		"exchangeUnit": "1",
		"id": "1000",
		"markAble": "1",
		"publishDate": "2017-02-22",
		"publishDateStr": "2017-02-22 17:20:00",
		"reMark": "",
		"standardMoneyCode": "EUR",
		"standardMoneyName": "欧元",
		"transform": "11.0000",
		"updateDate": "1487755226000",
		"updateDateStr": "2017-02-22 17:20:26",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V1.94"
	}],
        currentPage: 1
        }
    },
    methods: {
      handleClick(row) {
        console.log(row);
        this.$router.push('exRateEdit')
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      toAdd(){
        this.$router.push('exRateAdd')
      },
      reset(){
        this.nameType = '';
        this.markType = '';
        this.startDate ='';
        this.endDate = '';
      }
    },
    computed:{ 
        tables:function(){
        var search=this.nameType;
        var mark = this.markType;
        if(search){
          return  this.tableData.filter(function(dataNews){
            return Object.keys(dataNews).some(function(key){
              if( key==='exchangeMoneyName') {
                console.log(String(dataNews[key]).toLowerCase().indexOf(search))
                return String(dataNews[key]).toLowerCase().indexOf(search) > -1
              }
            })
          })
        }
        if(mark){
          return  this.tableData.filter(function(dataNews){
            return Object.keys(dataNews).some(function(key){
              if( key==='markAble') {
                console.log(String(dataNews[key]).toLowerCase().indexOf(mark))
                return String(dataNews[key]).toLowerCase().indexOf(mark) > -1
              }
            })
          })
        }
        return this.tableData
      }
    }
}
</script>
