<template>
    <div id="productQualityEvaluationAndDisposal">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>质量管理</el-breadcrumb-item>
            <el-breadcrumb-item>质量判定与处置</el-breadcrumb-item>
            <el-breadcrumb-item>质量判定与处置</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
             <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">订单代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
             <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px">型号代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px">产品名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <br>
            <br>
             
            <span style="line-height:32px;font-size:14px;">开始日期：</span>
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
    :data="ocList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
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
      >
    </el-table-column>
    <el-table-column
      prop="planNum"
      label="计划数量"
     >
    </el-table-column>
    <el-table-column
      prop="planStartTimeStr"
      label="计划开始日期"
      >
    </el-table-column>
    <el-table-column
      prop="qualifiedNum"
      label="合格数量"
      >
    </el-table-column>
    <el-table-column
      prop="remadeNum"
      label="返工数量"
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
    name: 'productQualityEvaluationAndDisposal',
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
            ocList: [{
		"modelCode": "demo003",
		"orderCode": "B00190",
		"planEndTime": "1501689600000",
		"planNum": "111",
		"planStartTime": "1501689600000",
		"planStartTimeStr": "2017-08-03",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00189",
		"planEndTime": "1501689600000",
		"planNum": "432",
		"planStartTime": "1501689600000",
		"planStartTimeStr": "2017-08-03",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00188",
		"planEndTime": "1501689600000",
		"planNum": "321",
		"planStartTime": "1501689600000",
		"planStartTimeStr": "2017-08-03",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00187",
		"planEndTime": "1501689600000",
		"planNum": "123",
		"planStartTime": "1501689600000",
		"planStartTimeStr": "2017-08-03",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00186",
		"planEndTime": "1501689600000",
		"planNum": "100",
		"planStartTime": "1501689600000",
		"planStartTimeStr": "2017-08-03",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00185",
		"planEndTime": "1501689600000",
		"planNum": "300",
		"planStartTime": "1501689600000",
		"planStartTimeStr": "2017-08-03",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00184",
		"planEndTime": "1501603200000",
		"planNum": "523",
		"planStartTime": "1501603200000",
		"planStartTimeStr": "2017-08-02",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00183",
		"planEndTime": "1501603200000",
		"planNum": "111",
		"planStartTime": "1501603200000",
		"planStartTimeStr": "2017-08-02",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00182",
		"planEndTime": "1501603200000",
		"planNum": "333",
		"planStartTime": "1501603200000",
		"planStartTimeStr": "2017-08-02",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00181",
		"planEndTime": "1501603200000",
		"planNum": "888",
		"planStartTime": "1501603200000",
		"planStartTimeStr": "2017-08-02",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00180",
		"planEndTime": "1501603200000",
		"planNum": "666",
		"planStartTime": "1501603200000",
		"planStartTimeStr": "2017-08-02",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00179",
		"planEndTime": "1501603200000",
		"planNum": "233",
		"planStartTime": "1501603200000",
		"planStartTimeStr": "2017-08-02",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00178",
		"planEndTime": "1504022400000",
		"planNum": "1000",
		"planStartTime": "1501603200000",
		"planStartTimeStr": "2017-08-02",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00177",
		"planEndTime": "1501516800000",
		"planNum": "222",
		"planStartTime": "1501516800000",
		"planStartTimeStr": "2017-08-01",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00176",
		"planEndTime": "1501516800000",
		"planNum": "111",
		"planStartTime": "1501516800000",
		"planStartTimeStr": "2017-08-01",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00175",
		"planEndTime": "1501516800000",
		"planNum": "233",
		"planStartTime": "1501516800000",
		"planStartTimeStr": "2017-08-01",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00174",
		"planEndTime": "1501516800000",
		"planNum": "555",
		"planStartTime": "1501516800000",
		"planStartTimeStr": "2017-08-01",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00172",
		"planEndTime": "1501516800000",
		"planNum": "123",
		"planStartTime": "1501516800000",
		"planStartTimeStr": "2017-08-01",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00171",
		"planEndTime": "1501516800000",
		"planNum": "333",
		"planStartTime": "1501516800000",
		"planStartTimeStr": "2017-08-01",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
	}, {
		"modelCode": "demo003",
		"orderCode": "B00170",
		"planEndTime": "1501603200000",
		"planNum": "233",
		"planStartTime": "1501516800000",
		"planStartTimeStr": "2017-08-01",
		"productName": "后吊耳底板",
		"qualifiedNum": "0",
		"remadeNum": "0"
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
