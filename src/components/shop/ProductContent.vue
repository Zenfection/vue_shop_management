<script setup lang="ts">

const storeProduct = useProductStore()

const page = computed(() => storeProduct.filter.page)
const keyword = computed(() => storeProduct.filter.keyword)
const category = computed(() => storeProduct.filter.category)


const products = ref(await storeProduct.fetchProduct())

// watch page, keyword, category
watch([page, keyword, category], async () => {
    await storeProduct.fetchProduct().then((response) => {
        products.value = response
    })
})

</script>

<template>
    <div class="row shop_wrapper grid_3">
        <div class="col-lg-4 col-md-4 col-sm-6 product product-inner" v-for="product in products" :key="product._id">
            <Product :product="product" />
        </div>
    </div>
</template>