<template>
    <div id="organizationalTreeAdd">
         <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>制造资源管理 </el-breadcrumb-item>
            <el-breadcrumb-item>工作中心维护    </el-breadcrumb-item>
            <el-breadcrumb-item>新增</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div style="text-align:left;">
               <el-button type="primary" @click="save" style="width:120px;">保存</el-button>
        <el-button @click="back">返回</el-button>
           </div>
           <hr>
        <el-form label-position="left" label-width="120px" :model="formLabelAlign" style="margin-top:30px">
            <el-row type="flex" class="row-bg" justify="center">
                 <el-col :span="6">
                    <el-form-item label="工作中心代码：">
                        <el-input v-model="oldCode" style="width:100%;"></el-input>
                        
                    </el-form-item>
                </el-col>
                
                <el-col :span="6"></el-col>
                <el-col :span="6">
                    <el-form-item label="工作中心名称：	">
                        <el-input v-model="oldCode" style="width:100%;"></el-input>
                        
                    </el-form-item>
                </el-col>
                </el-row>
            
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="6">
                        <el-form-item label="可用标识:">
                        <el-select v-model="markType" placeholder="请选择" style="width:100%;">
                            <el-option
                            v-for="item in markOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="6"></el-col>
                <el-col :span="6"></el-col>
                
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="6">
                        <el-form-item label="备注：">
                <el-input type="textarea"></el-input>
            </el-form-item>
                </el-col>
                <el-col :span="6"></el-col>
                <el-col :span="6"></el-col>
                
            </el-row>
            
           
        </el-form>
    </div>
</template>
<script>
export default {
  name: "organizationalTreeAdd",
  data() {
    return {
      value1:'',
      codeType: "",
      exChange: "",
      copy: "",
      markType: "",
      oldCode: "",
      v: "V1.149",
      codeTypeList: [
        {
          value: "WH_AREA(WH_AREA)",
          label: "WH_AREA(WH_AREA)"
        },
        {
          value: "库区(WH_AREA)",
          label: "库区(WH_AREA)"
        },
        {
          value: "操作资质(GY_CZZZ)",
          label: "操作资质(GY_CZZZ)"
        },
        {
          value: "bom物料类型(BOM_MATERIAL_TYPE)",
          label: "bom物料类型(BOM_MATERIAL_TYPE)"
        },
        {
          value: "数据来源(STRUCTURE_SOURCE)",
          label: "数据来源(STRUCTURE_SOURCE)"
        },
        {
          value: "移动原因(MOVE_REASON)",
          label: "移动原因(MOVE_REASON)"
        }
      ],
      markOptions: [
        {
          value: "1",
          label: "启用"
        },
        {
          value: "0",
          label: "停用"
        }
      ],
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    save() {
      this.$message({
        message: "保存成功",
        type: "success"
      });
      setTimeout(() => {
        this.$router.back(-1);
      }, 500);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style>
hr {
  border-color: #f2f6fc !important;
}
#exRateAdd {
  text-align: left;
}
</style>
