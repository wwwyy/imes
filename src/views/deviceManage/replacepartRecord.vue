<template>
    <div id="replacepartRecord">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>设备管理</el-breadcrumb-item>
            <el-breadcrumb-item>备件仓库管理</el-breadcrumb-item>
            <el-breadcrumb-item>备件档案</el-breadcrumb-item>
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
            <span style="line-height:32px;font-size:14px;">备件代码：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">备件名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">备件类型：</span>
              <el-select v-model="markType" placeholder="请选择" size="small">
                <el-option
                v-for="item in markOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
              </el-select>
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
    :data="sparePartsList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="sparepartsCode"
      label="	备件代码"
      width="120"
     >
    </el-table-column>
    <el-table-column
      prop="sparepartsName"
      label="	备件名称"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="sparepartsTypeName"
      label="备件类型"
      width="120"
     >
    </el-table-column>
    <el-table-column
      prop="supplyName"
      label="供应商"
      width="150"
     >
    </el-table-column>
    <el-table-column
      prop="supplyTelephone"
      label="联系电话"
      width="150"
     >
    </el-table-column>
    <el-table-column
      prop="costPrice"
      label="采购价格范围"
      width="100"
     >
    </el-table-column>
    <el-table-column
      prop="useLimit"
      label="使用年限(年)"
      width="100"
     >
    </el-table-column>
    <el-table-column
      prop="markAble"
      label="可用标识"
      width="80"
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
    name: 'replacepartRecord',
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
            sparePartsList: [{
		"costPrice": "12",
		"createDate": "1487845105000",
		"createDateStr": "2017-02-23 18:18:25",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"id": 1003,
		"markAble": 1,
		"remark": "",
		"sparepartsCode": "KRNYIGRML5",
		"sparepartsModel": "BJGG001",
		"sparepartsName": "曲轴",
		"sparepartsType": "BJLX001",
		"sparepartsTypeName": "备件类型001",
		"supplyCode": "sup00037",
		"supplyName": "昆明浩杰科技有限公司",
		"supplyTelephone": "13300000000",
		"updateDate": "1487845105000",
		"updateDateStr": "2017-02-23 18:18:25",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟",
		"warningValue": ""
	}, {
		"buyDate": "1487779200000",
		"costPrice": "46.86",
		"createDate": "1487655273000",
		"createDateStr": "2017-02-21 13:34:33",
		"createUser": "PENG028",
		"createUserName": "测试01",
		"id": 1002,
		"maintainDate": "45",
		"markAble": 1,
		"remark": "",
		"sparepartsCode": "8AL4TKDF3T",
		"sparepartsModel": "BJGG001",
		"sparepartsName": "进排气支管垫",
		"sparepartsType": "BJLX001",
		"sparepartsTypeName": "备件类型001",
		"supplyCode": "sup00036",
		"supplyName": "云南古创贸易有限公司",
		"supplyTelephone": "0532-87812345",
		"updateDate": "1487845154000",
		"updateDateStr": "2017-02-23 18:19:14",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟",
		"useLimit": "3",
		"warningValue": ""
	}],
        currentPage: 1
        }
    },
    methods: {
      add(){
		  this.$router.push('replacepartRecordAdd')
	  },
      handleClick(row) {
        console.log(row);
        this.$router.push('replacepartRecordEdit')
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
