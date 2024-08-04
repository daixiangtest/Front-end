import { createStore } from 'vuex'
import modules01 from './modules01'
import modules02 from './modules02'
// vuex 与 sessionStorage 和 localstorage 的 区别
// sessionStorage 是浏览器的全局会话存储，当窗口关闭数据清除
// localstorage 是浏览器的全局本地存储，窗口关闭数据不会被清除
// sessionStorage 和 localstorage 存储数据都是字符串合适，结构体数据需要转化为字符串，再存储，vuex 是vue 提供的全局存储插件，可以直接存储多种类型的数据，且可以对数据进行管理
export default createStore({
  // 全局状态的数据管理
  state: {
    name:'python01',
    age:18,
    list:[10,30,50,80,90,25]
  },
  // vuex的数据管理
  getters: {
    // 定义全局作用的计算属性
    list01(state){
      return state.list.filter(item => item > 40)
    }
  },
  // 修改全局属性的方法
  mutations: {
    updateAge(state,value){
      state.age=value
    },
    add(state){
      state.age++
    }
  },
  // 定义全局的异步函数
  actions: {
    timeAge(context){
      setTimeout(()=>{
        context.commit('add')
      },1000)
    }
  },
  // 将vuex进行模块化分类
  modules: {
      'userStore':modules01,
      'goodsStore':modules02
  }
})
