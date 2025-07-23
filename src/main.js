import './assets/main.css'

import naive from 'naive-ui'
import { createApp } from 'vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import { Layout } from '@/layouts'
import {Hero, ValueProposition, Pricing, Cta, Footer, Header} from '@/components/section'


const app = createApp(App)
app.use(naive)
app.component('Layout', Layout)
app.component('Home', Home)
app.component('Header', Header)
app.component('Hero', Hero)
app.component('ValueProposition', ValueProposition)
app.component('Pricing', Pricing)
app.component('Cta', Cta)
app.component('Footer', Footer)
app.mount('#app')
