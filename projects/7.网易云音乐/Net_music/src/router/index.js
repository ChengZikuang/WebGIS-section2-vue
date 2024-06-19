import {createRouter,createWebHistory} from 'vue-router';
import  Home  from "../views/Home.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('../views/Search.vue'),
        },
        {
            path:'/:catchall(.*)',
            redirect:'/'
        }
    ]
})

export default router;