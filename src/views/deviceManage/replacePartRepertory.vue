<template>
    <div id="replacePartRepertory">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>设备管理</el-breadcrumb-item>
            <el-breadcrumb-item>备件仓库管理</el-breadcrumb-item>
            <el-breadcrumb-item>备件库存管理</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
          <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
             <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">备件代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
             <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">备件名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
             <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;">供应商名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
        </div>
        <el-table
    :data="pgList"
    border
    style="width: 100%"
    align="left"
    size="mini">
    <el-table-column
      prop="sparePartCode"
      label="	备件代码"
     >
    </el-table-column>
    <el-table-column
      prop="sparePartName"
      label="	备件名称"
      >
    </el-table-column>
    <el-table-column
      prop="supplyName"
      label="供应商名称"
     >
    </el-table-column>
    <el-table-column
      prop="inventory"
      label="	库存数量"
     >
    </el-table-column>
    <el-table-column
      prop="status"
      label="	备件状态"
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
    name: 'replacePartRepertory',
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
            pgList: [{
		"id": "1000",
		"inventory": "82",
		"sparePartCode": "8AL4TKDF3T",
		"sparePartName": "备件03",
		"status": "1",
		"supplyCode": "sup00036",
		"supplyName": "云南古创贸易有限公司"
	}, {
		"id": "1001",
		"inventory": "15",
		"sparePartCode": "KRNYIGRML5",
		"sparePartName": "曲轴",
		"status": "1",
		"supplyCode": "sup00037",
		"supplyName": "昆明浩杰科技有限公司"
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
