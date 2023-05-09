<script setup lang="ts">
import "@/assets/icon/icon-zen.min.js"; // icon fontAwesomePro 6
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

useHead({
    title: "ZenShop",
})

</script>

<template>
    <Header />

    <RouterView />

    <Footer />
</template>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
@import "vue-skeletor/dist/vue-skeletor.css";
@import 'vue3-toastify/dist/index.css';
@import "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.min.css";

@import "@/assets/css/pace.min.css";
@import "@/assets/css/style.css";
@import "@/assets/css/custom.css";


#app {
    font-family: 'Inter', sans-serif;
    font-smooth: always;
}

</style>

