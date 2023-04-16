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
        <ProductSkeleton />
    </div>
</template>