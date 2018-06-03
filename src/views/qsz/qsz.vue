<template>
    <div id="qsz">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>质量分析决策</el-breadcrumb-item>
            <el-breadcrumb-item>质量追溯</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
       <div style="text-align:left;margin:20px 0;">
             <span style="margin-left:40px;line-height:32px;font-size:14px;">生产编号：	</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
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
      prop="gong"
      label="工序"
     >
    </el-table-column>
    <el-table-column
      prop="code"
      label="机编号"
     >
    </el-table-column>
    <el-table-column
      prop="ren"
      label="人"
      >
    </el-table-column>
    <el-table-column
      prop="liao"
      label="料"
      >
    </el-table-column>
    <el-table-column
      prop="startDate"
      label="开始时间"
      >
    </el-table-column>
    <el-table-column
      prop="endDate"
      label="结束时间"
      >
    </el-table-column>
    <el-table-column
      prop="mo"
      label="模具"
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
    name: 'qsz',
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
          gong: '落料',
          code: 'epuip048',
          ren: 'admin',
          liao: 'demo003',
          startDate: '2017-06-09',
          endDate: '2017-06-09',
          mo: 'CHCXM0001001'
        }, {
          gong: '冲孔',
          code: 'epuip051',
          ren: 'admin',
          liao: 'demo003',
          startDate: '2017-06-09',
          endDate: '2017-06-09',
          mo: 'CHCXM0001002'
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
