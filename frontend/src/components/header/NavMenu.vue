<template>
    <div class="col-lg-5 d-none d-lg-block navbar navbar-expand-lg" data-aos="fade-in" data-aos-duration="1000">
        <div class="main-menu">
            <ul>
                <li class="nav-item">
                    <router-link :to="{ name: 'home' }" class="nav-link" exact-active-class="active" active-class="active">
                        Trang Chủ
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'about' }" class="nav-link" exact-active-class="active" active-class="active">
                        Giới Thiệu
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'shop' }" class="nav-link" exact-active-class="active" active-class="active">
                        Shop
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'contact' }" class="nav-link" exact-active-class="active"
                        active-class="active">
                        Liên Hệ
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>