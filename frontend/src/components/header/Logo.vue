<script setup>
    let logoImg = images.logo
</script>

<template>
    <div class="col-lg-3 col-md-4 col-6" data-aos="fade-in" data-aos-duration="1000">
        <div class="header-logo">
            <router-link :to="{ name: 'home' }">
                <IKImage :path="logoImg" alt="Site Logo" />
            </router-link>
        </div>
    </div>
</template>