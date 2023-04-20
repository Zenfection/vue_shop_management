<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const product = ref(props.product)

const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
})

function discountPrice(price, discount) {
    return price - (price * discount) / 100
}
</script>

<template>
    <div class="solution border rounded position-relative" v-motion-fade>
        <div class="product-wrapper">
            <div class="product">
                <!-- Thumb Start  -->
                <div class="thumb product-inner">
                    <RouterLink :to="`/product/${product._id}`" class="image">
                        <IKImage class="fit-image rounded" :path="`/products/${product.image}`" alt="Product Image" />
                    </RouterLink>
                    <span class="badges" v-if="product.discount > 0">
                        <span class="sale">-{{ product.discount }}%</span>
                    </span>
                    <div class="action-wrapper">
                        <a href="javascript:;" class="action" title="Thêm sản phẩm"><i class="fa-duotone fa-plus-large"
                                onclick="addProductCart('<?php echo $id ?>', 1)"></i></a>
                        <a href="javascript:;" class="action wishlist" title="Wishlist"><i
                                class="fa-duotone fa-heart"></i></a>
                        <a href="javascript:;" class="action cart" id="viewcart" title="Cart"><i
                                class="fa-duotone fa-cart-circle-plus"></i></a>
                    </div>
                </div>
                <!-- Thumb End  -->

                <!-- Content Start  -->
                <div class="content">
                    <h5 class="title">
                        <RouterLink :to="`/product/${product._id}`">
                            {{ product.name }}
                        </RouterLink>
                    </h5>
                    <span class="rating">
                        <Rating :rating="product.ranking" read-only :increment="0.5" />
                    </span>
                    <span class="price">
                        <span class="price" v-if="product.discount > 0">
                            <span class="new">
                                {{ formatter.format(discountPrice(product.price, product.discount))
                                }}
                            </span>
                            <span class="old">{{ formatter.format(product.price) }}></span>
                        </span>
                    </span>
                </div>
                <!-- Content End  -->
            </div>
             <!-- <div v-if="product.quantity == 0" class='ribbon bg-danger' style='top: -20px' onload="soldOutRibbon()">
                    Đã Bán Hết
                </div> -->
        </div>
        <!-- Product End -->
    </div>
</template>