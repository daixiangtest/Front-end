<template>
    <h1>动态路径获取页面</h1>
    <h2>这是路径1：{{ $route.params.id }}</h2>
    <h2>这是路径2：{{ $route.params.name }}</h2>
    <h2>这是url 的查询参数：{{ $route.query.key }}</h2>
    <h2>这是路由的原信息：{{ $route.meta }}</h2>

    <div>
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="auto"
            class="demo-ruleForm">
            <el-form-item label="密码" prop="pass">
            <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Confirm" prop="checkPass">
            <el-input
                v-model="ruleForm.checkPass"
                type="password"
                autocomplete="off"/>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
            <el-input v-model.number="ruleForm.age" />
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="chickpass">
                提交
            </el-button>
            <el-button @click="resetForm(ruleFormRef)">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<script>
// 表单校验语法步骤：
// 1. 在el-form 标签中 声明:rules属性，在data中定义rules的校验规则
// 2. 在el-form-item 标签中声明 prop属性声明需要校验的值的规则
// 3.通过:model 与v-model 属性绑定数据，数据对象中的值与对应rules中对应的规则
// 4.<el-form 标签中添加ref 属性，函数中对refs属性的值进行校验处理


export default{
    data(){
        return{
            ruleForm:{
                pass:"",
                checkPass:"",
                age:""
            },
            // 定义表单的校验规则
            rules:{
                pass:[{ required: true,message:'密码不能为空', trigger: 'blur' }],
                checkPass:[{ required: true,message:'密码不能为空', trigger: 'blur' }],
                age:[{ required: true,message:'密码不能为空', trigger: 'blur' }]
            }
        }
        
    },
    methods:{
        // 定义校验函数
        chickpass(){
            // 通过refs或取ref对象中的值与交易规则
            // 通过validate 回调函数来处理逻辑，返回的结果时bool类型
            this.$refs["ruleFormRef"].validate(
                res =>{
                    console.log(res)
                }
            )
        }
        
    }
}
  
</script>