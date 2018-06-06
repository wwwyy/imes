<template>
    <div id="materialInWare">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>线边仓管理 </el-breadcrumb-item>
            <el-breadcrumb-item>物料入库管理</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
              <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">入库单号：	</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            
             <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">目标仓库：</span>
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
              <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">来源编号：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            
             <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">可用标识：</span>
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
    :data="materialInWareList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="inCode"
      label="入库单号"
      width="120"
     >
    </el-table-column>
    <el-table-column
      prop="fromCode"
      label="来源编码"
     >
    </el-table-column>
    <el-table-column
      prop="deliveryDateStr"
      label="操作日期"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="warehouseName"
      label="目标仓库"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="stateName"
      label="状态"
      >
    </el-table-column>
    <el-table-column
      prop="markAble"
      label="可用标识"
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
      width="200"
      >
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
         <el-button type="text" size="small" @click="handleClick(scope.row)">删除</el-button>
          <el-button type="text" size="small" @click="handleClick(scope.row)">确认</el-button>
           <el-button type="text" size="small" @click="handleClick(scope.row)">红冲</el-button>
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
   <el-table
    :data="materialInWareDetailVOList"
    border
    style="width: 100%"
    align="left"
    size="mini">
    <el-table-column
      prop="materialCode"
      label="物料代码"
     >
    </el-table-column>
    <el-table-column
      prop="materialName"
      label="物料名称"
     >
    </el-table-column>
    <el-table-column
      prop="materialBatch"
      label="物料批次"
      >
    </el-table-column>
    <el-table-column
      prop="inCount"
      label="入库数量"
      >
    </el-table-column>
    <el-table-column
      prop="WLName"
      label="库位"
      >
    </el-table-column>
  </el-table>
    </div>
</template>
<script>
export default {
    name: 'materialInWare',
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
            materialInWareList: [{
		"createDate": "1496198031000",
		"createDateStr": "2017-05-31 10:33:51",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"deliveryDate": "1496246400000",
		"deliveryDateStr": "2017-06-01",
		"fromCode": "123312",
		"id": "46",
		"inCode": "IN0011",
		"markAble": "1",
		"remark": "",
		"state": "2",
		"stateName": "红冲",
		"updateDate": "1496198069000",
		"updateDateStr": "2017-05-31 10:34:29",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"warehouseCode": "WHC042",
		"warehouseName": "焊接半成品库"
  }],
  materialInWareDetailVOList: [{
		"WLCode": "loca0002",
		"WLName": "库位A001",
		"id": "91",
		"inCount": "100.0000",
		"materialBatch": "6512",
		"materialCode": "WL0099",
		"materialInCode": "IN0011",
		"materialName": "钢材(20号)"
	}],
        currentPage: 1
        }
    },
    methods: {
       add(){
		  this.$router.push('materialInWareAdd')
	  },
      handleClick(row) {
        console.log(row);
        this.$router.push('materialInWareEdit')
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
