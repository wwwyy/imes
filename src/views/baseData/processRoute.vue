<template>
    <div id="processRoute">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>工艺数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>工艺路线维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">路线代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">路线名称：</span>
                <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
             <span style="line-height:32px;font-size:14px;margin-left:40px;">开始日期：</span>
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
            <span style="line-height:32px;font-size:14px;margin-left:40px;">可用标识：</span>
            <el-select v-model="markType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in markOptions"
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
    :data="processRouteList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
      >
    </el-table-column>
    <el-table-column
      prop="routeCode"
      label="路线代码"
      width="100"
     >
    </el-table-column>
    <el-table-column
      prop="routeName"
      label="路线名称"
      width="200"
      >
    </el-table-column>
    <el-table-column
      prop="modelCode"
      label="型号代码"
      width="180"
      >
    </el-table-column>
    <el-table-column
      prop="productName"
      label="产品名称"
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="effDateStr"
      label="生效日期"
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="expiryDateStr"
      label="失效日期"
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="version"
      label="版本号"
      >
    </el-table-column>
    <el-table-column
    prop="markAble"
    label="可用标识	"
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
    name: 'processRoute',
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
            processRouteList: [{
		"createDate": "1495768493000",
		"createDateStr": "2017-05-26 11:14:53",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"effDate": 1495728000000,
		"effDateStr": "2017-05-26",
		"expiryDate": 1588348799000,
		"expiryDateStr": "2020-05-01",
		"id": "1006",
		"markAble": "1",
		"markAbleName": "启用",
		"modelCode": "demo003",
		"productName": "后吊耳底板",
		"remark": "",
		"routeCode": "route00055",
		"routeName": "后吊耳底板",
		"updateDate": "1495768493000",
		"updateDateStr": "2017-05-26 11:14:53",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0.055"
	}, {
		"createDate": "1495763864000",
		"createDateStr": "2017-05-26 09:57:44",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"effDate": 1495728000000,
		"effDateStr": "2017-05-26",
		"expiryDate": 1514735999000,
		"expiryDateStr": "2017-12-31",
		"id": "1005",
		"markAble": "1",
		"markAbleName": "启用",
		"modelCode": "01651377",
		"productName": "发动机油底壳调节板",
		"remark": "",
		"routeCode": "route00054",
		"routeName": "发动机油底壳调节板工艺路线",
		"updateDate": "1495777987000",
		"updateDateStr": "2017-05-26 13:53:07",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0.054"
	}, {
		"createDate": "1495186033000",
		"createDateStr": "2017-05-19 17:27:13",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"effDate": 1493568000000,
		"effDateStr": "2017-05-01",
		"expiryDate": 1495209599000,
		"expiryDateStr": "2017-05-19",
		"id": "1004",
		"markAble": "1",
		"markAbleName": "启用",
		"modelCode": "demo001",
		"productName": "钢板弹簧后吊耳总成",
		"remark": "",
		"routeCode": "route00045",
		"routeName": "钢板弹簧后吊耳总成工艺路线",
		"updateDate": "1495768297000",
		"updateDateStr": "2017-05-26 11:11:37",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0.045"
	}, {
		"createDate": "1487835587000",
		"createDateStr": "2017-02-23 15:39:47",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"effDate": 1487779200000,
		"effDateStr": "2017-02-23",
		"expiryDate": 1489247999000,
		"expiryDateStr": "2017-03-11",
		"id": "1003",
		"markAble": "1",
		"markAbleName": "启用",
		"modelCode": "B00010B8V00",
		"productName": "HB21FNNB以色列",
		"remark": "",
		"routeCode": "route00037",
		"routeName": "卡萨帝系列冰箱",
		"updateDate": "1487837183000",
		"updateDateStr": "2017-02-23 16:06:23",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟",
		"version": "V0.037"
	}, {
		"createDate": "1487646802000",
		"createDateStr": "2017-02-21 11:13:22",
		"createUser": "admin",
		"createUserName": "administrator",
		"effDate": 1487606400000,
		"effDateStr": "2017-02-21",
		"expiryDate": 1489247999000,
		"expiryDateStr": "2017-03-11",
		"id": "1002",
		"markAble": "1",
		"markAbleName": "启用",
		"modelCode": "B00010E9F00",
		"productName": "HB21FGRAA",
		"remark": "",
		"routeCode": "route00036",
		"routeName": "压力机操作",
		"updateDate": "1487646802000",
		"updateDateStr": "2017-02-21 11:13:22",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V0.036"
	}, {
		"createDate": "1487646600000",
		"createDateStr": "2017-02-21 11:10:00",
		"createUser": "admin",
		"createUserName": "administrator",
		"effDate": 1487606400000,
		"effDateStr": "2017-02-21",
		"expiryDate": 1489247999000,
		"expiryDateStr": "2017-03-11",
		"id": "1001",
		"markAble": "1",
		"markAbleName": "启用",
		"modelCode": "B00010E8200",
		"productName": "HB21FGBAA",
		"remark": "",
		"routeCode": "route00035",
		"routeName": "钣金设备操作",
		"updateDate": "1487646600000",
		"updateDateStr": "2017-02-21 11:10:00",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V0.035"
	}, {
		"createDate": "1487646534000",
		"createDateStr": "2017-02-21 11:08:54",
		"createUser": "admin",
		"createUserName": "administrator",
		"effDate": 1487606400000,
		"effDateStr": "2017-02-21",
		"expiryDate": 1489247999000,
		"expiryDateStr": "2017-03-11",
		"id": "1000",
		"markAble": "1",
		"markAbleName": "启用",
		"modelCode": "B00010B8V00",
		"productName": "HB21FNNB(以色列)",
		"remark": "",
		"routeCode": "route00034",
		"routeName": "吸附操作",
		"updateDate": "1487646534000",
		"updateDateStr": "2017-02-21 11:08:54",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V0.034"
	}],
        currentPage: 1
        }
    },
    methods: {
        add(){
		  this.$router.push('processRouteAdd')
	  },
      handleClick(row) {
        console.log(row);
        this.$router.push('processRouteEdit')
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
