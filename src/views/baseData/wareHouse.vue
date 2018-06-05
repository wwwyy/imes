<template>
    <div id="wareHouse">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>公共数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>仓库维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-delete" style="width:100px"> 删 除 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">仓库代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">仓库名称：</span>
             <el-input v-model="copyName" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">所属组织：</span>
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
    :data="wpList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
      >
    </el-table-column>
    <el-table-column
      prop="wareHouseCode"
      label="仓库代码"
     >
    </el-table-column>
    <el-table-column
      prop="wareHouseName"
      label="	仓库名称"
      >
    </el-table-column>
    <el-table-column
      prop="address"
      label="	仓库地址"
      >
    </el-table-column>
    <el-table-column
      prop="capacity"
      label="	库容量"
      >
    </el-table-column>
    <el-table-column
    prop="markAbleName"
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
    name: 'wareHouse',
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
            wpList: [{
		"address": "",
		"capacity": "1000",
		"createDate": 1495768312000,
		"createDateStr": "2017-05-26 11:11:52",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1004",
		"markAble": "1",
		"markAbleName": "启用",
		"remark": "",
		"updateDate": 1495777715000,
		"updateDateStr": "2017-05-26 13:48:35",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"wareHouseCode": "WHC052",
		"wareHouseName": "电泳半成品库"
	}, {
		"capacity": "4000",
		"createDate": 1495768079000,
		"createDateStr": "2017-05-26 11:07:59",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1003",
		"markAble": "1",
		"markAbleName": "启用",
		"updateDate": 1495768079000,
		"updateDateStr": "2017-05-26 11:07:59",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"wareHouseCode": "WHC051",
		"wareHouseName": "成品库"
	}, {
		"address": "",
		"capacity": "5000",
		"createDate": 1487755771000,
		"createDateStr": "2017-02-22 17:29:31",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1002",
		"markAble": "0",
		"markAbleName": "停用",
		"remark": "",
		"updateDate": 1495245605000,
		"updateDateStr": "2017-05-20 10:00:05",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"wareHouseCode": "WHC044",
		"wareHouseName": "仓库3"
	}, {
		"address": "",
		"capacity": "3000",
		"createDate": 1487755762000,
		"createDateStr": "2017-02-22 17:29:22",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1001",
		"markAble": "0",
		"markAbleName": "停用",
		"remark": "",
		"updateDate": 1495245597000,
		"updateDateStr": "2017-05-20 09:59:57",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"wareHouseCode": "WHC043",
		"wareHouseName": "仓库2"
	}, {
		"address": "",
		"capacity": "2000",
		"createDate": 1487755748000,
		"createDateStr": "2017-02-22 17:29:08",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1000",
		"markAble": "1",
		"markAbleName": "启用",
		"remark": "",
		"updateDate": 1495245914000,
		"updateDateStr": "2017-05-20 10:05:14",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"wareHouseCode": "WHC042",
		"wareHouseName": "焊接半成品库"
	}],
        currentPage: 1
        }
    },
    methods: {
        add(){
		  this.$router.push('wareHouseAdd')
	  },
      handleClick(row) {
        console.log(row);
        this.$router.push('wareHouseEdit')
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
