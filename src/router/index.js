// 引入路由组件
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// 注册路由指定路径和对应的组件

// router 与route 的区别
// router 是路由的配置对象 route 
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // 路由重定向
    redirect:'/'
    
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../views/LoginTest.vue')
  },
  {
    path:'/register',
    name:'register',
    component: () => import('../views/RegisterTest.vue')
  },
  {
    path:'/index',
    name:'index',
    component: () => import('../views/IndexTest.vue'),
    // 注册该路由下的子路由
    children:[
      {
        path:'/order',
        name:'order',
        component:() => import('../views/IndexOrder.vue')
      },
      {
        path:'/user',
        name:'user',
        component: () => import('../views/IndexUser.vue')
      }
    ]
  },
  {
    // 动态参数可以通过 ：申明一个变量名来通过 $route.params.变量名来获取值，查询参数通过 $router.params.query.变量名 来获取值
    path:'/params/:id/:name',
    name:'params',
    meta:{
      requiresAuth:true,
      name:'dx',
      id:'123456'
    },
    component:() => import('../views/ParamsTest.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 路由导航守卫
router.beforeEach(
  async(to,from) => {
    console.log("前往的路由信息：",to)
    console.log("访问的路由信息：",from)
  }
)


export default router
