<template>
    <div id="equipMent">
        <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
                    <el-breadcrumb-item>制造资源管理</el-breadcrumb-item>
                    <el-breadcrumb-item>设备维护</el-breadcrumb-item>
                </el-breadcrumb>
                <hr>
                <div style="text-align:left">
                    <el-button size="small" icon="el-icon-plus" style="width:100px"> 新 增 </el-button>
                    <el-button size="small" icon="el-icon-upload2" style="width:100px"> 导 入  </el-button>
                    <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
                    <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
                    <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
                </div>
                <div style="text-align:center;margin:20px 0;">
                    <span style="line-height:32px;font-size:14px;">设备代码：</span>
                    <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
                    <span style="margin-left:40px;line-height:32px;font-size:14px;">设备名称：</span>
                    <el-input v-model="copyName" placeholder="请输入内容" style="width:194px" size="small"></el-input>
                    <span style="margin-left:40px;line-height:32px;font-size:14px;">供应商名称：</span>
                    <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
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
            :data="emList"
            border
            style="width: 100%"
            align="left"
            size="mini">
             <el-table-column
            type="selection"
            >
            </el-table-column>
            <el-table-column
            prop="equipCode"
            label="设备代码"
            >
            </el-table-column>
            <el-table-column
            prop="equipName"
            label="设备名称"
            width="200"
            >
            </el-table-column>
            <el-table-column
            prop="equipTypeName"
            label="设备类别	"
            >
            </el-table-column>
                <el-table-column
            prop="equipModelName"
            label="设备规格型号	"
            width="150"
            >
            </el-table-column>
            <el-table-column
            prop="buyDateStr"
            label="采购日期"
            width="150"
            >
            </el-table-column>
            <el-table-column
            prop="workCenterName"
            label="保养周期"
            >
            </el-table-column>
            <el-table-column
            prop="markAbleName"
            label="	保养周期单位	"
            width="100"
            >
            </el-table-column>
                <el-table-column
            prop="useLimit"
            label="使用年限	"
            >
            </el-table-column>
            <el-table-column
            prop="supplierName"
            label="供应商名称"
            width="220"
            >
            </el-table-column>
            <el-table-column
            prop="supplier"
            label="供应商联系人"
            width="100"
            >
            </el-table-column>
            <el-table-column
            prop="telephone"
            label="供应商联系电话		"
            width="160"
            >
            </el-table-column>
                <el-table-column
            prop="createUserName"
            label="	供应商联系邮箱	"
            width="150"
            >
            </el-table-column>
             <el-table-column
            prop="organizationName"
            label="所属工作单元	"
            width="150"
            >
            </el-table-column>
            <el-table-column
            prop="markAble"
            label="可用标识"
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
    name: 'equipMent',
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
            emList: [{
		"createDate": "1495766077000",
		"createDateStr": "2017-05-26 10:34:37",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"email": "",
		"equipCode": "equip059",
		"equipModel": "OCP-160E",
		"equipModelName": "OCP-160E",
		"equipName": "直轴式强力钢架开式压力机",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1025",
		"maintainUnitCode": "",
		"markAble": "1",
		"organization": "",
		"remark": "",
		"supplier": "",
		"supplierName": "云南英泽机械设备有限公司",
		"telephone": "0532-87654321",
		"updateDate": "1495766077000",
		"updateDateStr": "2017-05-26 10:34:37",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495244981000",
		"createDateStr": "2017-05-20 09:49:41",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"email": "",
		"equipCode": "equip053",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "全自动焊机器人",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1024",
		"maintainUnitCode": "",
		"markAble": "1",
		"organization": "GZSY3001",
		"organizationName": "焊接工作单元",
		"remark": "",
		"supplier": "",
		"supplierName": "云南英泽机械设备有限公司",
		"telephone": "0532-87654321",
		"updateDate": "1495244981000",
		"updateDateStr": "2017-05-20 09:49:41",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495244946000",
		"createDateStr": "2017-05-20 09:49:06",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"email": "",
		"equipCode": "equip052",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "阿玛达冲床2",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1023",
		"maintainUnitCode": "",
		"markAble": "1",
		"organization": "GZDY2002",
		"organizationName": "二车间冲孔工作单元",
		"remark": "",
		"supplier": "",
		"supplierName": "云南英泽机械设备有限公司",
		"telephone": "0532-87654321",
		"updateDate": "1495244946000",
		"updateDateStr": "2017-05-20 09:49:06",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"buyDate": "1495209600000",
		"buyDateStr": "2017-05-20",
		"createDate": "1495244925000",
		"createDateStr": "2017-05-20 09:48:45",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"email": "",
		"equipCode": "equip051",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "阿玛达冲床1",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1022",
		"maintainUnitCode": "",
		"markAble": "1",
		"organization": "GZDY1002",
		"organizationName": "一车间冲孔工作单元",
		"remark": "",
		"supplier": "",
		"supplierName": "云南英泽机械设备有限公司",
		"telephone": "0532-87654321",
		"updateDate": "1495771075000",
		"updateDateStr": "2017-05-26 11:57:55",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495244766000",
		"createDateStr": "2017-05-20 09:46:06",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"email": "",
		"equipCode": "equip049",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "直轴式强力钢架开式压力机2",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1021",
		"maintainUnitCode": "",
		"markAble": "1",
		"organization": "GZDY2001",
		"organizationName": "二车间落料工作单元",
		"remark": "",
		"supplier": "",
		"supplierName": "云南英泽机械设备有限公司",
		"telephone": "0532-87654321",
		"updateDate": "1495244766000",
		"updateDateStr": "2017-05-20 09:46:06",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495244722000",
		"createDateStr": "2017-05-20 09:45:22",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"email": "",
		"equipCode": "equip048",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "直轴式强力钢架开式压力机1",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1020",
		"maintainUnitCode": "",
		"markAble": "1",
		"organization": "GZDY1001",
		"organizationName": "一车间落料工作单元",
		"remark": "",
		"supplier": "",
		"supplierName": "云南英泽机械设备有限公司",
		"telephone": "0532-87654321",
		"updateDate": "1495771063000",
		"updateDateStr": "2017-05-26 11:57:43",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"useLimit": "10"
	}, {
		"createDate": "1487644851000",
		"createDateStr": "2017-02-21 10:40:51",
		"email": "",
		"equipCode": "9050BB00CK0055",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "R600a55",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1019",
		"maintainUnitCode": "",
		"markAble": "1",
		"organization": "BA26003",
		"organizationName": "整管",
		"remark": "",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487839084000",
		"updateDateStr": "2017-02-23 16:38:04",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
	}, {
		"createDate": "1487644851000",
		"createDateStr": "2017-02-21 10:40:51",
		"equipCode": "9050MAMTFP0012",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "新线门体发泡夹具12",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1018",
		"markAble": "1",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487644851000",
		"updateDateStr": "2017-02-21 10:40:51"
	}, {
		"createDate": "1487644851000",
		"createDateStr": "2017-02-21 10:40:51",
		"equipCode": "9050MAMTFP0015",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "新线门体发泡夹具15",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1017",
		"markAble": "1",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487644851000",
		"updateDateStr": "2017-02-21 10:40:51"
	}, {
		"createDate": "1487644851000",
		"createDateStr": "2017-02-21 10:40:51",
		"email": "",
		"equipCode": "9050BA00CK0040",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "A40",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1016",
		"maintainUnitCode": "",
		"markAble": "1",
		"organization": "BA26040",
		"organizationName": "插管2",
		"remark": "",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487658463000",
		"updateDateStr": "2017-02-21 14:27:43",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"createDate": "1487644851000",
		"createDateStr": "2017-02-21 10:40:51",
		"equipCode": "9050BA00CK0007",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "A-07",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1015",
		"markAble": "1",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487644851000",
		"updateDateStr": "2017-02-21 10:40:51"
	}, {
		"createDate": "1487644851000",
		"createDateStr": "2017-02-21 10:40:51",
		"equipCode": "9050BB00CK0070",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "R600a-70",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1014",
		"markAble": "1",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487644851000",
		"updateDateStr": "2017-02-21 10:40:51"
	}, {
		"createDate": "1487644851000",
		"createDateStr": "2017-02-21 10:40:51",
		"equipCode": "9050BAJTZD0026",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "A线静态作电检验26",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1013",
		"markAble": "1",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487644851000",
		"updateDateStr": "2017-02-21 10:40:51"
	}, {
		"createDate": "1487644851000",
		"createDateStr": "2017-02-21 10:40:51",
		"equipCode": "9050BADTZD0034",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "A线动态作电检验34",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1012",
		"markAble": "1",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487644851000",
		"updateDateStr": "2017-02-21 10:40:51"
	}, {
		"createDate": "1487644851000",
		"createDateStr": "2017-02-21 10:40:51",
		"equipCode": "9050BAJTZD0009",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "A线静态作电检验09",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1011",
		"markAble": "1",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487644851000",
		"updateDateStr": "2017-02-21 10:40:51"
	}, {
		"createDate": "1487644851000",
		"createDateStr": "2017-02-21 10:40:51",
		"equipCode": "9050BA00CK0035",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "A-35",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1010",
		"markAble": "1",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487644851000",
		"updateDateStr": "2017-02-21 10:40:51"
	}, {
		"createDate": "1487644851000",
		"createDateStr": "2017-02-21 10:40:51",
		"equipCode": "9050BBDTZD0008",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "B线动态作电检验08",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1009",
		"markAble": "1",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487644851000",
		"updateDateStr": "2017-02-21 10:40:51"
	}, {
		"createDate": "1487644851000",
		"createDateStr": "2017-02-21 10:40:51",
		"equipCode": "9050MAMTFP0007",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "新线门体发泡夹具07",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1008",
		"markAble": "1",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487644851000",
		"updateDateStr": "2017-02-21 10:40:51"
	}, {
		"createDate": "1487644851000",
		"createDateStr": "2017-02-21 10:40:51",
		"equipCode": "9050BBDTZD0013",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "B线动态作电检验13",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1007",
		"markAble": "1",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487644851000",
		"updateDateStr": "2017-02-21 10:40:51"
	}, {
		"createDate": "1487644851000",
		"createDateStr": "2017-02-21 10:40:51",
		"equipCode": "9050BB00GZ0002",
		"equipModel": "model1",
		"equipModelName": "modelName1",
		"equipName": "B线灌注机02",
		"equipStatus": "status1",
		"equipType": "type2",
		"equipTypeName": "name2",
		"id": "1006",
		"markAble": "1",
		"supplier": "",
		"supplierName": "设备供应商",
		"telephone": "0532-87654321",
		"updateDate": "1487644851000",
		"updateDateStr": "2017-02-21 10:40:51"
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
     #organizationalTree .el-main{
        padding: 0;
    }
</style>
