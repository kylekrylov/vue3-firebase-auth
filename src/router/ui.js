export default [{
    path: '/ui',
    component: () => import('../views/UI/Index.vue'),
    meta: {
        requiresAuth: true
    },
    children: [{
        path: 'button',
        component: () => import('../views/UI/Button.vue'),
        meta: {
            requiresAuth: true
        }
    }, {
        path: 'checkbox',
        component: () => import('../views/UI/Checkbox.vue'),
        meta: {
            requiresAuth: true
        }
    }, {
        path: 'input',
        component: () => import('../views/UI/Input.vue'),
        meta: {
            requiresAuth: true
        }
    }]
}]
