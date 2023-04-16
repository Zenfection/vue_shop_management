<script setup>
    const props = defineProps({
        total: {
            type: Number,
            required: true,
        },
    })
</script>

<template>
    <div class="row shop_wrapper grid_3">
        <div class="col-lg-4 col-md-4 col-sm-6 product product-inner" v-for="index in total" :key="index">
            <ProductSkeleton />
        </div>
    </div>
</template>