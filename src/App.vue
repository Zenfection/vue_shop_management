<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

import { ref } from 'vue';

const _GIT_SOURCE = 'https://raw.githubusercontent.com/Zenfection/phpmvc_shop_order/main';
const _CDN_JSDelivr = 'https://cdn.jsdelivr.net/gh/Zenfection/phpmvc_shop_order@main';

const logoURL = ref(_GIT_SOURCE + 'assets/images/logo.png');
</script>

<template>
    <Header />
    
    <router-view />

    <Footer />
</template>

<style>
@import "@/assets/css/style.css";

</style>
