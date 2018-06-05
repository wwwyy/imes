<template>
    <div id="exRateEdit">
         <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>公共数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>汇率维护</el-breadcrumb-item>
            <el-breadcrumb-item>编辑</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <div>
               <el-button type="primary" @click="save" style="width:120px;">保存</el-button>
        <el-button @click="back">返回</el-button>
           </div>
           <hr>
        <el-form label-position="left" label-width="120px" :model="formLabelAlign" style="margin-top:30px">
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="6">
                    <el-form-item label="本币名称：">
                        <el-select v-model="nameType" placeholder="请选择" style="width:100%;">
                            <el-option
                            v-for="item in nameOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="6"></el-col>
                <el-col :span="6">
                    <el-form-item label="本币代码：">
                        <el-input v-model="formLabelAlign.name" disabled style="width:100%;"></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="6">
                    <el-form-item label="原币名称：">
                        <el-select v-model="nameType" placeholder="请选择" style="width:100%;">
                            <el-option
                            v-for="item in nameOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="6"></el-col>
                <el-col :span="6">
                    <el-form-item label="原币代码：">
                        <el-input v-model="oldCode" disabled style="width:100%;"></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="6">
                    <el-form-item label="原币换算单位：">
                        <el-select v-model="exChange" placeholder="请选择" style="width:100%;">
                            <el-option
                            v-for="item in exChangeUnit"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="6"></el-col>
                <el-col :span="6">
                    <el-form-item label="原币折算价：">
                        <el-input v-model="formLabelAlign.name" style="width:100%;"></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="6">
                    <el-form-item label="发布时间：">
                        <el-date-picker
                        style="width:100%;"
                        v-model="value3"
                        type="datetime"
                        placeholder="选择日期时间"
                        default-time="12:00:00">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="6"></el-col>
                <el-col :span="6">
                    <el-form-item label="版本号：">
                        <el-input v-model="v" disabled style="width:100%;"></el-input>
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
  name: "exRateEdit",
  data() {
    return {
        value3:'',
        exChange: '',
        nameType: '',
            markType: '',
            oldCode: 'RMB',
            v: "V1.149",
            exChangeUnit: [
                {
                    value: '1',
                    label: '1'
                }, 
                {
                    value: '100',
                    label: '100'
                }
            ],
        nameOptions: [
                {
                    value: '欧元',
                    label: '欧元'
                }, 
                {
                    value: '人民币',
                    label: '人民币'
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
    back(){
        this.$router.back(-1)
    },
    save(){
        this.$message({
          message: '保存成功',
          type: 'success'
        });
        setTimeout(() => {
           this.$router.back(-1) 
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
