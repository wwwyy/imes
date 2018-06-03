<template>
    <div id="replacePartOutInWare">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>设备管理</el-breadcrumb-item>
            <el-breadcrumb-item>备件仓库管理</el-breadcrumb-item>
            <el-breadcrumb-item>备件出入库管理</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
              <el-button size="small" icon="el-icon-plus" style="width:100px"> 新 增 </el-button>
          <el-button size="small" icon="el-icon-delete" style="width:100px"> 删 除 </el-button>
          <el-button size="small" icon="el-icon-circle-check" style="width:100px"> 确 认 </el-button>
          <el-button size="small" icon="el-icon-error" style="width:100px"> 撤 回 </el-button>
          <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
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
    :data="spareOutStorageList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="storageCode"
      label="单号ID"
      width="120"
     >
    </el-table-column>
    <el-table-column
      prop="sparepartsCode"
      label="	备件代码"
      width="120"
     >
    </el-table-column>
    <el-table-column
      prop="sparepartsName"
      label="	备件名称"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="storageTypeName"
      label="类型"
     >
    </el-table-column>
    <el-table-column
      prop="sparepartsCount"
      label="数量"
     >
    </el-table-column>
    <el-table-column
      prop="occurrenceTimeStr"
      label="发生时间"
      width="150"
     >
    </el-table-column>
    <el-table-column
      prop="storageStatusName"
      label="状态"
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
    name: 'replacePartOutInWare',
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
            spareOutStorageList: [{
		"createDate": "1488874401000",
		"createDateStr": "2017-03-07 16:13:21",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1005",
		"maintenanceCode": "",
		"occurrenceTime": "1488849000000",
		"occurrenceTimeStr": "2017-03-07 09:10:00",
		"remark": "123123",
		"sparepartsCode": "KRNYIGRML5",
		"sparepartsCount": "123",
		"sparepartsName": "曲轴",
		"storageCode": "store0150",
		"storageStatus": "0",
		"storageStatusName": "创建",
		"storageType": "BJCRKLX_RK",
		"storageTypeName": "入库",
		"updateDate": "1496909557000",
		"updateDateStr": "2017-06-08 16:12:37",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1487845298000",
		"createDateStr": "2017-02-23 18:21:38",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"id": "1004",
		"maintenanceCode": "",
		"occurrenceTime": "1487845260000",
		"occurrenceTimeStr": "2017-02-23 18:21:00",
		"remark": "",
		"sparepartsCode": "KRNYIGRML5",
		"sparepartsCount": "14",
		"sparepartsName": "曲轴",
		"storageCode": "store0131",
		"storageStatus": "1",
		"storageStatusName": "确认",
		"storageType": "BJCRKLX_RK",
		"storageTypeName": "入库",
		"updateDate": "1487845357000",
		"updateDateStr": "2017-02-23 18:22:37",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
	}, {
		"createDate": "1487655453000",
		"createDateStr": "2017-02-21 13:37:33",
		"createUser": "PENG028",
		"createUserName": "测试01",
		"id": "1003",
		"maintenanceCode": "plan0204",
		"occurrenceTime": "1487310600000",
		"occurrenceTimeStr": "2017-02-17 13:50:00",
		"remark": "",
		"sparepartsCode": "2O8WO23USS",
		"sparepartsCount": "80",
		"sparepartsName": "备件01",
		"storageCode": "store0130",
		"storageStatus": "0",
		"storageStatusName": "创建",
		"storageType": "BJCRKLX_CK",
		"storageTypeName": "出库",
		"updateDate": "1487655453000",
		"updateDateStr": "2017-02-21 13:37:33",
		"updateUser": "PENG028",
		"updateUserName": "测试01"
	}, {
		"createDate": "1487655413000",
		"createDateStr": "2017-02-21 13:36:53",
		"createUser": "PENG028",
		"createUserName": "测试01",
		"id": "1002",
		"maintenanceCode": "plan0204",
		"occurrenceTime": "1487918100000",
		"occurrenceTimeStr": "2017-02-24 14:35:00",
		"remark": "",
		"sparepartsCode": "8AL4TKDF3T",
		"sparepartsCount": "60",
		"sparepartsName": "备件03",
		"storageCode": "store0128",
		"storageStatus": "0",
		"storageStatusName": "创建",
		"storageType": "BJCRKLX_CK",
		"storageTypeName": "出库",
		"updateDate": "1487655413000",
		"updateDateStr": "2017-02-21 13:36:53",
		"updateUser": "PENG028",
		"updateUserName": "测试01"
	}, {
		"createDate": "1487655396000",
		"createDateStr": "2017-02-21 13:36:36",
		"createUser": "PENG028",
		"createUserName": "测试01",
		"id": "1001",
		"maintenanceCode": "",
		"occurrenceTime": "1486522200000",
		"occurrenceTimeStr": "2017-02-08 10:50:00",
		"remark": "",
		"sparepartsCode": "8AL4TKDF3T",
		"sparepartsCount": "82",
		"sparepartsName": "备件03",
		"storageCode": "store0127",
		"storageStatus": "1",
		"storageStatusName": "确认",
		"storageType": "BJCRKLX_RK",
		"storageTypeName": "入库",
		"updateDate": "1487827335000",
		"updateDateStr": "2017-02-23 13:22:15",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1487655377000",
		"createDateStr": "2017-02-21 13:36:17",
		"createUser": "PENG028",
		"createUserName": "测试01",
		"id": "1000",
		"maintenanceCode": "",
		"occurrenceTime": "1487655360000",
		"occurrenceTimeStr": "2017-02-21 13:36:00",
		"remark": "",
		"sparepartsCode": "8AL4TKDF3T",
		"sparepartsCount": "60",
		"sparepartsName": "备件03",
		"storageCode": "store0126",
		"storageStatus": "0",
		"storageStatusName": "创建",
		"storageType": "BJCRKLX_RK",
		"storageTypeName": "入库",
		"updateDate": "1487655377000",
		"updateDateStr": "2017-02-21 13:36:17",
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
