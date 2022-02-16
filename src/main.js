import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

