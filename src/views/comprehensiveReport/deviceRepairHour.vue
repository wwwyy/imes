<template>
    <div id="deviceRepairHour">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>综合报表</el-breadcrumb-item>
            <el-breadcrumb-item>设备报表</el-breadcrumb-item>
            <el-breadcrumb-item>设备维修工时统计</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
              <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">设备代码：	</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
              <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:120px">故障现象描述：	</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>

             
             <span style="margin-left:40px;line-height:32px;font-size:14px;">开始日期：</span>
             <el-date-picker
                v-model="startDate"
                type="date"
                placeholder="选择日期"
                style="width:194px"
                size="small">
            </el-date-picker>
            <br>
            <br>
              <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">维修项目：	</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
              <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:120px">设备供应商名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
           
           
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
    :data="deviceRepairHourVOList"
    border
    style="width: 100%"
    align="left"
    size="mini">
    <el-table-column
      prop="equipCode"
      label="设备代码"
     >
    </el-table-column>
    <el-table-column
      prop="equipName"
      label="设备名称"
     >
    </el-table-column>
    <el-table-column
      prop="supplierName"
      label="设备供应商名称"
      >
    </el-table-column>
    <el-table-column
      prop="projectName"
      label="维修项目"
      >
    </el-table-column>
    <el-table-column
      prop="faultAnalysis"
      label="	维修开始时间"
      >
    </el-table-column>
    <el-table-column
      prop="faultReason"
      label="维修结束时间"
      >
    </el-table-column>
    <el-table-column
      prop=""
      label="	维修时间(小时)"
      >
    </el-table-column>
    <el-table-column
      prop="completeDateStr"
      label="操作人"
      >
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
    name: 'deviceRepairHour',
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
            deviceRepairHourVOList: [{
		"equipCode": "9050MAMTFP0028",
		"equipName": "新线门体发泡夹具28",
		"projectName": "项目01",
		"supplierName": "设备供应商"
	}, {
		"equipCode": "9050MAMTFP0028",
		"equipName": "新线门体发泡夹具28",
		"projectName": "项目01",
		"supplierName": "设备供应商"
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
