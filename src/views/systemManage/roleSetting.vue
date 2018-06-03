<template>
    <div id="roleSetting">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>系统管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户权限设置</el-breadcrumb-item>
            <el-breadcrumb-item>角色设置</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-upload2" style="width:100px"> 删 除 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 权限分配 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">角色代码：	</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">角色名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            
             <span style="margin-left:40px;line-height:32px;font-size:14px;">可用标识：</span>
             <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <el-table
    :data="rowSettingList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="roleCode"
      label="角色代码"
     >
    </el-table-column>
    <el-table-column
      prop="roleName"
      label="角色名称"
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
    name: 'roleSetting',
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
            rowSettingList: [{
		"createDate": "1507866150000",
		"createDateStr": "2017-10-13 11:42:30",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1017",
		"markAble": "1",
		"remark": "",
		"roleCode": "测试",
		"roleName": "测试",
		"updateDate": "1507866150000",
		"updateDateStr": "2017-10-13 11:42:30",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1497319842000",
		"createDateStr": "2017-06-13 10:10:42",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1016",
		"markAble": "1",
		"remark": "",
		"roleCode": "worksmanager",
		"roleName": "生产主任",
		"updateDate": "1497319842000",
		"updateDateStr": "2017-06-13 10:10:42",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1497319819000",
		"createDateStr": "2017-06-13 10:10:19",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1015",
		"markAble": "1",
		"remark": "",
		"roleCode": "Lineleader",
		"roleName": "线长",
		"updateDate": "1497319819000",
		"updateDateStr": "2017-06-13 10:10:19",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1497319789000",
		"createDateStr": "2017-06-13 10:09:49",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1014",
		"markAble": "1",
		"remark": "",
		"roleCode": "staff",
		"roleName": "普通员工",
		"updateDate": "1497319789000",
		"updateDateStr": "2017-06-13 10:09:49",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1497319774000",
		"createDateStr": "2017-06-13 10:09:34",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1013",
		"markAble": "1",
		"remark": "",
		"roleCode": "operation_staff",
		"roleName": "普通员工_操作类",
		"updateDate": "1497319774000",
		"updateDateStr": "2017-06-13 10:09:34",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1497319758000",
		"createDateStr": "2017-06-13 10:09:18",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1012",
		"markAble": "1",
		"remark": "",
		"roleCode": "technology_staff",
		"roleName": "普通员工_技术类",
		"updateDate": "1497319758000",
		"updateDateStr": "2017-06-13 10:09:18",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1497319724000",
		"createDateStr": "2017-06-13 10:08:44",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1010",
		"markAble": "1",
		"remark": "",
		"roleCode": "foreman",
		"roleName": "工长",
		"updateDate": "1497319724000",
		"updateDateStr": "2017-06-13 10:08:44",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1497319712000",
		"createDateStr": "2017-06-13 10:08:32",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1009",
		"markAble": "1",
		"remark": "",
		"roleCode": "chargehand",
		"roleName": "生产班组长",
		"updateDate": "1497319712000",
		"updateDateStr": "2017-06-13 10:08:32",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1497319683000",
		"createDateStr": "2017-06-13 10:08:03",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1007",
		"markAble": "1",
		"remark": "",
		"roleCode": "minister",
		"roleName": "部长",
		"updateDate": "1497319683000",
		"updateDateStr": "2017-06-13 10:08:03",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1497319662000",
		"createDateStr": "2017-06-13 10:07:42",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1006",
		"markAble": "1",
		"remark": "",
		"roleCode": "factorymanager",
		"roleName": "厂长",
		"updateDate": "1497319662000",
		"updateDateStr": "2017-06-13 10:07:42",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1497319634000",
		"createDateStr": "2017-06-13 10:07:14",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1005",
		"markAble": "1",
		"remark": "",
		"roleCode": "board_of_directors",
		"roleName": "公司领导管理组",
		"updateDate": "1497319634000",
		"updateDateStr": "2017-06-13 10:07:14",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1487830194000",
		"createDateStr": "2017-02-23 14:09:54",
		"createUser": "PENG013",
		"createUserName": "测试组1.0",
		"id": "1004",
		"markAble": "1",
		"remark": "",
		"roleCode": "role02",
		"roleName": "厂长角色",
		"updateDate": "1487830194000",
		"updateDateStr": "2017-02-23 14:09:54",
		"updateUser": "PENG013",
		"updateUserName": "测试组1.0"
	}, {
		"createDate": "1487827862000",
		"createDateStr": "2017-02-23 13:31:02",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1003",
		"markAble": "1",
		"remark": "",
		"roleCode": "role01",
		"roleName": "工人角色",
		"updateDate": "1487830121000",
		"updateDateStr": "2017-02-23 14:08:41",
		"updateUser": "PENG013",
		"updateUserName": "测试组1.0"
	}, {
		"createDate": "1487821160000",
		"createDateStr": "2017-02-23 11:39:20",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1002",
		"markAble": "1",
		"remark": "",
		"roleCode": "shengchan",
		"roleName": "生产",
		"updateDate": "1487830228000",
		"updateDateStr": "2017-02-23 14:10:28",
		"updateUser": "PENG013",
		"updateUserName": "测试组1.0"
	}, {
		"createDate": "1487654433000",
		"createDateStr": "2017-02-21 13:20:33",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1001",
		"markAble": "1",
		"remark": "",
		"roleCode": "role_02",
		"roleName": "领导角色",
		"updateDate": "1487654433000",
		"updateDateStr": "2017-02-21 13:20:33",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"createDate": "1487654409000",
		"createDateStr": "2017-02-21 13:20:09",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1000",
		"markAble": "1",
		"remark": "",
		"roleCode": "role_01",
		"roleName": "员工角色",
		"updateDate": "1487654409000",
		"updateDateStr": "2017-02-21 13:20:09",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"createDate": "1487037600000",
		"createDateStr": "2017-02-14 10:00:00",
		"createUser": "Import",
		"createUserName": "Import",
		"id": "1",
		"markAble": "1",
		"remark": "",
		"roleCode": "admin",
		"roleName": "管理员",
		"updateDate": "1487037600000",
		"updateDateStr": "2017-02-14 10:00:00",
		"updateUser": "Import",
		"updateUserName": "Import"
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
