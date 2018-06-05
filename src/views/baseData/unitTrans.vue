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
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">纳米(nm):</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">微米(um):</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">毫米(dm):</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">米(m):</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">里:	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">公里(km):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">海里:	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">寸:	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">尺:	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">丈:	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">英寸(in):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">英尺(ft):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
            </el-tab-pane>
            <el-tab-pane label="重量" name="second">
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">毫克(mg):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">克(g):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">公斤(kg):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">吨(t):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">钱:	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">两:	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">市斤:	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">担:		</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">盎司(oz):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">磅(lb):</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
            </el-tab-pane>
            <el-tab-pane label="面积" name="third">
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">平方公里(km²):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">公顷(ha):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">市亩:	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">平方米(m²):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">平方分米(dm²):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">平方厘米(cm²):</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">平方毫米(mm²):</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">平方英里:	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">英亩:	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">平方竿(sqrd):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
            </el-tab-pane>
            <el-tab-pane label="容量" name="fourth">
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">毫升(ml):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">升(l):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">立方米(m3):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">加仑(英制 bal):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <hr>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                         <el-row>
                            <el-col :span="8">
                                <span style="line-height:32px;font-size:14px;">加仑(美制 gal):	</span>
                            </el-col>
                            <el-col :span="16">
                                <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="6">
                        
                    </el-col>
                </el-row>
                <hr>
                
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    name: 'unitTrans',
    data () {
        return {
            input:'',
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
