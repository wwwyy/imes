<template>
    <div id="replacePartCount">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>设备管理</el-breadcrumb-item>
            <el-breadcrumb-item>备件仓库管理</el-breadcrumb-item>
            <el-breadcrumb-item>备件盘点</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
          <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
          <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
          <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
          <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
             <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">单号ID：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
             <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">备件代码：	</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
             <span style="margin-left:40px;display:inline-block;line-height:32px;font-size:14px;width:70px">备件名称：	</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
             
          
            <br>
            <br>
            
              <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px;">盘点类型：		</span>
                <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
           <span style="margin-left:40px;line-height:32px;font-size:14px;">开始日期：</span>
             <el-date-picker
                v-model="startDate"
                type="date"
                placeholder="选择日期"
                style="width:194px"
                size="small">
            </el-date-picker>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">结束日期：</span>
             <el-date-picker
                v-model="endDate"
                type="date"
                placeholder="选择日期"
                style="width:194px"
                size="small">
            </el-date-picker>
        </div>
        <el-table
    :data="replacePartCountList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
     >
    </el-table-column>
    <el-table-column
      prop="checkId"
      label="	单号"
      width="120"
     >
    </el-table-column>
    <el-table-column
      prop="sparePartCode"
      label="	备件代码"
      width="120"
     >
    </el-table-column>
    <el-table-column
      prop="sparePartName"
      label="	备件名称"
      width="120"
      >
    </el-table-column>
    <el-table-column
      prop="checkTypeName"
      label="盘点类型"
     >
    </el-table-column>
    <el-table-column
      prop="quantity"
      label="数量"
     >
    </el-table-column>
    <el-table-column
      prop="occurrenceTimeStr"
      label="发生时间"
      width="150"
     >
    </el-table-column>
    <el-table-column
      prop="statusName"
      label="状态"
      >
    </el-table-column>
    <el-table-column
      prop="checkUserName"
      label="盘点人"
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
    name: 'replacePartCount',
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
            replacePartCountList: [{
		"checkId": "201702230032",
		"checkType": "1",
		"checkTypeName": "盘盈",
		"checkUser": "PENG035",
		"checkUserName": "高丽娟",
		"createDate": "1487845402000",
		"createDateStr": "2017-02-23 18:23:22",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"id": "1003",
		"occurrenceTime": "1487845380000",
		"occurrenceTimeStr": "2017-02-23 18:23:00",
		"quantity": "1",
		"remark": "",
		"sparePartCode": "KRNYIGRML5",
		"sparePartName": "曲轴",
		"status": "1",
		"statusName": "确认",
		"updateDate": "1487845402000",
		"updateDateStr": "2017-02-23 18:23:22",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
	}, {
		"checkId": "201702210029",
		"checkType": "1",
		"checkTypeName": "盘盈",
		"checkUser": "PENG028",
		"checkUserName": "测试01",
		"createDate": "1487655535000",
		"createDateStr": "2017-02-21 13:38:55",
		"createUser": "PENG028",
		"createUserName": "测试01",
		"id": "1000",
		"occurrenceTime": "1487816700000",
		"occurrenceTimeStr": "2017-02-23 10:25:00",
		"quantity": "60",
		"remark": "",
		"sparePartCode": "8AL4TKDF3T",
		"sparePartName": "备件03",
		"status": "0",
		"statusName": "创建",
		"updateDate": "1487655535000",
		"updateDateStr": "2017-02-21 13:38:55",
		"updateUser": "PENG028",
		"updateUserName": "测试01"
	}, {
		"checkId": "201702210030",
		"checkType": "0",
		"checkTypeName": "盘亏",
		"checkUser": "PENG026",
		"checkUserName": "张三",
		"createDate": "1487655550000",
		"createDateStr": "2017-02-21 13:39:10",
		"createUser": "PENG028",
		"createUserName": "测试01",
		"id": "1001",
		"occurrenceTime": "1487655540000",
		"occurrenceTimeStr": "2017-02-21 13:39:00",
		"quantity": "60",
		"remark": "",
		"sparePartCode": "2O8WO23USS",
		"sparePartName": "备件01",
		"status": "0",
		"statusName": "创建",
		"updateDate": "1487655550000",
		"updateDateStr": "2017-02-21 13:39:10",
		"updateUser": "PENG028",
		"updateUserName": "测试01"
	}, {
		"checkId": "201702210031",
		"checkType": "0",
		"checkTypeName": "盘亏",
		"checkUser": "PENG028",
		"checkUserName": "测试01",
		"createDate": "1487655572000",
		"createDateStr": "2017-02-21 13:39:32",
		"createUser": "PENG028",
		"createUserName": "测试01",
		"id": "1002",
		"occurrenceTime": "1487655540000",
		"occurrenceTimeStr": "2017-02-21 13:39:00",
		"quantity": "46",
		"remark": "",
		"sparePartCode": "ZJODJCXPYA",
		"sparePartName": "备件02",
		"status": "0",
		"statusName": "创建",
		"updateDate": "1487655572000",
		"updateDateStr": "2017-02-21 13:39:32",
		"updateUser": "PENG028",
		"updateUserName": "测试01"
	}],
        currentPage: 1
        }
    },
    methods: {
      add(){
		  this.$router.push('replacePartCountAdd')
	  },
      handleClick(row) {
        console.log(row);
        this.$router.push('replacePartCountEdit')
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
