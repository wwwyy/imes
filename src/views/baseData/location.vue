<template>
    <div id="location">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>公共数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>库位维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">库位代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">库位名称：</span>
             <el-input v-model="copyName" placeholder="请输入内容" style="width:194px" size="small"></el-input>
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
    :data="locationList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
      >
    </el-table-column>
    <el-table-column
      prop="WLCode"
      label="库位代码"
     >
    </el-table-column>
    <el-table-column
      prop="WLName"
      label="库位名称"
      >
    </el-table-column>
    <el-table-column
      prop="wareHouseName"
      label="所属仓库"
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="wareHouseAreaName"
      label="库区"
      >
    </el-table-column>
    <el-table-column
      prop="rowNumber"
      label="行号"
      >
    </el-table-column>
    <el-table-column
      prop="colNumber"
      label="列号"
      >
    </el-table-column>
    <el-table-column
      prop="wLAddress"
      label="库位地址"
      >
    </el-table-column>
    <el-table-column
      prop="wLCapacity"
      label="库容量"
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
    name: 'location',
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
            locationList: [{
		"WLCode": "loca0004",
		"WLName": "库位B001",
		"colNumber": "",
		"createDateStr": "2017-05-20 10:10:11",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "59",
		"markAble": "1",
		"remark": "",
		"rowNumber": "",
		"updateDateStr": "2017-06-13 10:58:25",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"wLAddress": "",
		"wLCapacity": "",
		"wareHouseArea": "WH_AREA_B",
		"wareHouseAreaName": "B区",
		"wareHouseCode": "WHC042",
		"wareHouseName": "焊接半成品库"
	}, {
		"WLCode": "loca0002",
		"WLName": "库位A001",
		"colNumber": "1",
		"createDateStr": "2017-05-20 10:09:44",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "58",
		"markAble": "1",
		"remark": "",
		"rowNumber": "1",
		"updateDateStr": "2017-05-20 10:09:44",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"wLAddress": "",
		"wLCapacity": "100",
		"wareHouseArea": "WH_AREA_A",
		"wareHouseAreaName": "A区",
		"wareHouseCode": "WHC042",
		"wareHouseName": "焊接半成品库"
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
