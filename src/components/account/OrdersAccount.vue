<script setup>
//* Store
const store = useUserStore()

const orders = computed(() => store.orders)
const orderStatus = computed(() => {
    // 0: đang chờ duyệt, 1: đang vận chuyển, 3: đã giao hàng, 3: đã hủy
    return {
        0: 'Đang chờ duyệt',
        1: 'Đang vận chuyển',
        2: 'Đã giao hàng',
        3: 'Đã hủy'
    }
})
const fetchOrderData = async () => {
    try {
        const data = {
            username: store.user.username
        }
        const response = await OrderService.getOrderAll(data)
        if(response) {
            store.setOrder(response)
        }
    } catch (error) {
        console.log(error)
    }
}

onMounted(async () => {
    await fetchOrderData()
})

</script>

<template>
    <div class="tab-pane fade" id="orders" role="tabpanel">
        <div class="myaccount-content">
            <h3 class="title">
                Đơn Hàng
            </h3>
            <div class="myaccount-table table-responsive text-center">
                <table class="table table-bordered">
                    <thead class="thead-light">
                        <tr>
                            <th>Mã Đơn</th>
                            <th>Ngày Đặt Hàng</th>
                            <th>Trạng Thái</th>
                            <th>Tổng Tiền</th>
                            <th>Chi Tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        <p class='saved-message' v-if="orders.length == 0">Hiện bạn chưa đặt đơn hàng nào !!!</p>
                        <tr v-for="order in orders" :key="order._id">   
                            <td>{{ order.orderID }}</td>
                            <td>{{ order.order_date }}</td>
                            <td>{{ orderStatus[order.status] }}</td>
                            <td>{{ order.total_price }}</td>
                            <td>
                                <RouterLink :to="`/account/order/${order.orderID}`" class="btn btn-light btn-hover-primary btn-sm rounded" :href="'/account/order/' + order._id">Xem</RouterLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

