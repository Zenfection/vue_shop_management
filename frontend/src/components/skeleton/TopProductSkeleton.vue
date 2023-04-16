<script setup>
const props = defineProps({
    total: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <div class="col-12 col-sm-6 col-lg-3 product-wrapper m-b-40 product" v-for="index in total" :key="index">
        <div class="thumb">
            <Skeletor class="fit-image" height="250" width="250" />
            <span class="badges">
                <span class="sale">
                    <Skeletor height="20" width="30" />
                </span>
            </span>
        </div>
        <div class="content">
            <h5 class="title d-flex justify-content-center">
                <Skeletor class="product-title" height="20" width="150" />
            </h5>
            <span class="rating">
                <Skeletor height="20" width="100" />
            </span>
            <span class="price">
                <Skeletor height="20" width="100" />
            </span>
        </div>
    </div>
</template>