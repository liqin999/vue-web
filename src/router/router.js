import App from '../App'

const container = r => require.ensure([], () => r(require('../static/container')), 'container') // 父及容器
const home = r => require.ensure([], () => r(require('../static/index')), 'home') //首页


export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },

        //容器
        {
            path: '/container',
            component: container,
            children: [
                //首页城市列表页
                {
                    path: '/home',
                    component: home
                }

            ]
        }
    ]
}]
