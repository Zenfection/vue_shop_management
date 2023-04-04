import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: import ('@/views/Home.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: import ('@/views/About.vue'),
    },
    {
        path: '/shop',
        name: 'shop',
        component: import ('@/views/Shop.vue'),
    },
    {
        path: '/contact',
        name: 'contact',
        component: import ('@/views/Contact.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;