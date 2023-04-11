<script setup>
    import { images } from '@/global/index.js'
</script>

<template>
    <div class="col-lg-3 col-md-4 col-6" data-aos="fade-in" data-aos-duration="1000">
        <div class="header-logo">
            <router-link :to="{ name: 'home' }">
                <img :src="images.logo" alt="Site Logo" />
            </router-link>
        </div>
    </div>
</template>