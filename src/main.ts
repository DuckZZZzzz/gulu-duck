// 组件文档的样式跟组件库里的样式要区分开，这样用户不会误改库里的样式，引入样式的顺序也很重要，如果先引入APP.vue可能会有样式问题
import { createApp } from 'vue'
import App from './App.vue'
import './lib/gulu.scss'
import './index.scss'
import { router } from './router'
import 'github-markdown-css'

const app = createApp(App)
app.use(router)
app.mount('#app')
