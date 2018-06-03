<template>
    <div id="sysetmVersionLog">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>系统管理</el-breadcrumb-item>
            <el-breadcrumb-item>系统日志</el-breadcrumb-item>
            <el-breadcrumb-item> 系统版本日志</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
       
       <el-table
    :data="tableData"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="bianhao"
      label="编号"
     >
    </el-table-column>
    <el-table-column
      prop="banben"
      label="版本编码"
     >
    </el-table-column>
    <el-table-column
      prop="gengxin"
      label="更新简介"
     >
    </el-table-column>
    <el-table-column
      prop="date"
      label="	更新日期"
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
    name: 'sysetmVersionLog',
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
          bianhao: '1',
          banben: '1.0.0-M1',
          gengxin: '第一版正式版',
          date: '2017-01-24 00:00:00 +0000'
        }, {
          bianhao: '2',
          banben: '1.2.49-SNAPSHOT',
          gengxin: '第二版开发版',
          date: '2017-08-19 06:52:55 +0000'
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
