<template>
    <div id="userOperateLog">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>系统管理</el-breadcrumb-item>
            <el-breadcrumb-item>系统日志</el-breadcrumb-item>
            <el-breadcrumb-item> 用户操作日志</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">员工编号：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">员工名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            
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
        <el-table
    :data="operateLogList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="account"
      label="人员编号"
     >
    </el-table-column>
    <el-table-column
      prop="userName"
      label="人员名称"
     >
    </el-table-column>
    <el-table-column
      prop="detail"
      label="操作内容"
     >
    </el-table-column>
    <el-table-column
      prop="tableName"
      label="操作表名"
     >
    </el-table-column>
    <el-table-column
      prop="recordIds"
      label="操作表id"
     >
    </el-table-column>
    <el-table-column
      prop="operateDateStr"
      label="操作时间"
     >
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
    name: 'userOperateLog',
    data () {
        return {
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
            operateLogList: [{
		"account": "admin",
		"detail": "删除计量维护记录",
		"id": 2504,
		"operateDate": "1527644197000",
		"operateDateStr": "2018-5-30 09:36:37",
		"recordIds": "[\"1002\"]",
		"tableName": "MES_Base_ExchangeRate",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"detail": "新增工作日历",
		"id": 2503,
		"operateDate": "1526835415000",
		"operateDateStr": "2018-5-21 00:56:55",
		"recordIds": "1",
		"tableName": "MES_Base_Work_Calendar",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"detail": "新增工作日历",
		"id": 2502,
		"operateDate": "1526835410000",
		"operateDateStr": "2018-5-21 00:56:50",
		"recordIds": "1",
		"tableName": "MES_Base_Work_Calendar",
		"userName": "系统管理员"
	}, {
		"detail": "删除订单工作中心信息",
		"id": 2501,
		"operateDate": "1526457604000",
		"operateDateStr": "2018-5-16 16:00:04",
		"recordIds": "B00190",
		"tableName": "MES_Product_Order_WorkCenter"
	}, {
		"account": "admin",
		"detail": "初始化密码",
		"id": 2500,
		"operateDate": "1526456142000",
		"operateDateStr": "2018-5-16 15:35:42",
		"recordIds": "[\"1021\"]",
		"tableName": "MES_Sys_User",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"detail": "新增收藏",
		"id": 2499,
		"operateDate": "1526455856000",
		"operateDateStr": "2018-5-16 15:30:56",
		"recordIds": "1",
		"tableName": "MES_Sys_User_Favorites",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"detail": "更新产品型号",
		"id": 2498,
		"operateDate": "1526345510000",
		"operateDateStr": "2018-5-15 08:51:50",
		"recordIds": "1003",
		"tableName": "MES_Base_ProductModel",
		"userName": "系统管理员"
	}, {
		"detail": "删除收藏",
		"id": 2497,
		"operateDate": "1515553444000",
		"operateDateStr": "2018-1-10 11:04:04",
		"recordIds": "11",
		"tableName": "MES_Sys_User_Favorites"
	}, {
		"detail": "删除收藏",
		"id": 2496,
		"operateDate": "1515553441000",
		"operateDateStr": "2018-1-10 11:04:01",
		"recordIds": "12",
		"tableName": "MES_Sys_User_Favorites"
	}, {
		"detail": "删除收藏",
		"id": 2495,
		"operateDate": "1515553440000",
		"operateDateStr": "2018-1-10 11:04:00",
		"recordIds": "13",
		"tableName": "MES_Sys_User_Favorites"
	}, {
		"account": "admin",
		"detail": "新增收藏",
		"id": 2494,
		"operateDate": "1515553436000",
		"operateDateStr": "2018-1-10 11:03:56",
		"recordIds": "13",
		"tableName": "MES_Sys_User_Favorites",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"detail": "新增收藏",
		"id": 2493,
		"operateDate": "1509085641000",
		"operateDateStr": "2017-10-27 14:27:21",
		"recordIds": "12",
		"tableName": "MES_Sys_User_Favorites",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"detail": "新增角色",
		"id": 2492,
		"operateDate": "1507866150000",
		"operateDateStr": "2017-10-13 11:42:30",
		"recordIds": "1017",
		"tableName": "MES_Sys_Role",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"detail": "更新产品结构数据",
		"id": 2491,
		"operateDate": "1505269732000",
		"operateDateStr": "2017-9-13 10:28:52",
		"recordIds": "1004",
		"tableName": "MES_Base_ProductStructure",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"detail": "更新物料数据",
		"id": 2490,
		"operateDate": "1505269720000",
		"operateDateStr": "2017-9-13 10:28:40",
		"recordIds": "1025",
		"tableName": "MES_Base_MaterialBaseInfo",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"detail": "更新物料数据",
		"id": 2489,
		"operateDate": "1505269692000",
		"operateDateStr": "2017-9-13 10:28:12",
		"recordIds": "1025",
		"tableName": "MES_Base_MaterialBaseInfo",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"detail": "更新产品结构数据",
		"id": 2488,
		"operateDate": "1505269159000",
		"operateDateStr": "2017-9-13 10:19:19",
		"recordIds": "1004",
		"tableName": "MES_Base_ProductStructure",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"detail": "更新产品结构数据",
		"id": 2487,
		"operateDate": "1505268739000",
		"operateDateStr": "2017-9-13 10:12:19",
		"recordIds": "1004",
		"tableName": "MES_Base_ProductStructure",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"detail": "新增代码类别",
		"id": 2486,
		"operateDate": "1504443815000",
		"operateDateStr": "2017-9-03 21:03:35",
		"recordIds": "1079",
		"tableName": "MES_Base_CodeType",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"detail": "新增收藏",
		"id": 2485,
		"operateDate": "1503043349000",
		"operateDateStr": "2017-8-18 16:02:29",
		"recordIds": "11",
		"tableName": "MES_Sys_User_Favorites",
		"userName": "系统管理员"
	}],
        currentPage: 1
        }
    },
    methods: {
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
}
</script>
