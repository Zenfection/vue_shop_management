<script setup>

const props = defineProps(['order'])

const order = computed(() => props.order)

const orderStatus = computed(() => {
    // 0: đang chờ duyệt, 1: đang vận chuyển, 3: đã giao hàng, 3: đã hủy
    return {
        0: 'Đang chờ duyệt',
        1: 'Đang vận chuyển (không thể huỷ hàng)',
        2: 'Đã giao hàng (không thể huỷ hàng)',
        3: 'Đã hủy (không thể huỷ hàng)'
    }
})
</script>

<template>
    <div class="row m-t-50" v-motion-fade>
        <div class="col-lg-6 me-0 ms-auto">
            <div class="cart-calculator-wrapper">
                <div class="cart-calculate-items">
                    <h3 class="title text-center">Thông tin đơn hàng</h3>
                    <div class="table-responsive">
                        <table class="table">
                            <tr>
                                <td>Ngày đặt hàng</td>
                                <td>{{ order.order_date }}</td>
                            </tr>
                            <tr>
                                <td>Trạng thái</td>
                                <td>
                                    {{ orderStatus[order.status] }}
                                </td>
                            </tr>
                            <tr class="total">
                                <td>Tổng tiền</td>
                                <td class="total-amount">
                                    {{ order.total_price }}
                                </td>
                            </tr>
                        </table>
                    </div>
                    <!-- Responsive Table End -->

                </div>
                <div class="btn btn-gray-deep btn-hover-primary m-t-30" v-if="order.status == 0">
                    Huỷ Hàng
                </div>
            </div>
            <!-- Cart Calculation Area End -->
        </div>
    </div>
</template>