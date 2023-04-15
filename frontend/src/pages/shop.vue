<script setup>
useHead({
    title: 'Mua Hàng',
})

const products = ref([])


const store = useProductStore()

const page = computed(() => store.page)
const keyword = computed(() => store.keyword)
const filter = computed(() => store.filter)

const fetchProduct = async () => {
    try {
        const response = await ProductService.getFilter({
            page: page.value,
            keyword: keyword.value,
            limit: 9
        });
        products.value = response;
    } catch (exception) {
        console.log(exception)
    }
}

watch(() => page.value, (value) => {
    fetchProduct();
})

onMounted(() => {
    fetchProduct();
})
</script>

<template>
    <div class="section section-margin">
        <div class="container">
            <div class="row flex-row-reverse">
                <div class="col-lg-9 col-12" data-aos="fade-in" data-aos-duration="500">

                    <ToolBar />
                    
                    <ProductContent :products="products"/>

                    <Paginator :page="page"></Paginator>

                </div>

                <SideBar />
            </div>
        </div>
    </div>
</template>