<template>
    <div id="materialScrapSheet">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>质量管理</el-breadcrumb-item>
            <el-breadcrumb-item>数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>物料报废单</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
             <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">订单代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
             <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px">型号代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px">产品名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <br>
            <br>
             
            <span style="line-height:32px;font-size:14px;">开始日期：</span>
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
    :data="orderList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="orderCode"
      label="订单代码"
      >
    </el-table-column>
    <el-table-column
      prop="modelCode"
      label="型号代码"
     >
    </el-table-column>
    <el-table-column
      prop="productName"
      label="产品名称"
     >
    </el-table-column>
    <el-table-column
      prop="planStartTimeStr"
      label="作业开始日期"
      >
    </el-table-column>
    <el-table-column
      prop=""
      label="状态"
     >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      >
      <template slot-scope="scope">
           <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
        <el-button type="text" size="small" @click="handleClick(scope.row)">确认</el-button>
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
    name: 'materialScrapSheet',
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
            orderList: [{
		"createDateStr": "2017-08-03 09:26:16",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501689600000",
		"deliveryDateStr": "2017-08-03",
		"id": "1146",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00190",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501689600000",
		"planEndTimeStr": "2017-08-03",
		"planNum": "111",
		"planStartTime": "1501689600000",
		"planStartTimeStr": "2017-08-03",
		"productLine": "",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-03 09:26:16",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0318"
	}, {
		"createDateStr": "2017-08-03 09:20:38",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501689600000",
		"deliveryDateStr": "2017-08-03",
		"id": "1145",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00189",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501689600000",
		"planEndTimeStr": "2017-08-03",
		"planNum": "432",
		"planStartTime": "1501689600000",
		"planStartTimeStr": "2017-08-03",
		"productLine": "",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-03 09:20:38",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0317"
	}, {
		"createDateStr": "2017-08-03 09:13:27",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501776000000",
		"deliveryDateStr": "2017-08-04",
		"id": "1144",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00188",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501689600000",
		"planEndTimeStr": "2017-08-03",
		"planNum": "321",
		"planStartTime": "1501689600000",
		"planStartTimeStr": "2017-08-03",
		"productLine": "",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-03 09:13:27",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0316"
	}, {
		"createDateStr": "2017-08-03 09:04:06",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501689600000",
		"deliveryDateStr": "2017-08-03",
		"id": "1143",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00187",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501689600000",
		"planEndTimeStr": "2017-08-03",
		"planNum": "123",
		"planStartTime": "1501689600000",
		"planStartTimeStr": "2017-08-03",
		"productLine": "",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-03 09:04:06",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0315"
	}, {
		"createDateStr": "2017-08-03 08:56:29",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501689600000",
		"deliveryDateStr": "2017-08-03",
		"id": "1142",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00186",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501689600000",
		"planEndTimeStr": "2017-08-03",
		"planNum": "100",
		"planStartTime": "1501689600000",
		"planStartTimeStr": "2017-08-03",
		"productLine": "",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-03 08:56:29",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0314"
	}, {
		"createDateStr": "2017-08-03 08:41:11",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501689600000",
		"deliveryDateStr": "2017-08-03",
		"id": "1141",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00185",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501689600000",
		"planEndTimeStr": "2017-08-03",
		"planNum": "300",
		"planStartTime": "1501689600000",
		"planStartTimeStr": "2017-08-03",
		"productLine": "",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-03 08:43:33",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0313"
	}, {
		"createDateStr": "2017-08-02 15:02:02",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501603200000",
		"deliveryDateStr": "2017-08-02",
		"id": "1140",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00184",
		"orderNature": "Custom-pro",
		"orderNatureName": "定制产品",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501603200000",
		"planEndTimeStr": "2017-08-02",
		"planNum": "523",
		"planStartTime": "1501603200000",
		"planStartTimeStr": "2017-08-02",
		"productLine": "SCXT001",
		"productLineName": "生产车间",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-02 15:22:06",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0312"
	}, {
		"createDateStr": "2017-08-02 14:22:15",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501603200000",
		"deliveryDateStr": "2017-08-02",
		"id": "1139",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00183",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501603200000",
		"planEndTimeStr": "2017-08-02",
		"planNum": "111",
		"planStartTime": "1501603200000",
		"planStartTimeStr": "2017-08-02",
		"productLine": "",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-02 14:22:15",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0311"
	}, {
		"createDateStr": "2017-08-02 10:30:47",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501603200000",
		"deliveryDateStr": "2017-08-02",
		"id": "1138",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00182",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501603200000",
		"planEndTimeStr": "2017-08-02",
		"planNum": "333",
		"planStartTime": "1501603200000",
		"planStartTimeStr": "2017-08-02",
		"productLine": "",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-02 10:30:47",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0310"
	}, {
		"createDateStr": "2017-08-02 10:21:44",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501603200000",
		"deliveryDateStr": "2017-08-02",
		"id": "1137",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00181",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501603200000",
		"planEndTimeStr": "2017-08-02",
		"planNum": "888",
		"planStartTime": "1501603200000",
		"planStartTimeStr": "2017-08-02",
		"productLine": "",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-02 10:21:44",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0309"
	}, {
		"createDateStr": "2017-08-02 09:53:47",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501603200000",
		"deliveryDateStr": "2017-08-02",
		"id": "1136",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00180",
		"orderNature": "Custom-pro",
		"orderNatureName": "定制产品",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501603200000",
		"planEndTimeStr": "2017-08-02",
		"planNum": "666",
		"planStartTime": "1501603200000",
		"planStartTimeStr": "2017-08-02",
		"productLine": "SCXT001",
		"productLineName": "生产车间",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-02 09:53:47",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0308"
	}, {
		"createDateStr": "2017-08-02 09:49:20",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501603200000",
		"deliveryDateStr": "2017-08-02",
		"id": "1135",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00179",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501603200000",
		"planEndTimeStr": "2017-08-02",
		"planNum": "233",
		"planStartTime": "1501603200000",
		"planStartTimeStr": "2017-08-02",
		"productLine": "",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-02 09:49:20",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0307"
	}, {
		"createDateStr": "2017-08-01 17:01:33",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1504108800000",
		"deliveryDateStr": "2017-08-31",
		"id": "1134",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00178",
		"orderNature": "Custom-pro",
		"orderNatureName": "定制产品",
		"orderResource": "ERP_Sync",
		"orderResourceName": "ERP同步",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1504022400000",
		"planEndTimeStr": "2017-08-30",
		"planNum": "1000",
		"planStartTime": "1501603200000",
		"planStartTimeStr": "2017-08-02",
		"productLine": "SCXT001",
		"productLineName": "生产车间",
		"productName": "后吊耳底板",
		"remark": "该品为客户定制化产品，质量要求较高，请严格按生产工艺生产",
		"salesCode": "",
		"updateDateStr": "2017-08-01 17:01:33",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0306"
	}, {
		"createDateStr": "2017-08-01 14:18:41",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501516800000",
		"deliveryDateStr": "2017-08-01",
		"id": "1133",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00177",
		"orderNature": "Custom-pro",
		"orderNatureName": "定制产品",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501516800000",
		"planEndTimeStr": "2017-08-01",
		"planNum": "222",
		"planStartTime": "1501516800000",
		"planStartTimeStr": "2017-08-01",
		"productLine": "SCXT001",
		"productLineName": "生产车间",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-01 14:18:41",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0305"
	}, {
		"createDateStr": "2017-08-01 14:15:58",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501516800000",
		"deliveryDateStr": "2017-08-01",
		"id": "1132",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00176",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501516800000",
		"planEndTimeStr": "2017-08-01",
		"planNum": "111",
		"planStartTime": "1501516800000",
		"planStartTimeStr": "2017-08-01",
		"productLine": "",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-01 14:15:58",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0304"
	}, {
		"createDateStr": "2017-08-01 14:03:26",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501516800000",
		"deliveryDateStr": "2017-08-01",
		"id": "1131",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00175",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501516800000",
		"planEndTimeStr": "2017-08-01",
		"planNum": "233",
		"planStartTime": "1501516800000",
		"planStartTimeStr": "2017-08-01",
		"productLine": "",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-01 14:03:26",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0303"
	}, {
		"createDateStr": "2017-08-01 14:00:33",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501516800000",
		"deliveryDateStr": "2017-08-01",
		"id": "1130",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00174",
		"orderNature": "Custom-pro",
		"orderNatureName": "定制产品",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501516800000",
		"planEndTimeStr": "2017-08-01",
		"planNum": "555",
		"planStartTime": "1501516800000",
		"planStartTimeStr": "2017-08-01",
		"productLine": "SCXT001",
		"productLineName": "生产车间",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-01 14:00:33",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0302"
	}, {
		"createDateStr": "2017-08-01 13:57:10",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501516800000",
		"deliveryDateStr": "2017-08-01",
		"id": "1129",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00172",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501516800000",
		"planEndTimeStr": "2017-08-01",
		"planNum": "123",
		"planStartTime": "1501516800000",
		"planStartTimeStr": "2017-08-01",
		"productLine": "",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-01 13:57:10",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0300"
	}, {
		"createDateStr": "2017-08-01 13:30:22",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1501516800000",
		"deliveryDateStr": "2017-08-01",
		"id": "1128",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00171",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501516800000",
		"planEndTimeStr": "2017-08-01",
		"planNum": "333",
		"planStartTime": "1501516800000",
		"planStartTimeStr": "2017-08-01",
		"productLine": "SCXT001",
		"productLineName": "生产车间",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-01 13:30:22",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0299"
	}, {
		"createDateStr": "2017-08-01 09:43:58",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1504108800000",
		"deliveryDateStr": "2017-08-31",
		"id": "1127",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"orderCode": "B00170",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "0",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1501603200000",
		"planEndTimeStr": "2017-08-02",
		"planNum": "233",
		"planStartTime": "1501516800000",
		"planStartTimeStr": "2017-08-01",
		"productLine": "",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"salesCode": "",
		"updateDateStr": "2017-08-01 09:43:58",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0297"
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
