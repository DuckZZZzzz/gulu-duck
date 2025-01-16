import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
console.log(process.env.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__);