<template>
    <div id="materialInfo">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>物料数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>物料数据维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-delete" style="width:100px"> 删 除 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">物料代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">物料名称：</span>
             <el-input v-model="copyName" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">物料类型：</span>
                <el-select v-model="copyType" placeholder="请选择" size="small">
                <el-option
                v-for="item in copyOptions"
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
    :data="dataList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
      >
    </el-table-column>
    <el-table-column
      prop="materialCode"
      label="物料代码"
     >
    </el-table-column>
    <el-table-column
      prop="materialName"
      label="物料名称"
      width="240"
      >
    </el-table-column>
    <el-table-column
      prop="materialTypeName"
      label="物料类型"
      >
    </el-table-column>
    <el-table-column
      prop="materialPattern"
      label="物料规格"
      >
    </el-table-column>
    <el-table-column
      prop="materialTextureName"
      label="物料材质"
      >
    </el-table-column>
    <el-table-column
      prop="materialPatternName"
      label="物料型号"
      >
    </el-table-column>
    <el-table-column
      prop="wLAddress"
      label="物料重量"
      >
    </el-table-column>
    <el-table-column
      prop="wLCapacity"
      label="物料单价"
      >
    </el-table-column>
    <el-table-column
      prop="wLCapacity"
      label="采购属性"
      >
    </el-table-column>
    <el-table-column
      prop="wLCapacity"
      label="存储属性"
      >
    </el-table-column>
    <el-table-column
      prop="wLCapacity"
      label="计划属性"
      >
    </el-table-column>
    <el-table-column
      prop="wLCapacity"
      label="质量等级"
      >
    </el-table-column>
    <el-table-column
      prop="wLCapacity"
      label="计量单位"
      >
    </el-table-column>
    <el-table-column
      prop="wLCapacity"
      label="保质期"
      >
    </el-table-column>
    <el-table-column
      prop="version"
      label="版本号"
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
    name: 'materialInfo',
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
            dataList: [{
		"createDateStr": "2017-05-26 09:23:11",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1025",
		"markAble": "1",
		"materialCode": "WL0099",
		"materialModel": "",
		"materialName": "钢材(20号)",
		"materialPattern": "",
		"materialTexture": "JS",
		"materialTextureName": "金属",
		"materialType": "TYPE_YCL",
		"materialTypeName": "原材料",
		"measureUnit": "",
		"planAtt": "",
		"purchaseAtt": "",
		"qualityLevel": "",
		"remark": "",
		"storageAtt": "",
		"supplyCode": "MYCOMPANY",
		"updateDateStr": "2017-09-13 10:28:40",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0001"
	}, {
		"createDateStr": "2017-05-22 10:27:04",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1024",
		"markAble": "1",
		"materialCode": "demo001",
		"materialModel": "",
		"materialName": "钢板弹簧后吊耳总成",
		"materialPattern": "XH",
		"materialPatternName": "型号1",
		"materialTexture": "",
		"materialType": "TYPE_BCP",
		"materialTypeName": "半成品",
		"measureUnit": "",
		"planAtt": "",
		"purchaseAtt": "",
		"qualityLevel": "",
		"remark": "",
		"storageAtt": "",
		"supplyCode": "MYCOMPANY",
		"updateDateStr": "2017-05-22 10:27:04",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0001"
	}, {
		"createDateStr": "2017-05-19 15:21:02",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1023",
		"markAble": "1",
		"materialCode": "demo005",
		"materialModel": "",
		"materialName": "30号钢材",
		"materialPattern": "",
		"materialTexture": "",
		"materialType": "TYPE_YCL",
		"materialTypeName": "原材料",
		"measureUnit": "",
		"planAtt": "",
		"purchaseAtt": "",
		"qualityLevel": "",
		"remark": "",
		"storageAtt": "",
		"supplyCode": "sup00037",
		"updateDateStr": "2017-05-19 16:57:56",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0001"
	}, {
		"createDateStr": "2017-05-19 15:20:39",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1022",
		"markAble": "1",
		"materialCode": "demo004",
		"materialModel": "",
		"materialName": "20号钢材",
		"materialPattern": "",
		"materialTexture": "",
		"materialType": "TYPE_YCL",
		"materialTypeName": "原材料",
		"measureUnit": "",
		"planAtt": "",
		"purchaseAtt": "",
		"qualityLevel": "",
		"remark": "",
		"storageAtt": "",
		"supplyCode": "sup00036",
		"updateDateStr": "2017-05-19 15:20:39",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": "V0001"
	}, {
		"createDateStr": "2017-05-19 15:11:55",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1021",
		"markAble": "1",
		"materialCode": "demo003",
		"materialModel": "",
		"materialName": "后吊耳底板",
		"materialPattern": "",
		"materialTexture": "",
		"materialType": "TYPE_BCP",
		"materialTypeName": "半成品",
		"measureUnit": "",
		"planAtt": "",
		"purchaseAtt": "",
		"qualityLevel": "",
		"remark": "",
		"storageAtt": "",
		"supplyCode": "MYCOMPANY",
		"updateDateStr": "2017-05-19 15:18:37",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": ""
	}, {
		"createDateStr": "2017-05-19 15:11:25",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1020",
		"markAble": "1",
		"materialCode": "demo002",
		"materialModel": "",
		"materialName": "后吊耳销轴",
		"materialPattern": "",
		"materialTexture": "",
		"materialType": "TYPE_BCP",
		"materialTypeName": "半成品",
		"measureUnit": "",
		"planAtt": "",
		"purchaseAtt": "",
		"qualityLevel": "",
		"remark": "",
		"storageAtt": "",
		"supplyCode": "MYCOMPANY",
		"updateDateStr": "2017-05-19 15:18:48",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"version": ""
	}, {
		"createDateStr": "2017-02-21 10:50:30",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1019",
		"markAble": "1",
		"materialCode": "0060161978",
		"materialModel": "",
		"materialName": "连接件-无",
		"materialType": "TYPE_YCL",
		"materialTypeName": "原材料",
		"updateDateStr": "2017-02-21 10:50:30",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V0001"
	}, {
		"createDateStr": "2017-02-21 10:50:30",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1018",
		"markAble": "1",
		"materialCode": "0060161557",
		"materialModel": "",
		"materialName": "固定板-无-制冰机进水管弯头固定板",
		"materialType": "TYPE_YCL",
		"materialTypeName": "原材料",
		"updateDateStr": "2017-02-21 10:50:30",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V0001"
	}, {
		"createDateStr": "2017-02-21 10:50:30",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1017",
		"markAble": "1",
		"materialCode": "0060145577",
		"materialModel": "",
		"materialName": "ROHS套筒",
		"materialPattern": "",
		"materialTexture": "",
		"materialType": "TYPE_YCL",
		"materialTypeName": "原材料",
		"measureUnit": "",
		"planAtt": "",
		"purchaseAtt": "",
		"qualityLevel": "",
		"remark": "",
		"storageAtt": "",
		"supplyCode": "sup00036",
		"updateDateStr": "2017-02-21 13:22:40",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V0001"
	}, {
		"createDateStr": "2017-02-21 10:50:30",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1016",
		"markAble": "1",
		"materialCode": "0060110768",
		"materialModel": "",
		"materialName": "脚轮轴-低碳钢丝",
		"materialType": "TYPE_YCL",
		"materialTypeName": "原材料",
		"updateDateStr": "2017-02-21 10:50:30",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V0001"
	}, {
		"createDateStr": "2017-02-21 10:50:30",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1015",
		"markAble": "1",
		"materialCode": "0060110136",
		"materialModel": "",
		"materialName": "弹簧-65Mn-直径1.3-直径1.3",
		"materialType": "TYPE_YCL",
		"materialTypeName": "原材料",
		"updateDateStr": "2017-02-21 10:50:30",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V0001"
	}, {
		"createDateStr": "2017-02-21 10:50:30",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1014",
		"markAble": "1",
		"materialCode": "0060107784",
		"materialModel": "",
		"materialName": "拨动杆-不锈钢",
		"materialType": "TYPE_YCL",
		"materialTypeName": "原材料",
		"updateDateStr": "2017-02-21 10:50:30",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V0001"
	}, {
		"createDateStr": "2017-02-21 10:50:30",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1013",
		"markAble": "1",
		"materialCode": "0060107737",
		"materialModel": "",
		"materialName": "冲切钢板-08冷轧钢板-530*200*0.5 冷轧板-",
		"materialType": "TYPE_YCL",
		"materialTypeName": "原材料",
		"updateDateStr": "2017-02-21 10:50:30",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V0001"
	}, {
		"createDateStr": "2017-02-21 10:50:30",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1012",
		"markAble": "1",
		"materialCode": "0060106659",
		"materialModel": "",
		"materialName": "工艺管-N/A",
		"materialType": "TYPE_YCL",
		"materialTypeName": "原材料",
		"updateDateStr": "2017-02-21 10:50:30",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V0001"
	}, {
		"createDateStr": "2017-02-21 10:50:30",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1011",
		"markAble": "1",
		"materialCode": "0060106633",
		"materialModel": "",
		"materialName": "滑道-08电镀锌钢板",
		"materialType": "TYPE_YCL",
		"materialTypeName": "原材料",
		"updateDateStr": "2017-02-21 10:50:30",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V0001"
	}, {
		"createDateStr": "2017-02-21 10:50:30",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1010",
		"markAble": "1",
		"materialCode": "0060105867",
		"materialModel": "",
		"materialName": "连接件-N/A",
		"materialType": "TYPE_YCL",
		"materialTypeName": "原材料",
		"updateDateStr": "2017-02-21 10:50:30",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V0001"
	}, {
		"createDateStr": "2017-02-21 10:50:30",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1009",
		"markAble": "1",
		"materialCode": "0060105697",
		"materialModel": "",
		"materialName": "滑轨支撑铁-N/A",
		"materialType": "TYPE_YCL",
		"materialTypeName": "原材料",
		"updateDateStr": "2017-02-21 10:50:30",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V0001"
	}, {
		"createDateStr": "2017-02-21 10:50:30",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1008",
		"markAble": "1",
		"materialCode": "0060105695",
		"materialModel": "",
		"materialName": "滑轨支撑铁-N/A",
		"materialType": "TYPE_YCL",
		"materialTypeName": "原材料",
		"updateDateStr": "2017-02-21 10:50:30",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V0001"
	}, {
		"createDateStr": "2017-02-21 10:50:30",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1007",
		"markAble": "1",
		"materialCode": "0060104614",
		"materialModel": "",
		"materialName": "ROHS-垫片 BCD-559WJ",
		"materialType": "TYPE_YCL",
		"materialTypeName": "原材料",
		"updateDateStr": "2017-02-21 10:50:30",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V0001"
	}, {
		"createDateStr": "2017-02-21 10:50:30",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1006",
		"markAble": "1",
		"materialCode": "0060103771",
		"materialModel": "",
		"materialName": "固定件-白色-N/A",
		"materialType": "TYPE_YCL",
		"materialTypeName": "原材料",
		"updateDateStr": "2017-02-21 10:50:30",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "V0001"
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
