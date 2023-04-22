<script setup>

const $route = useRoute()
const id = computed(() => $route.params.id)

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

watch(id, async () => {
    await fetchDetailProduct()
})

</script>

<template>
    <Suspense>
        <template #default>
            <SummaryProduct v-if="product" :product="product" :id="id" />
        </template>

        <template #fallback>
            <SummaryProductSkeleton v-if="product" />
        </template>
    </Suspense>

    <InfoProduct />

    <Suspense>
        <template #default>
            <SimilarProduct v-if="product.category" :category="product.category" :id="id"/>
        </template>

        <template #fallback>
            <SimilarProductSkeleton :total="4" />
        </template>
    </Suspense>


</template>