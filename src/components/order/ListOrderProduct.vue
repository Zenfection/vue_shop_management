<script setup>
    const props = defineProps(['id', 'products'])

    const id = computed(() => props.id)
    const products = computed(() => props.products)
</script>

<template>
    <div class="row">
                <div class="col-12">
                    <!-- Cart Table Start -->
                    <h3 class="text-center">Chi tiết đơn hàng {{ id }}</h3>
                    <div class="cart-table table-responsive">
                        <table class="table table-bordered">
                            <!-- Table Head Start -->
                            <thead>
                                <tr>
                                    <th scope="col" class="pro-thumbnail">Ảnh</th>
                                    <th scope="col" class="pro-title">Sản Phẩm</th>
                                    <th scope="col" class="pro-price">Giá</th>
                                    <th scope="col" class="pro-subtotal">Tổng tiền</th>
                                </tr>
                            </thead>
                            <!-- Table Head End -->

                            <!-- Table Body Start -->
                            <tbody>
                                <tr v-for="product in products" :key="product.id">
                                    <td class="pro-thumbnail">
                                        <RouterLink :to="`/product/${product.id}`">
                                            <IKImage class="rounded" :path="`/products/${product.image}`" alt="Product" :width="120" />
                                        </RouterLink>
                                    </td>
                                    <td class="pro-title">
                                        <RouterLink :to="`/product/${product.id}`">
                                            {{ product.name }}
                                        </RouterLink>
                                    </td>
                                    <td class="pro-price"><span>{{ product.price }}</span></td>
                                    <td class="pro-subtotal"><span>{{ product.total_price }}</span></td>
                                </tr>

                                    
                                        <!-- <td class="pro-price">
                                            <span><?php echo number_price($price) ?> x <?php echo $amount ?></span>
                                        </td> -->

                            </tbody>
                            <!-- Table Body End -->

                        </table>
                    </div>
                    <!-- Cart Table End -->

                </div>
            </div>
</template>