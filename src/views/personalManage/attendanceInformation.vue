<template>
    <div id="attendanceInformation">
        <el-container>
            <el-aside width="200px">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </el-aside>
            <el-main>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>人员管理</el-breadcrumb-item>
                    <el-breadcrumb-item>考勤信息查询</el-breadcrumb-item>
                </el-breadcrumb>
                <hr>
                <div style="text-align:left">
                    <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
                    <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
                </div>
                <div style="text-align:left;margin:20px 0;">
                    <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">姓名：		</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px">开始日期：	</span>
              <el-date-picker
                v-model="startDate"
                type="date"
                placeholder="选择日期"
                style="width:194px"
                size="small">
            </el-date-picker>
            
             <span style="margin-left:40px;line-height:32px;font-size:14px;">结束日期：</span>
             <el-date-picker
                v-model="startDate"
                type="date"
                placeholder="选择日期"
                style="width:194px"
                size="small">
            </el-date-picker>
                </div>
                <el-table
    :data="attendanceInformationList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="personCode"
      label="人员代码"
     >
    </el-table-column>
    <el-table-column
      prop="personName"
      label="人员名称"
     >
    </el-table-column>
    <el-table-column
      prop="attendanceDateStr"
      label="考勤日期"
      >
    </el-table-column>
    <el-table-column
      prop="onDutyTimeStr"
      label="上班时间"
      >
    </el-table-column>
    <el-table-column
      prop="offDutyTimeStr"
      label="下班时间"
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
            </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
    name: 'attendanceInformation',
    data () {
        return {
            data: [{
	"children": [{
		"children": [{
			"id": "GZDY1001",
			"label": "一车间落料工作单元"
		}, {
			"id": "GZDY1002",
			"label": "一车间冲孔工作单元"
		}, {
			"id": "CY002",
			"label": "冲压二单元"
		}, {
			"id": "GZDY1003",
			"label": "一车间翻边工作单元"
		}, {
			"id": "GZDY1004",
			"label": "一车间切断工作单元"
		}, {
			"id": "GZDY1005",
			"label": "一车间修边工作单元"
		}, {
			"id": "GZDY1006",
			"label": "一车间落料成型工作单元"
		}],
		"id": "CY001",
		"label": "冲压一车间"
	}, {
		"children": [{
			"id": "GZDY2001",
			"label": "二车间落料工作单元"
		}, {
			"id": "GZDY2002",
			"label": "二车间冲孔工作单元"
		}, {
			"id": "CY003",
			"label": "冲压三"
		}],
		"id": "49257",
		"label": "冲压二车间"
	}, {
		"children": [{
			"id": "GZSY3001",
			"label": "焊接工作单元"
		}],
		"id": "HJ001",
		"label": "焊接车间"
	}, {
		"id": "SCXT001",
		"label": "生产车间"
	}, {
		"children": [{
			"id": "BZGZDY",
			"label": "包装工作单元"
		}],
		"id": "BZCJ001",
		"label": "包装车间"
	}, {
		"children": [{
			"id": "DYDY007",
			"label": "电泳包装入库工作单元"
		}, {
			"id": "DYDY002",
			"label": "电泳人工分选工作单元"
		}, {
			"id": "DYDY003",
			"label": "电泳半成品入库工作单元"
		}, {
			"id": "DYDY004",
			"label": "电泳检验工作单元"
		}, {
			"id": "DYDY005",
			"label": "电泳黑色电泳漆工作单元"
		}, {
			"id": "DYDY006",
			"label": "电泳酸洗工作单元"
		}, {
			"id": "DYDY001",
			"label": "测试工作单元"
		}],
		"id": "DY001",
		"label": "电泳车间"
    }],
    	"id": "9050",
	"label": "浙江长华汽车零配件有限公司"
}],
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
            attendanceInformationList: [{
		"attendanceDate": 1487214895000,
		"attendanceDateStr": "2017-02-16",
		"id": 3,
		"offDutyTime": 1487239202000,
		"offDutyTimeStr": "2017-02-16 18:00:02",
		"onDutyTime": 1487206806000,
		"onDutyTimeStr": "2017-02-16 09:00:06",
		"personCode": "PENG035",
		"personName": "高丽娟"
	}, {
		"attendanceDate": 1487128439000,
		"attendanceDateStr": "2017-02-15",
		"id": 2,
		"offDutyTime": 1487152852000,
		"offDutyTimeStr": "2017-02-15 18:00:52",
		"onDutyTime": 1487120400000,
		"onDutyTimeStr": "2017-02-15 09:00:00",
		"personCode": "PENG035",
		"personName": "高丽娟"
	}, {
		"attendanceDate": 1486955577000,
		"attendanceDateStr": "2017-02-13",
		"id": 1,
		"offDutyTime": 1486980040000,
		"offDutyTimeStr": "2017-02-13 18:00:40",
		"onDutyTime": 1486947600000,
		"onDutyTimeStr": "2017-02-13 09:00:00",
		"personCode": "PENG035",
		"personName": "高丽娟"
	}],
        currentPage: 1
        }
    },
    methods: {
        handleNodeClick(data) {
        console.log(data);
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
<style>
     #attendanceInformation .el-main{
        padding: 0;
    }
</style>
