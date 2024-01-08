import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'

/** StyleOptimize：样式优化 */
const StyleOptimize = () => import('@/views/style-optimize/index.vue')

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'home',
            component: Index
        },
        {
            path: '/case-list', // 转发
            redirect: '/style',
            children: [
                {
                    path: '/style',
                    name: 'StyleOptimize',
                    component: () => StyleOptimize()
                }
            ]
        }
    ]
})

export default router
