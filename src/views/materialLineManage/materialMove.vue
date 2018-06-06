<template>
    <div id="materialMove">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>线边仓管理 </el-breadcrumb-item>
            <el-breadcrumb-item>物料移动需求</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-delete" style="width:100px"> 删 除 </el-button>
            <el-button size="small"  style="width:100px"> 提 交 </el-button>
            <el-button size="small" icon="el-icon-edit-outline" style="width:100px"> 审 核 </el-button>
            <el-button size="small"  style="width:100px"> 移 库 </el-button>
            <el-button size="small"  style="width:100px"> 作 废 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
              <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">员工代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
              <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px;">员工名称：	</span>
              <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
             <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">班组：		</span>
            <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          
            <br>
            <br>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">开始日期：</span>
             <el-date-picker
                v-model="startDate"
                type="date"
                placeholder="选择日期"
                style="width:194px"
                size="small">
            </el-date-picker>
             <span style="margin-left:40px;line-height:32px;font-size:14px;">结束日期：</span>
             <el-date-picker
                v-model="endDate"
                type="date"
                placeholder="选择日期"
                style="width:194px"
                size="small">
            </el-date-picker>
        </div>
        <el-table
    :data="emList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="moveCode"
      label="移动单号"
      width="120"
     >
    </el-table-column>
    <el-table-column
      prop="moveReasonName"
      label="移动原因"
     >
    </el-table-column>
    <el-table-column
      prop="operateDateStr"
      label="操作日期"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="stateName"
      label="状态"
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
    name: 'materialMove',
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
            emList: [{
		"createDate": "1499324059000",
		"createDateStr": "2017-07-06 14:54:19",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "28",
		"markAble": "1",
		"moveCode": "MC00000022",
		"moveFrom": "WHC052",
		"moveFromName": "电泳半成品库",
		"moveReason": "move1",
		"moveReasonName": "作业计划",
		"moveTo": "WHC051",
		"moveToName": "成品库",
		"operateDate": "1499270400000",
		"operateDateStr": "2017-07-06",
		"relevantID": "",
		"remark": "",
		"state": "1",
		"stateName": "已提交",
		"updateDate": "1499324059000",
		"updateDateStr": "2017-07-06 14:54:19",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1499322767000",
		"createDateStr": "2017-07-06 14:32:47",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "27",
		"markAble": "1",
		"moveCode": "MC00000021",
		"moveFrom": "WHC042",
		"moveFromName": "焊接半成品库",
		"moveReason": "move1",
		"moveReasonName": "作业计划",
		"moveTo": "WHC051",
		"moveToName": "成品库",
		"operateDate": "1499270400000",
		"operateDateStr": "2017-07-06",
		"relevantID": "",
		"remark": "",
		"state": "2",
		"stateName": "审核通过",
		"updateDate": "1499322767000",
		"updateDateStr": "2017-07-06 14:32:47",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1496198258000",
		"createDateStr": "2017-05-31 10:37:38",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "26",
		"markAble": "1",
		"moveCode": "MC00000011",
		"moveFrom": "WHC052",
		"moveFromName": "电泳半成品库",
		"moveReason": "move2",
		"moveReasonName": "机组产出",
		"moveTo": "WHC051",
		"moveToName": "成品库",
		"operateDate": "1496160000000",
		"operateDateStr": "2017-05-31",
		"relevantID": "C00103",
		"remark": "",
		"state": "5",
		"stateName": "作废",
		"updateDate": "1496198258000",
		"updateDateStr": "2017-05-31 10:37:38",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}],
        currentPage: 1
        }
    },
    methods: {
      add(){
		  this.$router.push('materialMoveAdd')
	  },
      handleClick(row) {
        console.log(row);
        this.$router.push('materialMoveEdit')
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
