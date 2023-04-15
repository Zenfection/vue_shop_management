<script setup>
import { Rating } from '@morpheme/rating';

const products = ref([])

const props = defineProps({
    filter: {
        type: String,
        required: true,
    },
});

const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

const fetchTopProduct = async () => {
    try {
        // set function ProductService is props.typeFilter
        const response = await ProductService.getFilter({
            filter: props.filter,
            limit: 8,
        });
        if (response) {
            products.value = response;
        }
    } catch (exception) {
        console.log(exception)
    }
}

function discountPrice(price, discount) {
    return price - (price * discount / 100);
}

onMounted(() => {
    fetchTopProduct()
})
</script>

<template>
    <div class="col-12 col-sm-6 col-lg-3 product-wrapper m-b-40 product" v-for="product in products" :key="product._id">
        <div class="thumb">
            <RouterLink to="">
                <IKImage class="fit-image p-10" :path="`/products/${product.image}`" alt="Product" width="250" />
            </RouterLink>
            <span class="badges">
                <span class="sale" v-if="product.discount > 0">{{ product.discount }} %</span>
            </span>
            <div class="action-wrapper">
                <a href="javascript:;" class="action" title="Thêm sản phẩm"
                    onclick="addProductCart('<?php echo $id ?>', 1)">
                    <i class="fa-duotone fa-plus-large"></i>
                </a>
                <a href="javascript:;" class="action wishlist" title="Wishlist">
                    <i class="fa-duotone fa-heart"></i>
                </a>
                <a href="javascript:;" class="action cart" onclick="loadContent('viewcart')">
                    <i class="fa-duotone fa-cart-circle-plus"></i>
                </a>
            </div>
        </div>
        <div class="content">
            <h5 class="title"><a class="product-title">{{ product.name }}</a></h5>
            <span class="rating">
                <Rating :rating="product.ranking" read-only increment="0.5" />
            </span>
            <span class="price" v-if="product.discount > 0">
                <span class="new">
                    {{ formatter.format(discountPrice(product.price, product.discount)) }}
                </span>
                <span class="old">{{ formatter.format(product.price) }}></span>
            </span>

            <span class="price" v-else>
                <span class="new">
                    {{ formatter.format(product.price) }}
                </span>
            </span>
        </div>
    </div>
</template>