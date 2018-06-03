<template>
    <div id="orderList">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>生产计划管理</el-breadcrumb-item>
            <el-breadcrumb-item>生产订单跟踪</el-breadcrumb-item>
            <el-breadcrumb-item>订单清单查询</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">订单代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            
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
           
            <br>
            <br>
             <span style="line-height:32px;font-size:14px;">型号代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
              <span style="margin-left:40px;line-height:32px;font-size:14px;">产品名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
           
            
        </div>
        <el-table
    :data="odList"
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
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="orderStatusName"
      label="订单状态"
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="planNum"
      label="计划数量"
      >
    </el-table-column>
    <el-table-column
      prop="finishNum"
      label="完成数量"
      >
    </el-table-column>
    <el-table-column
      prop="diffNum"
      label="差异数量"
      >
    </el-table-column>
    <el-table-column
      prop="planStartTimeStr"
      label="计划开始日期"
      width="150"
     >
    </el-table-column>
    <el-table-column
      prop="planEndTimeStr"
      label="计划结束日期"
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="onLineTimeStr"
      label="第一台上线日期"
      width="150"
     >
    </el-table-column>
    <el-table-column
      prop="offLineTimeStr"
      label="最后一台下线日期"
      width="150"
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
    name: 'orderList',
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
		"diffNum": "200",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-05-31",
		"orderCode": "B00068",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planEndTimeStr": "2017-06-01",
		"planNum": "200",
		"planStartTimeStr": "2017-06-01",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "100",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-05-27",
		"orderCode": "B00069",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planEndTimeStr": "2017-06-01",
		"planNum": "100",
		"planStartTimeStr": "2017-06-01",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "100",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-05-27",
		"orderCode": "B00071",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planEndTimeStr": "2017-06-01",
		"planNum": "100",
		"planStartTimeStr": "2017-06-01",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "200",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-05-31",
		"orderCode": "B00076",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planEndTimeStr": "2017-06-01",
		"planNum": "200",
		"planStartTimeStr": "2017-06-01",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "100",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-06-01",
		"orderCode": "B00077",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planEndTimeStr": "2017-06-01",
		"planNum": "100",
		"planStartTimeStr": "2017-06-01",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "100",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-06-01",
		"orderCode": "B00079",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planEndTimeStr": "2017-06-01",
		"planNum": "100",
		"planStartTimeStr": "2017-06-01",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "100",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-06-01",
		"orderCode": "B00080",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planEndTimeStr": "2017-06-01",
		"planNum": "100",
		"planStartTimeStr": "2017-06-01",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "0",
		"finishNum": "100",
		"modelCode": "demo003",
		"offLineTimeStr": "2017-06-01",
		"onLineTimeStr": "2017-06-01",
		"orderCode": "B00082",
		"orderStatus": "4",
		"orderStatusName": "全部完成",
		"planEndTimeStr": "2017-06-01",
		"planNum": "100",
		"planStartTimeStr": "2017-06-01",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "100",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-06-01",
		"orderCode": "B00083",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planEndTimeStr": "2017-06-01",
		"planNum": "100",
		"planStartTimeStr": "2017-06-01",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "0",
		"finishNum": "100",
		"modelCode": "demo003",
		"offLineTimeStr": "2017-06-02",
		"onLineTimeStr": "2017-06-02",
		"orderCode": "B00087",
		"orderStatus": "4",
		"orderStatusName": "全部完成",
		"planEndTimeStr": "2017-06-01",
		"planNum": "100",
		"planStartTimeStr": "2017-06-01",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "0",
		"finishNum": "100",
		"modelCode": "demo003",
		"offLineTimeStr": "2017-06-02",
		"onLineTimeStr": "2017-06-02",
		"orderCode": "B00088",
		"orderStatus": "4",
		"orderStatusName": "全部完成",
		"planEndTimeStr": "2017-06-01",
		"planNum": "100",
		"planStartTimeStr": "2017-06-01",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "0",
		"finishNum": "100",
		"modelCode": "demo003",
		"offLineTimeStr": "2017-06-02",
		"onLineTimeStr": "2017-06-02",
		"orderCode": "B00090",
		"orderStatus": "4",
		"orderStatusName": "全部完成",
		"planEndTimeStr": "2017-06-01",
		"planNum": "100",
		"planStartTimeStr": "2017-06-01",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "0",
		"finishNum": "100",
		"modelCode": "demo003",
		"offLineTimeStr": "2017-06-05",
		"onLineTimeStr": "2017-06-05",
		"orderCode": "B00096",
		"orderStatus": "4",
		"orderStatusName": "全部完成",
		"planNum": "100",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "0",
		"finishNum": "100",
		"modelCode": "demo003",
		"offLineTimeStr": "2017-06-05",
		"onLineTimeStr": "2017-06-05",
		"orderCode": "B00097",
		"orderStatus": "4",
		"orderStatusName": "全部完成",
		"planNum": "100",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "0",
		"finishNum": "100",
		"modelCode": "demo003",
		"offLineTimeStr": "2017-06-08",
		"onLineTimeStr": "2017-06-08",
		"orderCode": "B00114",
		"orderStatus": "4",
		"orderStatusName": "全部完成",
		"planNum": "100",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "100",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-06-08",
		"orderCode": "B00115",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "100",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "0",
		"finishNum": "100",
		"modelCode": "demo003",
		"offLineTimeStr": "2017-06-08",
		"onLineTimeStr": "2017-06-08",
		"orderCode": "B00116",
		"orderStatus": "4",
		"orderStatusName": "全部完成",
		"planNum": "100",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "0",
		"finishNum": "100",
		"modelCode": "demo003",
		"offLineTimeStr": "2017-06-08",
		"onLineTimeStr": "2017-06-08",
		"orderCode": "B00117",
		"orderStatus": "4",
		"orderStatusName": "全部完成",
		"planNum": "100",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "0",
		"finishNum": "100",
		"modelCode": "demo003",
		"offLineTimeStr": "2017-06-08",
		"onLineTimeStr": "2017-06-08",
		"orderCode": "B00119",
		"orderStatus": "4",
		"orderStatusName": "全部完成",
		"planNum": "100",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "100",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-06-08",
		"orderCode": "B00120",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "100",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "0",
		"finishNum": "100",
		"modelCode": "demo003",
		"offLineTimeStr": "2017-06-08",
		"onLineTimeStr": "2017-06-08",
		"orderCode": "B00121",
		"orderStatus": "4",
		"orderStatusName": "全部完成",
		"planNum": "100",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "0",
		"finishNum": "100",
		"modelCode": "demo003",
		"offLineTimeStr": "2017-06-08",
		"onLineTimeStr": "2017-06-08",
		"orderCode": "B00123",
		"orderStatus": "4",
		"orderStatusName": "全部完成",
		"planNum": "100",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "0",
		"finishNum": "100",
		"modelCode": "demo003",
		"offLineTimeStr": "2017-06-09",
		"onLineTimeStr": "2017-06-09",
		"orderCode": "B00126",
		"orderStatus": "4",
		"orderStatusName": "全部完成",
		"planNum": "100",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "2000",
		"finishNum": "0",
		"onLineTimeStr": "2017-08-03",
		"orderCode": "B00130",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "2000"
	}, {
		"diffNum": "100",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-06-15",
		"orderCode": "B00131",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "100",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "100",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-06-16",
		"orderCode": "B00133",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "100",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "0",
		"finishNum": "100",
		"modelCode": "demo003",
		"offLineTimeStr": "2017-07-25",
		"onLineTimeStr": "2017-07-25",
		"orderCode": "B00149",
		"orderStatus": "4",
		"orderStatusName": "全部完成",
		"planNum": "100",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "200",
		"finishNum": "0",
		"onLineTimeStr": "2017-07-25",
		"orderCode": "B00150",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "200"
	}, {
		"diffNum": "110",
		"finishNum": "0",
		"onLineTimeStr": "2017-07-25",
		"orderCode": "B00152",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "110"
	}, {
		"diffNum": "125",
		"finishNum": "0",
		"onLineTimeStr": "2017-07-26",
		"orderCode": "B00153",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "125"
	}, {
		"diffNum": "24",
		"finishNum": "0",
		"onLineTimeStr": "2017-07-25",
		"orderCode": "B00156",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "24"
	}, {
		"diffNum": "26",
		"finishNum": "0",
		"onLineTimeStr": "2017-07-25",
		"orderCode": "B00157",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "26"
	}, {
		"diffNum": "27",
		"finishNum": "0",
		"onLineTimeStr": "2017-07-26",
		"orderCode": "B00158",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "27"
	}, {
		"diffNum": "28",
		"finishNum": "0",
		"onLineTimeStr": "2017-07-26",
		"orderCode": "B00159",
		"orderStatus": "1",
		"orderStatusName": "部分开始执行",
		"planNum": "28"
	}, {
		"diffNum": "30",
		"finishNum": "0",
		"onLineTimeStr": "2017-07-27",
		"orderCode": "B00160",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "30"
	}, {
		"diffNum": "31",
		"finishNum": "0",
		"onLineTimeStr": "2017-07-26",
		"orderCode": "B00161",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "31"
	}, {
		"diffNum": "34",
		"finishNum": "0",
		"onLineTimeStr": "2017-07-27",
		"orderCode": "B00163",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "34"
	}, {
		"diffNum": "10",
		"finishNum": "0",
		"onLineTimeStr": "2017-07-28",
		"orderCode": "B00164",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "10"
	}, {
		"diffNum": "328",
		"finishNum": "0",
		"onLineTimeStr": "2017-07-31",
		"orderCode": "B00167",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "328"
	}, {
		"diffNum": "333",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-08-01",
		"orderCode": "B00171",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "333",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "123",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-08-01",
		"orderCode": "B00172",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "123",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "233",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-08-01",
		"orderCode": "B00175",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "233",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "111",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-08-01",
		"orderCode": "B00176",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "111",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "222",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-08-01",
		"orderCode": "B00177",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "222",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "233",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-08-02",
		"orderCode": "B00179",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "233",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "666",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-08-02",
		"orderCode": "B00180",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "666",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "333",
		"finishNum": "0",
		"modelCode": "demo003",
		"onLineTimeStr": "2017-08-02",
		"orderCode": "B00182",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "333",
		"productName": "后吊耳底板"
	}, {
		"diffNum": "300",
		"finishNum": "0",
		"onLineTimeStr": "2017-08-03",
		"orderCode": "B00185",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "300"
	}, {
		"diffNum": "123",
		"finishNum": "0",
		"onLineTimeStr": "2017-08-03",
		"orderCode": "B00187",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "123"
	}, {
		"diffNum": "321",
		"finishNum": "0",
		"onLineTimeStr": "2017-08-03",
		"orderCode": "B00188",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "321"
	}, {
		"diffNum": "432",
		"finishNum": "0",
		"onLineTimeStr": "2017-08-03",
		"orderCode": "B00189",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "432"
	}, {
		"diffNum": "111",
		"finishNum": "0",
		"onLineTimeStr": "2017-08-03",
		"orderCode": "B00190",
		"orderStatus": "2",
		"orderStatusName": "全部开始执行",
		"planNum": "111"
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
