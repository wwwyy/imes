<template>
    <div id="codeDef">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>公共数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>代码定义</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">代码名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">类别名称：</span>
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
    :data="codeDefList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
      >
    </el-table-column>
    <el-table-column
      prop="codeNo"
      label="代码编号"
      width="160"
     >
    </el-table-column>
    <el-table-column
      prop="codeName"
      label="代码名称"
      >
    </el-table-column>
    <el-table-column
      prop="typeCode"
      label="代码类别"
      width="160"
      >
    </el-table-column>
    <el-table-column
      prop="typeName"
      label="代码类别名称"
      width="160"
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
    name: 'codeDef',
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
            codeDefList: [{
		"codeName": "OCP-160E",
		"codeName_EN": "",
		"codeNo": "OCP-160E",
		"createDate": 1495766036000,
		"createDateStr": "2017-05-26 10:33:56",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1143,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "EQU_MODEL",
		"typeName": "设备规格型号",
		"updateDate": "1495766036000",
		"updateDateStr": "2017-05-26 10:33:56",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "总成类",
		"codeName_EN": "",
		"codeNo": "ASSEMBLY",
		"createDate": 1495761564000,
		"createDateStr": "2017-05-26 09:19:24",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1142,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "JC_MODEL_SERIES",
		"typeName": "型号系列",
		"updateDate": "1495761564000",
		"updateDateStr": "2017-05-26 09:19:24",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "单件类",
		"codeName_EN": "",
		"codeNo": "SINGLETON",
		"createDate": 1495761502000,
		"createDateStr": "2017-05-26 09:18:22",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1141,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "JC_MODEL_SERIES",
		"typeName": "型号系列",
		"updateDate": "1495761502000",
		"updateDateStr": "2017-05-26 09:18:22",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "B区",
		"codeName_EN": "",
		"codeNo": "WH_AREA_B",
		"createDate": 1495246143000,
		"createDateStr": "2017-05-20 10:09:03",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1135,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "WH_AREA",
		"typeName": "WH_AREA",
		"updateDate": "1495246143000",
		"updateDateStr": "2017-05-20 10:09:03",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "B区",
		"codeName_EN": "",
		"codeNo": "WH_AREA_B",
		"createDate": 1495246143000,
		"createDateStr": "2017-05-20 10:09:03",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1135,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "WH_AREA",
		"typeName": "库区",
		"updateDate": "1495246143000",
		"updateDateStr": "2017-05-20 10:09:03",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "A区",
		"codeName_EN": "",
		"codeNo": "WH_AREA_A",
		"createDate": 1495246122000,
		"createDateStr": "2017-05-20 10:08:42",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1134,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "WH_AREA",
		"typeName": "WH_AREA",
		"updateDate": "1495246122000",
		"updateDateStr": "2017-05-20 10:08:42",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "A区",
		"codeName_EN": "",
		"codeNo": "WH_AREA_A",
		"createDate": 1495246122000,
		"createDateStr": "2017-05-20 10:08:42",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1134,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "WH_AREA",
		"typeName": "库区",
		"updateDate": "1495246122000",
		"updateDateStr": "2017-05-20 10:08:42",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "半成品",
		"codeName_EN": "",
		"codeNo": "TYPE_BCP",
		"createDate": 1495178030000,
		"createDateStr": "2017-05-19 15:13:50",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1133,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "WL_MATERIAL_TYPE",
		"typeName": "物料类型",
		"updateDate": "1495178030000",
		"updateDateStr": "2017-05-19 15:13:50",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "外协",
		"codeName_EN": "",
		"codeNo": "BOM_MATERIAL_HELP",
		"createDate": 1495129322000,
		"createDateStr": "2017-05-19 01:42:02",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1132,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "BOM_MATERIAL_TYPE",
		"typeName": "bom物料类型",
		"updateDate": "1495129322000",
		"updateDateStr": "2017-05-19 01:42:02",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "采购",
		"codeName_EN": "",
		"codeNo": "BOM_MATERIAL_BUY",
		"createDate": 1495129305000,
		"createDateStr": "2017-05-19 01:41:45",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1131,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "BOM_MATERIAL_TYPE",
		"typeName": "bom物料类型",
		"updateDate": "1495129305000",
		"updateDateStr": "2017-05-19 01:41:45",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "自制",
		"codeName_EN": "",
		"codeNo": "BOM_MATERIAL_MADE",
		"createDate": 1495129288000,
		"createDateStr": "2017-05-19 01:41:28",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1130,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "BOM_MATERIAL_TYPE",
		"typeName": "bom物料类型",
		"updateDate": "1495129288000",
		"updateDateStr": "2017-05-19 01:41:28",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "手工新增",
		"codeName_EN": "",
		"codeNo": "ManuallyAdd",
		"createDate": 1495129263000,
		"createDateStr": "2017-05-19 01:41:03",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1129,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "STRUCTURE_SOURCE",
		"typeName": "数据来源",
		"updateDate": "1495129263000",
		"updateDateStr": "2017-05-19 01:41:03",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "机组产出",
		"codeName_EN": "",
		"codeNo": "move2",
		"createDate": 1495129231000,
		"createDateStr": "2017-05-19 01:40:31",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1128,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "MOVE_REASON",
		"typeName": "移动原因",
		"updateDate": "1495129231000",
		"updateDateStr": "2017-05-19 01:40:31",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "作业计划",
		"codeName_EN": "",
		"codeNo": "move1",
		"createDate": 1495129207000,
		"createDateStr": "2017-05-19 01:40:07",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1127,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "MOVE_REASON",
		"typeName": "移动原因",
		"updateDate": "1495129207000",
		"updateDateStr": "2017-05-19 01:40:07",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "继续生产",
		"codeName_EN": "",
		"codeNo": "BUSINESS_KEEPPRODUCT",
		"createDate": 1495129181000,
		"createDateStr": "2017-05-19 01:39:41",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1126,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "EXECUTE_OPERATION",
		"typeName": "执行操作",
		"updateDate": "1495129181000",
		"updateDateStr": "2017-05-19 01:39:41",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "中断生产",
		"codeName_EN": "",
		"codeNo": "BUSINESS_HOLDPRODUCT",
		"createDate": 1495129158000,
		"createDateStr": "2017-05-19 01:39:18",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1125,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "EXECUTE_OPERATION",
		"typeName": "执行操作",
		"updateDate": "1495129158000",
		"updateDateStr": "2017-05-19 01:39:18",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "直接输入",
		"codeName_EN": "",
		"codeNo": "BUSINESS_INPUT",
		"createDate": 1495129128000,
		"createDateStr": "2017-05-19 01:38:48",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1124,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "PARAMETER_SOURCE",
		"typeName": "参数来源",
		"updateDate": "1495129128000",
		"updateDateStr": "2017-05-19 01:38:48",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "业务参数",
		"codeName_EN": "",
		"codeNo": "BUSINESS_PARAMETER",
		"createDate": 1495129110000,
		"createDateStr": "2017-05-19 01:38:30",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1123,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "PARAMETER_SOURCE",
		"typeName": "参数来源",
		"updateDate": "1495129110000",
		"updateDateStr": "2017-05-19 01:38:30",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "大于",
		"codeName_EN": "",
		"codeNo": "BUSINESS_GREATTHAN",
		"createDate": 1495129089000,
		"createDateStr": "2017-05-19 01:38:09",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1122,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "CONDITIONAL",
		"typeName": "条件判断",
		"updateDate": "1495129089000",
		"updateDateStr": "2017-05-19 01:38:09",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"codeName": "大于等于",
		"codeName_EN": "",
		"codeNo": "BUSINESS_GREATTHANOR",
		"createDate": 1495129071000,
		"createDateStr": "2017-05-19 01:37:51",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1121,
		"isDel": "false",
		"markAble": 1,
		"remark": "",
		"typeCode": "CONDITIONAL",
		"typeName": "条件判断",
		"updateDate": "1495129071000",
		"updateDateStr": "2017-05-19 01:37:51",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}],
        currentPage: 1
        }
    },
    methods: {
		add(){
		  this.$router.push('codeDefAdd')
	  },
      handleClick(row) {
        console.log(row);
		this.$router.push('codeDefEdit')
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
