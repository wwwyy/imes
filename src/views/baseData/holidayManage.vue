<template>
    <div id="holidayManage">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>公共数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>节假日维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-delete" style="width:100px"> 删 除 </el-button>
              <el-button size="small" icon="el-icon-success" style="width:100px"> 保 存 </el-button>
            <el-button size="small" icon="el-icon-error" style="width:100px"> 撤 销 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">假日名称：</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">单位类别：</span>
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
            
            <br>
            <br>
            <span style="line-height:32px;font-size:14px;">可用标识：</span>
            <el-select v-model="markType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in markOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
           <span style="margin-left:40px;line-height:32px;font-size:14px;">单位类别：</span>
                <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
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
    :data="holidayManageList"
    border
    style="width: 100%"
    align="left"
    size="mini">
     <el-table-column
      type="selection"
      >
    </el-table-column>
    <el-table-column
      prop="year"
      label="年份"
     >
    </el-table-column>
    <el-table-column
      prop="holidayName"
      label="假日名称"
      >
    </el-table-column>
    <el-table-column
      prop="orgName"
      label="所属组织"
      width="200"
      >
    </el-table-column>
    <el-table-column
      prop="beginDateStr"
      label="开始日期"
     >
    </el-table-column>
    <el-table-column
      prop="endDateStr"
      label="结束日期"
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
    name: 'holidayManage',
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
            holidayManageList: [{
		"beginDate": "1496764800000",
		"beginDateStr": "2017-06-07",
		"createDate": "1496802187000",
		"createDateStr": "2017-06-07 10:23:07",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"endDate": "1496764800000",
		"endDateStr": "2017-06-07",
		"holidayName": "周末",
		"id": 1003,
		"isDel": "false",
		"markAble": "1",
		"orgCode": "9050",
		"orgName": "浙江长华汽车零配件有限公司",
		"updateDate": "1496802187000",
		"updateDateStr": "2017-06-07 10:23:07",
		"updateUser": "admin",
		"updateUserName": "系统管理员",
		"year": "2017"
	}, {
		"beginDate": "1506787200000",
		"beginDateStr": "2017-10-01",
		"createDate": "1487826678000",
		"createDateStr": "2017-02-23 13:11:18",
		"createUser": "PENG014",
		"createUserName": "测试组2.0",
		"endDate": "1507305600000",
		"endDateStr": "2017-10-07",
		"holidayName": "国庆节",
		"id": 1002,
		"isDel": "false",
		"markAble": "0",
		"orgCode": "BB",
		"orgName": "A线小微",
		"updateDate": "1487826929000",
		"updateDateStr": "2017-02-23 13:15:29",
		"updateUser": "PENG014",
		"updateUserName": "测试组2.0",
		"year": "2017"
	}, {
		"beginDate": "1483200000000",
		"beginDateStr": "2017-01-01",
		"createDate": "1487755650000",
		"createDateStr": "2017-02-22 17:27:30",
		"createUser": "admin",
		"createUserName": "administrator",
		"endDate": "1483372800000",
		"endDateStr": "2017-01-03",
		"holidayName": "元旦",
		"id": 1001,
		"isDel": "false",
		"markAble": "1",
		"orgCode": "BB",
		"orgName": "A线小微",
		"updateDate": "1487755689000",
		"updateDateStr": "2017-02-22 17:28:09",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"year": "2017"
	}, {
		"beginDate": "1485446400000",
		"beginDateStr": "2017-01-27",
		"createDate": "1487755650000",
		"createDateStr": "2017-02-22 17:27:30",
		"createUser": "admin",
		"createUserName": "administrator",
		"endDate": "1486051200000",
		"endDateStr": "2017-02-03",
		"holidayName": "春节",
		"id": 1000,
		"isDel": "false",
		"markAble": "1",
		"orgCode": "9050",
		"orgName": "浙江长华汽车零配件有限公司",
		"updateDate": "1487755650000",
		"updateDateStr": "2017-02-22 17:27:30",
		"updateUser": "admin",
		"updateUserName": "administrator",
		"year": "2017"
	}],
        currentPage: 1
        }
    },
    methods: {
        add(){
            this.$router.push('holidayManageAdd')
        },
      handleClick(row) {
        console.log(row);
        this.$router.push('holidayManageEdit')
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
