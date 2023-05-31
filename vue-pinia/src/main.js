import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { registerLayouts } from './layouts/register'

const app = createApp(App)

app.use(router)
app.use(createPinia())

registerLayouts(app)

app.mount('#app')
