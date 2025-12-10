import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import router from './router'

import { Layout } from '@/layouts'
import { Icon } from "@iconify/vue"

const app = createApp(App)
app.use(naive)
app.use(router)
app.component('Layout', Layout)
app.component('Icon', Icon)

app.mount('#app')
