<template>
    <div id="document">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>文档管理 </el-breadcrumb-item>
            <el-breadcrumb-item>文档维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-delete" style="width:100px"> 删 除 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 下 载 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
             <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">文档代码：	</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
              <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px;">文档名称：		</span>
              <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
                 <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px;">文件名称：		</span>
              <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
             <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">文档分类：			</span>
            <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          
          
            <br>
            <br>
              <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px">文件格式：			</span>
                <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            
             <span style="margin-left:40px;line-height:32px;font-size:14px;">关联产品：		</span>
            <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
              <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px">关联订单：			</span>
                <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            
             <span style="margin-left:40px;line-height:32px;font-size:14px;">可用标识：		</span>
            <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
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
      label="文档代码"
     >
    </el-table-column>
    <el-table-column
      prop="personName"
      label="文档名称"
     >
    </el-table-column>
    <el-table-column
      prop="attendanceDateStr"
      label="文档分类"
      >
    </el-table-column>
    <el-table-column
      prop="onDutyTimeStr"
      label="文件格式"
      >
    </el-table-column>
    <el-table-column
      prop="offDutyTimeStr"
      label="产品名称"
      >
    </el-table-column>
    <el-table-column
      prop="personCode"
      label="关联订单"
     >
    </el-table-column>
    <el-table-column
      prop="personName"
      label="文件名称"
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
    name: 'document',
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
		  this.$router.push('documentAdd')
	  },
      handleClick(row) {
        console.log(row);
        this.$router.push('documentEdit')
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
