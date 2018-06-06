<template>
    <div id="selfCheckQuery">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>质量管理</el-breadcrumb-item>
            <el-breadcrumb-item>数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>自检查询</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">自检代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">自检项目名称：</span>
             <el-input v-model="copyName" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">自检结果：</span>
            <el-select v-model="markType" placeholder="请选择" size="small">
                <el-option
                v-for="item in markOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <<el-table
    :data="selfCheckResultList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="resultCode"
      label="自检代码"
      >
    </el-table-column>
    <el-table-column
      prop="selfCheckName"
      label="自检项目名称"
     >
    </el-table-column>
    <el-table-column
      prop="workUnitName"
      label="对应工位"
      width="200"
     >
    </el-table-column>
    <el-table-column
      prop="equipName"
      label="设备"
      width="200"
      >
    </el-table-column>
    <el-table-column
      prop="checkResultStr"
      label="自检结果"
     >
    </el-table-column>
    <el-table-column
      prop="operatorName"
      label="操作人"
     >
    </el-table-column>
    <el-table-column
      prop="operatorDateStr"
      label="操作时间"
     >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      >
      <template slot-scope="scope">
           <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
        <el-button type="text" size="small" @click="handleClick(scope.row)">删除</el-button>
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
    name: 'selfCheckQuery',
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
            selfCheckResultList: [{
		"checkResult": "0",
		"checkResultStr": "不合格",
		"equipName": "A线静态作电检验26",
		"id": "1004",
		"operatorCode": "PENG028",
		"operatorDate": "1486656000000",
		"operatorDateStr": "2017-02-10",
		"operatorName": "测试01(PENG028)",
		"remark": "",
		"resultCode": "SCR0039",
		"selfCheckCode": "SC0035",
		"selfCheckName": "静态电检验",
		"workUnitName": "安装风门盖板\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tBA26003"
	}, {
		"checkResult": "1",
		"checkResultStr": "合格",
		"equipName": "A线静态作电检验26",
		"id": "1002",
		"operatorCode": "PENG026",
		"operatorDate": "1487692800000",
		"operatorDateStr": "2017-02-22",
		"operatorName": "张三(PENG026)",
		"remark": "",
		"resultCode": "SCR0038",
		"selfCheckCode": "SC0035",
		"selfCheckName": "静态电检验",
		"workUnitName": "安装风门盖板\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tBA26003"
	}, {
		"checkResult": "1",
		"checkResultStr": "合格",
		"equipName": "A线静态作电检验26",
		"id": "1001",
		"operatorCode": "PENG027",
		"operatorDate": "1487174400000",
		"operatorDateStr": "2017-02-16",
		"operatorName": "李四(PENG027)",
		"remark": "",
		"resultCode": "SCR0037",
		"selfCheckCode": "SC0035",
		"selfCheckName": "静态电检验",
		"workUnitName": "安装风门盖板\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tBA26003"
	}],
        currentPage: 1
        }
    },
    methods: {
        add(){
		  this.$router.push('selfCheckQueryAdd')
	  },
      handleClick(row) {
        console.log(row);
        this.$router.push('selfCheckQueryEdit')
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
