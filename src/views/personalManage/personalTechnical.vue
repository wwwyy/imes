<template>
    <div id="personalTechnical">
        <el-container>
            <el-aside width="200px">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </el-aside>
            <el-main>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>人员管理</el-breadcrumb-item>
                    <el-breadcrumb-item>人员技能/资质维护</el-breadcrumb-item>
                </el-breadcrumb>
                <hr>
                <div style="text-align:left">
                    <el-button size="small" icon="el-icon-plus" style="width:100px"> 新 增 </el-button>
                    <el-button size="small" icon="el-icon-delete" style="width:100px"> 删 除 </el-button>
                    <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
                    <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
                </div>
                <div style="text-align:left;margin:20px 0;">
                    <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">姓名：		</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px">证书类型：	</span>
                <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            
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
             <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">可用标识：	</span>
             <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                    v-for="item in copyOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
              <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px;">状态：	</span>
                <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
           
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
    :data="personalSkillList"
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
      prop="certificateTypeName"
      label="证书类型"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="certificateNameName"
      label="资质"
     >
    </el-table-column>
    <el-table-column
      prop="markAbleName"
      label="可用标识"
      >
    </el-table-column>
    <el-table-column
      prop="dateStatusName"
      label="状态"
      >
    </el-table-column>
    <el-table-column
      prop="issueDateStr"
      label="发证日期"
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="expiryDateStr"
      label="到期日期"
      width="150"
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
            </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
    name: 'personalTechnical',
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
        defaultProps: {
          children: 'children',
          label: 'label'
        },
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
            personalSkillList: [{
		"certificateName": "FITTER1",
		"certificateNameName": "一级钳工",
		"certificateType": "ZSLX1",
		"certificateTypeName": "钳工",
		"createDate": "1487830866000",
		"createDateStr": "2017-02-23 14:21:06",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"dateStatus": "normal",
		"dateStatusName": "正常",
		"expiryDate": "1538582400000",
		"expiryDateStr": "2018-10-04",
		"id": 1003,
		"issueDate": "1487779200000",
		"issueDateStr": "2017-02-23",
		"markAble": 1,
		"markAbleName": "启用",
		"personCode": "PENG035",
		"personName": "高丽娟",
		"remark": "",
		"updateDate": "1487830866000",
		"updateDateStr": "2017-02-23 14:21:06",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"certificateName": "FITTER1",
		"certificateNameName": "一级钳工",
		"certificateType": "ZSLX1",
		"certificateTypeName": "钳工",
		"createDate": "1487830865000",
		"createDateStr": "2017-02-23 14:21:05",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"dateStatus": "normal",
		"dateStatusName": "正常",
		"expiryDate": "1538582400000",
		"expiryDateStr": "2018-10-04",
		"id": 1002,
		"issueDate": "1487779200000",
		"issueDateStr": "2017-02-23",
		"markAble": 1,
		"markAbleName": "启用",
		"personCode": "PENG035",
		"personName": "高丽娟",
		"remark": "",
		"updateDate": "1487830865000",
		"updateDateStr": "2017-02-23 14:21:05",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"certificateName": "FITTER3",
		"certificateNameName": "三级钳工",
		"certificateType": "zslx001",
		"certificateTypeName": "证书类型测试",
		"createDate": "1487654721000",
		"createDateStr": "2017-02-21 13:25:21",
		"createUser": "admin",
		"createUserName": "administrator",
		"dateStatus": "normal",
		"dateStatusName": "正常",
		"expiryDate": "1514476800000",
		"expiryDateStr": "2017-12-29",
		"id": 1001,
		"issueDate": "1487779200000",
		"issueDateStr": "2017-02-23",
		"markAble": 1,
		"markAbleName": "启用",
		"personCode": "PENG026",
		"personName": "张三",
		"remark": "",
		"updateDate": "1487827906000",
		"updateDateStr": "2017-02-23 13:31:46",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"certificateName": "FITTER1",
		"certificateNameName": "一级钳工",
		"certificateType": "ZSLX1",
		"certificateTypeName": "钳工",
		"createDate": "1487654698000",
		"createDateStr": "2017-02-21 13:24:58",
		"createUser": "admin",
		"createUserName": "administrator",
		"dateStatus": "normal",
		"dateStatusName": "正常",
		"expiryDate": "1487952000000",
		"expiryDateStr": "2017-02-25",
		"id": 1000,
		"issueDate": "1485878400000",
		"issueDateStr": "2017-02-01",
		"markAble": 1,
		"markAbleName": "启用",
		"personCode": "PENG027",
		"personName": "李四",
		"remark": "",
		"updateDate": "1487827915000",
		"updateDateStr": "2017-02-23 13:31:55",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
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
     #personalTechnical .el-main{
        padding: 0;
    }
</style>
