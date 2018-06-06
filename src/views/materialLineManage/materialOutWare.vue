<template>
    <div id="materialOutWare">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>线边仓管理 </el-breadcrumb-item>
            <el-breadcrumb-item>物料出库管理</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
              <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">出库单号：		</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            
             <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">出库仓库：		</span>
            <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
             <span style="margin-left:40px;line-height:32px;font-size:14px;">出库日期从：	</span>
             <el-date-picker
                v-model="startDate"
                type="date"
                placeholder="选择日期"
                style="width:194px"
                size="small">
            </el-date-picker>
            <br>
            <br>
              <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">订单编号：	</span>
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
           
             <span style="margin-left:40px;line-height:32px;font-size:14px;">出库日期到：</span>
             <el-date-picker
                v-model="endDate"
                type="date"
                placeholder="选择日期"
                style="width:194px"
                size="small">
            </el-date-picker>
        </div>
        <el-table
    :data="tableData"
    border
    style="width: 100%"
    size="mini">
     <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      fixed
      prop="date"
      label="日期"
     >
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      >
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      >
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
     >
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      >
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
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
      prop="personCode"
      label="出库单号"
     >
    </el-table-column>
    <el-table-column
      prop="personName"
      label="订单编号"
     >
    </el-table-column>
    <el-table-column
      prop="attendanceDateStr"
      label="出库日期"
      >
    </el-table-column>
    <el-table-column
      prop="onDutyTimeStr"
      label="出库仓库"
      >
    </el-table-column>
    <el-table-column
      prop="offDutyTimeStr"
      label="	状态"
      >
    </el-table-column>
    <el-table-column
      prop="attendanceDateStr"
      label="可用标识"
      >
    </el-table-column>
    <el-table-column
      prop="onDutyTimeStr"
      label="创建人"
      >
    </el-table-column>
    <el-table-column
      prop="offDutyTimeStr"
      label="创建时间"
      >
    </el-table-column>
    <el-table-column
      prop="offDutyTimeStr"
      label="最后更新人"
      >
    </el-table-column>
    <el-table-column
      prop="offDutyTimeStr"
      label="最后更新时间"
      >
    </el-table-column>
  </el-table>
    </div>
</template>
<script>
export default {
    name: 'materialOutWare',
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
            tableData: [],
        currentPage: 1
        }
    },
    methods: {
        add(){
		  this.$router.push('materialOutWareAdd')
	  },
      handleClick(row) {
        console.log(row);
        this.$router.push('materialOutWareEdit')
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
