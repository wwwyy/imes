<template>
    <div id="codeType">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>公共数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>代码类别</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">类别代码：</span>
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
    :data="codeTypeList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
      >
    </el-table-column>
    <el-table-column
      prop="typeCode"
      label="类别代码"
      width="180"
     >
    </el-table-column>
    <el-table-column
      prop="typeName"
      label="类别名称"
      width="180"
      >
    </el-table-column>
    <el-table-column
      prop="parent"
      label="父类别代码"
      >
    </el-table-column>
    <el-table-column
      prop="markAble"
      label="可用标识"
     >
    </el-table-column>
    <el-table-column
      prop="createUser"
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
      prop="updateUser"
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
    name: 'codeType',
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
            codeTypeList: [{
		"createDateStr": "2017-09-03 21:03:35",
		"createUser": "admin",
		"id": "1079",
		"markAble": "1",
		"remark": "",
		"typeCode": "WH_AREA",
		"typeName": "WH_AREA",
		"updateDateStr": "2017-09-03 21:03:35",
		"updateUser": "admin"
	}, {
		"createDateStr": "2017-05-20 10:08:12",
		"createUser": "admin",
		"id": "1078",
		"markAble": "1",
		"remark": "",
		"typeCode": "WH_AREA",
		"typeName": "库区",
		"updateDateStr": "2017-05-20 10:08:12",
		"updateUser": "admin"
	}, {
		"createDateStr": "2017-05-19 01:48:59",
		"createUser": "admin",
		"id": "1077",
		"markAble": "1",
		"remark": "",
		"typeCode": "GY_CZZZ",
		"typeName": "操作资质",
		"updateDateStr": "2017-05-19 01:48:59",
		"updateUser": "admin"
	}, {
		"createDateStr": "2017-05-19 01:35:47",
		"createUser": "admin",
		"id": "1076",
		"markAble": "1",
		"remark": "",
		"typeCode": "BOM_MATERIAL_TYPE",
		"typeName": "bom物料类型",
		"updateDateStr": "2017-05-19 01:35:47",
		"updateUser": "admin"
	}, {
		"createDateStr": "2017-05-19 01:35:34",
		"createUser": "admin",
		"id": "1075",
		"markAble": "1",
		"remark": "",
		"typeCode": "STRUCTURE_SOURCE",
		"typeName": "数据来源",
		"updateDateStr": "2017-05-19 01:35:34",
		"updateUser": "admin"
	}, {
		"createDateStr": "2017-05-19 01:35:19",
		"createUser": "admin",
		"id": "1074",
		"markAble": "1",
		"remark": "",
		"typeCode": "MOVE_REASON",
		"typeName": "移动原因",
		"updateDateStr": "2017-05-19 01:35:19",
		"updateUser": "admin"
	}, {
		"createDateStr": "2017-05-19 01:35:02",
		"createUser": "admin",
		"id": "1073",
		"markAble": "1",
		"remark": "",
		"typeCode": "EXECUTE_OPERATION",
		"typeName": "执行操作",
		"updateDateStr": "2017-05-19 01:35:02",
		"updateUser": "admin"
	}, {
		"createDateStr": "2017-05-19 01:34:48",
		"createUser": "admin",
		"id": "1072",
		"markAble": "1",
		"remark": "",
		"typeCode": "PARAMETER_SOURCE",
		"typeName": "参数来源",
		"updateDateStr": "2017-05-19 01:34:48",
		"updateUser": "admin"
	}, {
		"createDateStr": "2017-05-19 01:34:29",
		"createUser": "admin",
		"id": "1071",
		"markAble": "1",
		"remark": "",
		"typeCode": "CONDITIONAL",
		"typeName": "条件判断",
		"updateDateStr": "2017-05-19 01:34:29",
		"updateUser": "admin"
	}, {
		"createDateStr": "2017-05-19 01:33:57",
		"createUser": "admin",
		"id": "1070",
		"markAble": "1",
		"remark": "",
		"typeCode": "DOC_SUFFIX",
		"typeName": "文档格式",
		"updateDateStr": "2017-05-19 01:33:57",
		"updateUser": "admin"
	}, {
		"createDateStr": "2017-05-19 01:33:41",
		"createUser": "admin",
		"id": "1069",
		"markAble": "1",
		"remark": "",
		"typeCode": "DOC_CATEGORY",
		"typeName": "文档分类",
		"updateDateStr": "2017-05-19 01:33:41",
		"updateUser": "admin"
	}, {
		"createDateStr": "2017-05-19 01:30:32",
		"createUser": "admin",
		"id": "1068",
		"markAble": "1",
		"remark": "",
		"typeCode": "PARAMETER_TYPE",
		"typeName": "参数类型",
		"updateDateStr": "2017-05-19 01:30:32",
		"updateUser": "admin"
	}, {
		"createDateStr": "2017-05-19 01:22:37",
		"createUser": "admin",
		"id": "1067",
		"markAble": "1",
		"remark": "",
		"typeCode": "JC_PRODUCT_TYPE",
		"typeName": "产品型号类型",
		"updateDateStr": "2017-05-19 01:22:37",
		"updateUser": "admin"
	}, {
		"createDateStr": "2017-02-14 10:00:00",
		"createUser": "Import",
		"id": "1066",
		"markAble": "1",
		"remark": "",
		"typeCode": "ZH_QUERY_SIZE",
		"typeName": "查询粒度",
		"updateDateStr": "2017-02-23 13:27:43",
		"updateUser": "PENG013"
	}, {
		"createDateStr": "2017-02-14 10:00:00",
		"createUser": "Import",
		"id": "1065",
		"markAble": "1",
		"remark": "",
		"typeCode": "SB_BJLX",
		"typeName": "备件类型",
		"updateDateStr": "2017-02-14 10:00:00",
		"updateUser": "Import"
	}, {
		"createDateStr": "2017-02-14 10:00:00",
		"createUser": "Import",
		"id": "1064",
		"markAble": "1",
		"remark": "",
		"typeCode": "BJGG",
		"typeName": "备件规格",
		"updateDateStr": "2017-02-14 10:00:00",
		"updateUser": "Import"
	}, {
		"createDateStr": "2017-02-14 10:00:00",
		"createUser": "Import",
		"id": "1063",
		"markAble": "1",
		"remark": "",
		"typeCode": "SB_BJ_STORAGETYPE",
		"typeName": "备件出入库类型",
		"updateDateStr": "2017-02-14 10:00:00",
		"updateUser": "Import"
	}, {
		"createDateStr": "2017-02-14 10:00:00",
		"createUser": "Import",
		"id": "1062",
		"markAble": "1",
		"remark": "",
		"typeCode": "DEVICE_FAULT_TYPE",
		"typeName": "停机故障类别",
		"updateDateStr": "2017-02-14 10:00:00",
		"updateUser": "Import"
	}, {
		"createDateStr": "2017-02-14 10:00:00",
		"createUser": "Import",
		"id": "1061",
		"markAble": "1",
		"remark": "",
		"typeCode": "DEVICE_DEFAULT_CODE",
		"typeName": "设备故障代码",
		"updateDateStr": "2017-02-14 10:00:00",
		"updateUser": "Import"
	}, {
		"createDateStr": "2017-02-14 10:00:00",
		"createUser": "Import",
		"id": "1060",
		"markAble": "1",
		"typeCode": "WORKING_STATUS",
		"typeName": "设备运行状态",
		"updateDateStr": "2017-02-14 10:00:00",
		"updateUser": "Import"
	}],
        currentPage: 1
        }
    },
    methods: {
      add(){
		  this.$router.push('codeTypeAdd')
	  },
      handleClick(row) {
		console.log(row);
		this.$router.push('codeTypeEdit')
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
