import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './styles/global.css'
import { initDefaultData } from './utils/initData'

// 首次启动自动初始化演示账号
initDefaultData()

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
