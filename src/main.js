import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// pinia 持久化
import piniaPersist from 'pinia-plugin-persist'

import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { loadSvg } from './icons'

const pinia = createPinia()
pinia.use(piniaPersist)

const app = createApp(App)

loadSvg(app)
app.use(pinia)
app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
