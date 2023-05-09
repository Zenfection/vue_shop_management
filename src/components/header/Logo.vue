<script setup lang="ts">
    const { src, alt } = images.logo ?? {}
    const logoImg = { src, alt }
</script>

<template>
    <div class="col-lg-3 col-md-4 col-6" v-motion-fade>
        <div class="header-logo">
            <RouterLink to="/">
                <IKImage :path="logoImg.src" :alt="logoImg.alt" />
            </RouterLink>
        </div>
    </div>
</template>