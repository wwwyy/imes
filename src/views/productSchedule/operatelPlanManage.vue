<template>
    <div id="operatelPlanManage">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>生产调度管理</el-breadcrumb-item>
            <el-breadcrumb-item>作业计划</el-breadcrumb-item>
            <el-breadcrumb-item>作业计划管理</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-success" style="width:100px"> 提 交 </el-button>
            <el-button size="small" icon="el-icon-error" style="width:100px"> 冻 结 </el-button>
            <el-button size="small" icon="el-icon-edit-outline" style="width:100px"> 审 核 </el-button>
            <el-button size="small" style="width:100px"> 下 达 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
             <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">作业ID：</span>
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
            <span style="margin-left:40px;line-height:32px;font-size:14px;">作业状态：</span>
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
             <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">产品名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
              <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px">工作单元：</span>
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
    :data="jobPlanList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
      >
    </el-table-column>
     <el-table-column
      prop="jobId"
      label="作业ID"
     >
    </el-table-column>
    <el-table-column
      prop="orderCodes"
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
      prop="workUnitName"
      label="工作单元"
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="rounds"
      label="轮次"
      >
    </el-table-column>
    <el-table-column
      prop="planTimeStr"
      label="作业开始时间"
      width="160"
     >
    </el-table-column>
    <el-table-column
      prop="operateTime"
      label="作业时长"
      >
    </el-table-column>
    <el-table-column
      prop="jobStatus"
      label="作业状态"
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
    name: 'operatelPlanManage',
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
            jobPlanList: [{
		"id": "1017",
		"jobId": "job00103",
		"jobStatus": "5",
		"modelCode": "demo001",
		"operateTime": "1.00",
		"orderCodes": "C00103",
		"planTime": "1495321925000",
		"planTimeStr": "2017-05-21 07:12:05",
		"productName": "钢板弹簧后吊耳总成",
		"reason": "",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZSY3001",
		"workUnitName": "焊接工作单元"
	}, {
		"id": "1020",
		"jobId": "job00113",
		"jobStatus": "4",
		"modelCode": "01651377",
		"operateTime": "2.00",
		"orderCodes": "C00109",
		"planTime": "1495766214000",
		"planTimeStr": "2017-05-26 10:36:54",
		"productName": "发动机油底壳调节板",
		"reason": "",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "DYDY007",
		"workUnitName": "电泳包装入库工作单元"
	}, {
		"id": "1022",
		"jobId": "job00122",
		"jobStatus": "4",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCodes": "B00059",
		"planTime": "1495843200000",
		"planTimeStr": "2017-05-27 08:00:00",
		"productName": "后吊耳底板",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"id": "1023",
		"jobId": "job00123",
		"jobStatus": "4",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCodes": "B00059",
		"planTime": "1495846800000",
		"planTimeStr": "2017-05-27 09:00:00",
		"productName": "后吊耳底板",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1002",
		"workUnitName": "一车间冲孔工作单元"
	}, {
		"id": "1021",
		"jobId": "job00115",
		"jobStatus": "4",
		"modelCode": "01651377",
		"operateTime": "2.00",
		"orderCodes": "C00109",
		"planTime": "1495854130000",
		"planTimeStr": "2017-05-27 11:02:10",
		"productName": "发动机油底壳调节板",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1002",
		"workUnitName": "一车间冲孔工作单元"
	}, {
		"id": "1040",
		"jobId": "job00141",
		"jobStatus": "4",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCodes": "B00069",
		"planTime": "1495868658000",
		"planTimeStr": "2017-05-27 15:04:18",
		"productName": "后吊耳底板",
		"reason": "",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"id": "1041",
		"jobId": "job00142",
		"jobStatus": "4",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCodes": "B00069",
		"planTime": "1495872307000",
		"planTimeStr": "2017-05-27 16:05:07",
		"productName": "后吊耳底板",
		"reason": "",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1002",
		"workUnitName": "一车间冲孔工作单元"
	}, {
		"id": "1042",
		"jobId": "job00143",
		"jobStatus": "4",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCodes": "B00070",
		"planTime": "1495876094000",
		"planTimeStr": "2017-05-27 17:08:14",
		"productName": "后吊耳底板",
		"reason": "",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"id": "1043",
		"jobId": "job00144",
		"jobStatus": "4",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCodes": "B00070",
		"planTime": "1495876162000",
		"planTimeStr": "2017-05-27 17:09:22",
		"productName": "后吊耳底板",
		"reason": "",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1002",
		"workUnitName": "一车间冲孔工作单元"
	}, {
		"id": "1044",
		"jobId": "job00145",
		"jobStatus": "4",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCodes": "B00071",
		"planTime": "1495879798000",
		"planTimeStr": "2017-05-27 18:09:58",
		"productName": "后吊耳底板",
		"reason": "",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"id": "1045",
		"jobId": "job00146",
		"jobStatus": "4",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCodes": "B00071",
		"planTime": "1495879828000",
		"planTimeStr": "2017-05-27 18:10:28",
		"productName": "后吊耳底板",
		"reason": "",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1002",
		"workUnitName": "一车间冲孔工作单元"
	}, {
		"id": "1046",
		"jobId": "job00147",
		"jobStatus": "4",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCodes": "B00072",
		"planTime": "1495883467000",
		"planTimeStr": "2017-05-27 19:11:07",
		"productName": "后吊耳底板",
		"reason": "",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"id": "1047",
		"jobId": "job00148",
		"jobStatus": "4",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCodes": "B00072",
		"planTime": "1495883505000",
		"planTimeStr": "2017-05-27 19:11:45",
		"productName": "后吊耳底板",
		"reason": "",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1002",
		"workUnitName": "一车间冲孔工作单元"
	}, {
		"id": "1024",
		"jobId": "job00124",
		"jobStatus": "4",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCodes": "B00060",
		"planTime": "1495937771000",
		"planTimeStr": "2017-05-28 10:16:11",
		"productName": "后吊耳底板",
		"reason": "",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"id": "1025",
		"jobId": "job00125",
		"jobStatus": "4",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCodes": "B00060",
		"planTime": "1495937897000",
		"planTimeStr": "2017-05-28 10:18:17",
		"productName": "后吊耳底板",
		"reason": "",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1002",
		"workUnitName": "一车间冲孔工作单元"
	}, {
		"id": "1032",
		"jobId": "job00133",
		"jobStatus": "4",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCodes": "B00064",
		"planTime": "1495946054000",
		"planTimeStr": "2017-05-28 12:34:14",
		"productName": "后吊耳底板",
		"reason": "",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"id": "1036",
		"jobId": "job00137",
		"jobStatus": "4",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCodes": "B00064",
		"planTime": "1495946217000",
		"planTimeStr": "2017-05-28 12:36:57",
		"productName": "后吊耳底板",
		"reason": "",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1002",
		"workUnitName": "一车间冲孔工作单元"
	}, {
		"id": "1026",
		"jobId": "job00126",
		"jobStatus": "4",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCodes": "B00061",
		"planTime": "1496024898000",
		"planTimeStr": "2017-05-29 10:28:18",
		"productName": "后吊耳底板",
		"reason": "",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"id": "1027",
		"jobId": "job00127",
		"jobStatus": "4",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCodes": "B00061",
		"planTime": "1496024955000",
		"planTimeStr": "2017-05-29 10:29:15",
		"productName": "后吊耳底板",
		"reason": "",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1002",
		"workUnitName": "一车间冲孔工作单元"
	}, {
		"id": "1033",
		"jobId": "job00134",
		"jobStatus": "4",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCodes": "B00065",
		"planTime": "1496032501000",
		"planTimeStr": "2017-05-29 12:35:01",
		"productName": "后吊耳底板",
		"reason": "",
		"remark": "",
		"rounds": "1",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
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
