<script>
// import {
//     Dataset,
//     DatasetItem,
//     DatasetInfo,
//     DatasetPager,
//     DatasetSearch,
//     DatasetShow
// } from 'vue-dataset'

//* Store
const store = useUserStore()

const fetchOrderData = async () => {
    try {
        const response = await OrderService.getOrder(store.user.username)
        console.log(response)
    } catch(error){
        console.log(error)
    }
}

onMounted(async() => {
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
                        <!-- <?php
                                                    if (!empty($getOrder)) {
                                                        $count = count($getOrder);
                                                        if ($count == 0) {
                                                            echo "<p class='saved-message'>Hiện bạn chưa đặt đơn hàng nào !!!</p>";
                                                        } else {
                                                            for ($i = 0; $i < $count; $i++) {
                                                                $id_order = $getOrder[$i]['id_order'];
                                                                $order_date = $getOrder[$i]['order_date'];
                                                                $status = $getOrder[$i]['status'];
                                                                $total_money = $getOrder[$i]['total_money'];
                                                    ?>
                                                                <tr id="id_order<?php echo $id_order ?>">
                                                                    <td><?php echo $id_order ?></td>
                                                                    <td><?php echo $order_date ?></td>
                                                                    <td><?php echo $status ?></td>
                                                                    <td><?php echo number_price($total_money) ?></td>
                                                                    <td><a class="btn btn btn-dark btn-hover-primary btn-sm rounded" href="/account/order/<?php echo $id_order ?>">Xem</a></td>
                                                                </tr>
                                                    <?php
                                                            }
                                                        }
                                                    };
                                                    ?> -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>