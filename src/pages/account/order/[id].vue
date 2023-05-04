<script setup>
const $route = useRoute()
const id = computed(() => $route.params.id)
    
const store = useUserStore()
const order = ref([])
const products = computed(() => order.value.products)

const fetchOrderData = async() => {
    const data = {
        username: store.user.username,
        orderID: id.value
    }
    try {
        const response = await OrderService.getOrder(data)
        if(response){
            order.value = response
        }
    } catch(error){
        console.log(error)
    }
}

onMounted(async() => {
    await fetchOrderData()
})

</script>

<template>
    <div class="section section-margin">
        <div class="container">
            <ListOrderProduct :id="id" :products="products"  v-motion-fade />

            <StatisticOrder :order="order"  v-motion-fade />
        </div>
    </div>
</template>