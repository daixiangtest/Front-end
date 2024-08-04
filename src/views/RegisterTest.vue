<template>
    <h1>这是注册页面</h1>
    <el-button type="success" @click="this.$message(this.$store.state.name)">按钮</el-button>
    <h2>通过计算属性引用{{ age }}</h2>
    <h2>{{ name }}</h2>
    <h2>全局计算属性的值{{ $store.getters.list01 }}</h2>
    <h2>通过映射函数来映射返回全局计算属性{{ list01 }}</h2>
  
</template>
  
<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
export default{
    methods:{

    },
    computed:{

        // name(){
        //     return this.$store.state.name
        // } ,
        // age(){
        //     return this.$store.state.age
        // },
        // 该辅助函数的效果等同与上面的代码
        ...mapState(['name','age']),
        // 映射全局计算属性的值到该组件模块
        ...mapGetters(['list01'])

    }
}
  
</script>