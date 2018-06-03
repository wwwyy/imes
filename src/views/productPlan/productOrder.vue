<template>
    <div id="productOrder">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>生产计划管理</el-breadcrumb-item>
            <el-breadcrumb-item>生产订单设计</el-breadcrumb-item>
            <el-breadcrumb-item>成品订单维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-upload2" style="width:100px"> 导 入 </el-button>
              <el-button size="small" icon="el-icon-success" style="width:100px"> ERP同步 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">订单代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">型号代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            
             <span style="margin-left:40px;line-height:32px;font-size:14px;">开始日期：</span>
             <el-date-picker
                v-model="startDate"
                type="date"
                placeholder="选择日期"
                style="width:194px"
                size="small">
            </el-date-picker>
            
            <br>
            <br>
             <span style="line-height:32px;font-size:14px;">产品名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            
           <span style="margin-left:40px;line-height:32px;font-size:14px;">订单标识：</span>
                <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
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
    :data="productOrderList"
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
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="orderResourceName"
      label="订单来源"
      >
    </el-table-column>
    <el-table-column
      prop="planNum"
      label="计划数量"
      >
    </el-table-column>
    <el-table-column
      prop="planStartTimeStr"
      label="计划开始日期"
      width="150"
     >
    </el-table-column>
    <el-table-column
      prop="planEndTimeStr"
      label="计划结束日期"
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="productLineName"
      label="生产线体"
      >
    </el-table-column>
    <el-table-column
      prop="orderNatureName"
      label="订单特性"
      >
    </el-table-column>
    <el-table-column
      prop="deliveryDateStr"
      label="交货日期"
      >
    </el-table-column>
    <el-table-column
      prop="salesCode"
      label="销售订单代码"
      >
    </el-table-column>
    <el-table-column
      prop="version"
      label="版本号"
      >
    </el-table-column>
    <el-table-column
    prop="markAble"
    label="订单标识	"
    >
    </el-table-column>
        <el-table-column
    prop="createUserName"
    label="创建人	"
    width="150"
    >
    </el-table-column>
        <el-table-column
    prop="createDateStr"
    label="创建时间	"
    width="160"
    >
    </el-table-column>
        <el-table-column
    prop="updateUserName"
    label="最后更新人	"
    width="150"
    >
    </el-table-column>
    <el-table-column
    prop="updateDateStr"
    label="最后更新时间	"
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
    name: 'productOrder',
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
            productOrderList: [{
		"createDateStr": "2017-07-05 12:48:48",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1500220800000",
		"deliveryDateStr": "2017-07-17",
		"id": "1100",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "01651377",
		"orderCode": "C00123",
		"orderNature": "Custom-pro",
		"orderNatureName": "定制产品",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "1",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1499961600000",
		"planEndTimeStr": "2017-07-14",
		"planNum": "120",
		"planStartTime": "1499184000000",
		"planStartTimeStr": "2017-07-05",
		"productLine": "SCXT001",
		"productLineName": "生产车间",
		"productName": "发动机油底壳调节板",
		"remark": "",
		"salesCode": "",
		"updateDateStr": "2017-07-05 12:48:48",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0261"
	}, {
		"createDateStr": "2017-06-13 10:25:09",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1498752000000",
		"deliveryDateStr": "2017-06-30",
		"id": "1090",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "01651377",
		"orderCode": "C00119",
		"orderNature": "Custom-pro",
		"orderNatureName": "定制产品",
		"orderResource": "ERP_Sync",
		"orderResourceName": "ERP同步",
		"orderType": "1",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1498752000000",
		"planEndTimeStr": "2017-06-30",
		"planNum": "2000",
		"planStartTime": "1497369600000",
		"planStartTimeStr": "2017-06-14",
		"productLine": "SCXT001",
		"productLineName": "生产车间",
		"productName": "发动机油底壳调节板",
		"remark": "",
		"routeCode": "route00054",
		"routeName": "发动机油底壳调节板工艺路线",
		"salesCode": "",
		"updateDateStr": "2017-06-13 10:25:09",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0248"
	}, {
		"createDateStr": "2017-06-08 09:20:25",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1496851200000",
		"deliveryDateStr": "2017-06-08",
		"id": "1077",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo001",
		"orderCode": "C00114",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "1",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1496851200000",
		"planEndTimeStr": "2017-06-08",
		"planNum": "100",
		"planStartTime": "1496851200000",
		"planStartTimeStr": "2017-06-08",
		"productLine": "",
		"productName": "钢板弹簧后吊耳总成",
		"remark": "",
		"salesCode": "",
		"updateDateStr": "2017-06-08 09:20:25",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0230"
	}, {
		"createDateStr": "2017-05-26 10:16:25",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1496246400000",
		"deliveryDateStr": "2017-06-01",
		"id": "1023",
		"isDel": "false",
		"markAble": "1",
		"materielStatusName": "创建",
		"modelCode": "01651377",
		"orderCode": "C00109",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "1",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1496160000000",
		"planEndTimeStr": "2017-05-31",
		"planNum": "100",
		"planStartTime": "1495728000000",
		"planStartTimeStr": "2017-05-26",
		"productLine": "SCXT001",
		"productLineName": "生产车间",
		"productName": "发动机油底壳调节板",
		"remark": "",
		"routeCode": "route00054",
		"routeName": "发动机油底壳调节板工艺路线",
		"salesCode": "",
		"updateDateStr": "2017-05-26 10:16:25",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0167"
	}, {
		"createDateStr": "2017-05-24 15:39:51",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1495555200000",
		"deliveryDateStr": "2017-05-24",
		"id": "1022",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo001",
		"orderCode": "C00108",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "1",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1495555200000",
		"planEndTimeStr": "2017-05-24",
		"planNum": "10",
		"planStartTime": "1495555200000",
		"planStartTimeStr": "2017-05-24",
		"productLine": "SCXT001",
		"productLineName": "生产车间",
		"productName": "钢板弹簧后吊耳总成",
		"remark": "",
		"routeCode": "route00045",
		"routeName": "钢板弹簧后吊耳总成工艺路线",
		"salesCode": "",
		"updateDateStr": "2017-05-24 15:39:51",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0166"
	}, {
		"createDateStr": "2017-05-24 09:25:22",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1495728000000",
		"deliveryDateStr": "2017-05-26",
		"id": "1021",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo001",
		"orderCode": "C00107",
		"orderNature": "Custom-pro",
		"orderNatureName": "定制产品",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "1",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1495641600000",
		"planEndTimeStr": "2017-05-25",
		"planNum": "10000",
		"planStartTime": "1495555200000",
		"planStartTimeStr": "2017-05-24",
		"productLine": "SCXT001",
		"productLineName": "生产车间",
		"productName": "钢板弹簧后吊耳总成",
		"remark": "",
		"salesCode": "",
		"updateDateStr": "2017-05-24 09:25:22",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0165"
	}, {
		"createDateStr": "2017-05-24 06:42:58",
		"createUser": "PENG019",
		"createUserName": "测试组2.1",
		"deliveryDate": "1495641600000",
		"deliveryDateStr": "2017-05-25",
		"id": "1019",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo001",
		"orderCode": "C00105",
		"orderNature": "",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "1",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1495555200000",
		"planEndTimeStr": "2017-05-24",
		"planNum": "50",
		"planStartTime": "1495555200000",
		"planStartTimeStr": "2017-05-24",
		"productLine": "SCXT001",
		"productLineName": "生产车间",
		"productName": "钢板弹簧后吊耳总成",
		"remark": "",
		"routeCode": "route00045",
		"routeName": "钢板弹簧后吊耳总成工艺路线",
		"salesCode": "",
		"updateDateStr": "2017-05-24 06:42:58",
		"updateUser": "PENG019",
		"updateUserName": "测试组2.1",
		"version": "V0163"
	}, {
		"createDateStr": "2017-05-23 22:10:28",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1496160000000",
		"deliveryDateStr": "2017-05-31",
		"id": "1018",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo001",
		"orderCode": "C00103",
		"orderNature": "Custom-pro",
		"orderNatureName": "定制产品",
		"orderResource": "HandMade",
		"orderResourceName": "手工新增",
		"orderType": "1",
		"originalOrder": "",
		"parentCode": "",
		"planEndTime": "1495814400000",
		"planEndTimeStr": "2017-05-27",
		"planNum": "1000",
		"planStartTime": "1495468800000",
		"planStartTimeStr": "2017-05-23",
		"productLine": "SCXT001",
		"productLineName": "生产车间",
		"productName": "钢板弹簧后吊耳总成",
		"remark": "",
		"routeCode": "route00045",
		"routeName": "钢板弹簧后吊耳总成工艺路线",
		"salesCode": "",
		"updateDateStr": "2017-05-23 22:15:29",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0161"
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
