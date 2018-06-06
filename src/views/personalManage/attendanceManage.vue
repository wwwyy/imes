<template>
    <div id="attendanceManage">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>人员管理</el-breadcrumb-item>
            <el-breadcrumb-item>考勤信息维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-delete" style="width:100px"> 删 除 </el-button>
            <el-button size="small" icon="el-icon-edit-outline" style="width:100px"> 审 核 </el-button>
            <el-button size="small"  style="width:100px"> 看 假 期 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
             <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">班组：		</span>
            <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px">部门：		</span>
                <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            
             <span style="margin-left:40px;line-height:32px;font-size:14px;">类型：	</span>
            <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          
            <br>
            <br>
             <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">员工代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
              <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px;">员工名称：	</span>
              <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
        </div>
        <el-table
    :data="attendanceManageList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="personCode"
      label="员工代码"
     >
    </el-table-column>
    <el-table-column
      prop="personName"
      label="员工名称"
     >
    </el-table-column>
    <el-table-column
      prop="banGroupName"
      label="班组"
      >
    </el-table-column>
    <el-table-column
      prop="organizationName"
      label="部门"
      width="200"
      >
    </el-table-column>
    <el-table-column
      prop="attendanceTypeName"
      label="	业务类型"
      >
    </el-table-column>
    <el-table-column
      prop="attendanceDateStr"
      label="日期"
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="attendanceStartTimeStr"
      label="	开始时间"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="attendanceEndTimeStr"
      label="结束时间"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="attendanceStatusName"
      label="状态"
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
    name: 'attendanceManage',
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
            attendanceManageList: [{
		"attendanceDate": "1497974400000",
		"attendanceDateStr": "2017-06-21",
		"attendanceDuration": "10",
		"attendanceEndTime": "1498039200000",
		"attendanceEndTimeStr": "18:00:00",
		"attendanceStartTime": "1498003200000",
		"attendanceStartTimeStr": "08:00:00",
		"attendanceStatus": "2",
		"attendanceStatusName": "审核",
		"attendanceType": "1",
		"attendanceTypeName": "事假",
		"createDate": "1497324286000",
		"createDateStr": "2017-06-13 11:24:46",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1007,
		"organizationName": "浙江长华汽车零配件有限公司",
		"personCode": "admin",
		"personName": "系统管理员",
		"remark": "",
		"updateDate": "1497324291000",
		"updateDateStr": "2017-06-13 11:24:51",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"attendanceDate": "1487865600000",
		"attendanceDateStr": "2017-02-24",
		"attendanceDuration": "1",
		"attendanceEndTime": "1487908800000",
		"attendanceEndTimeStr": "12:00:00",
		"attendanceStartTime": "1487905200000",
		"attendanceStartTimeStr": "11:00:00",
		"attendanceStatus": "2",
		"attendanceStatusName": "审核",
		"attendanceType": "1",
		"attendanceTypeName": "事假",
		"banGroupName": "甲",
		"createDate": "1487906929000",
		"createDateStr": "2017-02-24 11:28:49",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"id": 1006,
		"organizationName": "A线小微",
		"personCode": "PENG035",
		"personName": "高丽娟",
		"remark": "",
		"updateDate": "1487906936000",
		"updateDateStr": "2017-02-24 11:28:56",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
	}, {
		"attendanceDate": "1487865600000",
		"attendanceDateStr": "2017-02-24",
		"attendanceDuration": "1",
		"attendanceEndTime": "1487912400000",
		"attendanceEndTimeStr": "13:00:00",
		"attendanceStartTime": "1487908800000",
		"attendanceStartTimeStr": "12:00:00",
		"attendanceStatus": "2",
		"attendanceStatusName": "审核",
		"attendanceType": "0",
		"attendanceTypeName": "公出",
		"banGroupName": "甲",
		"createDate": "1487906530000",
		"createDateStr": "2017-02-24 11:22:10",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"id": 1005,
		"organizationName": "A线小微",
		"personCode": "PENG035",
		"personName": "高丽娟",
		"remark": "",
		"updateDate": "1487906880000",
		"updateDateStr": "2017-02-24 11:28:00",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
	}, {
		"attendanceDate": "1487865600000",
		"attendanceDateStr": "2017-02-24",
		"attendanceDuration": "0.5",
		"attendanceEndTime": "1487905200000",
		"attendanceEndTimeStr": "11:00:00",
		"attendanceStartTime": "1487903400000",
		"attendanceStartTimeStr": "10:30:00",
		"attendanceStatus": "2",
		"attendanceStatusName": "审核",
		"attendanceType": "0",
		"attendanceTypeName": "公出",
		"createDate": "1487905166000",
		"createDateStr": "2017-02-24 10:59:26",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1004,
		"organizationName": "浙江长华汽车零配件有限公司",
		"personCode": "admin",
		"personName": "系统管理员",
		"remark": "",
		"updateDate": "1489721129000",
		"updateDateStr": "2017-03-17 11:25:29",
		"updateUser": "PENG016",
		"updateUserName": "测试组4.0"
	}, {
		"attendanceDate": "1486569600000",
		"attendanceDateStr": "2017-02-09",
		"attendanceDuration": "1",
		"attendanceEndTime": "1486629000000",
		"attendanceEndTimeStr": "16:30:00",
		"attendanceStartTime": "1486625400000",
		"attendanceStartTimeStr": "15:30:00",
		"attendanceStatus": "2",
		"attendanceStatusName": "审核",
		"attendanceType": "0",
		"attendanceTypeName": "公出",
		"banGroupName": "乙",
		"createDate": "1487654978000",
		"createDateStr": "2017-02-21 13:29:38",
		"createUser": "PENG028",
		"createUserName": "测试01",
		"id": 1003,
		"organizationName": "上压机后盖",
		"personCode": "PENG028",
		"personName": "测试01",
		"remark": "",
		"updateDate": "1487905531000",
		"updateDateStr": "2017-02-24 11:05:31",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"attendanceDate": "1485878400000",
		"attendanceDateStr": "2017-02-01",
		"attendanceDuration": "2.5",
		"attendanceEndTime": "1485937800000",
		"attendanceEndTimeStr": "16:30:00",
		"attendanceStartTime": "1485928800000",
		"attendanceStartTimeStr": "14:00:00",
		"attendanceStatus": "2",
		"attendanceStatusName": "审核",
		"attendanceType": "1",
		"attendanceTypeName": "事假",
		"banGroupName": "乙",
		"createDate": "1487654953000",
		"createDateStr": "2017-02-21 13:29:13",
		"createUser": "PENG028",
		"createUserName": "测试01",
		"id": 1002,
		"organizationName": "上压机后盖",
		"personCode": "PENG028",
		"personName": "测试01",
		"remark": "",
		"updateDate": "1496971685000",
		"updateDateStr": "2017-06-09 09:28:05",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"attendanceDate": "1486483200000",
		"attendanceDateStr": "2017-02-08",
		"attendanceDuration": "0.5",
		"attendanceEndTime": "1486537200000",
		"attendanceEndTimeStr": "15:00:00",
		"attendanceStartTime": "1486535400000",
		"attendanceStartTimeStr": "14:30:00",
		"attendanceStatus": "1",
		"attendanceStatusName": "创建",
		"attendanceType": "0",
		"attendanceTypeName": "公出",
		"createDate": "1487654803000",
		"createDateStr": "2017-02-21 13:26:43",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": 1001,
		"organizationName": "浙江长华汽车零配件有限公司",
		"personCode": "admin",
		"personName": "系统管理员",
		"remark": ""
	}, {
		"attendanceDate": "1485792000000",
		"attendanceDateStr": "2017-01-31",
		"attendanceDuration": "9",
		"attendanceEndTime": "1485856800000",
		"attendanceEndTimeStr": "18:00:00",
		"attendanceStartTime": "1485824400000",
		"attendanceStartTimeStr": "09:00:00",
		"attendanceStatus": "1",
		"attendanceStatusName": "创建",
		"attendanceType": "1",
		"attendanceTypeName": "事假",
		"createDate": "1487654769000",
		"createDateStr": "2017-02-21 13:26:09",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": 1000,
		"organizationName": "浙江长华汽车零配件有限公司",
		"personCode": "admin",
		"personName": "系统管理员",
		"remark": ""
	}],
        currentPage: 1
        }
    },
    methods: {
		add(){
		  this.$router.push('attendanceManageAdd')
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
}
</script>
