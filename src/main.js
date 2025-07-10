import './assets/main.css'

import naive from 'naive-ui'
import { createApp } from 'vue'
import App from './App.vue'
import {Hero} from '@/components/section'


const app = createApp(App)
app.use(naive)
app.component('Hero', Hero)
app.mount('#app')
