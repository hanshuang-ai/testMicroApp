import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";

const routes = [
    {path: "/", name:"Index", component:() => import('../views/Index')}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
