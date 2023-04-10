<script setup>

//* Header Search Action

import { logoURL } from '@/config.js'
import { ref } from 'vue';
import { defineStore } from 'pinia';

const isSearchOpen = ref(false);

const handleSearchToggle = () => {
    isSearchOpen.value = !isSearchOpen.value
}

const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        user: null,
    }),
    getters: {
        isLoggedIn() {
            return !!this.user
        },
    },
    actions: {
        login(user) {
            this.user = user
        },
        logout() {
            this.user = null
        },
    },
})
</script>

<template>
    <div class="header-bottom">
        <div class="header-sticky">
            <div class="container">
                <div class="row align-items-center position-relative">
                    <!-- Header Logo Start -->
                    <div class="col-lg-3 col-md-4 col-6" data-aos="fade-in" data-aos-duration="1000">
                        <div class="header-logo">
                            <router-link :to="{ name: 'home' }">
                                <img :src="logoURL" alt="Site Logo" />
                            </router-link>
                        </div>
                    </div>
                    <!-- Header Logo End -->

                    <!-- Header Menu Start -->
                    <div class="col-lg-5 d-none d-lg-block navbar navbar-expand-lg" data-aos="fade-in"
                        data-aos-duration="1000">
                        <div class="main-menu">
                            <ul>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'home' }" class="nav-link" exact-active-class="active"
                                        active-class="active">
                                        Trang Chủ
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'about' }" class="nav-link" exact-active-class="active"
                                        active-class="active">
                                        Giới Thiệu
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'shop' }" class="nav-link" exact-active-class="active"
                                        active-class="active">
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
                    <!-- Header Menu End -->

                    <!-- Header Action Start -->
                    <div class="col-lg-4 col-md-8 col-6">
                        <div class="header-actions" id="header">
                            <!-- Header Action Start -->
                            <!-- Header Action Search Button Start -->
                            <div class="header-action-btn header-action-btn-search d-none d-md-flex">
                                <div class="action-execute" @click="handleSearchToggle">
                                    <div class="cursor-pointer" :class="{'action-search-open': !isSearchOpen, 'action-search-close': isSearchOpen}">
                                        <i class="fa-duotone fa-xl fa-magnifying-glass"></i>
                                    </div>

                                    <div class="cursor-pointer" :class="{'action-search-close': !isSearchOpen, 'action-search-open': isSearchOpen}">
                                        <i class="fa-duotone fa-xmark fa-xl"></i>
                                    </div>
                                </div>
                                <!-- Search Form and Button Start -->
                                <div class="header-search-form" :class="{ 'visible-execute': isSearchOpen }">
                                    <input class="header-search-input" type="text" placeholder="Tìm kiếm"
                                        style="width: 200px !important" />
                                    <button class="header-search-button">
                                        <i class="fa-duotone fa-magnifying-glass"></i>
                                    </button>
                                </div>
                                <!-- Search Form and Button End -->
                            </div>
                            <!-- Header Action Search Button End -->

                            <!-- account login -->
                            <router-link :to="{name: 'account'}"  class='header-action-btn header-action-btn-wishlist'>
                                <i class='fa-duotone fa-user-gear fa-xl'></i>
                            </router-link>

                            <!-- <router-link :to="{name: 'login'}" id='logged' class='header-action-btn header-action-btn-wishlist'>
                                <i class='fa-duotone fa-user fa-xl'></i>
                            </router-link> -->
                            <!-- <?php

                        <?php $this->render('blocks/cart', $data) ?> -->

                            <!-- Mobile Menu Hambarger Action Button Start -->
                            <a href="javascript:void(0)"
                                class="header-action-btn header-action-btn-menu d-lg-none d-md-flex">
                                <i class="fa-duotone fa-bars fa-xl"></i>
                            </a>
                            <!-- Mobile Menu Hambarger Action Button End -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>