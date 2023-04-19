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


const product = ref({})

onMounted(async () => {
    await fetchDetailProduct()
})
</script>

<template>
    <SummaryProduct :product="product" />

    <InfoProduct />

    <Suspense>
        <template #default>
            <SimilarProduct v-if="product.category" :category="product.category" />
            <!-- <SimilarProduct :similar_product="similar_product" /> -->
        </template>

        <template #fallback>
            <SimilarProductSkeleton :total="4" />
        </template>
    </Suspense>


</template>