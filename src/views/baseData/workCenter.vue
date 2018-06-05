<template>
    <div id="workCenter">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>公共数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>工作中心维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-upload2" style="width:100px"> 导 入  </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">工作中心代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">工作中心名称：</span>
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
    :data="workCenterList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
      >
    </el-table-column>
    <el-table-column
      prop="workCenterCode"
      label="工作中心代码"
     >
    </el-table-column>
    <el-table-column
      prop="workCenterName"
      label="工作中心名称"
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
    name: 'workCenter',
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
            workCenterList: [{
		"createDateStr": "2017-06-13 13:35:29",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1007",
		"isDel": "false",
		"markAble": "1",
		"remark": "",
		"updateDateStr": "2017-06-13 13:35:29",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"workCenterCode": "route00054",
		"workCenterName": "高清周边"
	}, {
		"createDateStr": "2017-05-26 11:27:49",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1006",
		"isDel": "false",
		"markAble": "1",
		"remark": "",
		"updateDateStr": "2017-05-26 11:27:49",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"workCenterCode": "work0077",
		"workCenterName": "冲孔工作中心"
	}, {
		"createDateStr": "2017-05-26 11:26:36",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1005",
		"isDel": "false",
		"markAble": "1",
		"remark": "",
		"updateDateStr": "2017-05-26 11:26:36",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"workCenterCode": "work0075",
		"workCenterName": "落料工作中心"
	}, {
		"createDateStr": "2017-05-26 10:35:22",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1004",
		"isDel": "false",
		"markAble": "1",
		"remark": "",
		"updateDateStr": "2017-05-26 11:27:24",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"workCenterCode": "work0071",
		"workCenterName": "冲压一车间工作中心"
	}, {
		"createDateStr": "2017-05-26 10:31:05",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1003",
		"isDel": "false",
		"markAble": "1",
		"remark": "",
		"updateDateStr": "2017-05-26 10:31:14",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"workCenterCode": "work0070",
		"workCenterName": "电泳加工中心"
	}, {
		"createDateStr": "2017-05-20 09:56:56",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1002",
		"isDel": "false",
		"markAble": "1",
		"remark": "",
		"updateDateStr": "2017-05-20 09:56:56",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"workCenterCode": "work0063",
		"workCenterName": "焊接工作中心"
	}, {
		"createDateStr": "2017-02-23 16:33:10",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"id": "1001",
		"isDel": "false",
		"markAble": "1",
		"remark": "",
		"updateDateStr": "2017-02-24 10:34:20",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"workCenterCode": "work0048",
		"workCenterName": "整管"
	}, {
		"createDateStr": "2017-02-21 13:26:00",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1000",
		"isDel": "false",
		"markAble": "1",
		"remark": "",
		"updateDateStr": "2017-02-23 15:16:55",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟",
		"workCenterCode": "work0046",
		"workCenterName": "门体预装"
	}],
        currentPage: 1
        }
    },
    methods: {
        add(){
		  this.$router.push('workCenterAdd')
	  },
      handleClick(row) {
        console.log(row);
        this.$router.push('workCenterEdit')
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
