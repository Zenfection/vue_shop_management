<script setup>
    const props = defineProps({
        height: {
            type: Number,
            required: true
        },
        width: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    })
</script>
<template>
    <div class="section section-margin">
        <div class="container">
            <h2>Loading...</h2> 
            <!-- Banners Start -->
            <div class="row row-cols-md-3 row-cols-sm-2 row-cols-1 m-b-n30">
                <div class="col m-b-30" data-aos="fade-in" v-for="index in total" :key="index">
                    <div class="banner hover-style">
                        <Skeletor :height="height" :width="width" />
                    </div>
                </div>
            </div>
            <!-- Banners End -->
        </div>
    </div>
</template>