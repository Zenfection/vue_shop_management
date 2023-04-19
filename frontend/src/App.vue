<script setup>
import "@/assets/icon/icon-zen.min.js"; // icon fontAwesomePro 6
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

useHead({
    title: "ZenShop",
    meta: {
        name: "description",
        content: "ZenShop - Dự án mua sắm trực tuyến Vue3"
    }
})

</script>

<template>
    <Header />

    <RouterView>
    </RouterView>
        <!-- <transition enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">
            <component :is="Component" />
        </transition> -->

    <Footer />
</template>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
@import "@/assets/css/style-v2.min.css";
@import "vue-skeletor/dist/vue-skeletor.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.min.css";

#app {
    font-family: 'Inter', sans-serif;
    font-smooth: always;
}

</style>

