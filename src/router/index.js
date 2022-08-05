import Vue from 'vue'
import Router from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Search from '../pages/Search/Search.vue'

// 声明使用组件
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/Msite',
            meta:{
                showFooter:true
            },
        },
        {
            path:'/Msite',
            component:Msite,
            meta:{
                showFooter:true
            },
        },
        {
            path:'/Order',
            component:Order,
            meta:{
                showFooter:true
            },
        },
        {
            path:'/Profile',
            component:Profile,
            meta:{
                showFooter:true
            },
        },
        {
            path:'/Search',
            component:Search,
            meta:{
                showFooter:true
            },
        },
        {
            path:'/Login',
            component:Login
        }
    ]
})

