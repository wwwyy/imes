<template>
    <div id="selfCheckTemplate">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>质量管理</el-breadcrumb-item>
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>开工自检模板设定</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-delete" style="width:100px"> 删 除 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">自检项目名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">设备名称：</span>
             <el-input v-model="copyName" placeholder="请输入内容" style="width:194px" size="small"></el-input>
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
    :data="scList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="selfCheckCode"
      label="自检代码"
     >
    </el-table-column>
    <el-table-column
      prop="selfCheckName"
      label="自检项目名称"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="equipCode"
      label="设备代码"
      width="180"
      >
    </el-table-column>
    <el-table-column
      prop="equipName"
      label="设备名称"
      width="180"
     >
    </el-table-column>
    <el-table-column
      prop="supplyPhone"
      label="生效期"
      >
    </el-table-column>
    <el-table-column
      prop="version"
      label="版本号"
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
    name: 'selfCheckTemplate',
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
            scList: [{
		"createDate": "1487655711000",
		"createDateStr": "2017-02-21 13:41:51",
		"createUser": "admin",
		"createUserName": "administrator",
		"equipCode": "9050BB00GZ0002",
		"equipName": "B线灌注机02",
		"id": "1002",
		"markAble": "1",
		"remark": "",
		"selfCheckCode": "SC0036",
		"selfCheckName": "线灌注机检验",
		"updateDate": "1487655711000",
		"updateDateStr": "2017-02-21 13:41:51",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "SCV",
		"workUnitCode": "",
		"workUnitName": "安装风门盖板\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tBA26003"
	}, {
		"createDate": "1487655674000",
		"createDateStr": "2017-02-21 13:41:14",
		"createUser": "admin",
		"createUserName": "administrator",
		"equipCode": "9050BAJTZD0026",
		"equipName": "A线静态作电检验26",
		"id": "1001",
		"markAble": "1",
		"remark": "",
		"selfCheckCode": "SC0035",
		"selfCheckName": "静态电检验",
		"updateDate": "1487655674000",
		"updateDateStr": "2017-02-21 13:41:14",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "SCV",
		"workUnitCode": "",
		"workUnitName": "安装风门盖板\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tBA26003"
	}, {
		"createDate": "1487655614000",
		"createDateStr": "2017-02-21 13:40:14",
		"createUser": "admin",
		"createUserName": "administrator",
		"equipCode": "9050MAMTFP0012",
		"equipName": "新线门体发泡夹具12",
		"id": "1000",
		"markAble": "1",
		"remark": "",
		"selfCheckCode": "SC0034",
		"selfCheckName": "发泡夹具检验",
		"updateDate": "1487655614000",
		"updateDateStr": "2017-02-21 13:40:14",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"version": "SCV",
		"workUnitCode": "",
		"workUnitName": "安装风门盖板\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tBA26003"
	}],
        currentPage: 1
        }
    },
    methods: {
        add(){
		  this.$router.push('selfCheckTemplateAdd')
	  },
      handleClick(row) {
        console.log(row);
        this.$router.push('selfCheckTemplateEdit')
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
