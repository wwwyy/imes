<template>
    <div id="userLoginLog">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>系统管理</el-breadcrumb-item>
            <el-breadcrumb-item>系统日志</el-breadcrumb-item>
            <el-breadcrumb-item>用户登录日志</el-breadcrumb-item>
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
    :data="loginLogList"
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
      label="员工编号"
     >
    </el-table-column>
    <el-table-column
      prop="userName"
      label="员工名称"
     >
    </el-table-column>
    <el-table-column
      prop="ip"
      label="IP地址"
     >
    </el-table-column>
    <el-table-column
      prop="operateDateStr"
      label="	操作时间"
     >
    </el-table-column>
    <el-table-column
      prop="statusStr"
      label="	状态"
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
    name: 'userLoginLog',
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
            loginLogList: [{
		"account": "admin",
		"id": 7938,
		"ip": "119.167.50.184",
		"operateDateStr": "2018-6-04 02:27:53",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7937,
		"ip": "119.167.50.184",
		"operateDateStr": "2018-6-04 00:07:55",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7936,
		"ip": "119.167.50.184",
		"operateDateStr": "2018-6-03 22:10:18",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7935,
		"ip": "119.167.50.184",
		"operateDateStr": "2018-6-03 18:05:34",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7934,
		"ip": "119.167.50.184",
		"operateDateStr": "2018-6-03 14:35:09",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7933,
		"ip": "119.167.50.184",
		"operateDateStr": "2018-6-03 13:07:18",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7932,
		"ip": "119.167.50.184",
		"operateDateStr": "2018-6-02 19:42:12",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7931,
		"ip": "119.167.50.184",
		"operateDateStr": "2018-6-02 19:42:09",
		"statusStr": "登出",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7930,
		"ip": "119.167.50.184",
		"operateDateStr": "2018-6-02 17:38:37",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7929,
		"ip": "123.235.55.210",
		"operateDateStr": "2018-6-01 15:51:35",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7928,
		"ip": "123.235.55.210",
		"operateDateStr": "2018-6-01 14:52:35",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7927,
		"ip": "119.167.50.184",
		"operateDateStr": "2018-5-31 23:59:50",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7926,
		"ip": "123.235.55.210",
		"operateDateStr": "2018-5-31 14:04:36",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7925,
		"ip": "123.235.55.210",
		"operateDateStr": "2018-5-31 11:34:07",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7924,
		"ip": "123.235.55.210",
		"operateDateStr": "2018-5-31 11:01:10",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7923,
		"ip": "123.235.55.210",
		"operateDateStr": "2018-5-31 09:50:51",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7922,
		"ip": "123.235.55.210",
		"operateDateStr": "2018-5-31 09:50:41",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7921,
		"ip": "123.235.55.210",
		"operateDateStr": "2018-5-30 11:03:51",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7920,
		"ip": "123.235.55.210",
		"operateDateStr": "2018-5-30 09:36:14",
		"statusStr": "登录",
		"userName": "系统管理员"
	}, {
		"account": "admin",
		"id": 7919,
		"ip": "123.235.55.210",
		"operateDateStr": "2018-5-29 09:40:33",
		"statusStr": "登录",
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
