<template>
    <div id="failureRepository">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>质量管理</el-breadcrumb-item>
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>故障知识库维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">缺陷代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">缺陷名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">表现形式：</span>
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
    :data="failureCodeList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="defectCode"
      label="缺陷代码"
      width="120"
     >
    </el-table-column>
    <el-table-column
      prop="defectName"
      label="缺陷名称"
      >
    </el-table-column>
    <el-table-column
      prop="manifestation"
      label="表现形式"
      width="380"
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
    name: 'failureRepository',
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
            failureCodeList: [{
		"category": "DEF_CDOE2",
		"categoryName": "缺陷类别测试2",
		"createDate": 1487656254000,
		"createDateStr": "2017-02-21 13:50:54",
		"createUser": "admin",
		"createUserName": "administrator",
		"defectCode": "0000000035",
		"defectName": "实用性缺陷",
		"id": 1002,
		"manifestation": "操作太繁琐",
		"markAble": "1",
		"remark": "",
		"updateDate": "1487656254000",
		"updateDateStr": "2017-02-21 13:50:54",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"category": "DEF_CDOE1",
		"categoryName": "缺陷类别测试1",
		"createDate": 1487656226000,
		"createDateStr": "2017-02-21 13:50:26",
		"createUser": "admin",
		"createUserName": "administrator",
		"defectCode": "0000000034",
		"defectName": "质量缺陷",
		"id": 1001,
		"manifestation": "使用寿命不长",
		"markAble": "1",
		"remark": "",
		"updateDate": "1487656226000",
		"updateDateStr": "2017-02-21 13:50:26",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"category": "DEF_CDOE1",
		"categoryName": "缺陷类别测试1",
		"createDate": 1487656199000,
		"createDateStr": "2017-02-21 13:49:59",
		"createUser": "admin",
		"createUserName": "administrator",
		"defectCode": "0000000033",
		"defectName": "外观缺陷",
		"id": 1000,
		"manifestation": "沿轧制方向钢带表面线状物理性伤害，程度较重，时有起皮，连续分布，一般超过半卷。",
		"markAble": "1",
		"remark": "",
		"updateDate": "1487656199000",
		"updateDateStr": "2017-02-21 13:49:59",
		"updateUser": "admin",
		"updateUserName": "administrator"
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
