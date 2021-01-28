import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/user/Register'
import News from '@/components/news/News'
import Notice from '@/components/notice/Notice'
import Read from '@/components/read/Read'
// import Forum from '@/components/forum/Forum'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            children: [
                // {
                //     path: '/forum',
                //     name: 'Forum',
                //     component: Forum
                // }
                {
                    path: '/news',
                    name: 'News',
                    component: News,
                    children: [
                        {
                            path: '/read',
                            name: 'Read',
                            component: Read
                        }
                    ]
                },
                {
                    path: '/notice',
                    name: 'Notice',
                    component: Notice,
                    children: [
                        {
                            path: '/read',
                            name: 'Read',
                            component: Read
                        }
                    ]
                }
            ]
        },
        {
            path: '/sign',
            name: 'Register',
            component: Register
        },
        
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return {
            x: 0,
            y: 0
        }
    }
})
