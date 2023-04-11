<script setup>
import { shape, homeBackground, sliders } from '@/config.js'
import { ref, onMounted } from 'vue'
import anime from 'animejs'
import { tns } from "tiny-slider/src/tiny-slider"
import { useUserStore } from '@/stores/user.store.js'

const userStore = useUserStore()
userStore.restoreState()

const lettersEl = ref(null)
const isLogged = ref(userStore.isAuthenticated ?? false)

onMounted(() => {
    if (lettersEl.value) {
        lettersEl.value.innerHTML = lettersEl.value.textContent.replace(
            /([^\x00-\x80]|\w)/g,
            "<span class='letter'>$&</span>"
        )
        const widthLetter = lettersEl.value.getBoundingClientRect().width
        anime.timeline({
            loop: true
        })
            .add({
                targets: '.ml11 .line',
                scaleY: [0, 1],
                opacity: [0.5, 1],
                easing: 'easeOutExpo',
                duration: 700
            })
            .add({
                targets: '.ml11 .line',
                translateX: [0, widthLetter + 10],
                easing: 'easeOutExpo',
                duration: 700,
                delay: 100
            })
            .add({
                targets: '.ml11 .letter',
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 600,
                offset: '-=775',
                delay: (el, i) => 34 * (i + 1)
            })
            .add({
                targets: '.ml11',
                opacity: 0,
                duration: 1000,
                easing: 'easeOutExpo',
                delay: 1000
            })
    }

    tns({
        container: '.feature-slider',
        loop: true,
        navPosition: "bottom",
        speed: 400,
        mouseDrag: true,
        controls: false,
        autoplay: true,
        autoplayButtonOutput: false,
        responsive: {
            640: {
                edgePadding: 20,
                gutter: 20,
                items: 1
            },
            700: {
                edgePadding: 20,
                gutter: 30,
                items: 2
            },
            900: {
                edgePadding: 20,
                items: 4
            }
        }
    });
})
</script>

<template>
    <!-- start hero -->
    <section class="hero-1 bg-white position-relative d-flex align-items-center justify-content-center overflow-hidden">
        <div class="shapes">
            <div v-for="(item, index) in shape" :key="index" :class="`shape-${index + 1}`">
                <img :src="item" alt="shape" />
            </div>
        </div>

        <div class="container">
            <div class="row align-items-center text-center text-lg-start">
                <div class="col-lg-6 mt-4 pt-2" data-aos="fade-in">
                    <h6 class="text-primary mb-3 fw-hero">
                        Được phát triển bởi
                        <a href="https://facebook.com/zenfection" target="_blank">
                            <u><i class="fa-duotone fa-at"></i>Zenfection</u>
                        </a>
                    </h6>
                    <h1 class="ml11 mb-2">
                        <span class="text-wrapper">
                            <span class="line line1"></span>
                            <span class="letters pb-0 fw-hero" ref="lettersEl">Zen Shop Order</span>
                        </span>
                    </h1>
                    <h5 class="my-4 fw-hero">
                        <i class="fa-duotone fa-phone-volume"></i> Liên hệ với tôi nếu bạn có ý tưởng
                    </h5>

                    <p class="text-danger mb-2 fw-hero">
                        Sản phẩm được phát triển cả nhân nên có rất nhiều lỗi <br />
                        nếu bạn phát hiện hãy liên hệ với tôi bên trên.
                    </p>
                    <router-link v-if="isLogged" :to="{ name: 'shop' }" class="btn btn-primary mt-4">Mua Hàng
                        <i class="fa-duotone fa-cart-shopping-fast fa-xl"></i>
                    </router-link>
                    <router-link v-if="!isLogged" :to="{ name: 'login' }" class="btn btn-primary mt-4">Đăng Nhập
                        <i class="fa-duotone fa-arrow-right-to-bracket fa-xl"></i>
                    </router-link>
                </div>
                <div class="col-lg-6 mt-lg-4 pt-2 mt-5 d-lg-flex d-none" data-aos="fade-left">
                    <img class="fit-image" :src="homeBackground" alt="home Image" />
                </div>
            </div>
        </div>
        <!-- end container -->
    </section>
    <!-- end hero -->

    <!-- start solution -->
    <section class="service-section">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-12 mb-4">
                    <h4 class="fw-semibold mb-3 fw-hero">Chức Năng Nổi Bật</h4>
                    <h5 class="text-secondary fw-normal fw-hero">Liệt kê các nổi bật trong trang web</h5>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-lg-12">
                    <div class="feature-slider">
                        <div v-for="slider in sliders" :key="slider.title">
                            <div class="mt-4 pt-2">
                                <div class="solution border rounded position-relative px-4 py-5 ">
                                    <div class="sw-1 mb-4 sol-icon">
                                        <i :class="slider.icon"></i>
                                    </div>
                                    <h5 class="lh-base fs-16 mb-2">{{ slider.title }}</h5>
                                    <a class="text-secondary" v-html="slider.description"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end solution -->

    <!-- Category Section Start -->

    <!-- Category Section End -->

    <!-- Product Section Start -->

    <!-- Product Section End -->
</template>

<style>
@import "tiny-slider/dist/tiny-slider.css";
</style>