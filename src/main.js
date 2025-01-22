import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import AppVue from './App.vue'
import router from './router'
import { switchFontStyle, switchThemeMode } from '@/toolbag/StyleHelper.js'

const app = createApp(AppVue)

app.use(createPinia())
app.use(router)

app.mount('#app')

