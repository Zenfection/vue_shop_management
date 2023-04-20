<script setup>
const storeProduct = useProductStore()
const storeCategory = useCategoryStore()

const page = computed(() => storeProduct.page)
const keyword = computed(() => storeProduct.keyword)
const category =  computed(() => storeCategory.currentCategory)

const fetchProduct = async () => {
    return new Promise(async (resolve) => {
        const response = await ProductService.getFilter({
            page: page.value,
            keyword: keyword.value,
            category: category.value,
            limit: 9
        });
        storeProduct.setCountProduct(response.total)
        resolve(response.data)
    });
}

const products = ref(await fetchProduct())

// watch page, keyword, category
watch([page, keyword, category], async() => {
    await fetchProduct().then((response) => {
        products.value = response
    })
})

</script>

<template>
    <div class="row shop_wrapper grid_3">
        <div class="col-lg-4 col-md-4 col-sm-6 product product-inner" v-for="product in products" :key="product._id">  
            <Product :product="product"/>
        </div>
    </div>
</template>