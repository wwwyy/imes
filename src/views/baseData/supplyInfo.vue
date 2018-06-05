<template>
    <div id="supplyInfo">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>公共数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>供应商信息维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">供应商名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">供应商代码：</span>
             <el-input v-model="copyName" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">供应商类别：</span>
                <el-select v-model="copyType" placeholder="请选择" size="small">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
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
    :data="supplyList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="supplyTypeName"
      label="供应商类别"
      width="120"
     >
    </el-table-column>
    <el-table-column
      prop="supplyCode"
      label="供应商代码"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="supplyName"
      label="供应商名称"
      width="200"
      >
    </el-table-column>
    <el-table-column
      prop="supplyLinke"
      label="供应商联系人"
      width="120"
     >
    </el-table-column>
    <el-table-column
      prop="supplyPhone"
      label="供应商联系电话"
      width="160"
      >
    </el-table-column>
    <el-table-column
      prop="supplyEmail"
      label="供应商联系邮箱"
      width="160"
      >
    </el-table-column>
    <el-table-column
      prop="supplyAddress"
      label="供应商联系地址"
      width="200"
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
    name: 'supplyInfo',
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
            supplyList: [{
		"createDateStr": "2017-05-19 15:16:12",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1003",
		"isDel": "false",
		"markAble": "1",
		"remark": "",
		"supplyAddress": "",
		"supplyCode": "MYCOMPANY",
		"supplyEmail": "",
		"supplyLinke": "",
		"supplyName": "公司资产",
		"supplyPhone": "13800138000",
		"supplyType": "SUPPLY_WL",
		"supplyTypeName": "物料",
		"updateDateStr": "2017-05-19 15:16:12",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDateStr": "2017-02-23 13:12:10",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"id": "1002",
		"isDel": "false",
		"markAble": "1",
		"remark": "",
		"supplyAddress": "",
		"supplyCode": "sup00037",
		"supplyEmail": "",
		"supplyLinke": "李四",
		"supplyName": "昆明浩杰科技有限公司",
		"supplyPhone": "13300000000",
		"supplyType": "SUPPLY_WL",
		"supplyTypeName": "物料",
		"updateDateStr": "2017-02-23 18:17:27",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
	}, {
		"createDateStr": "2017-02-21 13:21:04",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"id": "1001",
		"isDel": "false",
		"markAble": "1",
		"remark": "",
		"supplyAddress": "",
		"supplyCode": "sup00036",
		"supplyEmail": "10454444@qq.com",
		"supplyLinke": "张三",
		"supplyName": "云南古创贸易有限公司",
		"supplyPhone": "0532-87812345",
		"supplyType": "SUPPLY_WL",
		"supplyTypeName": "物料",
		"updateDateStr": "2017-02-23 18:17:01",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
	}, {
		"createDateStr": "2017-02-21 10:38:51",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"id": "1000",
		"isDel": "false",
		"markAble": "1",
		"remark": "",
		"supplyAddress": "",
		"supplyCode": "sup00035",
		"supplyEmail": "",
		"supplyLinke": "",
		"supplyName": "云南英泽机械设备有限公司",
		"supplyPhone": "0532-87654321",
		"supplyType": "SUPPLY_SB",
		"supplyTypeName": "设备",
		"updateDateStr": "2017-02-23 18:17:46",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
	}],
        currentPage: 1
        }
    },
    methods: {
        add(){
		  this.$router.push('supplyInfoAdd')
	  },
      handleClick(row) {
        console.log(row);
        this.$router.push('supplyInfoEdit')
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
