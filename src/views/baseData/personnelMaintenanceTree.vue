<template>
    <div id="personnelMaintenanceTree">
        <el-container>
            <el-aside width="200px">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </el-aside>
            <el-main>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
                    <el-breadcrumb-item>制造资源管理</el-breadcrumb-item>
                    <el-breadcrumb-item>组织结构维护</el-breadcrumb-item>
                </el-breadcrumb>
                <hr>
                <div style="text-align:left">
                    <el-button size="small" icon="el-icon-plus" style="width:100px"> 新 增 </el-button>
                    <el-button size="small" icon="el-icon-upload2" style="width:100px"> 导 入  </el-button>
                    <el-button size="small" icon="el-icon-download" style="width:100px"> 导 出 </el-button>
                    <el-button size="small" type="primary" style="width:100px"> 查 询 </el-button>
                    <el-button size="small" type="primary" style="width:100px"> 清 空 </el-button>
                </div>
                <div style="text-align:left;margin:20px 0;">
                    <span style="line-height:32px;font-size:14px;">员工代码：</span>
                    <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
                <span style="margin-left:40px;line-height:32px;font-size:14px;">班组：</span>
                    <el-select v-model="markType" placeholder="请选择" size="small">
                        <el-option
                        v-for="item in markOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <span style="display:inline-block;margin-left:40px;line-height:32px;font-size:14px;width:70px;">岗位：</span>
                    <el-select v-model="markType" placeholder="请选择" size="small">
                        <el-option
                        v-for="item in markOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <br>
                    <br>
                    <span style="line-height:32px;font-size:14px;">员工名称：</span>
                    <el-input v-model="copyName" placeholder="请输入内容" style="width:194px" size="small"></el-input>
                    <span style="margin-left:40px;line-height:32px;font-size:14px;">状态：</span>
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
            :data="dataList"
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
            fixed
            prop="userName"
            label="员工名称"
            width="100"
            >
            </el-table-column>
            <el-table-column
            prop="workTypeName"
            label="工种"
            width="180"
            >
            </el-table-column>
            <el-table-column
            prop="organizationName"
            label="所属组织"
            width="220"
            >
            </el-table-column>
            <el-table-column
            prop="postName"
            label="岗位"
            >
            </el-table-column>
            <el-table-column
            prop="educationName"
            label="学历"
            >
            </el-table-column>
              <el-table-column
            prop="banGroupName"
            label="班组"
            >
            </el-table-column>
              <el-table-column
            prop="sexName"
            label="性别"
            >
            </el-table-column>

              <el-table-column
            prop="brithdayStr"
            label="出生日期"
            width="150"
            >
            </el-table-column>
              <el-table-column
            prop="entryDateStr"
            label="入职日期"
            width="150"
            >
            </el-table-column>
              <el-table-column
            prop="separationDateStr"
            label="离职日期"
            width="150"
            >
            </el-table-column>
              <el-table-column
            prop="telephone"
            label="联系电话"
            width="150"
            >
            </el-table-column>
              <el-table-column
            prop="email"
            label="联系邮箱"
            width="150"
            >
            </el-table-column>
              <el-table-column
            prop="userStatusName"
            label="状态	"
            >
            </el-table-column>
              <el-table-column
            prop="markAbleName"
            label="可用标识	"
            >
            </el-table-column>
              <el-table-column
            prop="createUserName"
            label="创建人	"
            width="150"
            >
            </el-table-column>
              <el-table-column
            prop="createDateStr"
            label="创建时间	"
            width="160"
            >
            </el-table-column>
              <el-table-column
            prop="updateUserName"
            label="最后更新人	"
            width="150"
            >
            </el-table-column>
            <el-table-column
            prop="updateDateStr"
            label="最后更新时间	"
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
            </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
    name: 'personnelMaintenanceTree',
    data () {
        return {
            data: [{
	"children": [{
		"children": [{
			"id": "GZDY1001",
			"label": "一车间落料工作单元"
		}, {
			"id": "GZDY1002",
			"label": "一车间冲孔工作单元"
		}, {
			"id": "CY002",
			"label": "冲压二单元"
		}, {
			"id": "GZDY1003",
			"label": "一车间翻边工作单元"
		}, {
			"id": "GZDY1004",
			"label": "一车间切断工作单元"
		}, {
			"id": "GZDY1005",
			"label": "一车间修边工作单元"
		}, {
			"id": "GZDY1006",
			"label": "一车间落料成型工作单元"
		}],
		"id": "CY001",
		"label": "冲压一车间"
	}, {
		"children": [{
			"id": "GZDY2001",
			"label": "二车间落料工作单元"
		}, {
			"id": "GZDY2002",
			"label": "二车间冲孔工作单元"
		}, {
			"id": "CY003",
			"label": "冲压三"
		}],
		"id": "49257",
		"label": "冲压二车间"
	}, {
		"children": [{
			"id": "GZSY3001",
			"label": "焊接工作单元"
		}],
		"id": "HJ001",
		"label": "焊接车间"
	}, {
		"id": "SCXT001",
		"label": "生产车间"
	}, {
		"children": [{
			"id": "BZGZDY",
			"label": "包装工作单元"
		}],
		"id": "BZCJ001",
		"label": "包装车间"
	}, {
		"children": [{
			"id": "DYDY007",
			"label": "电泳包装入库工作单元"
		}, {
			"id": "DYDY002",
			"label": "电泳人工分选工作单元"
		}, {
			"id": "DYDY003",
			"label": "电泳半成品入库工作单元"
		}, {
			"id": "DYDY004",
			"label": "电泳检验工作单元"
		}, {
			"id": "DYDY005",
			"label": "电泳黑色电泳漆工作单元"
		}, {
			"id": "DYDY006",
			"label": "电泳酸洗工作单元"
		}, {
			"id": "DYDY001",
			"label": "测试工作单元"
		}],
		"id": "DY001",
		"label": "电泳车间"
	}],
	"id": "9050",
	"label": "浙江长华汽车零配件有限公司"
}],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
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
            dataList: [{
		"banGroup": "jia",
		"banGroupName": "甲",
		"brithday": "1497283200000",
		"brithdayStr": "2017-06-13",
		"createDate": 1497332746000,
		"createDateStr": "2017-06-13 13:45:46",
		"createUserName": "系统管理员",
		"education": "benke",
		"educationName": "本科",
		"email": "xiami@163.com",
		"entryDate": "1497456000000",
		"entryDateStr": "2017-06-15",
		"id": "1021",
		"markAble": "1",
		"markAbleName": "启用",
		"organization": "BB",
		"organizationName": "A线小微",
		"personCode": "PENG052",
		"post": "ShengChan",
		"postName": "生产",
		"remark": "",
		"separationDate": "1498060800000",
		"separationDateStr": "2017-06-22",
		"sex": "1",
		"sexName": "男",
		"telephone": "13260001589",
		"updateDate": 1501554304000,
		"updateDateStr": "2017-08-01 10:25:04",
		"updateUserName": "PENG019",
		"userName": "李飞",
		"userStatus": "wstatus1",
		"userStatusName": "在职",
		"workType": "BANJIN-PENFENGONG-BANYUNGONG",
		"workTypeName": "钣金工- 搬运工- 喷粉工"
	}, {
		"banGroup": "jia",
		"banGroupName": "甲",
		"createDate": 1487820454000,
		"createDateStr": "2017-02-23 11:27:34",
		"createUserName": "系统管理员",
		"education": "benke",
		"educationName": "本科",
		"email": "",
		"entryDate": "1469980800000",
		"entryDateStr": "2016-08-01",
		"id": "1020",
		"markAble": "1",
		"markAbleName": "启用",
		"organization": "BB",
		"organizationName": "A线小微",
		"personCode": "PENG035",
		"post": "ShengChan",
		"postName": "生产",
		"remark": "",
		"sex": "0",
		"sexName": "女",
		"telephone": "",
		"updateDate": 1487906848000,
		"updateDateStr": "2017-02-24 11:27:28",
		"updateUserName": "高丽娟",
		"userName": "高丽娟",
		"userStatus": "wstatus1",
		"userStatusName": "在职",
		"workType": "",
		"workTypeName": ""
	}, {
		"banGroup": "",
		"createDate": 1486358048000,
		"createDateStr": "2017-02-06 13:14:08",
		"createUserName": "测试01",
		"education": "benke",
		"educationName": "本科",
		"email": "",
		"entryDate": "1478880000000",
		"entryDateStr": "2016-11-12",
		"id": "1019",
		"markAble": "1",
		"markAbleName": "启用",
		"organization": "BA28021",
		"organizationName": "上压机后盖",
		"personCode": "PENG017",
		"post": "BANJINGONG",
		"postName": "项目管理",
		"remark": "",
		"sex": "1",
		"sexName": "男",
		"telephone": "",
		"updateDate": 1487826751000,
		"updateDateStr": "2017-02-23 13:12:31",
		"updateUserName": "系统管理员",
		"userName": "测试组5",
		"userStatus": "wstatus1",
		"userStatusName": "在职",
		"workType": "PENFENGONG-BANYUNGONG",
		"workTypeName": "搬运工- 喷粉工"
	}, {
		"banGroup": "",
		"createDate": 1486358048000,
		"createDateStr": "2017-02-06 13:14:08",
		"createUserName": "测试01",
		"education": "benke",
		"educationName": "本科",
		"email": "",
		"entryDate": "1478793600000",
		"entryDateStr": "2016-11-11",
		"id": "1018",
		"markAble": "1",
		"markAbleName": "启用",
		"organization": "BA28021",
		"organizationName": "上压机后盖",
		"personCode": "PENG016",
		"remark": "",
		"sex": "1",
		"sexName": "男",
		"telephone": "",
		"updateDate": 1486358048000,
		"updateDateStr": "2017-02-06 13:14:08",
		"updateUserName": "测试01",
		"userName": "测试组4.0",
		"userStatus": "wstatus1",
		"userStatusName": "在职",
		"workType": "",
		"workTypeName": ""
	}, {
		"banGroup": "",
		"createDate": 1486358048000,
		"createDateStr": "2017-02-06 13:14:08",
		"createUserName": "测试01",
		"education": "benke",
		"educationName": "本科",
		"email": "",
		"entryDate": "1478707200000",
		"entryDateStr": "2016-11-10",
		"id": "1017",
		"markAble": "1",
		"markAbleName": "启用",
		"organization": "BA28021",
		"organizationName": "上压机后盖",
		"personCode": "PENG015",
		"remark": "",
		"sex": "1",
		"sexName": "男",
		"telephone": "",
		"updateDate": 1486358048000,
		"updateDateStr": "2017-02-06 13:14:08",
		"updateUserName": "测试01",
		"userName": "测试组3.0",
		"userStatus": "wstatus1",
		"userStatusName": "在职",
		"workType": "",
		"workTypeName": ""
	}, {
		"banGroup": "",
		"createDate": 1486357649000,
		"createDateStr": "2017-02-06 13:07:29",
		"createUserName": "测试01",
		"education": "benke",
		"educationName": "本科",
		"email": "",
		"entryDate": "1478707200000",
		"entryDateStr": "2016-11-10",
		"id": "1016",
		"markAble": "1",
		"markAbleName": "启用",
		"organization": "BA28021",
		"organizationName": "上压机后盖",
		"personCode": "PENG014",
		"remark": "",
		"sex": "1",
		"sexName": "男",
		"telephone": "",
		"updateDate": 1486357715000,
		"updateDateStr": "2017-02-06 13:08:35",
		"updateUserName": "测试01",
		"userName": "测试组2.0",
		"userStatus": "wstatus1",
		"userStatusName": "在职",
		"workType": "",
		"workTypeName": ""
	}, {
		"banGroup": "",
		"createDate": 1486357581000,
		"createDateStr": "2017-02-06 13:06:21",
		"createUserName": "测试01",
		"education": "benke",
		"educationName": "本科",
		"email": "",
		"entryDate": "1478707200000",
		"entryDateStr": "2016-11-10",
		"id": "1015",
		"markAble": "1",
		"markAbleName": "启用",
		"organization": "BA28021",
		"organizationName": "上压机后盖",
		"personCode": "PENG013",
		"remark": "",
		"sex": "1",
		"sexName": "男",
		"telephone": "",
		"updateDate": 1486357742000,
		"updateDateStr": "2017-02-06 13:09:02",
		"updateUserName": "测试01",
		"userName": "测试组1.0",
		"userStatus": "wstatus1",
		"userStatusName": "在职",
		"workType": "",
		"workTypeName": ""
	}, {
		"banGroup": "",
		"createDate": 1486358048000,
		"createDateStr": "2017-02-06 13:14:08",
		"createUserName": "测试01",
		"education": "benke",
		"educationName": "本科",
		"email": "",
		"entryDate": "1478880000000",
		"entryDateStr": "2016-11-12",
		"id": "1014",
		"markAble": "1",
		"markAbleName": "启用",
		"organization": "BA28021",
		"organizationName": "上压机后盖",
		"personCode": "PENG022",
		"remark": "",
		"sex": "1",
		"sexName": "男",
		"telephone": "",
		"updateDate": 1486447459000,
		"updateDateStr": "2017-02-07 14:04:19",
		"updateUserName": "测试01",
		"userName": "测试组5.1",
		"userStatus": "wstatus1",
		"userStatusName": "在职",
		"workType": "",
		"workTypeName": ""
	}, {
		"banGroup": "",
		"createDate": 1486358048000,
		"createDateStr": "2017-02-06 13:14:08",
		"createUserName": "测试01",
		"education": "benke",
		"educationName": "本科",
		"email": "",
		"entryDate": "1478793600000",
		"entryDateStr": "2016-11-11",
		"id": "1013",
		"markAble": "1",
		"markAbleName": "启用",
		"organization": "BA28021",
		"organizationName": "上压机后盖",
		"personCode": "PENG021",
		"remark": "",
		"sex": "1",
		"sexName": "男",
		"telephone": "",
		"updateDate": 1486358048000,
		"updateDateStr": "2017-02-06 13:14:08",
		"updateUserName": "测试01",
		"userName": "测试组4.1",
		"userStatus": "wstatus1",
		"userStatusName": "在职",
		"workType": "",
		"workTypeName": ""
	}, {
		"banGroup": "",
		"createDate": 1486358048000,
		"createDateStr": "2017-02-06 13:14:08",
		"createUserName": "测试01",
		"education": "benke",
		"educationName": "本科",
		"email": "",
		"entryDate": "1478707200000",
		"entryDateStr": "2016-11-10",
		"id": "1012",
		"markAble": "1",
		"markAbleName": "启用",
		"organization": "BA28021",
		"organizationName": "上压机后盖",
		"personCode": "PENG020",
		"remark": "",
		"sex": "1",
		"sexName": "男",
		"telephone": "",
		"updateDate": 1486358048000,
		"updateDateStr": "2017-02-06 13:14:08",
		"updateUserName": "测试01",
		"userName": "测试组3.1",
		"userStatus": "wstatus1",
		"userStatusName": "在职",
		"workType": "",
		"workTypeName": ""
	}, {
		"banGroup": "",
		"createDate": 1486357649000,
		"createDateStr": "2017-02-06 13:07:29",
		"createUserName": "测试01",
		"education": "benke",
		"educationName": "本科",
		"email": "",
		"entryDate": "1478707200000",
		"entryDateStr": "2016-11-10",
		"id": "1011",
		"markAble": "1",
		"markAbleName": "启用",
		"organization": "GZDY1002",
		"organizationName": "一车间冲孔工作单元",
		"personCode": "PENG019",
		"post": "",
		"remark": "",
		"sex": "1",
		"sexName": "男",
		"telephone": "",
		"updateDate": 1495768722000,
		"updateDateStr": "2017-05-26 11:18:42",
		"updateUserName": "系统管理员",
		"userName": "测试组2",
		"userStatus": "wstatus1",
		"userStatusName": "在职",
		"workType": "",
		"workTypeName": ""
	}, {
		"banGroup": "",
		"createDate": 1486357581000,
		"createDateStr": "2017-02-06 13:06:21",
		"createUserName": "测试01",
		"education": "benke",
		"educationName": "本科",
		"email": "",
		"entryDate": "1478707200000",
		"entryDateStr": "2016-11-10",
		"id": "1010",
		"markAble": "1",
		"markAbleName": "启用",
		"organization": "GZDY1001",
		"organizationName": "一车间落料工作单元",
		"personCode": "PENG018",
		"post": "ShengChan",
		"postName": "生产",
		"remark": "",
		"sex": "1",
		"sexName": "男",
		"telephone": "",
		"updateDate": 1495769154000,
		"updateDateStr": "2017-05-26 11:25:54",
		"updateUserName": "系统管理员",
		"userName": "测试组1",
		"userStatus": "wstatus1",
		"userStatusName": "在职",
		"workType": "",
		"workTypeName": ""
	}, {
		"banGroup": "",
		"createDate": 1487657661000,
		"createDateStr": "2017-02-21 14:14:21",
		"createUserName": "测试01",
		"education": "benke",
		"educationName": "本科",
		"email": "",
		"entryDate": "1487001600000",
		"entryDateStr": "2017-02-14",
		"id": "1003",
		"markAble": "1",
		"markAbleName": "启用",
		"organization": "9050",
		"organizationName": "浙江长华汽车零配件有限公司",
		"personCode": "PENG030",
		"remark": "",
		"sex": "1",
		"sexName": "男",
		"telephone": "",
		"updateDate": 1487657873000,
		"updateDateStr": "2017-02-21 14:17:53",
		"updateUserName": "administrator",
		"userName": "测试02",
		"userStatus": "wstatus1",
		"userStatusName": "在职",
		"workType": "",
		"workTypeName": ""
	}, {
		"banGroup": "yi",
		"banGroupName": "乙",
		"createDate": 1487654886000,
		"createDateStr": "2017-02-21 13:28:06",
		"createUserName": "administrator",
		"education": "benke",
		"educationName": "本科",
		"email": "",
		"entryDate": "1486656000000",
		"entryDateStr": "2017-02-10",
		"id": "1002",
		"markAble": "1",
		"markAbleName": "启用",
		"organization": "BA28021",
		"organizationName": "上压机后盖",
		"personCode": "PENG028",
		"remark": "",
		"sex": "1",
		"sexName": "男",
		"telephone": "",
		"updateDate": 1487654886000,
		"updateDateStr": "2017-02-21 13:28:06",
		"updateUserName": "administrator",
		"userName": "测试01",
		"userStatus": "wstatus1",
		"userStatusName": "在职",
		"workType": "",
		"workTypeName": ""
	}, {
		"banGroup": "",
		"createDate": 1487654534000,
		"createDateStr": "2017-02-21 13:22:14",
		"createUserName": "administrator",
		"education": "benke",
		"educationName": "本科",
		"email": "",
		"entryDate": "1485878400000",
		"entryDateStr": "2017-02-01",
		"id": "1001",
		"markAble": "1",
		"markAbleName": "启用",
		"organization": "BA28021",
		"organizationName": "上压机后盖",
		"personCode": "PENG027",
		"remark": "",
		"sex": "1",
		"sexName": "男",
		"telephone": "",
		"updateDate": 1487654534000,
		"updateDateStr": "2017-02-21 13:22:14",
		"updateUserName": "administrator",
		"userName": "李四",
		"userStatus": "wstatus1",
		"userStatusName": "在职",
		"workType": "",
		"workTypeName": ""
	}, {
		"banGroup": "",
		"createDate": 1487654518000,
		"createDateStr": "2017-02-21 13:21:58",
		"createUserName": "administrator",
		"education": "benke",
		"educationName": "本科",
		"email": "",
		"entryDate": "1486396800000",
		"entryDateStr": "2017-02-07",
		"id": "1000",
		"markAble": "1",
		"markAbleName": "启用",
		"organization": "BA28021",
		"organizationName": "上压机后盖",
		"personCode": "PENG026",
		"remark": "",
		"sex": "1",
		"sexName": "男",
		"telephone": "",
		"updateDate": 1487654518000,
		"updateDateStr": "2017-02-21 13:21:58",
		"updateUserName": "administrator",
		"userName": "张三",
		"userStatus": "wstatus1",
		"userStatusName": "在职",
		"workType": "",
		"workTypeName": ""
	}, {
		"banGroup": "",
		"createDate": 1487037600000,
		"createDateStr": "2017-02-14 10:00:00",
		"createUserName": "Import",
		"education": "benke",
		"educationName": "本科",
		"email": "",
		"entryDate": "915120000000",
		"entryDateStr": "1999-01-01",
		"id": "1",
		"markAble": "1",
		"markAbleName": "启用",
		"organization": "9050",
		"organizationName": "浙江长华汽车零配件有限公司",
		"personCode": "admin",
		"remark": "",
		"sex": "1",
		"sexName": "男",
		"telephone": "",
		"updateDate": 1487816544000,
		"updateDateStr": "2017-02-23 10:22:24",
		"updateUserName": "administrator",
		"userName": "系统管理员",
		"userStatus": "wstatus1",
		"userStatusName": "在职",
		"workType": "",
		"workTypeName": ""
	}],
        currentPage: 1
        }
    },
    methods: {
        handleNodeClick(data) {
        console.log(data);
      },
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
<style>
    #personnelMaintenanceTree .el-main{
        padding: 0;
    }
    .el-tree-node__label {
        font-size: 12px;
    }
</style>
