<template>
    <div id="processData">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>工艺数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>工序数据维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">工序代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">工序名称：</span>
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
    :data="processDataList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
      >
    </el-table-column>
    <el-table-column
      prop="processCode"
      label="工序代码"
     >
    </el-table-column>
    <el-table-column
      prop="processName"
      label="工序名称"
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
    name: 'processData',
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
            processDataList: [{
		"createDate": 1495763436000,
		"createDateStr": "2017-05-26 09:50:36",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1040,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "208",
		"processName": "落料成型",
		"remark": "",
		"updateDate": 1495763436000,
		"updateDateStr": "2017-05-26 09:50:36",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": 1495763424000,
		"createDateStr": "2017-05-26 09:50:24",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1039,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "319",
		"processName": "修边",
		"remark": "",
		"updateDate": 1495763424000,
		"updateDateStr": "2017-05-26 09:50:24",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": 1495763413000,
		"createDateStr": "2017-05-26 09:50:13",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1038,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "318",
		"processName": "切断",
		"remark": "",
		"updateDate": 1495763413000,
		"updateDateStr": "2017-05-26 09:50:13",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": 1495763382000,
		"createDateStr": "2017-05-26 09:49:42",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1037,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "206",
		"processName": "翻边",
		"remark": "",
		"updateDate": 1495763382000,
		"updateDateStr": "2017-05-26 09:49:42",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": 1495763370000,
		"createDateStr": "2017-05-26 09:49:30",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1036,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "205",
		"processName": "冲孔",
		"remark": "",
		"updateDate": 1495763370000,
		"updateDateStr": "2017-05-26 09:49:30",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": 1495763356000,
		"createDateStr": "2017-05-26 09:49:16",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1035,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "204",
		"processName": "酸洗",
		"remark": "",
		"updateDate": 1495763356000,
		"updateDateStr": "2017-05-26 09:49:16",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": 1495763342000,
		"createDateStr": "2017-05-26 09:49:02",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1034,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "203",
		"processName": "黑色电泳漆",
		"remark": "",
		"updateDate": 1495763342000,
		"updateDateStr": "2017-05-26 09:49:02",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": 1495763322000,
		"createDateStr": "2017-05-26 09:48:42",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1033,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "202",
		"processName": "检验",
		"remark": "",
		"updateDate": 1495763322000,
		"updateDateStr": "2017-05-26 09:48:42",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": 1495763306000,
		"createDateStr": "2017-05-26 09:48:26",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1032,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "201",
		"processName": "半成品入库",
		"remark": "",
		"updateDate": 1495763306000,
		"updateDateStr": "2017-05-26 09:48:26",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": 1495763284000,
		"createDateStr": "2017-05-26 09:48:04",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1031,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "200",
		"processName": "人工分选",
		"remark": "",
		"updateDate": 1495763284000,
		"updateDateStr": "2017-05-26 09:48:04",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": 1495763264000,
		"createDateStr": "2017-05-26 09:47:44",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1030,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "309",
		"processName": "包装入库",
		"remark": "",
		"updateDate": 1495763264000,
		"updateDateStr": "2017-05-26 09:47:44",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": 1495185915000,
		"createDateStr": "2017-05-19 17:25:15",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1029,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "195",
		"processName": "焊接工序",
		"remark": "",
		"updateDate": 1495185915000,
		"updateDateStr": "2017-05-19 17:25:15",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": 1495185859000,
		"createDateStr": "2017-05-19 17:24:19",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1028,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "194",
		"processName": "落料工序",
		"remark": "",
		"updateDate": 1495185859000,
		"updateDateStr": "2017-05-19 17:24:19",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": 1495185827000,
		"createDateStr": "2017-05-19 17:23:47",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1027,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "193",
		"processName": "冲压工序",
		"remark": "",
		"updateDate": 1495185827000,
		"updateDateStr": "2017-05-19 17:23:47",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": 1488783064000,
		"createDateStr": "2017-03-06 14:51:04",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1026,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "292",
		"processName": "12  45",
		"remark": "",
		"updateDate": 1488783064000,
		"updateDateStr": "2017-03-06 14:51:04",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": 1488782930000,
		"createDateStr": "2017-03-06 14:48:50",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": 1025,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "291",
		"processName": "12",
		"remark": "",
		"updateDate": 1488782930000,
		"updateDateStr": "2017-03-06 14:48:50",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": 1487836305000,
		"createDateStr": "2017-02-23 15:51:45",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"id": 1024,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "287",
		"processName": "固定中铰链",
		"remark": "",
		"updateDate": 1487836305000,
		"updateDateStr": "2017-02-23 15:51:45",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
	}, {
		"createDate": 1487836252000,
		"createDateStr": "2017-02-23 15:50:52",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"id": 1023,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "286",
		"processName": "按滑道",
		"remark": "",
		"updateDate": 1487836252000,
		"updateDateStr": "2017-02-23 15:50:52",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
	}, {
		"createDate": 1487836236000,
		"createDateStr": "2017-02-23 15:50:36",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"id": 1022,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "285",
		"processName": "固定马达",
		"remark": "",
		"updateDate": 1487836236000,
		"updateDateStr": "2017-02-23 15:50:36",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
	}, {
		"createDate": 1487836220000,
		"createDateStr": "2017-02-23 15:50:20",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"id": 1021,
		"markAble": 1,
		"markAbleName": "启用",
		"processCode": "284",
		"processName": "安装风机",
		"remark": "",
		"updateDate": 1487836220000,
		"updateDateStr": "2017-02-23 15:50:20",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
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
