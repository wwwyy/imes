<template>
    <div id="personnelMaintenanceTree">
        <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
                    <el-breadcrumb-item>产品数据管理</el-breadcrumb-item>
                    <el-breadcrumb-item>产品型号维护</el-breadcrumb-item>
                </el-breadcrumb>
                <hr>
                <div style="text-align:left">
                    <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
                    <el-button size="small" icon="el-icon-upload2" style="width:100px"> 导 入  </el-button>
                    <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
                    <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
                    <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
                </div>
                <div style="text-align:left;margin:20px 0;">
                    <span style="line-height:32px;font-size:14px;">型号代码：</span>
                    <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
                <span style="margin-left:40px;line-height:32px;font-size:14px;">型号性质：</span>
                    <el-select v-model="markType" placeholder="请选择" size="small">
                        <el-option
                        v-for="item in markOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px;">型号系列：</span>
                    <el-select v-model="markType" placeholder="请选择" size="small">
                        <el-option
                        v-for="item in markOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <br>
                    <br>
                    <span style="line-height:32px;font-size:14px;">产品名称：</span>
                    <el-input v-model="copyName" placeholder="请输入内容" style="width:194px" size="small"></el-input>
                    <span style="margin-left:40px;line-height:32px;font-size:14px;">型号类型：</span>
                    <el-select v-model="markType" placeholder="请选择" size="small">
                        <el-option
                        v-for="item in markOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <span style="margin-left:40px;line-height:32px;font-size:14px;">可用标识：</span>
                    <el-select v-model="markType" placeholder="请选择" size="small">
                        <el-option
                        v-for="item in markOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <el-table
    :data="productModelList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
      >
    </el-table-column>
    <el-table-column
      prop="modelCode"
      label="	型号代码"
      width="150"
     >
    </el-table-column>
    <el-table-column
      prop="productName"
      label="产品名称"
      width="200"
      >
    </el-table-column>
    <el-table-column
      prop="typeName"
      label="型号类型"
      >
    </el-table-column>
    <el-table-column
      prop="modelPropertyName"
      label="型号性质"
      >
    </el-table-column>
    <el-table-column
      prop="modelSeriesName"
      label="型号系列"
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="modelUnitName"
      label="型号单位"
      >
    </el-table-column>
    <el-table-column
      prop="saleCategory"
      label="销售类别"
      >
    </el-table-column>
    <el-table-column
      prop="collectTypeName"
      label="采集码类别"
      >
    </el-table-column>
    <el-table-column
      prop="price"
      label="标准价"
      >
    </el-table-column>
    <el-table-column
      prop="manHour"
      label="标准工时"
      >
    </el-table-column>
    <el-table-column
      prop="validityDate"
      label="有效期"
      width="150"
      >
    </el-table-column>
    <el-table-column
    prop="markAble"
    label="可用标识	"
    >
    </el-table-column>
        <el-table-column
    prop="createUserName"
    label="创建人	"
    width="150"
    >
    </el-table-column>
        <el-table-column
    prop="createDateStr"
    label="创建时间	"
    width="160"
    >
    </el-table-column>
        <el-table-column
    prop="updateUserName"
    label="最后更新人	"
    width="150"
    >
    </el-table-column>
    <el-table-column
    prop="updateDateStr"
    label="最后更新时间	"
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
    name: 'personnelMaintenanceTree',
    data () {
        return {
            data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
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
            productModelList: [{
		"collectType": "",
		"createDateStr": "2017-05-26 09:21:36",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1023",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "01651377",
		"modelProperty": "PT",
		"modelPropertyName": "普通",
		"modelSeries": "SINGLETON",
		"modelSeriesName": "单件类",
		"modelUnit": "Ge",
		"modelUnitName": "个",
		"productName": "发动机油底壳调节板",
		"remark": "",
		"saleCategory": "",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-05-26 09:21:36",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"validityDate": "2017-12-31"
	}, {
		"collectType": "",
		"createDateStr": "2017-05-19 15:11:55",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1022",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo003",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"modelSeries": "",
		"modelUnit": "",
		"productName": "后吊耳底板",
		"remark": "",
		"saleCategory": "",
		"type": "BOM_MATERIAL_MADE",
		"typeName": "自制半成品",
		"updateDateStr": "2017-05-19 15:11:55",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"validityDate": "2020-05-01"
	}, {
		"collectType": "EWM",
		"collectTypeName": "二维码",
		"createDateStr": "2017-05-19 15:11:25",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1021",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo002",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"modelSeries": "",
		"modelUnit": "Ge",
		"modelUnitName": "个",
		"productName": "后吊耳销轴",
		"remark": "",
		"saleCategory": "",
		"type": "BOM_MATERIAL_MADE",
		"typeName": "自制半成品",
		"updateDateStr": "2017-05-19 15:11:25",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"validityDate": "2020-05-01"
	}, {
		"collectType": "EWM",
		"collectTypeName": "二维码",
		"createDateStr": "2017-05-19 15:01:58",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1020",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo001",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"modelSeries": "",
		"modelUnit": "Ge",
		"modelUnitName": "个",
		"productName": "钢板弹簧后吊耳总成",
		"remark": "",
		"saleCategory": "",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-05-19 15:01:58",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"validityDate": "2020-05-01"
	}, {
		"collectType": "EWM",
		"collectTypeName": "二维码",
		"createDateStr": "2017-02-21 10:47:59",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1019",
		"isDel": "false",
		"manHour": "24",
		"markAble": "0",
		"modelCode": "B00060EA000",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"modelSeries": "QZDXYJ",
		"modelSeriesName": "全自动洗衣机",
		"modelUnit": "Tai",
		"modelUnitName": "台",
		"price": "2200.00",
		"productName": "HB22TSAA",
		"remark": "备注",
		"saleCategory": "WaiXiao",
		"saleCategoryName": "外销",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-02-23 13:17:23",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"validityDate": "2017-12-30"
	}, {
		"createDateStr": "2017-02-21 10:47:59",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1018",
		"isDel": "false",
		"markAble": "0",
		"modelCode": "B00030E0100",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"productName": "HB21FWNN(伊朗)",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-02-21 10:47:59",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"validityDate": "2017-12-30"
	}, {
		"collectType": "",
		"createDateStr": "2017-02-21 10:47:59",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1017",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "B0001ME8N00",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"modelSeries": "",
		"modelUnit": "",
		"productName": "HB21FWRSSAA(伊朗)",
		"remark": "",
		"saleCategory": "",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-05-24 07:35:04",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"validityDate": "2017-12-30"
	}, {
		"createDateStr": "2017-02-21 10:47:59",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1016",
		"isDel": "false",
		"markAble": "0",
		"modelCode": "B0001LE8N00",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"productName": "HB21FWRSSAA(南非)",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-02-21 10:47:59",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"validityDate": "2017-12-30"
	}, {
		"createDateStr": "2017-02-21 10:47:59",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1015",
		"isDel": "false",
		"markAble": "0",
		"modelCode": "B0001KE8N00",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"productName": "HB21FWRSSAA(沙特)",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-02-21 10:47:59",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"validityDate": "2017-12-30"
	}, {
		"createDateStr": "2017-02-21 10:47:59",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1014",
		"isDel": "false",
		"markAble": "0",
		"modelCode": "B0001JB8N00",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"productName": "TITAN5.5(英国)",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-02-21 10:47:59",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"validityDate": "2017-12-30"
	}, {
		"createDateStr": "2017-02-21 10:47:59",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1013",
		"isDel": "false",
		"markAble": "0",
		"modelCode": "B0001HE8N00",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"productName": "HB21FWRSSAA(欧洲)",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-02-21 10:47:59",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"validityDate": "2017-12-30"
	}, {
		"createDateStr": "2017-02-21 10:47:59",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1012",
		"isDel": "false",
		"markAble": "0",
		"modelCode": "B0001GE8N00",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"productName": "RDXD910CR/C",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-02-21 10:47:59",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"validityDate": "2017-12-30"
	}, {
		"createDateStr": "2017-02-21 10:47:59",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1011",
		"isDel": "false",
		"markAble": "0",
		"modelCode": "B0001BB1G00",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"productName": "PC86SC(英国)",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-02-21 10:47:59",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"validityDate": "2017-12-30"
	}, {
		"createDateStr": "2017-02-21 10:47:59",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1010",
		"isDel": "false",
		"markAble": "0",
		"modelCode": "B00018E8N00",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"productName": "HB21FSSAA",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-02-21 10:47:59",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"validityDate": "2017-12-30"
	}, {
		"createDateStr": "2017-02-21 10:47:59",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1009",
		"isDel": "false",
		"markAble": "0",
		"modelCode": "B00013B8200",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"productName": "HB21FWBAA",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-02-21 10:47:59",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"validityDate": "2017-12-30"
	}, {
		"createDateStr": "2017-02-21 10:47:59",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1008",
		"isDel": "false",
		"markAble": "0",
		"modelCode": "B00012E8200",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"productName": "RDXD910SS/C",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-02-21 10:47:59",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"validityDate": "2017-12-30"
	}, {
		"createDateStr": "2017-02-21 10:47:59",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1007",
		"isDel": "false",
		"markAble": "0",
		"modelCode": "B00011E9F00",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"productName": "HB21FGWAA",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-02-21 10:47:59",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"validityDate": "2017-12-30"
	}, {
		"createDateStr": "2017-02-21 10:47:59",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1006",
		"isDel": "false",
		"markAble": "0",
		"modelCode": "B00011E8200",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"productName": "RDXD910GB/C",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-02-21 10:47:59",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"validityDate": "2017-12-30"
	}, {
		"createDateStr": "2017-02-21 10:47:59",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1005",
		"isDel": "false",
		"markAble": "0",
		"modelCode": "B00011B8V00",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"productName": "HB21FWNNB以色列",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-02-21 10:47:59",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"validityDate": "2017-12-30"
	}, {
		"createDateStr": "2017-02-21 10:47:59",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1004",
		"isDel": "false",
		"markAble": "0",
		"modelCode": "B00010E9P00",
		"modelProperty": "AXDZ",
		"modelPropertyName": "按需定制",
		"productName": "HB21FWNNAA(欧洲)",
		"type": "JC_TYPE_PRODUCT",
		"typeName": "成品",
		"updateDateStr": "2017-02-21 10:47:59",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"validityDate": "2017-12-30"
	}],
        currentPage: 1
        }
    },
    methods: {
		add(){
		  this.$router.push('productModelAdd')
	  },
        handleNodeClick(data) {
		console.log(data);
		
      },
      handleClick(row) {
		console.log(row);
		this.$router.push('productModelEdit')
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

</style>
