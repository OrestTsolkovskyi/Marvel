import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            meta: {title: 'Home page'},
            component: Home
        },
        {
            path: '/todos',
            meta: {title: 'Todo list'},
            component: () => import('./views/Todos.vue')
        }
    ]
})