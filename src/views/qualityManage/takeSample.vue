<template>
    <div id="takeSample">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>质量管理</el-breadcrumb-item>
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>取样方案维护</el-breadcrumb-item>
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
             <span style="line-height:32px;font-size:14px;">方案代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">方案名称：</span>
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
    :data="takeSampleList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="sampleCode"
      label="方案代码"
     >
    </el-table-column>
    <el-table-column
      prop="sampleName"
      label="方案名称"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="strictName"
      label="严格度"
      >
    </el-table-column>
    <el-table-column
      prop="inspectLevelName"
      label="检验水平"
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
    name: 'takeSample',
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
            takeSampleList: [{
		"createDateStr": "2017-05-31 16:47:58",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1003",
		"inspectLevel": "JYSP_TSXJY",
		"inspectLevelName": "特殊性检验",
		"isDel": "false",
		"markAble": "1",
		"remark": "",
		"sampleCode": "TS0041",
		"sampleName": "方案名称",
		"strict": "Strict_nor",
		"strictName": "正常",
		"updateDateStr": "2017-05-31 16:47:58",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDateStr": "2017-02-21 13:44:41",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1002",
		"inspectLevel": "JYSP_TSXJY",
		"inspectLevelName": "特殊性检验",
		"isDel": "false",
		"markAble": "1",
		"remark": "",
		"sampleCode": "TS0034",
		"sampleName": "批次检验方案",
		"strict": "Strict_nor",
		"strictName": "正常",
		"updateDateStr": "2017-02-21 13:44:41",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"createDateStr": "2017-02-21 13:44:31",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1001",
		"inspectLevel": "JYSP_TSXJY",
		"inspectLevelName": "特殊性检验",
		"isDel": "false",
		"markAble": "1",
		"remark": "",
		"sampleCode": "TS0033",
		"sampleName": "首件检验方案",
		"strict": "Strict_str",
		"strictName": "加严",
		"updateDateStr": "2017-02-21 13:44:31",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"createDateStr": "2017-02-21 13:43:07",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1000",
		"inspectLevel": "JYSP_YBXJY",
		"inspectLevelName": "一般性检验",
		"isDel": "false",
		"markAble": "1",
		"remark": "",
		"sampleCode": "TS0032",
		"sampleName": "以色列",
		"strict": "Strict_nor",
		"strictName": "正常",
		"updateDateStr": "2017-02-21 13:43:07",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}],
        currentPage: 1
        }
    },
    methods: {
        add(){
		  this.$router.push('takeSampleAdd')
	  },
      handleClick(row) {
        console.log(row);
        this.$router.push('takeSampleEdit')
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
