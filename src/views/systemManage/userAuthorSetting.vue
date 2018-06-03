<template>
    <div id="userAuthorSetting">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>系统管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户权限设置</el-breadcrumb-item>
            <el-breadcrumb-item>用户认证设置</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left">
            <el-button size="small" icon="el-icon-plus" style="width:100px"> 新 增 </el-button>
            <el-button size="small" icon="el-icon-upload2" style="width:100px"> 删 除 </el-button>
             <el-button size="small" type="primary" style="width:100px"> 密码初始 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 岗位分配 </el-button>
            <el-button size="small" icon="el-icon-download" style="width:100px"> 权限分配 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 解锁 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
            <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
        </div>
        <div style="text-align:left;margin:20px 0;">
             <span style="display:inline-block;width:70px;line-height:32px;font-size:14px;">员工代码：		</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
           
            
             <span style="display:inline-block;width:70px;margin-left:40px;line-height:32px;font-size:14px;">角色：	</span>
             <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
              <span style="display:inline-block;width:70px;margin-left:40px;line-height:32px;font-size:14px;">状态：	</span>
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
             <span style="display:inline-block;width:70px;line-height:32px;font-size:14px;">员工名称：		</span>
            <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
              <span style="display:inline-block;width:70px;margin-left:40px;line-height:32px;font-size:14px;">所属组织：		</span>
             <el-select v-model="copyType" placeholder="请选择" size="small" style="width:194px">
                <el-option
                v-for="item in copyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
              <span style="display:inline-block;width:70px;margin-left:40px;line-height:32px;font-size:14px;">可用标识：</span>
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
    :data="userAuthorSettingList"
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
      label="员工代码"
     >
    </el-table-column>
    <el-table-column
      prop="personName"
      label="员工名称"
     >
    </el-table-column>
    <el-table-column
      prop="personSex"
      label="性别"
     >
    </el-table-column>
    <el-table-column
      prop="organizationName"
      label="所属组织"
     >
    </el-table-column>
    <el-table-column
      prop="roleNames"
      label="角色"
     >
    </el-table-column>
    <el-table-column
      prop="telephone"
      label="手机号码"
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
    name: 'userAuthorSetting',
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
            userAuthorSettingList: [{
		"account": "PENG035",
		"createDate": "1487830584000",
		"createDateStr": "2017-02-23 14:16:24",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1021",
		"isLock": "false",
		"markAble": "1",
		"organizationName": "A线小微",
		"personCode": "PENG035",
		"personName": "高丽娟",
		"personSex": "女",
		"roleCodes": "shengchan",
		"roleNames": "生产",
		"telephone": "",
		"updateDate": "1487830584000",
		"updateDateStr": "2017-02-23 14:16:24",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"account": "PENG022",
		"createDate": "1487658540000",
		"createDateStr": "2017-02-21 14:29:00",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1019",
		"isLock": "false",
		"markAble": "1",
		"organizationName": "上压机后盖",
		"personCode": "PENG013",
		"personName": "测试组1.0",
		"personSex": "男",
		"roleCodes": "admin",
		"roleNames": "管理员",
		"telephone": "",
		"updateDate": "1487658540000",
		"updateDateStr": "2017-02-21 14:29:00",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"account": "PENG021",
		"createDate": "1487658540000",
		"createDateStr": "2017-02-21 14:29:00",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1018",
		"isLock": "false",
		"markAble": "1",
		"organizationName": "上压机后盖",
		"personCode": "PENG013",
		"personName": "测试组1.0",
		"personSex": "男",
		"roleCodes": "admin",
		"roleNames": "管理员",
		"telephone": "",
		"updateDate": "1487658540000",
		"updateDateStr": "2017-02-21 14:29:00",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"account": "PENG020",
		"createDate": "1487658540000",
		"createDateStr": "2017-02-21 14:29:00",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1017",
		"isLock": "false",
		"markAble": "1",
		"organizationName": "上压机后盖",
		"personCode": "PENG013",
		"personName": "测试组1.0",
		"personSex": "男",
		"roleCodes": "admin",
		"roleNames": "管理员",
		"telephone": "",
		"updateDate": "1487658540000",
		"updateDateStr": "2017-02-21 14:29:00",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"account": "PENG019",
		"createDate": "1487658540000",
		"createDateStr": "2017-02-21 14:29:00",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1016",
		"isLock": "false",
		"markAble": "1",
		"organizationName": "上压机后盖",
		"personCode": "PENG013",
		"personName": "测试组1.0",
		"personSex": "男",
		"roleCodes": "admin",
		"roleNames": "管理员",
		"telephone": "",
		"updateDate": "1487658540000",
		"updateDateStr": "2017-02-21 14:29:00",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"account": "PENG018",
		"createDate": "1487658540000",
		"createDateStr": "2017-02-21 14:29:00",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1015",
		"isLock": "false",
		"markAble": "1",
		"organizationName": "上压机后盖",
		"personCode": "PENG013",
		"personName": "测试组1.0",
		"personSex": "男",
		"roleCodes": "admin",
		"roleNames": "管理员",
		"telephone": "",
		"updateDate": "1487658540000",
		"updateDateStr": "2017-02-21 14:29:00",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"account": "PENG017",
		"createDate": "1487658540000",
		"createDateStr": "2017-02-21 14:29:00",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1014",
		"isLock": "false",
		"markAble": "1",
		"organizationName": "上压机后盖",
		"personCode": "PENG013",
		"personName": "测试组1.0",
		"personSex": "男",
		"roleCodes": "admin",
		"roleNames": "管理员",
		"telephone": "",
		"updateDate": "1487658540000",
		"updateDateStr": "2017-02-21 14:29:00",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"account": "PENG016",
		"createDate": "1487658540000",
		"createDateStr": "2017-02-21 14:29:00",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1013",
		"isLock": "false",
		"markAble": "1",
		"organizationName": "上压机后盖",
		"personCode": "PENG013",
		"personName": "测试组1.0",
		"personSex": "男",
		"roleCodes": "admin",
		"roleNames": "管理员",
		"telephone": "",
		"updateDate": "1487658540000",
		"updateDateStr": "2017-02-21 14:29:00",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"account": "PENG015",
		"createDate": "1487658540000",
		"createDateStr": "2017-02-21 14:29:00",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1012",
		"isLock": "false",
		"markAble": "1",
		"organizationName": "上压机后盖",
		"personCode": "PENG013",
		"personName": "测试组1.0",
		"personSex": "男",
		"roleCodes": "admin",
		"roleNames": "管理员",
		"telephone": "",
		"updateDate": "1487658540000",
		"updateDateStr": "2017-02-21 14:29:00",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"account": "PENG014",
		"createDate": "1487658540000",
		"createDateStr": "2017-02-21 14:29:00",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1011",
		"isLock": "false",
		"markAble": "1",
		"organizationName": "上压机后盖",
		"personCode": "PENG013",
		"personName": "测试组1.0",
		"personSex": "男",
		"roleCodes": "admin",
		"roleNames": "管理员",
		"telephone": "",
		"updateDate": "1487658540000",
		"updateDateStr": "2017-02-21 14:29:00",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"account": "PENG013",
		"createDate": "1487658540000",
		"createDateStr": "2017-02-21 14:29:00",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1010",
		"isLock": "false",
		"markAble": "1",
		"organizationName": "上压机后盖",
		"personCode": "PENG013",
		"personName": "测试组1.0",
		"personSex": "男",
		"roleCodes": "admin",
		"roleNames": "管理员",
		"telephone": "",
		"updateDate": "1487658540000",
		"updateDateStr": "2017-02-21 14:29:00",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"account": "PENG028",
		"createDate": "1487654907000",
		"createDateStr": "2017-02-21 13:28:27",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1002",
		"isLock": "false",
		"markAble": "1",
		"organizationName": "上压机后盖",
		"personCode": "PENG028",
		"personName": "测试01",
		"personSex": "男",
		"roleCodes": "role_02",
		"roleNames": "领导角色",
		"telephone": "",
		"updateDate": "1487654907000",
		"updateDateStr": "2017-02-21 13:28:27",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"account": "PENG026",
		"createDate": "1487654630000",
		"createDateStr": "2017-02-21 13:23:50",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1001",
		"isLock": "false",
		"markAble": "1",
		"organizationName": "上压机后盖",
		"personCode": "PENG026",
		"personName": "张三",
		"personSex": "男",
		"roleCodes": "role_02",
		"roleNames": "领导角色",
		"telephone": "",
		"updateDate": "1487654630000",
		"updateDateStr": "2017-02-21 13:23:50",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"account": "PENG027",
		"createDate": "1487654616000",
		"createDateStr": "2017-02-21 13:23:36",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1000",
		"isLock": "false",
		"markAble": "1",
		"organizationName": "上压机后盖",
		"personCode": "PENG027",
		"personName": "李四",
		"personSex": "男",
		"roleCodes": "role_01",
		"roleNames": "员工角色",
		"telephone": "",
		"updateDate": "1487654616000",
		"updateDateStr": "2017-02-21 13:23:36",
		"updateUser": "admin",
		"updateUserName": "administrator"
	}, {
		"account": "admin",
		"createDate": "1487037600000",
		"createDateStr": "2017-02-14 10:00:00",
		"createUser": "Import",
		"createUserName": "Import",
		"id": "1",
		"isLock": "false",
		"markAble": "1",
		"organizationName": "浙江长华汽车零配件有限公司",
		"personCode": "admin",
		"personName": "系统管理员",
		"personSex": "男",
		"roleCodes": "admin",
		"roleNames": "管理员",
		"telephone": "",
		"updateDate": "1487037600000",
		"updateDateStr": "2017-02-14 10:00:00",
		"updateUser": "Import",
		"updateUserName": "Import"
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
