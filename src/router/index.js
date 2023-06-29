import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from "firebase/auth";


const router = createRouter({
    mode: 'history',
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

router.beforeEach(async (to, from, next) => {

    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const isAuthenticated = await new Promise((resolve) => {
        const unsubscribe = getAuth().onAuthStateChanged((user) => {
            resolve(user !== null);
            unsubscribe();
        });
    });

    requiresAuth && !isAuthenticated ? next('/') : next();
})

export default router
