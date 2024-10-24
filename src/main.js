import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// pinia 持久化
import piniaPersist from 'pinia-plugin-persist'

import App from './App.vue'
import router from './router'
import elementUi from '@/common/element-ui'
import { loadSvg } from './icons'

const pinia = createPinia()
pinia.use(piniaPersist)

const app = createApp(App)

loadSvg(app)
app.use(pinia)
app.use(router)
app.use(elementUi)

app.mount('#app')
