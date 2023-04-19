<script setup>
useHead({
    title: 'Liên Hệ',
})
</script>

<template>
    <div class="section section-margin">
        <div class="container">

            <div class="row m-b-n50">
                
                <ContactForm v-motion-slide-left />

                <GoogleMapArea v-motion-fade :delay="300"/>

            </div>

    </div>
</div>
</template>