import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Ducklogo from './components/Ducklogo.vue'
import Ducklogo2 from './components/Ducklogo2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes:  [
        {
            path: '/',
            component: Ducklogo
        },
        {
            path: '/q',
            component: Ducklogo2
        },
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
