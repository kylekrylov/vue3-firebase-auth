import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from "firebase/auth";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: () => import('../views/Home.vue')},
        {
            path: '/register', component: () => import('../views/Register.vue'),
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/sing-in',
            component: () => import('../views/SingIn.vue'),
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/list',
            component: () => import('../views/List.vue'),
            meta: {
                requiresAuth: true
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (getAuth().currentUser) {
            next()
        } else {
            next('/')
        }
    } else {
        next()
    }
})

export default router
