<template>
    <div id="deviceMaitainHour">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>综合报表</el-breadcrumb-item>
            <el-breadcrumb-item>设备报表</el-breadcrumb-item>
            <el-breadcrumb-item>设备保养工时统计</el-breadcrumb-item>
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
              <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">保养项目：	</span>
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
    :data="odList"
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
      label="保养项目"
      >
    </el-table-column>
    <el-table-column
      prop="beginDateStr"
      label="	保养开始时间"
      >
    </el-table-column>
    <el-table-column
      prop="endDateStr"
      label="保养结束时间"
      >
    </el-table-column>
    <el-table-column
      prop="maintenanceTime"
      label="保养时间(小时)"
      >
    </el-table-column>
    <el-table-column
      prop="operatorName"
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
    name: 'deviceMaitainHour',
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
            odList: [{
		"beginDate": "1487922600000",
		"beginDateStr": "2017-02-24 15:50:00",
		"endDate": "1488007800000",
		"endDateStr": "2017-02-25 15:30:00",
		"equipCode": "9050MAMTFP0012",
		"equipName": "新线门体发泡夹具12",
		"maintenanceTime": "23.67",
		"operator": "PENG035",
		"operatorName": "高丽娟",
		"projectName": "发泡机保养",
		"supplierName": "设备供应商"
	}, {
		"beginDate": "1487919000000",
		"beginDateStr": "2017-02-24 14:50:00",
		"endDate": "1487975100000",
		"endDateStr": "2017-02-25 06:25:00",
		"equipCode": "9050MAMTFP0012",
		"equipName": "新线门体发泡夹具12",
		"maintenanceTime": "15.58",
		"operator": "PENG035",
		"operatorName": "高丽娟",
		"projectName": "发泡机保养",
		"supplierName": "设备供应商"
	}, {
		"beginDate": "1487900520000",
		"beginDateStr": "2017-02-24 09:42:00",
		"endDate": "1487974200000",
		"endDateStr": "2017-02-25 06:10:00",
		"equipCode": "9050MAMTFP0012",
		"equipName": "新线门体发泡夹具12",
		"maintenanceTime": "20.47",
		"operator": "PENG035",
		"operatorName": "高丽娟",
		"projectName": "发泡机保养",
		"supplierName": "设备供应商"
	}, {
		"equipCode": "9050MAMTFP0012",
		"equipName": "新线门体发泡夹具12",
		"projectName": "发泡机保养",
		"supplierName": "设备供应商"
	}, {
		"equipCode": "9050MAMTFP0015",
		"equipName": "新线门体发泡夹具15",
		"projectName": "发泡机保养",
		"supplierName": "设备供应商"
	}, {
		"equipCode": "9050MAMTFP0012",
		"equipName": "新线门体发泡夹具12",
		"projectName": "发泡机保养",
		"supplierName": "设备供应商"
	}, {
		"equipCode": "9050MAMTFP0012",
		"equipName": "新线门体发泡夹具12",
		"projectName": "发泡机保养",
		"supplierName": "设备供应商"
	}, {
		"equipCode": "9050MAMTFP0015",
		"equipName": "新线门体发泡夹具15",
		"projectName": "发泡机保养",
		"supplierName": "设备供应商"
	}, {
		"equipCode": "9050MAMTFP0012",
		"equipName": "新线门体发泡夹具12",
		"projectName": "发泡机保养",
		"supplierName": "设备供应商"
	}, {
		"equipCode": "9050MAMTFP0012",
		"equipName": "新线门体发泡夹具12",
		"projectName": "发泡机保养",
		"supplierName": "设备供应商"
	}, {
		"equipCode": "9050MAMTFP0015",
		"equipName": "新线门体发泡夹具15",
		"projectName": "发泡机保养",
		"supplierName": "设备供应商"
	}, {
		"equipCode": "9050MAMTFP0012",
		"equipName": "新线门体发泡夹具12",
		"projectName": "发泡机保养",
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
