<template>
    <el-container>
      <el-aside width="200px" style="background: blue;height: 800px;">
        <div><el-button type="success" plain @click="this.$router.push({path:'/index/order'})">订单管理</el-button></div>
        <div><el-button type="success" plain @click="this.$router.push({name:'user'})">用户管理</el-button></div>
      </el-aside>
      <el-main style="background: green;height: 800px;">
        <RouterView></RouterView>

        <!-- <div><ButtonTest></ButtonTest></div> -->
      </el-main>
    </el-container>
</template>
  
<script>
  
</script>