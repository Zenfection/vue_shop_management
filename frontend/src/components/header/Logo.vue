<script setup>
    let logoImg = images.logo
</script>

<template>
    <div class="col-lg-3 col-md-4 col-6" v-motion-fade :duration="500">
        <div class="header-logo">
            <RouterLink to="/">
                <IKImage :path="logoImg" alt="Site Logo" />
            </RouterLink>
        </div>
    </div>
</template>