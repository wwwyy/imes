<template>
    <div id="qualityInspectionPlan">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>质量管理</el-breadcrumb-item>
            <el-breadcrumb-item>质检管理</el-breadcrumb-item>
            <el-breadcrumb-item>质检计划维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" icon="el-icon-printer" style="width:100px"> 打 印 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
             <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">计划ID：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px">订单代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            
             <span style="margin-left:40px;line-height:32px;font-size:14px;">开始日期：</span>
             <el-date-picker
                v-model="startDate"
                type="date"
                placeholder="选择日期"
                style="width:194px"
                size="small">
            </el-date-picker>
            <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px">状态：</span>
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
             <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">型号代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
              <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px">产品名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
           
            <span style="margin-left:40px;line-height:32px;font-size:14px;">结束日期：</span>
             <el-date-picker
                v-model="endDate"
                type="date"
                placeholder="选择日期"
                style="width:194px"
                size="small">
            </el-date-picker>
            <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px;">可用标识：</span>
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
    :data="qualityInspectionPlanList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="checkingCode"
      label="计划ID"
     >
    </el-table-column>
    <el-table-column
      prop="orderCode"
      label="订单代码"
      >
    </el-table-column>
    <el-table-column
      prop="modelCode"
      label="型号代码"
     >
    </el-table-column>
    <el-table-column
      prop="productName"
      label="产品名称"
      width="160"
     >
    </el-table-column>
    <el-table-column
      prop="orderCount"
      label="订单数量"
      >
    </el-table-column>
    <el-table-column
      prop="checkingRangeName"
      label="检验范围"
     >
    </el-table-column>
    <el-table-column
      prop="checkingCount"
      label="取样数量"
     >
    </el-table-column>
    <el-table-column
      prop="checkingPlanName"
      label="取样方案"
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="checkingItemName"
      label="检验项目"
      width="150"
     >
    </el-table-column>
    <el-table-column
      prop="planCheckingDateStr"
      label="检验日期"
      width="150"
     >
    </el-table-column>
    <el-table-column
      prop="checkingStatusName"
      label="状态"
     >
    </el-table-column>
    <el-table-column
      prop="markAbleName"
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
    name: 'qualityInspectionPlan',
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
            qualityInspectionPlanList: [{
		"checkingCode": "0061",
		"checkingCount": "100",
		"checkingItem": "CP0041",
		"checkingItemName": "油底壳调节板检验",
		"checkingPlan": "TS0034",
		"checkingPlanName": "批次检验方案",
		"checkingRange": "InspectAll",
		"checkingRangeName": "所有检验",
		"checkingStatus": "0",
		"checkingStatusName": "创建",
		"createDate": "1495767188000",
		"createDateStr": "2017-05-26 10:53:08",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1017",
		"markAble": "1",
		"markAbleName": "启用",
		"modelCode": "01651377",
		"orderCode": "C00109",
		"orderCount": "100",
		"planCheckingDate": "1496160000000",
		"planCheckingDateStr": "2017-05-31",
		"productName": "发动机油底壳调节板",
		"remark": "",
		"updateDate": "1495767188000",
		"updateDateStr": "2017-05-26 10:53:08",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
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
