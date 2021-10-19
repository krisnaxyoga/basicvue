import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'transaction.index',
        component: () => import("../views/transaction/Index.vue")
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("../views/Login.vue")
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import("../views/Dashboard.vue")
    },
    {
        path: '/register',
        name: 'register',
        component: () => import("../views/Register.vue")
    },
    {
        path: '/edit/:id',
        name: 'transaction.edit',
        component: () => import("../views/transaction/Edit.vue")
    },
    {
        path: '/create',
        name: 'transaction.create',
        component: () => import("../views/transaction/Create.vue")
    }
];
const router = createRouter({
    history : createWebHistory(),
    routes
});
export default router;