<template>
    <div id="materialRepertory">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>线边仓管理 </el-breadcrumb-item>
            <el-breadcrumb-item>物料库存管理</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
              <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">物料代码：	</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            
          <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">物料名称：		</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
             <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">物料批次：		</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <br>
            <br>
              <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">存放仓库：		</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            
              <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">库位：		</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
           
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
      label="	物料名称"
     >
    </el-table-column>
    <el-table-column
      prop="wareHouseName"
      label="	仓库"
      >
    </el-table-column>
    <el-table-column
      prop="WLName"
      label="	库位"
      >
    </el-table-column>
    <el-table-column
      prop="materialBatch"
      label="		物料批次"
      >
    </el-table-column>
    <el-table-column
      prop="inventoryNumber"
      label="存放数量"
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
    name: 'materialRepertory',
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
            dataList: [{
		"WLCode": "loca0002",
		"WLName": "库位A001",
		"id": "23",
		"inventoryNumber": "0.0000",
		"materialBatch": "6512",
		"materialCode": "WL0099",
		"materialName": "钢材(20号)",
		"wareHouseCode": "WHC042",
		"wareHouseName": "焊接半成品库"
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
