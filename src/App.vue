<template>
  
  
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" style="background: blue;height: 800px;">
        <!-- 通过 RouterLink 指定跳转的路径-->
        <!-- <div><el-button plain><RouterLink to="/login">登录</RouterLink></el-button></div> -->
        <div><el-button plain><RouterLink :to="{name:'login'}">登录</RouterLink></el-button></div>
        <!-- <div><el-button type="primary" plain @click="toRegister">注册</el-button></div> -->
         <!-- 通过js 更改路由的路径 -->
        <div><el-button type="primary" plain @click="this.$router.push({name:'register'})">注册</el-button></div>
        <div><el-button type="success" plain @click="this.$router.push({path:'/'})">首页</el-button></div>
        <div><el-button type="success" plain @click="this.$router.push({name:'about'})">重定向</el-button></div>
        <div><el-button type="success" plain @click="this.$router.push({name:'params',params:{id:100,name:'dx'},query:{key:'你好'}})">参数传递</el-button></div>
      </el-aside>
      <el-main style="background: green;height: 800px;">
        <RouterView></RouterView>

        <!-- <div><ButtonTest></ButtonTest></div> -->
      </el-main>
    </el-container>
  </div>
  <!-- 应用路由组件来进行展示 -->
  <!-- <RouterView></RouterView> -->
</template>

<script>
// import ButtonTest from "./components/ButtonTest.vue"
export default{
  // components:{
  //   ButtonTest
  // },
  methods:{
    toRegister(){
      this.$router.push({path:'/register'})
    }
  }
}

</script>
<style lang="scss">


</style>
