import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import vuex from './store'

const app = createApp(App)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 手动设置全局属性变量
app.config.globalProperties.$app1='自定义的属性值'
app.use(ElementPlus)
// 注册路由到应用中
app.use(router)
// 注册vuex到应用中
app.use(vuex)
app.mount('#app')

