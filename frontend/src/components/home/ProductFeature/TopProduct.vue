<script setup>
const props = defineProps({
    filter: {
        type: String,
        required: true,
    },
});

const fetchTopProduct = async () => {
    return new Promise(async (resolve) => {
        try {
            const response = await ProductService.getFilter({
                filter: props.filter,
                limit: 8,
                keyword: '',
                category: '',
            });
            resolve(response.data);
        } catch (exception) {
            console.log(exception)
        }
    })
}

const products = ref(await fetchTopProduct())
</script>

<template>
    <div class="col-12 col-sm-6 col-lg-3 product-wrapper m-b-40 product" v-for="product in products" :key="product._id">
        <Product :product="product"/>
    </div>
</template>