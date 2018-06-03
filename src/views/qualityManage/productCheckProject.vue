<template>
    <div id="productCheckProject">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>质量管理</el-breadcrumb-item>
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>产品检验项目维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-delete" style="width:100px"> 删 除 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
             <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">项目代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px">项目名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            
             <span style="margin-left:40px;line-height:32px;font-size:14px;">检验等级：</span>
             <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">可用标识：</span>
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
             <span style="display:inline-block;line-height:32px;font-size:14px;width:70px">型号代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
              <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px">产品名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
           
            <span style="margin-left:40px;line-height:32px;font-size:14px;">检验类型：</span>
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
    :data="productCheckProjectList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="testItemCode"
      label="检验项目代码"
      width="120"
     >
    </el-table-column>
    <el-table-column
      prop="testItemName"
      label="检验项目名称"
      width="160"
      >
    </el-table-column>
    <el-table-column
      prop="modelCode"
      label="型号代码"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="productName"
      label="产品名称"
      width="160"
     >
    </el-table-column>
    <el-table-column
      prop="inspectLevelName"
      label="检验等级"
     >
    </el-table-column>
    <el-table-column
      prop="inspectTypeName"
      label="检验类型"
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
    name: 'productCheckProject',
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
            productCheckProjectList: [{
		"createDateStr": "2017-05-26 10:49:19",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1004",
		"inspectLevel": "JYDJ_BJ",
		"inspectLevelName": "必检",
		"inspectType": "JYLX_ZX",
		"inspectTypeName": "在线",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "01651377",
		"productName": "发动机油底壳调节板",
		"remark": "",
		"testItemCode": "CP0041",
		"testItemName": "油底壳调节板检验",
		"updateDateStr": "2017-05-26 10:52:31",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDateStr": "2017-05-22 10:05:05",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1003",
		"inspectLevel": "",
		"inspectType": "",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "demo001",
		"productName": "钢板弹簧后吊耳总成",
		"remark": "",
		"testItemCode": "CP0038",
		"testItemName": "钢板弹簧后吊耳总成",
		"updateDateStr": "2017-05-22 13:40:04",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDateStr": "2017-02-21 13:47:50",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1000",
		"inspectLevel": "JYDJ_BJ",
		"inspectLevelName": "必检",
		"inspectType": "JYLX_ZX",
		"inspectTypeName": "在线",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "B00010B8V00",
		"productName": "产品1",
		"remark": "",
		"testItemCode": "CP0031",
		"testItemName": "以色列外观检验",
		"updateDateStr": "2017-02-24 12:32:41",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDateStr": "2017-02-21 13:49:29",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1002",
		"inspectLevel": "JYDJ_KJ",
		"inspectLevelName": "可检",
		"inspectType": "JYLX_ZX",
		"inspectTypeName": "在线",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "B00010E9P00",
		"productName": "HB21FWNNAA(欧洲)",
		"remark": "",
		"testItemCode": "CP0033",
		"testItemName": "外观检验",
		"updateDateStr": "2017-02-21 13:49:29",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"createDateStr": "2017-02-21 13:48:58",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1001",
		"inspectLevel": "JYDJ_BJ",
		"inspectLevelName": "必检",
		"inspectType": "JYLX_LX",
		"inspectTypeName": "离线",
		"isDel": "false",
		"markAble": "1",
		"modelCode": "B00010B8V00",
		"productName": "HB21FNNB(以色列)",
		"remark": "",
		"testItemCode": "CP0032",
		"testItemName": "质量检验",
		"updateDateStr": "2017-02-21 13:48:58",
		"updateUser": "admin",
		"updateUserName": "administrator"
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
