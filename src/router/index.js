import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const router = createRouter({
    // mode: 'history',
    history: createWebHistory('/vue3-firebase-auth/'),
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/register',
            component: () => import('../views/Register.vue'),
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

const getCurrentUser = () => {
    return new Promise((resolve, reject)=>{
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener()
                resolve(user)
            },
            reject
        )
    })
}

router.beforeEach(async (to, from, next) => {

    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const isAuthenticated = await getCurrentUser()

    requiresAuth && !isAuthenticated ? next('/') : next();
})

export default router
