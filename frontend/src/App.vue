<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import "@/assets/icon/icon-zen.min.js"; // icon fontAwesomePro 6

</script>

<template>
    <Header />
    
    <router-view />

    <Footer />
</template>

<style>
    @import 'bootstrap/dist/css/bootstrap.min.css';
    @import 'aos/dist/aos.css';
    @import "@/assets/css/style-v2.min.css";
</style>

