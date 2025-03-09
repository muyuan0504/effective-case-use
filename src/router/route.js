/** 路由配置文件 */

import Index from '../views/index.vue'
/** StyleOptimize：样式优化 */
const StyleUse = () => import('@/views/style-use/index.vue')

/** markdown实时渲染 */
const Markdown = () => import('@/views/markdown/index.vue')

const routes = [
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
        redirect: '/style-use',
        children: [
            {
                path: '/style-use',
                name: 'StyleUse',
                component: () => StyleUse()
            }
        ]
    },
    {
        path: '/markdown',
        name: 'markdown',
        component: Markdown
    }
]

export default routes
