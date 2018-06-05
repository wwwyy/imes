<template>
    <div id="measureData">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>公共数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>计量维护</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px" @click="add"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-delete" style="width:100px"> 删 除 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
            <el-button size="small" type="primary" style="width:100px" @click="searchBtn"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:center;margin:20px 0;">
             <span style="line-height:32px;font-size:14px;">单位代码：</span>
            <el-input v-model="measureCodeSearch" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">单位名称：</span>
             <el-input v-model="codeNameSearch" placeholder="请输入内容" style="width:194px" size="small"></el-input>
            <span style="margin-left:40px;line-height:32px;font-size:14px;">单位类别：</span>
                <el-select v-model="measureTypeCodeSearch" placeholder="请选择" size="small">
                <el-option
                v-for="item in copyOptions"
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
    :data="measureList"
    border
    align='left'
    style="width: 100%"
    size="mini">
     <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      fixed
      prop="measureCode"
      label="单位代码"
      :filter-method="filterMeasureCode"
     >
    </el-table-column>
    <el-table-column
      prop="measureName"
      label="单位名称"
      >
    </el-table-column>
    <el-table-column
      prop="measureTypeName"
      label="单位类别"
      >
    </el-table-column>
    <el-table-column
      prop="exchangeCoefficient"
      label="转换系数"
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
    name: 'measureData',
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
                    value: '1',
                    label: '启用'
                }, 
                {
                    value: '0',
                    label: '停用'
                }
            ],
            measureTypeCodeSearch: '',
            markType: '',
            measureCodeSearch: '',
            codeNameSearch: '',
            measureList: [
                {
                "createDateStr": "2017-06-07 10:05:49",
                "createUser": "admin",
                "createUserName": "系统管理员",
                "exchangeCoefficient": "100",
                "id": "1007",
                "markAble": "1",
                "measureCode": "LI",
                "measureName": "里",
                "measureTypeCode": "JC_DWZH_CD",
                "measureTypeName": "长度",
                "reMark": "",
                "updateDateStr": "2017-06-07 10:05:49",
                "updateUserName": "系统管理员"
                },
                {
                "createDateStr": "2017-02-22 17:25:37",
                "createUser": "admin",
                "createUserName": "administrator",
                "exchangeCoefficient": "1024",
                "id": "1000",
                "markAble": "1",
                "measureCode": "KB",
                "measureName": "千字节",
                "measureTypeCode": "JC_DWZH_CC",
                "measureTypeName": "存储",
                "reMark": "",
                "updateDateStr": "2017-02-23 13:14:44",
                "updateUserName": "系统管理员"
                }
        ],
        currentPage: 1
        }
    },
    methods: {
        add(){
            this.$router.push('measureDataAdd')
        },
      handleClick(row) {
        console.log(row);
        this.$router.push('measureDataEdit')
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      searchBtn() {
          
      }
    },
    // computed:{ 
    //     tables:function(){
            
    //     var measureCodeSearch=this.measureCodeSearch;
    //     var codeNameSearch = this.codeNameSearch;
    //     var measureTypeCodeSearch = this.measureTypeCodeSearch;
    //     var markType = this.markType;
    //     console.log(measureCodeSearch,codeNameSearch,measureTypeCodeSearch,markType)
    //     if(measureCodeSearch){
    //       return  this.measureList.filter(function(dataNews){
    //         return Object.keys(dataNews).some(function(key){
    //           if( key==='measureCode') {
    //             return String(dataNews[key]).toLowerCase().indexOf(measureCodeSearch) > -1
    //           }
    //         })
    //       })
    //     }
    //     if(codeNameSearch){
    //       return  this.measureList.filter(function(dataNews){
    //         return Object.keys(dataNews).some(function(key){
    //           if( key==='measureName') {
    //             return String(dataNews[key]).toLowerCase().indexOf(codeNameSearch) > -1
    //           }
    //         })
    //       })
    //     }
    //     if(measureTypeCodeSearch){
    //       return  this.measureList.filter(function(dataNews){
    //         return Object.keys(dataNews).some(function(key){
    //           if( key==='measureTypeName') {
    //             return String(dataNews[key]).toLowerCase().indexOf(measureTypeCodeSearch) > -1
    //           }
    //         })
    //       })
    //     }
    //     if(markType){
    //       return  this.measureList.filter(function(dataNews){
    //         return Object.keys(dataNews).some(function(key){
    //           if( key==='markAble') {
    //             return String(dataNews[key]).toLowerCase().indexOf(markType) > -1
    //           }
    //         })
    //       })
    //     }
    //     return this.measureList
    //   }
    // }
}
</script>
