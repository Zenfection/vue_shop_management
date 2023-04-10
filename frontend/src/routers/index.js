import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () =>  import ('@/views/Home.vue'),
        meta: {
            title: 'Trang Chủ',
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import ('@/views/About.vue'),
        meta: {
            title: 'Giới Thiệu',
        }
    },
    {
        path: '/shop',
        name: 'shop',
        component: () => import ('@/views/Shop.vue'),
        meta: {
            title: 'Cửa Hàng',
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import ('@/views/Contact.vue'),
        meta: {
            title: 'Liên Hệ',
        }
    },
    {
        path: '/account',
        name: 'account',
        component: () => import ('@/views/Account.vue'),
        meta: {
            title: 'Tài Khoản',
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import ('@/views/Login.vue'),
        meta: {
            title: 'Đăng Nhập',
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import ('@/views/Register.vue'),
        meta: {
            title: 'Đăng Ký',
        }
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import ('@/views/Cart.vue'),
        meta: {
            title: 'Giỏ Hàng',
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || "Trang không tồn tại";
    next();
});

export default router;