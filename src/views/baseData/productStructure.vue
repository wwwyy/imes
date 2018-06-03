<template>
    <div id="productStructure">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>产品数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>产品结构数据维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px"> 新 增 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">型号代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">产品名称：</span>
             <el-input v-model="copyName" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">版本号：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">可用标识：</span>
            <el-select v-model="markType" placeholder="请选择" size="small">
                <el-option
                v-for="item in markOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <el-table
    :data="dataList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
      >
    </el-table-column>
    <el-table-column
      prop="modelCode"
      label="	型号代码"
      width="150"
     >
    </el-table-column>
    <el-table-column
      prop="productName"
      label="产品名称"
      width="200"
      >
    </el-table-column>
    <el-table-column
      prop="bomVersion"
      label="Bom版本"
      >
    </el-table-column>
    <el-table-column
      prop="effectiveDateStr"
      label="生效日期	"
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
      width="260"
      >
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
        <el-button type="text" size="small" @click="handleClick(scope.row)">删除</el-button>
        <el-button type="text" size="small" @click="handleClick(scope.row)">查看BOM树</el-button>
        <el-button type="text" size="small" @click="handleClick(scope.row)">制造BOM确认</el-button>
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
      <el-table
    :data="productStructureDataBomList"
    border
    style="width: 100%"
    align="left"
    size="mini">
    <el-table-column
      prop="materielCode"
      label="物料代码"
     >
    </el-table-column>
    <el-table-column
      prop="materielName"
      label="物料名称"
      >
    </el-table-column>
    <el-table-column
      prop="typeName"
      label="类型"
      >
    </el-table-column>
    <el-table-column
      prop="quantity"
      label="	数量	"
      >
    </el-table-column>
    <el-table-column
      prop="processName"
      label="	所属工序"
      >
    </el-table-column>
    <el-table-column
    prop="lostConsumption"
    label="损耗	"
    >
    </el-table-column>
  </el-table>
    </div>
</template>
<script>
export default {
    name: 'productStructure',
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
            productStructureDataBomList: [{
		"id": "33",
		"lostConsumption": 1.300000,
		"materielCode": "WL0099",
		"materielName": "钢材(20号)",
		"modelCode": "01651377",
		"processCode": "208",
		"processName": "落料成型",
		"quantity": 12.0000,
		"type": "BOM_MATERIAL_BUY",
		"typeName": "采购"
	}, {
		"id": "34",
		"lostConsumption": 0.000000,
		"materielCode": "0060100765",
		"materielName": "铰链-Q235A",
		"modelCode": "01651377",
		"processCode": "195",
		"processName": "焊接工序",
		"quantity": 2.0000,
		"type": "BOM_MATERIAL_BUY",
		"typeName": "采购"
	}, {
		"id": "35",
		"lostConsumption": 0.000000,
		"materielCode": "0060110136",
		"materielName": "弹簧-65Mn-直径1.3-直径1.3",
		"modelCode": "01651377",
		"processCode": "195",
		"processName": "焊接工序",
		"quantity": 2.0000,
		"type": "BOM_MATERIAL_BUY",
		"typeName": "采购"
	}],
            dataList: [{
		"bomStatus": false,
		"bomVersion": "V001",
		"createDate": 1495761866000,
		"createDateStr": "2017-05-26 09:24:26",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"effectiveDateStr": "2017-05-26",
		"expiryDate": 1514649600000,
		"expiryDateStr": "2017-12-31",
		"id": 1004,
		"markAble": 1,
		"modelCode": "01651377",
		"productName": "发动机油底壳调节板",
		"remark": "",
		"updateDate": "1505269732000",
		"updateDateStr": "2017-09-13 10:28:52",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"bomStatus": true,
		"bomVersion": "V001",
		"createDate": 1495184357000,
		"createDateStr": "2017-05-19 16:59:17",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"effectiveDateStr": "2017-05-01",
		"expiryDate": 1495123200000,
		"expiryDateStr": "2017-05-19",
		"id": 1003,
		"markAble": 1,
		"modelCode": "demo003",
		"productName": "后吊耳底板",
		"remark": "",
		"updateDate": "1495184357000",
		"updateDateStr": "2017-05-19 16:59:17",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"bomStatus": true,
		"bomVersion": "V001",
		"createDate": 1495184322000,
		"createDateStr": "2017-05-19 16:58:42",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"effectiveDateStr": "2017-05-01",
		"expiryDate": 1495123200000,
		"expiryDateStr": "2017-05-19",
		"id": 1002,
		"markAble": 1,
		"modelCode": "demo002",
		"productName": "后吊耳销轴",
		"remark": "",
		"updateDate": "1495184322000",
		"updateDateStr": "2017-05-19 16:58:42",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"bomStatus": true,
		"bomVersion": "V001",
		"createDate": 1495184231000,
		"createDateStr": "2017-05-19 16:57:11",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"effectiveDateStr": "2017-05-01",
		"expiryDate": 1495123200000,
		"expiryDateStr": "2017-05-19",
		"id": 1001,
		"markAble": 1,
		"modelCode": "demo001",
		"productName": "钢板弹簧后吊耳总成",
		"remark": "",
		"updateDate": "1495184231000",
		"updateDateStr": "2017-05-19 16:57:11",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
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
