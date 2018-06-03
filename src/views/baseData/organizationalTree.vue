<template>
    <div id="organizationalTree">
        <el-container>
            <el-aside width="200px">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" ></el-tree>
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
                    <span style="line-height:32px;font-size:14px;">组织代码：</span>
                    <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
                    <span style="margin-left:40px;line-height:32px;font-size:14px;">组织名称: </span>
                    <el-input v-model="copyName" placeholder="请输入内容" style="width:194px" size="small"></el-input>
                    <br>
                    <br>
                    <span style="line-height:32px;font-size:14px;">组织简称：</span>
                    <el-input v-model="copyCode" placeholder="请输入内容" style="width:194px" size="small"></el-input>
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
            :data="organizationalList"
            border
            style="width: 100%"
            align="left"
            size="mini">
            <el-table-column
            type="selection"
            >
            </el-table-column>
            <el-table-column
            fixed
            prop="orgCode"
            label="组织代码"
            width="150"
            >
            </el-table-column>
            <el-table-column
            prop="orgName"
            label="组织名称"
            width="220"
            >
            </el-table-column>
            <el-table-column
            prop="orgShortName"
            label="组织简称"
            width="150"
            >
            </el-table-column>
            <el-table-column
            prop="orgClassifyName"
            label="分类"
            >
            </el-table-column>
            <el-table-column
            prop="parentOrgName"
            label="上级组织"
            width="220"
            >
            </el-table-column>
            <el-table-column
            prop="orgTypeName"
            label="组织类型"
            >
            </el-table-column>
            <el-table-column
            prop="orgAddress"
            label="组织地址"
            width="200"
            >
            </el-table-column>
            <el-table-column
            prop="personInChargeName"
            label="主要负责人"
            width="140"
            >
            </el-table-column>
            <el-table-column
            prop="orgPhone"
            label="电话"
            width="160"
            >
            </el-table-column>
            <el-table-column
            prop="orgFax"
            label="邮箱"
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
            width="140"
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
            width="140"
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
            </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
    name: 'organizationalTree',
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
            organizationalList: [{
		"createDate": "1495763216000",
		"createDateStr": "2017-05-26 09:46:56",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1064",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "GZDY1006",
		"orgFax": "",
		"orgName": "一车间落料成型工作单元",
		"orgPhone": "13332551255",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "CY001",
		"parentOrgName": "冲压一车间",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495763216000",
		"updateDateStr": "2017-05-26 09:46:56",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495763161000",
		"createDateStr": "2017-05-26 09:46:01",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1063",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "GZDY1005",
		"orgFax": "",
		"orgName": "一车间修边工作单元",
		"orgPhone": "13326991255",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "CY001",
		"parentOrgName": "冲压一车间",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495763161000",
		"updateDateStr": "2017-05-26 09:46:01",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495763099000",
		"createDateStr": "2017-05-26 09:44:59",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1062",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "GZDY1004",
		"orgFax": "",
		"orgName": "一车间切断工作单元",
		"orgPhone": "13302815644",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "CY001",
		"parentOrgName": "冲压一车间",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495763099000",
		"updateDateStr": "2017-05-26 09:44:59",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495763050000",
		"createDateStr": "2017-05-26 09:44:10",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1061",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "GZDY1003",
		"orgFax": "",
		"orgName": "一车间翻边工作单元",
		"orgPhone": "13325664599",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "CY001",
		"parentOrgName": "冲压一车间",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495763050000",
		"updateDateStr": "2017-05-26 09:44:10",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495762995000",
		"createDateStr": "2017-05-26 09:43:15",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1060",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "DYDY001",
		"orgFax": "",
		"orgName": "测试工作单元",
		"orgPhone": "13300000000",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "DY001",
		"parentOrgName": "电泳车间",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495762995000",
		"updateDateStr": "2017-05-26 09:43:15",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495762784000",
		"createDateStr": "2017-05-26 09:39:44",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1059",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "DYDY006",
		"orgFax": "",
		"orgName": "电泳酸洗工作单元",
		"orgPhone": "13326555448",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "DY001",
		"parentOrgName": "电泳车间",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495762784000",
		"updateDateStr": "2017-05-26 09:39:44",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495762737000",
		"createDateStr": "2017-05-26 09:38:57",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1058",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "DYDY005",
		"orgFax": "",
		"orgName": "电泳黑色电泳漆工作单元",
		"orgPhone": "13345562254",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "DY001",
		"parentOrgName": "电泳车间",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495762749000",
		"updateDateStr": "2017-05-26 09:39:09",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495762694000",
		"createDateStr": "2017-05-26 09:38:14",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1057",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "DYDY004",
		"orgFax": "",
		"orgName": "电泳检验工作单元",
		"orgPhone": "13326665444",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "DY001",
		"parentOrgName": "电泳车间",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495762694000",
		"updateDateStr": "2017-05-26 09:38:14",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495762634000",
		"createDateStr": "2017-05-26 09:37:14",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1056",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "DYDY003",
		"orgFax": "",
		"orgName": "电泳半成品入库工作单元",
		"orgPhone": "13389994555",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "DY001",
		"parentOrgName": "电泳车间",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495762634000",
		"updateDateStr": "2017-05-26 09:37:14",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495762308000",
		"createDateStr": "2017-05-26 09:31:48",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1055",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "DYDY002",
		"orgFax": "",
		"orgName": "电泳人工分选工作单元",
		"orgPhone": "13323554811",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "DY001",
		"parentOrgName": "电泳车间",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495762308000",
		"updateDateStr": "2017-05-26 09:31:48",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495762108000",
		"createDateStr": "2017-05-26 09:28:28",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1054",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "DYDY007",
		"orgFax": "",
		"orgName": "电泳包装入库工作单元",
		"orgPhone": "13345660211",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "DY001",
		"parentOrgName": "电泳车间",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495762125000",
		"updateDateStr": "2017-05-26 09:28:45",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495762008000",
		"createDateStr": "2017-05-26 09:26:48",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1053",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "DY001",
		"orgFax": "",
		"orgName": "电泳车间",
		"orgPhone": "13312335699",
		"orgShortName": "",
		"orgType": "JC_ZZLX_CJ",
		"orgTypeName": "车间",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495764350000",
		"updateDateStr": "2017-05-26 10:05:50",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495588658000",
		"createDateStr": "2017-05-24 09:17:38",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1052",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "CY003",
		"orgFax": "",
		"orgName": "冲压三",
		"orgPhone": "13325026809",
		"orgShortName": "冲三",
		"orgType": "JC_ZZLX_CJ",
		"orgTypeName": "车间",
		"parentOrgCode": "49257",
		"parentOrgName": "冲压二车间",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495588658000",
		"updateDateStr": "2017-05-24 09:17:38",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495587170000",
		"createDateStr": "2017-05-24 08:52:50",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1051",
		"markAble": "1",
		"orgAddress": "鑫亚",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "CY002",
		"orgFax": "",
		"orgName": "冲压二单元",
		"orgPhone": "13325026807",
		"orgShortName": "冲二",
		"orgType": "JC_ZZLX_CJ",
		"orgTypeName": "车间",
		"parentOrgCode": "CY001",
		"parentOrgName": "冲压一车间",
		"personInCharge": "PENG035",
		"personInChargeName": "高丽娟",
		"remark": "",
		"updateDate": "1495587170000",
		"updateDateStr": "2017-05-24 08:52:50",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495245386000",
		"createDateStr": "2017-05-20 09:56:26",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1050",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BZGZDY",
		"orgFax": "",
		"orgName": "包装工作单元",
		"orgPhone": "13800138000",
		"orgShortName": "包装工作单元",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BZCJ001",
		"parentOrgName": "包装车间",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495245386000",
		"updateDateStr": "2017-05-20 09:56:26",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495245351000",
		"createDateStr": "2017-05-20 09:55:51",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1049",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BZCJ001",
		"orgFax": "",
		"orgName": "包装车间",
		"orgPhone": "13800138000",
		"orgShortName": "包装车间",
		"orgType": "JC_ZZLX_CJ",
		"orgTypeName": "车间",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495245351000",
		"updateDateStr": "2017-05-20 09:55:51",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495186197000",
		"createDateStr": "2017-05-19 17:29:57",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1048",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "SCXT001",
		"orgFax": "",
		"orgName": "生产车间",
		"orgPhone": "13800138000",
		"orgShortName": "",
		"orgType": "JC_ZZLX_XT",
		"orgTypeName": "生产线体",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495186197000",
		"updateDateStr": "2017-05-19 17:29:57",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495185901000",
		"createDateStr": "2017-05-19 17:25:01",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1047",
		"markAble": "1",
		"orgAddress": "焊接工作单元",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "GZSY3001",
		"orgFax": "",
		"orgName": "焊接工作单元",
		"orgPhone": "13800138000",
		"orgShortName": "焊接工作单元",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "HJ001",
		"parentOrgName": "焊接车间",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495185901000",
		"updateDateStr": "2017-05-19 17:25:01",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495185786000",
		"createDateStr": "2017-05-19 17:23:06",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1046",
		"markAble": "1",
		"orgAddress": "冲孔工作单元",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "GZDY1002",
		"orgFax": "",
		"orgName": "一车间冲孔工作单元",
		"orgPhone": "13800138000",
		"orgShortName": "冲孔工作单元",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "CY001",
		"parentOrgName": "冲压一车间",
		"personInCharge": "PENG015",
		"personInChargeName": "测试组3.0",
		"remark": "",
		"updateDate": "1495185786000",
		"updateDateStr": "2017-05-19 17:23:06",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495185710000",
		"createDateStr": "2017-05-19 17:21:50",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1045",
		"markAble": "1",
		"orgAddress": "冲孔工作单元",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "GZDY2002",
		"orgFax": "",
		"orgName": "二车间冲孔工作单元",
		"orgPhone": "13800138000",
		"orgShortName": "冲孔工作单元",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "49257",
		"parentOrgName": "冲压二车间",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495185710000",
		"updateDateStr": "2017-05-19 17:21:50",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495185637000",
		"createDateStr": "2017-05-19 17:20:37",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1044",
		"markAble": "1",
		"orgAddress": "落料工作单元",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "GZDY2001",
		"orgFax": "",
		"orgName": "二车间落料工作单元",
		"orgPhone": "13800138000",
		"orgShortName": "落料工作单元",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "49257",
		"parentOrgName": "冲压二车间",
		"personInCharge": "PENG022",
		"personInChargeName": "测试组5.1",
		"remark": "",
		"updateDate": "1495185721000",
		"updateDateStr": "2017-05-19 17:22:01",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495185564000",
		"createDateStr": "2017-05-19 17:19:24",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1043",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "GZDY1001",
		"orgFax": "",
		"orgName": "一车间落料工作单元",
		"orgPhone": "13800138000",
		"orgShortName": "落料工作单元",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "CY001",
		"parentOrgName": "冲压一车间",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1495185735000",
		"updateDateStr": "2017-05-19 17:22:15",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495185463000",
		"createDateStr": "2017-05-19 17:17:43",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1042",
		"markAble": "1",
		"orgAddress": "焊接车间",
		"orgClassify": "",
		"orgCode": "HJ001",
		"orgFax": "",
		"orgName": "焊接车间",
		"orgPhone": "13800138000",
		"orgShortName": "焊接车间",
		"orgType": "JC_ZZLX_CJ",
		"orgTypeName": "车间",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": "PENG020",
		"personInChargeName": "测试组3.1",
		"remark": "",
		"updateDate": "1495185463000",
		"updateDateStr": "2017-05-19 17:17:43",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495185335000",
		"createDateStr": "2017-05-19 17:15:35",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1041",
		"markAble": "1",
		"orgAddress": "冲压二车间",
		"orgClassify": "",
		"orgCode": "49257",
		"orgFax": "",
		"orgName": "冲压二车间",
		"orgPhone": "13800138000",
		"orgShortName": "冲压二车间",
		"orgType": "JC_ZZLX_CJ",
		"orgTypeName": "车间",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": "PENG019",
		"personInChargeName": "测试组2.1",
		"remark": "",
		"updateDate": "1495185335000",
		"updateDateStr": "2017-05-19 17:15:35",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1495185299000",
		"createDateStr": "2017-05-19 17:14:59",
		"createUser": "admin",
		"createUserName": "系统管理员",
		"id": "1040",
		"markAble": "1",
		"orgAddress": "冲压一车间",
		"orgClassify": "",
		"orgCode": "CY001",
		"orgFax": "",
		"orgName": "冲压一车间",
		"orgPhone": "13800138000",
		"orgShortName": "冲压一车间",
		"orgType": "JC_ZZLX_CJ",
		"orgTypeName": "车间",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": "PENG018",
		"personInChargeName": "测试组1.1",
		"remark": "",
		"updateDate": "1495185299000",
		"updateDateStr": "2017-05-19 17:14:59",
		"updateUser": "admin",
		"updateUserName": "系统管理员"
	}, {
		"createDate": "1487837020000",
		"createDateStr": "2017-02-23 16:03:40",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"id": "1039",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "",
		"orgCode": "ANFGMB",
		"orgFax": "",
		"orgName": "安装风门盖板2",
		"orgPhone": "0532-6486386",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1487837065000",
		"updateDateStr": "2017-02-23 16:04:25",
		"updateUser": "PENG035",
		"updateUserName": "高丽娟"
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1038",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA28021",
		"orgFax": "",
		"orgName": "上压机后盖",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1037",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA28020",
		"orgFax": "",
		"orgName": "贴覆膜",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1036",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA28015",
		"orgFax": "",
		"orgName": "刷油",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1035",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA28019",
		"orgFax": "",
		"orgName": "放礼品袋",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1034",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA27029",
		"orgFax": "",
		"orgName": "上地线",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1033",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26043",
		"orgFax": "",
		"orgName": "焊接3",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1032",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26042",
		"orgFax": "",
		"orgName": "焊接2",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1031",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26041",
		"orgFax": "",
		"orgName": "焊接1",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1030",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26040",
		"orgFax": "",
		"orgName": "插管2",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1029",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26039",
		"orgFax": "",
		"orgName": "插管1",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1028",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26038",
		"orgFax": "",
		"orgName": "吹氮",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1027",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26034",
		"orgFax": "",
		"orgName": "接线",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1026",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26032",
		"orgFax": "",
		"orgName": "固定水阀",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1025",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26030",
		"orgFax": "",
		"orgName": "充氦",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1024",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26024",
		"orgFax": "",
		"orgName": "上门体穿铰链",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1023",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26018",
		"orgFax": "",
		"orgName": "打胶带",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1022",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26017",
		"orgFax": "",
		"orgName": "放果盒",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1021",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26015",
		"orgFax": "",
		"orgName": "安装玻璃板",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1020",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26009",
		"orgFax": "",
		"orgName": "固定中铰链",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1019",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26014",
		"orgFax": "",
		"orgName": "固定滑道",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1018",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26010",
		"orgFax": "",
		"orgName": "按滑道",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1017",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26007",
		"orgFax": "",
		"orgName": "固定马达",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1016",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26004",
		"orgFax": "",
		"orgName": "安装风机",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1015",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26005",
		"orgFax": "",
		"orgName": "固定蒸发器盖板",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1014",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26003",
		"orgFax": "",
		"orgName": "整管",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"createUser": "PENG035",
		"createUserName": "高丽娟",
		"id": "1013",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA26002",
		"orgFax": "",
		"orgName": "安装风门盖板1",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_DY",
		"orgTypeName": "工作单元",
		"parentOrgCode": "BA",
		"parentOrgName": "B线小微",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1487836965000",
		"updateDateStr": "2017-02-23 16:02:45"
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1012",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "A4",
		"orgFax": "",
		"orgName": "A线前清修",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_XT",
		"orgTypeName": "生产线体",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1011",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "A3",
		"orgFax": "",
		"orgName": "A线发泡压机",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_XT",
		"orgTypeName": "生产线体",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1010",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "A2",
		"orgFax": "",
		"orgName": "预装A线箱体",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_XT",
		"orgTypeName": "生产线体",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1009",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "A1",
		"orgFax": "",
		"orgName": "预装A线内胆",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_XT",
		"orgTypeName": "生产线体",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1008",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "B6",
		"orgFax": "",
		"orgName": "B线前清修",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_XT",
		"orgTypeName": "生产线体",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1007",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "B5",
		"orgFax": "",
		"orgName": "B线小发泡",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_XT",
		"orgTypeName": "生产线体",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1006",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "B4",
		"orgFax": "",
		"orgName": "预装B线小线箱体",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_XT",
		"orgTypeName": "生产线体",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1005",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "B3",
		"orgFax": "",
		"orgName": "预装B线小线内胆",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_XT",
		"orgTypeName": "生产线体",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1004",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "B2",
		"orgFax": "",
		"orgName": "预装B线大线箱体",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_XT",
		"orgTypeName": "生产线体",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1003",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "B1",
		"orgFax": "",
		"orgName": "预装B线大线内胆",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_XT",
		"orgTypeName": "生产线体",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1002",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BA",
		"orgFax": "",
		"orgName": "B线小微",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_XT",
		"orgTypeName": "生产线体",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": ""
	}, {
		"createDate": "1487643735000",
		"createDateStr": "2017-02-21 10:22:15",
		"id": "1001",
		"markAble": "0",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "BB",
		"orgFax": "",
		"orgName": "A线小微",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_XT",
		"orgTypeName": "生产线体",
		"parentOrgCode": "9050",
		"parentOrgName": "浙江长华汽车零配件有限公司",
		"personInCharge": ""
	}, {
		"createDate": "1487643490000",
		"createDateStr": "2017-02-21 10:18:10",
		"createUser": "admin",
		"createUserName": "administrator",
		"id": "1000",
		"markAble": "1",
		"orgAddress": "",
		"orgClassify": "JC_ZZFL_SC",
		"orgClassifyName": "生产组织",
		"orgCode": "9050",
		"orgFax": "",
		"orgName": "浙江长华汽车零配件有限公司",
		"orgPhone": "0532-87654321",
		"orgShortName": "",
		"orgType": "JC_ZZLX_GC",
		"orgTypeName": "工厂",
		"parentOrgCode": "",
		"personInCharge": "",
		"personInChargeName": "",
		"remark": "",
		"updateDate": "1487643490000",
		"updateDateStr": "2017-02-21 10:18:10",
		"updateUser": "admin",
		"updateUserName": "administrator"
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
     #organizationalTree .el-main{
        padding: 0;
    }
    .el-tree-node__label {
        font-size: 12px;
    }
</style>
