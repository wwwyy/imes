<template>
    <div id="qs">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>质量分析决策</el-breadcrumb-item>
            <el-breadcrumb-item>质量分析</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
       <div style="text-align:left;margin:20px 0;">
             <span style="margin-left:40px;line-height:32px;font-size:14px;">工序：	</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">生产编号：	</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
             <span style="margin-left:40px;line-height:32px;font-size:14px;">操作者：	</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">结论：	</span>
             <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px;">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-button size="small" type="primary" style="width:100px;margin-left:40px;"> 查 询 </el-button>
        </div>
        
        <el-table
    :data="tableData"
    border
    style="width: 100%"
    align="left"
    size="mini">
      <el-table-column
      type="index">
    </el-table-column>
    <el-table-column
      prop="procedure1"
      label="工序"
     >
    </el-table-column>
    <el-table-column
      prop="roleName"
      label="日期"
     >
    </el-table-column>
    <el-table-column
      prop="sendGoodsNo"
      label="产品规格"
      >
    </el-table-column>
    <el-table-column
      prop="productName"
      label="产品名称"
      >
    </el-table-column>
    <el-table-column
      prop="productDrawingNo"
      label="产品图号"
      >
    </el-table-column>
    <el-table-column
      prop="productStandard"
      label="生产批号"
      >
    </el-table-column>
    <el-table-column
      prop="materialSupply"
      label="材料炉号"
      >
    </el-table-column>
    <el-table-column
      prop="updateDateStr"
      label="操作者"
      >
    </el-table-column>
    <el-table-column
      prop="updateDateStr"
      label="检验员"
      >
    </el-table-column>
    <el-table-column
      prop="updateDateStr"
      label="结论"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      >
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="handleClick(scope.row)">详情</el-button>
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
    name: 'qs',
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
            tableData: [{
	"id": 467,
	"sendGoodsNo": "demo003",
	"procedure1": "落料",
	"checkDate": 1497518945000,
	"checkDate1": null,
	"customerName": null,
	"productName": "后吊耳底板",
	"productStandard": "2017052700",
	"productDrawingNo": "2912122P",
	"materialSupply": "13711319",
	"operateEmp": null,
	"operateEmpRole": null,
	"checkTime": 1497518945000,
	"type": null,
	"result": "ok",
	"compareResult": null,
	"compareReason": null,
	"compareEmp": null,
	"detailList": null
}, {
	"id": 466,
	"sendGoodsNo": "demo003",
	"procedure1": "落料",
	"checkDate": 1496980526000,
	"checkDate1": null,
	"customerName": null,
	"productName": "后吊耳底板",
	"productStandard": "2017052700",
	"productDrawingNo": "2912122P",
	"materialSupply": "13711319",
	"operateEmp": null,
	"operateEmpRole": null,
	"checkTime": 1496980526000,
	"type": null,
	"result": "ok",
	"compareResult": null,
	"compareReason": null,
	"compareEmp": null,
	"detailList": null
}, {
	"id": 465,
	"sendGoodsNo": "demo003",
	"procedure1": "落料",
	"checkDate": 1496980170000,
	"checkDate1": null,
	"customerName": null,
	"productName": "后吊耳底板",
	"productStandard": "2017052700",
	"productDrawingNo": "2912122P",
	"materialSupply": "13711319",
	"operateEmp": null,
	"operateEmpRole": null,
	"checkTime": 1496980170000,
	"type": null,
	"result": "ok",
	"compareResult": null,
	"compareReason": null,
	"compareEmp": null,
	"detailList": null
}, {
	"id": 464,
	"sendGoodsNo": "demo003",
	"procedure1": "落料",
	"checkDate": 1496928380000,
	"checkDate1": null,
	"customerName": null,
	"productName": "后吊耳底板",
	"productStandard": "2017052700",
	"productDrawingNo": "2912122P",
	"materialSupply": "13711319",
	"operateEmp": null,
	"operateEmpRole": null,
	"checkTime": 1496928380000,
	"type": null,
	"result": "ok",
	"compareResult": null,
	"compareReason": null,
	"compareEmp": null,
	"detailList": null
}, {
	"id": 463,
	"sendGoodsNo": "demo003",
	"procedure1": "落料",
	"checkDate": 1496928272000,
	"checkDate1": null,
	"customerName": null,
	"productName": "后吊耳底板",
	"productStandard": "2017052700",
	"productDrawingNo": "2912122P",
	"materialSupply": "13711319",
	"operateEmp": null,
	"operateEmpRole": null,
	"checkTime": 1496928272000,
	"type": null,
	"result": "ok",
	"compareResult": null,
	"compareReason": null,
	"compareEmp": null,
	"detailList": null
}, {
	"id": 462,
	"sendGoodsNo": "demo003",
	"procedure1": "落料",
	"checkDate": 1496924273000,
	"checkDate1": null,
	"customerName": null,
	"productName": "后吊耳底板",
	"productStandard": "2017052700",
	"productDrawingNo": "2912122P",
	"materialSupply": "13711319",
	"operateEmp": null,
	"operateEmpRole": null,
	"checkTime": 1496924273000,
	"type": null,
	"result": "ok",
	"compareResult": null,
	"compareReason": null,
	"compareEmp": null,
	"detailList": null
}, {
	"id": 461,
	"sendGoodsNo": "demo003",
	"procedure1": "落料",
	"checkDate": 1496919740000,
	"checkDate1": null,
	"customerName": null,
	"productName": "后吊耳底板",
	"productStandard": "2017052700",
	"productDrawingNo": "2912122P",
	"materialSupply": "13711319",
	"operateEmp": null,
	"operateEmpRole": null,
	"checkTime": 1496919740000,
	"type": null,
	"result": "ok",
	"compareResult": null,
	"compareReason": null,
	"compareEmp": null,
	"detailList": null
}, {
	"id": 460,
	"sendGoodsNo": "asd",
	"procedure1": "123",
	"checkDate": 1496919640000,
	"checkDate1": null,
	"customerName": null,
	"productName": "电风扇",
	"productStandard": "xfde",
	"productDrawingNo": "er123",
	"materialSupply": "asew",
	"operateEmp": null,
	"operateEmpRole": null,
	"checkTime": 1496919640000,
	"type": null,
	"result": "NG",
	"compareResult": null,
	"compareReason": null,
	"compareEmp": null,
	"detailList": null
}, {
	"id": 459,
	"sendGoodsNo": "asd",
	"procedure1": "123",
	"checkDate": 1496919555000,
	"checkDate1": null,
	"customerName": null,
	"productName": "电风扇",
	"productStandard": "xfde",
	"productDrawingNo": "er123",
	"materialSupply": "asew",
	"operateEmp": null,
	"operateEmpRole": null,
	"checkTime": 1496919555000,
	"type": null,
	"result": "",
	"compareResult": null,
	"compareReason": null,
	"compareEmp": null,
	"detailList": null
}, {
	"id": 458,
	"sendGoodsNo": "",
	"procedure1": "123",
	"checkDate": 1496919502000,
	"checkDate1": null,
	"customerName": null,
	"productName": "",
	"productStandard": "",
	"productDrawingNo": "",
	"materialSupply": "",
	"operateEmp": null,
	"operateEmpRole": null,
	"checkTime": 1496919502000,
	"type": null,
	"result": "",
	"compareResult": null,
	"compareReason": null,
	"compareEmp": null,
	"detailList": null
}, {
	"id": 457,
	"sendGoodsNo": "demo003",
	"procedure1": "落料",
	"checkDate": 1496917141000,
	"checkDate1": null,
	"customerName": null,
	"productName": "后吊耳底板",
	"productStandard": "2017052700",
	"productDrawingNo": "2912122P",
	"materialSupply": "13711319",
	"operateEmp": null,
	"operateEmpRole": null,
	"checkTime": 1496917141000,
	"type": null,
	"result": "ok",
	"compareResult": null,
	"compareReason": null,
	"compareEmp": null,
	"detailList": null
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
