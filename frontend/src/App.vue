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
    <RouterView />
</template>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
@import 'aos/dist/aos.css';
@import "@/assets/css/style-v2.min.css";
@import "vue-skeletor/dist/vue-skeletor.css";
</style>

