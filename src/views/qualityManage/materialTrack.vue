<template>
    <div id="materialTrack">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>质量管理</el-breadcrumb-item>
            <el-breadcrumb-item>数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>物料追溯与跟踪</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <el-tabs v-model="activeName" @tab-click="tabHandleClick" style="border:1px solid #409EFF;padding:0 20px 20px;">
          <el-tab-pane label="物料装配追溯" name="first">
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
    :data="equipmentTraceList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="materielCode"
      label="物料代码"
      >
    </el-table-column>
    <el-table-column
      prop="materielName"
      label="物料名称"
     >
    </el-table-column>
    <el-table-column
      prop="orderCode"
      label="订单代码"
     >
    </el-table-column>
    <el-table-column
      prop="materielCode"
      label="型号代码"
      >
    </el-table-column>
    <el-table-column
      prop="productName"
      label="产品名称	"
      width="180"
     >
    </el-table-column>
    <el-table-column
      prop="supplyName"
      label="物料供应商"
      width="180"
     >
    </el-table-column>
    <el-table-column
      prop=""
      label="物料批次	"
     >
    </el-table-column>
    <el-table-column
      prop="materielNum"
      label="消耗数量"
     >
    </el-table-column>
    <el-table-column
      prop="updateDateStr"
      label="确认日期"
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
          </el-tab-pane>
          <el-tab-pane label="物料报废追溯" name="second">
            <div style="text-align:left">
              <el-button size="small" icon="el-icon-plus" style="width:100px"> 新 增 </el-button>
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
    :data="scrapTrackList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="materielCode"
      label="物料代码"
      >
    </el-table-column>
    <el-table-column
      prop="materielName"
      label="物料名称"
     >
    </el-table-column>
    <el-table-column
      prop="materielNum"
      label="报废量"
     >
    </el-table-column>
    <el-table-column
      prop="orderCode"
      label="订单代码"
     >
    </el-table-column>
    <el-table-column
      prop="materielCode"
      label="型号代码"
      >
    </el-table-column>
    <el-table-column
      prop="productName"
      label="产品名称	"
      width="180"
     >
    </el-table-column>
    <el-table-column
      prop="supplyName"
      label="物料供应商"
      width="180"
     >
    </el-table-column>
    <el-table-column
      prop=""
      label="物料批次	"
     >
    </el-table-column>
    <el-table-column
      prop="scrappedReasonName"
      label="报废类型"
     >
    </el-table-column>
     <el-table-column
      prop=""
      label="原因说明"
     >
    </el-table-column>
    <el-table-column
      prop=""
      label="确认日期"
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
          </el-tab-pane>
        </el-tabs>
        
   </div>
    </div>
</template>
<script>
export default {
    name: 'materialTrack',
    data () {
        return {
            activeName: 'first',
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
            equipmentTraceList: [{
		"assemblyStation": "",
		"id": "1003",
		"materielBatch": "",
		"materielCode": "0060145577",
		"materielName": "ROHS套筒",
		"materielNum": "200",
		"orderCode": "B00047",
		"remark": "",
		"supplyCode": "sup00036",
		"supplyName": "云南古创贸易有限公司"
	}, {
		"assemblyStation": "",
		"id": "1004",
		"materielBatch": "",
		"materielCode": "WL0099",
		"materielName": "钢材",
		"materielNum": "100",
		"modelCode": "01651377",
		"orderCode": "C00109",
		"productName": "发动机油底壳调节板",
		"remark": "",
		"supplyCode": "MYCOMPANY",
		"supplyName": "公司资产"
	}, {
		"assemblyStation": "",
		"id": "1001",
		"materielBatch": "",
		"materielCode": "0060145577",
		"materielName": "ROHS套筒",
		"materielNum": "20",
		"orderCode": "B00048",
		"remark": "",
		"supplyCode": "sup00036",
		"supplyName": "云南古创贸易有限公司",
		"updateDate": "1487827267000",
		"updateDateStr": "2017-02-23"
	}, {
		"assemblyStation": "",
		"id": "1002",
		"materielBatch": "",
		"materielCode": "0060145577",
		"materielName": "ROHS套筒",
		"materielNum": "100",
		"orderCode": "B00048",
		"remark": "",
		"supplyCode": "sup00036",
		"supplyName": "云南古创贸易有限公司",
		"updateDate": "1487827267000",
		"updateDateStr": "2017-02-23"
  }],
  scrapTrackList: [{
		"assemblyStation": "BA26015",
		"id": "1000",
		"materielBatch": "",
		"materielCode": "0060145577",
		"materielName": "ROHS套筒",
		"materielNum": "20",
		"orderCode": "C00064",
		"remark": "",
		"scrappedReason": "OLD",
		"scrappedReasonName": "超保修日期",
		"supplyCode": "sup00036",
		"supplyName": "云南古创贸易有限公司"
	}],
        currentPage: 1
        }
    },
    methods: {
      tabHandleClick(tab, event) {
        console.log(tab, event);
      },
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
