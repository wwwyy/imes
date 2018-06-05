<template>
    <div id="codeRule">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>公共数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>编码规则维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
              <el-button size="small" style="width:100px"> 数据字段维护 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">规则代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">规则名称：</span>
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
    :data="codeRuleList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
      >
    </el-table-column>
    <el-table-column
      prop="ruleCode"
      label="规则代码"
      width="200"
     >
    </el-table-column>
    <el-table-column
      prop="ruleName"
      label="规则名称"
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="ruleLen"
      label="长度"
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
    name: 'codeRule',
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
            codeRuleList: [{
		"createDate": "1495695529000",
		"createDateStr": "2017-05-25 14:58:49",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "87",
		"markAble": "1",
		"remark": "",
		"ruleCode": "MATERIALRETURN_CODE",
		"ruleLen": "10",
		"ruleName": "退料管理单号",
		"updateDate": "1495695529000",
		"updateDateStr": "2017-05-25 14:58:49",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495586850000",
		"createDateStr": "2017-05-24 08:47:30",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "86",
		"markAble": "1",
		"remark": "",
		"ruleCode": "YG001",
		"ruleLen": "8",
		"ruleName": "员工编码",
		"updateDate": "1495586850000",
		"updateDateStr": "2017-05-24 08:47:30",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495131644000",
		"createDateStr": "2017-05-19 02:20:44",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "85",
		"markAble": "1",
		"remark": "",
		"ruleCode": "MATERIALSUPPLY_CODE",
		"ruleLen": "6",
		"ruleName": "补料申请代码",
		"updateDate": "1495131644000",
		"updateDateStr": "2017-05-19 02:20:44",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495130970000",
		"createDateStr": "2017-05-19 02:09:30",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "84",
		"markAble": "1",
		"remark": "",
		"ruleCode": "MATERIALOUTWARE_CODE",
		"ruleLen": "7",
		"ruleName": "物料出库管理编码",
		"updateDate": "1495130970000",
		"updateDateStr": "2017-05-19 02:09:30",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495130908000",
		"createDateStr": "2017-05-19 02:08:28",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "83",
		"markAble": "1",
		"remark": "",
		"ruleCode": "MATERIALINWARE_CODE",
		"ruleLen": "6",
		"ruleName": "物料入库管理编码",
		"updateDate": "1495130908000",
		"updateDateStr": "2017-05-19 02:08:28",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495130838000",
		"createDateStr": "2017-05-19 02:07:18",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "82",
		"markAble": "1",
		"remark": "",
		"ruleCode": "MOVE_CODE",
		"ruleLen": "10",
		"ruleName": "移动单号",
		"updateDate": "1495130838000",
		"updateDateStr": "2017-05-19 02:07:18",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495130795000",
		"createDateStr": "2017-05-19 02:06:35",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "81",
		"markAble": "1",
		"remark": "",
		"ruleCode": "BUSINESSRULE_CODE",
		"ruleLen": "5",
		"ruleName": "业务规则编码",
		"updateDate": "1495130795000",
		"updateDateStr": "2017-05-19 02:06:35",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495130511000",
		"createDateStr": "2017-05-19 02:01:51",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "80",
		"markAble": "1",
		"remark": "",
		"ruleCode": "location_Code",
		"ruleLen": "8",
		"ruleName": "库位代码",
		"updateDate": "1495130511000",
		"updateDateStr": "2017-05-19 02:01:51",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495130376000",
		"createDateStr": "2017-05-19 01:59:36",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "79",
		"markAble": "1",
		"remark": "",
		"ruleCode": "DocmentManage",
		"ruleLen": "10",
		"ruleName": "文档代码",
		"updateDate": "1495130376000",
		"updateDateStr": "2017-05-19 01:59:36",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1484018930000",
		"createDateStr": "2017-01-10 11:28:50",
		"createUser": "stuffCode_21",
		"createUserName": "stuffName_21",
		"id": "78",
		"markAble": "1",
		"remark": "",
		"ruleCode": "equifail_Code",
		"ruleLen": "8",
		"ruleName": "设备故障记录单号",
		"updateDate": "1484018930000",
		"updateDateStr": "2017-01-10 11:28:50",
		"updateUser": "stuffCode_21",
		"updateUserName": "stuffName_21"
	}, {
		"createDate": "1483605275000",
		"createDateStr": "2017-01-05 16:34:35",
		"createUser": "djj",
		"createUserName": "Nack丿Duan",
		"id": "77",
		"markAble": "1",
		"remark": "",
		"ruleCode": "SPAREPARTS_CHECKCODE",
		"ruleLen": "12",
		"ruleName": "备件盘点单号",
		"updateDate": "1483605275000",
		"updateDateStr": "2017-01-05 16:34:35",
		"updateUser": "djj",
		"updateUserName": "Nack丿Duan"
	}, {
		"createDate": "1483509745000",
		"createDateStr": "2017-01-04 14:02:25",
		"createUser": "djj",
		"createUserName": "Nack丿Duan",
		"id": "76",
		"markAble": "1",
		"remark": "",
		"ruleCode": "BJ_Spareparts",
		"ruleLen": "10",
		"ruleName": "备件档案",
		"updateDate": "1483509786000",
		"updateDateStr": "2017-01-04 14:03:06",
		"updateUser": "djj",
		"updateUserName": "Nack丿Duan"
	}, {
		"createDate": "1483508561000",
		"createDateStr": "2017-01-04 13:42:41",
		"createUser": "djj",
		"createUserName": "Nack丿Duan",
		"id": "75",
		"markAble": "1",
		"remark": "",
		"ruleCode": "storage_Code",
		"ruleLen": "9",
		"ruleName": "备件出入库单号ID",
		"updateDate": "1483508561000",
		"updateDateStr": "2017-01-04 13:42:41",
		"updateUser": "djj",
		"updateUserName": "Nack丿Duan"
	}, {
		"createDate": "1483081502000",
		"createDateStr": "2016-12-30 15:05:02",
		"createUser": "djj",
		"createUserName": "Nack丿Duan",
		"id": "74",
		"markAble": "1",
		"remark": "",
		"ruleCode": "productRoute_Version",
		"ruleLen": "6",
		"ruleName": "工艺路线版本号",
		"updateDate": "1483081502000",
		"updateDateStr": "2016-12-30 15:05:02",
		"updateUser": "djj",
		"updateUserName": "Nack丿Duan"
	}, {
		"createDate": "1483061222000",
		"createDateStr": "2016-12-30 09:27:02",
		"createUser": "djj",
		"createUserName": "Nack丿Duan",
		"id": "73",
		"markAble": "1",
		"remark": "",
		"ruleCode": "SELFCHECKRESULT_CODE",
		"ruleLen": "7",
		"ruleName": "自检结果编码",
		"updateDate": "1483061222000",
		"updateDateStr": "2016-12-30 09:27:02",
		"updateUser": "djj",
		"updateUserName": "Nack丿Duan"
	}, {
		"createDate": "1482979154000",
		"createDateStr": "2016-12-29 10:39:14",
		"createUser": "djj",
		"createUserName": "Nack丿Duan",
		"id": "72",
		"markAble": "1",
		"remark": "",
		"ruleCode": "organization_Code",
		"ruleLen": "8",
		"ruleName": "组织代码",
		"updateDate": "1482979154000",
		"updateDateStr": "2016-12-29 10:39:14",
		"updateUser": "djj",
		"updateUserName": "Nack丿Duan"
	}, {
		"createDate": "1482979090000",
		"createDateStr": "2016-12-29 10:38:10",
		"createUser": "djj",
		"createUserName": "Nack丿Duan",
		"id": "71",
		"markAble": "1",
		"remark": "",
		"ruleCode": "maintenancePlan_Id",
		"ruleLen": "8",
		"ruleName": "维保计划ID",
		"updateDate": "1482979090000",
		"updateDateStr": "2016-12-29 10:38:10",
		"updateUser": "djj",
		"updateUserName": "Nack丿Duan"
	}, {
		"createDate": "1482979029000",
		"createDateStr": "2016-12-29 10:37:09",
		"createUser": "djj",
		"createUserName": "Nack丿Duan",
		"id": "70",
		"markAble": "1",
		"remark": "",
		"ruleCode": "maintenance_Code",
		"ruleLen": "8",
		"ruleName": "维保项目代码",
		"updateDate": "1482979029000",
		"updateDateStr": "2016-12-29 10:37:09",
		"updateUser": "djj",
		"updateUserName": "Nack丿Duan"
	}, {
		"createDate": "1482978921000",
		"createDateStr": "2016-12-29 10:35:21",
		"createUser": "djj",
		"createUserName": "Nack丿Duan",
		"id": "69",
		"markAble": "1",
		"remark": "",
		"ruleCode": "exchangeRate_Version",
		"ruleLen": "5",
		"ruleName": "汇率维护版本号",
		"updateDate": "1482978921000",
		"updateDateStr": "2016-12-29 10:35:21",
		"updateUser": "djj",
		"updateUserName": "Nack丿Duan"
	}, {
		"createDate": "1482978787000",
		"createDateStr": "2016-12-29 10:33:07",
		"createUser": "djj",
		"createUserName": "Nack丿Duan",
		"id": "68",
		"markAble": "1",
		"remark": "",
		"ruleCode": "bugCode_Code",
		"ruleLen": "10",
		"ruleName": "缺陷代码",
		"updateDate": "1482978787000",
		"updateDateStr": "2016-12-29 10:33:07",
		"updateUser": "djj",
		"updateUserName": "Nack丿Duan"
	}],
        currentPage: 1
        }
    },
    methods: {
		add(){
		  this.$router.push('codeRuleAdd')
	  },
      handleClick(row) {
		console.log(row);
		this.$router.push('codeRuleEdit')
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
