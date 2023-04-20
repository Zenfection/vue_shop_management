<script setup>

const props = defineProps({
    category: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})


const fetchTopProduct = async () => {
    return new Promise(async (resolve) => {
        try {
            const response = await ProductService.getFilter({
                category: props.category,
            });
            // filter remove product current
            response.data = Object.values(response.data).filter(item => item._id != props.id)
            resolve(response.data);
        } catch (exception) {
            console.log(exception)
        }
    })
}

const products = ref(await fetchTopProduct())

</script>

<template>
    <div class="service-section section section-margin">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-12">
                    <div class="section-title text-center">
                        <h3 class="title">Sản phẩm tương tự</h3>
                    </div>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-lg-12">
                    <Slider>
                        <div class="mt-4 pt-2" v-for="product in products" :key="product._id">
                            <Product :product="product" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    </div>
</template>
