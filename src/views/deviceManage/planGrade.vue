<template>
    <div id="planGrade">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>设备管理</el-breadcrumb-item>
            <el-breadcrumb-item>维修保养管理</el-breadcrumb-item>
            <el-breadcrumb-item>计划实绩维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" > 生成下次维保计划 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
             <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">单号ID：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
             <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">设备名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
             <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">执行人：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
             
          
            <br>
            <br>
            
              <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px;">类型：</span>
                <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
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
    :data="pgList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="maintenanceCode"
      label="单号ID"
     >
    </el-table-column>
    <el-table-column
      prop="equipCode"
      label="设备代码"
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="equipName"
      label="设备名称"
      width="150"
     >
    </el-table-column>
    <el-table-column
      prop="maintenanceTypeName"
      label="类型"
     >
    </el-table-column>
    <el-table-column
      prop="actDateStr"
      label="实际执行日期"
      width="150"
     >
    </el-table-column>
    <el-table-column
      prop="executeUserName"
      label="执行人"
     >
    </el-table-column>
    <el-table-column
      prop="createUserName"
      label="创建人"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="createDateStr"
      label="创建时间"
      width="160"
      >
    </el-table-column>
    <el-table-column
      prop="updateUserName"
      label="最后更新人"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="updateDateStr"
      label="最后更新时间"
      width="160"
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
    name: 'planGrade',
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
            pgList: [{
		"actDateStr": "2017-02-24",
		"createDate": "1487897512000",
		"createDateStr": "2017-02-24 08:51:52",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"equipCode": "9050MAMTFP0012",
		"equipName": "新线门体发泡夹具12",
		"equipType": "name2",
		"executeUser": "PENG035",
		"executeUserName": "高丽娟",
		"id": "1005",
		"instruction": "正常",
		"maintenanceCode": "plan0210",
		"maintenanceType": "MP_5",
		"maintenanceTypeName": "保养",
		"markAble": "1",
		"nextActDateStr": "2017-03-24",
		"planDate": "1487865600000",
		"planDateStr": "2017-02-24",
		"planStatus": "0",
		"remark": "新线门体发泡夹具12",
		"responsibleUser": "PENG017",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487905767000",
		"updateDateStr": "2017-02-24 11:09:27",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1487900750000",
		"createDateStr": "2017-02-24 09:45:50",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"equipCode": "9050MAMTFP0012",
		"equipName": "新线门体发泡夹具12",
		"equipType": "name2",
		"executeUser": "PENG035",
		"id": "1007",
		"instruction": "正常",
		"maintenanceCode": "plan0213",
		"maintenanceType": "MP_5",
		"maintenanceTypeName": "保养",
		"markAble": "1",
		"planDate": "1490284800000",
		"planDateStr": "2017-03-24",
		"planStatus": "0",
		"remark": "新线门体发泡夹具12",
		"responsibleUser": "PENG017",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487900750000",
		"updateDateStr": "2017-02-24 09:45:50",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1487898743000",
		"createDateStr": "2017-02-24 09:12:23",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"equipCode": "9050MAMTFP0012",
		"equipName": "新线门体发泡夹具12",
		"equipType": "name2",
		"id": "1006",
		"maintenanceCode": "plan0212",
		"maintenanceType": "MP_5",
		"maintenanceTypeName": "保养",
		"markAble": "1",
		"planDate": "1487865600000",
		"planDateStr": "2017-02-24",
		"planStatus": "0",
		"remark": "",
		"responsibleUser": "PENG035",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487898743000",
		"updateDateStr": "2017-02-24 09:12:23",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1487844916000",
		"createDateStr": "2017-02-23 18:15:16",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"equipCode": "9050MAMTFP0015",
		"equipName": "新线门体发泡夹具15",
		"equipType": "name2",
		"id": "1004",
		"maintenanceCode": "plan0209",
		"maintenanceType": "MP_5",
		"maintenanceTypeName": "保养",
		"markAble": "1",
		"planDate": "1487865600000",
		"planDateStr": "2017-02-24",
		"planStatus": "0",
		"remark": "",
		"responsibleUser": "PENG035",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487844916000",
		"updateDateStr": "2017-02-23 18:15:16",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
	}, {
		"createDate": "1487844731000",
		"createDateStr": "2017-02-23 18:12:11",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"equipCode": "9050MAMTFP0012",
		"equipName": "新线门体发泡夹具12",
		"equipType": "name2",
		"id": "1003",
		"maintenanceCode": "plan0208",
		"maintenanceType": "MP_5",
		"maintenanceTypeName": "保养",
		"markAble": "1",
		"planDate": "1487865600000",
		"planDateStr": "2017-02-24",
		"planStatus": "0",
		"remark": "",
		"responsibleUser": "PENG035",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487844731000",
		"updateDateStr": "2017-02-23 18:12:11",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
	}, {
		"createDate": "1487655185000",
		"createDateStr": "2017-02-21 13:33:05",
		"createUser": "PENG028",
		"createUserName": "测试01",
		"equipCode": "9050MAMTFP0028",
		"equipName": "新线门体发泡夹具28",
		"equipType": "name2",
		"id": "1002",
		"maintenanceCode": "plan0205",
		"maintenanceType": "MP_4",
		"maintenanceTypeName": "维修",
		"markAble": "1",
		"planDate": "1487260800000",
		"planDateStr": "2017-02-17",
		"planStatus": "0",
		"remark": "",
		"responsibleUser": "PENG027",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487655185000",
		"updateDateStr": "2017-02-21 13:33:05",
		"updateUser": "PENG028",
		"updateUserName": "测试01"
	}, {
		"createDate": "1487655133000",
		"createDateStr": "2017-02-21 13:32:13",
		"createUser": "PENG028",
		"createUserName": "测试01",
		"equipCode": "9050MAMTFP0012",
		"equipName": "新线门体发泡夹具12",
		"equipType": "name2",
		"id": "1001",
		"maintenanceCode": "plan0204",
		"maintenanceType": "MP_1",
		"maintenanceTypeName": "维保类型1",
		"markAble": "1",
		"planDate": "1487865600000",
		"planDateStr": "2017-02-24",
		"planStatus": "0",
		"remark": "",
		"responsibleUser": "PENG028",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487655133000",
		"updateDateStr": "2017-02-21 13:32:13",
		"updateUser": "PENG028",
		"updateUserName": "测试01"
	}, {
		"createDate": "1487655091000",
		"createDateStr": "2017-02-21 13:31:31",
		"createUser": "PENG028",
		"createUserName": "测试01",
		"equipCode": "9050BADTZD0034",
		"equipName": "A线动态作电检验34",
		"equipType": "name2",
		"id": "1000",
		"maintenanceCode": "plan0203",
		"maintenanceType": "MP_2",
		"maintenanceTypeName": "维保类型2",
		"markAble": "1",
		"planDate": "1487088000000",
		"planDateStr": "2017-02-15",
		"planStatus": "0",
		"remark": "",
		"responsibleUser": "PENG027",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487655091000",
		"updateDateStr": "2017-02-21 13:31:31",
		"updateUser": "PENG028",
		"updateUserName": "测试01"
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
