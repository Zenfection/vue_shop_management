<script setup>
const { params } = useRoute()
const id = ref(params.id)

const fetchDetailProduct = async () => {
    try {
        const response = await ProductService.getDetail(id.value)
        product.value = response
    } catch (error) {
        console.log(error)
    }
}

const fetchSimilarProduct = async () => {
    try {
        const response = await ProductService.getFilter({
            category: product.value.category,
        })
        // remove current product
        similar_product.value = Object.values(response.data).filter(item => item._id !== id.value)
    } catch (error) {
        console.log(error)
    }
}

const product = ref({})
const similar_product = ref({})

onMounted(async () => {
    await fetchDetailProduct()
    await fetchSimilarProduct()
})
</script>

<template>
    <SummaryProduct :product="product" />

    <InfoProduct />

    <Suspense>
        <template #default>
            <SimilarProduct :category="product.category" />
        </template>

        <template #fallback>
            <SimilarProductSkeleton :total="4" />
        </template>
    </Suspense>


    <!-- <SimilarProduct :similar_product="similar_product" /> -->
</template>