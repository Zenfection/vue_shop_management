<script setup>

const navs = [
    {
        name: 'Trang Chủ',
        path: '/',
        duration: 100
    },
    {
        name: 'Giới Thiệu',
        path: '/about',
        duration: 200
    },
    {
        name: 'Shop',
        path: '/shop',
        duration: 300
    },
    {
        name: 'Liên Hệ',
        path: '/contact',
        duration: 400
    }
]
</script>

<template>
    <div class="col-lg-5 d-none d-lg-block navbar navbar-expand-lg">
        <div class="main-menu">
            <ul>
                <li class="nav-item" v-for="nav in navs" :key="nav.path">
                    <RouterLink :to="nav.path" exact-active-class="active" active-class="active">
                        <aos-vue animation="fade-in" :duration="nav.duration">
                            {{ nav.name }}
                        </aos-vue>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>