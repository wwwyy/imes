<template>
    <div id="operatePlanTrack">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>生产调度管理</el-breadcrumb-item>
            <el-breadcrumb-item>作业计划</el-breadcrumb-item>
            <el-breadcrumb-item>作业计划跟踪</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
             <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">作业ID：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">订单代码：</span>
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
             <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">产品名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
              <span style="margin-left:40px;line-height:32px;font-size:14px;">工作单元：</span>
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
    :data="operatePlanTrackList"
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
      prop="planNum"
      label="计划数量"
      >
    </el-table-column>
    <el-table-column
      prop="workUnitName"
      label="工作单元"
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="planTimeStr"
      label="计划开始时间"
      width="160"
     >
    </el-table-column>
    <el-table-column
      prop="operateTime"
      label="计划作业时长"
      width="160"
      >
    </el-table-column>
    <el-table-column
      prop="rounds"
      label="轮次"
      >
    </el-table-column>
    <el-table-column
      prop="completeNum"
      label="完成数量"
      >
    </el-table-column>
    <el-table-column
      prop="beginDateStr"
      label="开始时间"
      width="160"
     >
    </el-table-column>
    <el-table-column
      prop="endDateStr"
      label="结束时间"
      width="160"
     >
    </el-table-column>
    <el-table-column
      prop="statusDesc"
      label="状态"
      width="100"
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
    name: 'operatePlanTrack',
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
            operatePlanTrackList: [{
		"beginDate": "1501723736000",
		"beginDateStr": "2017-08-03 09:28:56",
		"completeNum": "0",
		"endDate": "1501729230000",
		"endDateStr": "2017-08-03 11:00:30",
		"jobId": "job00360",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCode": "B00190",
		"planNum": "111",
		"planTime": "1501756019000",
		"planTimeStr": "2017-08-03 18:26:59",
		"productName": "后吊耳底板",
		"rounds": "1",
		"status": "1",
		"statusDesc": "部分开始执行",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"beginDate": "1501723390000",
		"beginDateStr": "2017-08-03 09:23:10",
		"completeNum": "0",
		"jobId": "job00359",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCode": "B00189",
		"planNum": "432",
		"planTime": "1501755662000",
		"planTimeStr": "2017-08-03 18:21:02",
		"productName": "后吊耳底板",
		"rounds": "2",
		"status": "1",
		"statusDesc": "部分开始执行",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"beginDate": "1501720465000",
		"beginDateStr": "2017-08-03 08:34:25",
		"completeNum": "8",
		"endDate": "1501721257000",
		"endDateStr": "2017-08-03 08:47:37",
		"jobId": "job00353",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCode": "B00130",
		"planNum": "1000",
		"planTime": "1501744323000",
		"planTimeStr": "2017-08-03 15:12:03",
		"productName": "后吊耳底板",
		"rounds": "1",
		"status": "1",
		"statusDesc": "部分开始执行",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"beginDate": "1501722950000",
		"beginDateStr": "2017-08-03 09:15:50",
		"completeNum": "0",
		"endDate": "1501729880000",
		"endDateStr": "2017-08-03 11:11:20",
		"jobId": "job00358",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCode": "B00188",
		"planNum": "321",
		"planTime": "1501733663000",
		"planTimeStr": "2017-08-03 12:14:23",
		"productName": "后吊耳底板",
		"rounds": "1",
		"status": "1",
		"statusDesc": "部分开始执行",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"beginDate": "1501722397000",
		"beginDateStr": "2017-08-03 09:06:37",
		"completeNum": "0",
		"endDate": "1501730167000",
		"endDateStr": "2017-08-03 11:16:07",
		"jobId": "job00357",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCode": "B00187",
		"planNum": "123",
		"planTime": "1501729509000",
		"planTimeStr": "2017-08-03 11:05:09",
		"productName": "后吊耳底板",
		"rounds": "1",
		"status": "1",
		"statusDesc": "部分开始执行",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"beginDate": "1501721929000",
		"beginDateStr": "2017-08-03 08:58:49",
		"completeNum": "0",
		"endDate": "1501721952000",
		"endDateStr": "2017-08-03 08:59:12",
		"jobId": "job00356",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCode": "B00186",
		"planNum": "100",
		"planTime": "1501725428000",
		"planTimeStr": "2017-08-03 09:57:08",
		"productName": "后吊耳底板",
		"rounds": "1",
		"status": "1",
		"statusDesc": "部分开始执行",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"beginDate": "1501721178000",
		"beginDateStr": "2017-08-03 08:46:18",
		"completeNum": "0",
		"endDate": "1501734458000",
		"endDateStr": "2017-08-03 12:27:38",
		"jobId": "job00355",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCode": "B00185",
		"planNum": "300",
		"planTime": "1501721094000",
		"planTimeStr": "2017-08-03 08:44:54",
		"productName": "后吊耳底板",
		"rounds": "1",
		"status": "1",
		"statusDesc": "部分开始执行",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"beginDate": "1501637151000",
		"beginDateStr": "2017-08-02 09:25:51",
		"completeNum": "555",
		"endDate": "1501637162000",
		"endDateStr": "2017-08-02 09:26:02",
		"jobId": "job00341",
		"modelCode": "demo003",
		"operateTime": "5.00",
		"orderCode": "B00174",
		"planNum": "555",
		"planTime": "1501668511000",
		"planTimeStr": "2017-08-02 18:08:31",
		"productName": "后吊耳底板",
		"rounds": "1",
		"status": "2",
		"statusDesc": "全部完成",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"beginDate": "1501660033000",
		"beginDateStr": "2017-08-02 15:47:13",
		"completeNum": "0",
		"endDate": "1501667488000",
		"endDateStr": "2017-08-02 17:51:28",
		"jobId": "job00354",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCode": "B00184",
		"planNum": "523",
		"planTime": "1501662651000",
		"planTimeStr": "2017-08-02 16:30:51",
		"productName": "后吊耳底板",
		"rounds": "1",
		"status": "1",
		"statusDesc": "部分开始执行",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"beginDate": "1501655321000",
		"beginDateStr": "2017-08-02 14:28:41",
		"completeNum": "35",
		"endDate": "1501655332000",
		"endDateStr": "2017-08-02 14:28:52",
		"jobId": "job00351",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCode": "B00183",
		"planNum": "111",
		"planTime": "1501658563000",
		"planTimeStr": "2017-08-02 15:22:43",
		"productName": "后吊耳底板",
		"rounds": "1",
		"status": "1",
		"statusDesc": "部分开始执行",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"beginDate": "1501641231000",
		"beginDateStr": "2017-08-02 10:33:51",
		"completeNum": "333",
		"endDate": "1501641830000",
		"endDateStr": "2017-08-02 10:43:50",
		"jobId": "job00350",
		"modelCode": "demo003",
		"operateTime": "2.00",
		"orderCode": "B00182",
		"planNum": "333",
		"planTime": "1501641146000",
		"planTimeStr": "2017-08-02 10:32:26",
		"productName": "后吊耳底板",
		"rounds": "1",
		"status": "2",
		"statusDesc": "全部完成",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"beginDate": "1501639055000",
		"beginDateStr": "2017-08-02 09:57:35",
		"completeNum": "666",
		"endDate": "1501639934000",
		"endDateStr": "2017-08-02 10:12:14",
		"jobId": "job00347",
		"modelCode": "demo003",
		"operateTime": "3.00",
		"orderCode": "B00180",
		"planNum": "666",
		"planTime": "1501638948000",
		"planTimeStr": "2017-08-02 09:55:48",
		"productName": "后吊耳底板",
		"rounds": "1",
		"status": "2",
		"statusDesc": "全部完成",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"beginDate": "1501638793000",
		"beginDateStr": "2017-08-02 09:53:13",
		"completeNum": "233",
		"endDate": "1501639559000",
		"endDateStr": "2017-08-02 10:05:59",
		"jobId": "job00345",
		"modelCode": "demo003",
		"operateTime": "8.00",
		"orderCode": "B00179",
		"planNum": "233",
		"planTime": "1501638661000",
		"planTimeStr": "2017-08-02 09:51:01",
		"productName": "后吊耳底板",
		"rounds": "1",
		"status": "2",
		"statusDesc": "全部完成",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"completeNum": "0",
		"jobId": "job00344",
		"modelCode": "demo001",
		"operateTime": "1.00",
		"orderCode": "C00103",
		"planNum": "50",
		"planTime": "1501633800000",
		"planTimeStr": "2017-08-02 08:30:00",
		"productName": "钢板弹簧后吊耳总成",
		"rounds": "1",
		"status": "0",
		"statusDesc": "未开始执行",
		"workUnitCode": "GZSY3001",
		"workUnitName": "焊接工作单元"
	}, {
		"beginDate": "1501571074000",
		"beginDateStr": "2017-08-01 15:04:34",
		"completeNum": "0",
		"jobId": "job00343",
		"modelCode": "demo003",
		"operateTime": "1.00",
		"orderCode": "B00177",
		"planNum": "222",
		"planTime": "1501568613000",
		"planTimeStr": "2017-08-01 14:23:33",
		"productName": "后吊耳底板",
		"rounds": "1",
		"status": "1",
		"statusDesc": "部分开始执行",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"beginDate": "1501570590000",
		"beginDateStr": "2017-08-01 14:56:30",
		"completeNum": "0",
		"jobId": "job00342",
		"modelCode": "demo003",
		"operateTime": "3.00",
		"orderCode": "B00176",
		"planNum": "111",
		"planTime": "1501568187000",
		"planTimeStr": "2017-08-01 14:16:27",
		"productName": "后吊耳底板",
		"rounds": "1",
		"status": "1",
		"statusDesc": "部分开始执行",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"beginDate": "1501567909000",
		"beginDateStr": "2017-08-01 14:11:49",
		"completeNum": "0",
		"jobId": "job00340",
		"modelCode": "demo003",
		"operateTime": "4.00",
		"orderCode": "B00175",
		"planNum": "233",
		"planTime": "1501567473000",
		"planTimeStr": "2017-08-01 14:04:33",
		"productName": "后吊耳底板",
		"rounds": "1",
		"status": "1",
		"statusDesc": "部分开始执行",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"beginDate": "1501567262000",
		"beginDateStr": "2017-08-01 14:01:02",
		"completeNum": "2",
		"endDate": "1501579579000",
		"endDateStr": "2017-08-01 17:26:19",
		"jobId": "job00339",
		"modelCode": "demo003",
		"operateTime": "5.00",
		"orderCode": "B00172",
		"planNum": "123",
		"planTime": "1501567083000",
		"planTimeStr": "2017-08-01 13:58:03",
		"productName": "后吊耳底板",
		"rounds": "1",
		"status": "1",
		"statusDesc": "部分开始执行",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"beginDate": "1501566907000",
		"beginDateStr": "2017-08-01 13:55:07",
		"completeNum": "3",
		"endDate": "1501576694000",
		"endDateStr": "2017-08-01 16:38:14",
		"jobId": "job00338",
		"modelCode": "demo003",
		"operateTime": "8.00",
		"orderCode": "B00171",
		"planNum": "333",
		"planTime": "1501565745000",
		"planTimeStr": "2017-08-01 13:35:45",
		"productName": "后吊耳底板",
		"rounds": "1",
		"status": "1",
		"statusDesc": "部分开始执行",
		"workUnitCode": "GZDY1001",
		"workUnitName": "一车间落料工作单元"
	}, {
		"beginDate": "1501552696000",
		"beginDateStr": "2017-08-01 09:58:16",
		"completeNum": "999",
		"endDate": "1501568370000",
		"endDateStr": "2017-08-01 14:19:30",
		"jobId": "job00335",
		"modelCode": "demo003",
		"operateTime": "2222.00",
		"orderCode": "B00169",
		"planNum": "999",
		"planTime": "1501492793000",
		"planTimeStr": "2017-07-31 17:19:53",
		"productName": "后吊耳底板",
		"rounds": "2",
		"status": "2",
		"statusDesc": "全部完成",
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
