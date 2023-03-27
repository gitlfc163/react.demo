export interface routeType {
    path: string
    component?: any
    children?: Array<routeType>
    meta?: {
        title?: string
        needLogin?: boolean
    }
    redirect?: string
}

const routes: Array<routeType> = [
    {
        path: '/',
        component: () => import('@/layouts/Base'),
        children: [
            {
                path: '/',
                redirect: '/home',
            },
            {
                path: '/home',
                component: () => import('@/pages/Home'),
                meta: {
                    title: "首页",
                }
            },
            {
                path: '/about',
                component: () => import('@/pages/About'),
                meta: {
                    title: "关于",
                }
            },
            {
                path: '/article',
                component: () => import('@/pages/Article'),
                meta: {
                    title: "文章1",
                }
            },
            {
                path: '/article/:id',
                component: () => import('@/pages/Article'),
                meta: {
                    title: "文章2",
                }
            },
            {
                path: '/x6custom',
                component: () => import('@/pages/x6demo/X6Custom'),
                meta: {
                    title: "X6demo1",
                }
            },
            {
                path: '/graphdemo',
                component: () => import('@/pages/x6demo/GraphDemo'),
                meta: {
                    title: "画布Demo",
                }
            },
            {
                path: '/nodedemo',
                component: () => import('@/pages/x6demo/NodeDemo'),
                meta: {
                    title: "节点Demo",
                }
            },
            {
                path: '/edgedemo',
                component: () => import('@/pages/x6demo/EdgeDemo'),
                meta: {
                    title: "边Demo",
                }
            },
            {
                path: '/portsdemo',
                component: () => import('@/pages/x6demo/PortsDemo'),
                meta: {
                    title: "连接桩Demo",
                }
            },
            {
                path: '/connectingdemo',
                component: () => import('@/pages/x6demo/ConnectingDemo'),
                meta: {
                    title: "连线交互",
                }
            },
            {
                path: '/ebeddingdemo',
                component: () => import('@/pages/x6demo/EmbeddingDemo'),
                meta: {
                    title: "组合示例",
                }
            },
            {
                path: '/customevent',
                component: () => import('@/pages/x6demo/CustomEvent'),
                meta: {
                    title: "自定义事件",
                }
            },
            {
                path: '/toolsdemo1',
                component: () => import('@/pages/x6demo/ToolsDemo1'),
                meta: {
                    title: "小工具一",
                }
            },
            {
                path: '/toolsdemo2',
                component: () => import('@/pages/x6demo/ToolsDemo2'),
                meta: {
                    title: "小工具二",
                }
            },
            {
                path: '/customgroup1',
                component: () => import('@/pages/x6demo/CustomGroup1'),
                meta: {
                    title: "限子节点移动",
                }
            },
            {
                path: '/customgroup2',
                component: () => import('@/pages/x6demo/CustomGroup2'),
                meta: {
                    title: "自动扩展父节点",
                }
            }, {
                path: '/customgroup3',
                component: () => import('@/pages/x6demo/CustomGroup3'),
                meta: {
                    title: "展开与折叠父节点",
                }
            }, {
                path: '/s2basedemo1',
                component: () => import('@/pages/s2demo/BaseDemo1'),
                meta: {
                    title: "S2透视表",
                }
            }, {
                path: '/s2basedemo2',
                component: () => import('@/pages/s2demo/BaseDemo2'),
                meta: {
                    title: "S2明细表",
                }
            },
        ]
    },
    {
        path: '*',
        component: () => import('@/pages/Error/404'),
        meta: {
            title: '404'
        }
    }
]

export default routes;