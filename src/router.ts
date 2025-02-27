import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes:  [
        {
            path: '/',
            component: Home
        },
        {
            path: '/doc',
            component: Doc,
            children: [
                {
                    path: '',
                    redirect: '/doc/intro',
                    component: () => import('./components/Intro.vue')
                },
                {
                    path: 'intro',
                    component: () => import('./components/Intro.vue')
                },
                {
                    path: 'installation',
                    component: () => import('./components/Installation.vue')
                },
                {
                    path: 'get-started',
                    component: () => import('./components/GetStarted.vue')
                },
                {
                    path: 'switch',
                    component: () => import('./components/SwitchDemo.vue')
                },
                {
                    path: 'button',
                    component: () => import('./components/ButtonDemo.vue')
                },
                {
                    path: 'dialog',
                    component: () => import('./components/DialogDemo.vue')
                },
                {
                    path: 'tabs',
                    component: () => import('./components/TabsDemo.vue')
                }
            ]
        },
    ]
})

// router.afterEach(() => {
//     console.log('路由切换了')
// })