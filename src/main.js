import './assets/main.css'

import naive from 'naive-ui'
import { createApp } from 'vue'
import App from './App.vue'
import {Hero, ValueProposition} from '@/components/section'


const app = createApp(App)
app.use(naive)
app.component('Hero', Hero)
app.component('ValueProposition', ValueProposition)
app.mount('#app')
