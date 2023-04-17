<script setup>
    let logoImg = images.logo
</script>

<template>
    <aos-vue class="col-lg-3 col-md-4 col-6" animation="fade-in" :duration="500">
        <div class="header-logo">
            <RouterLink to="/">
                <IKImage :path="logoImg" alt="Site Logo" />
            </RouterLink>
        </div>
    </aos-vue>
</template>