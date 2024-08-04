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
</template>
  
<script>
import { mapState,mapGetters,mapMutations, mapActions } from 'vuex';
export default{
    methods:{
        ...mapMutations(['updateAge']),
        ...mapActions(['timeAge']),
        addAge(){
            // 调用mutations中声明的方法，更改vuex中的数据，必须再mutations中定义方法来更改数据，否则后续vue无法跟踪数据
            this.$store.commit('updateAge',this.age+1)
        },
        reAge(){
            this.updateAge(this.age-1)
        }

    },
    computed:{
        ...mapState(['name','age']),
        ...mapGetters(['list01']),


    }
}
  
</script>
  