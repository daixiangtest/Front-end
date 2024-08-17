<template>
    <h1>这是登录页面</h1>
    <!-- <h2>{{ $store.state.name }}</h2> -->
     <h2>{{ $store.state.name }}</h2>
     <div>
        <el-button type="success" @click="reAge">-</el-button>
        <h1>age:{{ age }}</h1>
        <el-button type="success" @click="addAge">+</el-button>
        <el-button type="primary" @click="$store.dispatch('timeAge')">actions按钮</el-button>
        <el-button type="primary" @click="timeAge">actions按钮</el-button>
     </div>
     <div>
        <!-- 调用模块中的属性加上注册模块的名称 -->
        <h2>{{ $store.state.userStore.name }}</h2>
        <h2>{{ $store.state.goodsStore.name }}</h2>
     </div>
     <div>用户名：<el-input v-model="user" style="width: 240px" placeholder="Please input" /></div>
     <div>
       密码： <el-input v-model="pwd" style="width: 240px" type="password" placeholder="Please input password" show-password />
     </div>
     <div><el-button type="primary" plain @click="login">点击登录</el-button></div>
     <div><el-button type="primary" plain @click="login1">点击登录2</el-button></div>
</template>
  
<script>
import { mapState,mapGetters,mapMutations, mapActions } from 'vuex';
import axios from 'axios';
import { ElMessage } from 'element-plus'
export default{
    data(){
        return{
            user:'',
            pwd :''
        }
        
    },
    methods:{
        ...mapMutations(['updateAge']),
        ...mapActions(['timeAge']),
        addAge(){
            // 调用mutations中声明的方法，更改vuex中的数据，必须再mutations中定义方法来更改数据，否则后续vue无法跟踪数据
            this.$store.commit('updateAge',this.age+1)
        },
        reAge(){
            this.updateAge(this.age-1)
        },
        login(){
            var data={
                'user':this.user,
                'passwd':this.pwd,
                
            }
            axios.post('http://127.0.0.1:8000/login/',data).then(
                response =>{
                    const data=response.data
                    if (data.message==="登录成功"){
                        ElMessage({
                        message: '登录成功',
                        type: 'success',
                        })
                        this.$router.push({name:'books'})
                    }else{
                        ElMessage.error('登录失败')
                    }
                    console.log(response)
                }
            ).catch(
                error =>{
                    ElMessage.error('请求失败')
                    console.log(error)
                }
            )
        },
        // 通过async 声明为异步函数
        async login1(){
            let data={'user':this.user,
                'passwd':this.pwd}
                // 通过awit 等待获取请求结果，并赋值给res变量
            let res=await axios.post('http://127.0.0.1:8000/login/',data)
            console.log("结合async获取的respose:",res)
        }

    },
    computed:{
        ...mapState(['name','age']),
        ...mapGetters(['list01']),


    }
}
  
</script>
  