<template>
    <div id="unitTrans">
         <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>基础数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>公共数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>单位转换</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
         <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="长度" name="first">
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="6">
                                <span style="line-height:32px;font-size:14px;">纳米(nm):</span>
                            </el-col>
                            <el-col :span="18">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="6">
                                <span style="line-height:32px;font-size:14px;">纳米(nm):</span>
                            </el-col>
                            <el-col :span="18">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="6">
                                <span style="line-height:32px;font-size:14px;">纳米(nm):</span>
                            </el-col>
                            <el-col :span="18">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="6">
                                <span style="line-height:32px;font-size:14px;">纳米(nm):</span>
                            </el-col>
                            <el-col :span="18">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="6">
                                <span style="line-height:32px;font-size:14px;">纳米(nm):</span>
                            </el-col>
                            <el-col :span="18">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="6">
                                <span style="line-height:32px;font-size:14px;">纳米(nm):</span>
                            </el-col>
                            <el-col :span="18">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="6">
                                <span style="line-height:32px;font-size:14px;">纳米(nm):</span>
                            </el-col>
                            <el-col :span="18">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="6">
                                <span style="line-height:32px;font-size:14px;">纳米(nm):</span>
                            </el-col>
                            <el-col :span="18">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="6">
                                <span style="line-height:32px;font-size:14px;">纳米(nm):</span>
                            </el-col>
                            <el-col :span="18">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="6">
                                <span style="line-height:32px;font-size:14px;">纳米(nm):</span>
                            </el-col>
                            <el-col :span="18">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="6">
                                <span style="line-height:32px;font-size:14px;">纳米(nm):</span>
                            </el-col>
                            <el-col :span="18">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="6">
                                <span style="line-height:32px;font-size:14px;">纳米(nm):</span>
                            </el-col>
                            <el-col :span="18">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    name: 'unitTrans',
    data () {
        return {
            activeName2: 'first',
        }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style>
    hr {
        border-color: #F2F6FC !important; 
    }
</style>
