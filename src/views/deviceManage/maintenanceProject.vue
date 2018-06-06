<template>
    <div id="maintenanceProject">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>设备管理</el-breadcrumb-item>
            <el-breadcrumb-item>维修保养管理</el-breadcrumb-item>
            <el-breadcrumb-item>维保项目维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
          <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
          <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
          <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
          <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
            <span style="line-height:32px;font-size:14px;">项目代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">项目名称：	</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">类型：	</span>
              <el-select v-model="markType" placeholder="请选择" size="small">
                <el-option
                v-for="item in markOptions"
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
    :data="maintenanceProjectList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="projectCode"
      label="项目代码"
     >
    </el-table-column>
    <el-table-column
      prop="projectName"
      label="项目名称"
      >
    </el-table-column>
    <el-table-column
      prop="projectTypeName"
      label="	类型"
     >
    </el-table-column>
    <el-table-column
      prop="markAble"
      label="可用标识"
      width="80"
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
    name: 'maintenanceProject',
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
            maintenanceProjectList: [{
		"createDate": 1487897412000,
		"createDateStr": "2017-02-24 08:50:12",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"description": "保养维护",
		"id": 1006,
		"markAble": "1",
		"projectCode": "5T1LZGZQ8Y",
		"projectName": "保养维护",
		"projectType": "MP_1",
		"projectTypeName": "维保类型1",
		"updateDate": 1487897439000,
		"updateDateStr": "2017-02-24 08:50:39",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": 1487844670000,
		"createDateStr": "2017-02-23 18:11:10",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"description": "混合头通道是否正常",
		"id": 1005,
		"markAble": "1",
		"projectCode": "YFQAVGBWVK",
		"projectName": "发泡机保养",
		"projectType": "MP_5",
		"projectTypeName": "保养",
		"updateDate": 1487844670000,
		"updateDateStr": "2017-02-23 18:11:10",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
	}, {
		"createDate": 1487844652000,
		"createDateStr": "2017-02-23 18:10:52",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"description": "检查料筒加温是否正常",
		"id": 1004,
		"markAble": "1",
		"projectCode": "TVSM4AK61L",
		"projectName": "发泡机保养",
		"projectType": "MP_5",
		"projectTypeName": "保养",
		"updateDate": 1487844652000,
		"updateDateStr": "2017-02-23 18:10:52",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
	}, {
		"createDate": 1487838173000,
		"createDateStr": "2017-02-23 16:22:53",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"description": "检查液压是否正常",
		"id": 1003,
		"markAble": "1",
		"projectCode": "ESJFZSYGOT",
		"projectName": "发泡机保养",
		"projectType": "MP_5",
		"projectTypeName": "保养",
		"updateDate": 1487844622000,
		"updateDateStr": "2017-02-23 18:10:22",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
	}, {
		"createDate": 1487655049000,
		"createDateStr": "2017-02-21 13:30:49",
		"createUser": "PENG028",
		"createUserName": "测试01",
		"description": "",
		"id": 1002,
		"markAble": "1",
		"projectCode": "OJLDR2TNPV",
		"projectName": "项目03",
		"projectType": "MP_1",
		"projectTypeName": "维保类型1",
		"updateDate": 1487655049000,
		"updateDateStr": "2017-02-21 13:30:49",
		"updateUser": "PENG028",
		"updateUserName": "测试01"
	}, {
		"createDate": 1487655042000,
		"createDateStr": "2017-02-21 13:30:42",
		"createUser": "PENG028",
		"createUserName": "测试01",
		"description": "",
		"id": 1001,
		"markAble": "1",
		"projectCode": "BE4GIDKVET",
		"projectName": "项目02",
		"projectType": "MP_1",
		"projectTypeName": "维保类型1",
		"updateDate": 1487655042000,
		"updateDateStr": "2017-02-21 13:30:42",
		"updateUser": "PENG028",
		"updateUserName": "测试01"
	}, {
		"createDate": 1487655033000,
		"createDateStr": "2017-02-21 13:30:33",
		"createUser": "PENG028",
		"createUserName": "测试01",
		"description": "",
		"id": 1000,
		"markAble": "1",
		"projectCode": "56E5Z4ZNMZ",
		"projectName": "项目01",
		"projectType": "MP_1",
		"projectTypeName": "维保类型1",
		"updateDate": 1487655033000,
		"updateDateStr": "2017-02-21 13:30:33",
		"updateUser": "PENG028",
		"updateUserName": "测试01"
	}],
        currentPage: 1
        }
    },
    methods: {
        add(){
		  this.$router.push('maintenanceProjectAdd')
	  },
      handleClick(row) {
        console.log(row);
        this.$router.push('maintenanceProjectEdit')
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
