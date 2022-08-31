import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

const routes = [
    {path: "/", name:"Index", component:() => import('../views/Index')},
    {path:"/myPage", name:"myPage", component:() => import('../views/MyPage')}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router