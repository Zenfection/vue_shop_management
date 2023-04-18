<script setup>

const props = defineProps({
    similar_product: {
        type: Array,
        required: true,
    },
})

const similar_product = computed(() => props.similar_product)

const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

function discountPrice(price, discount) {
    return price - (price * discount / 100);
}

function initSlider() {
    tns({
            container: '.feature-slider',
            loop: false,
            navPosition: "bottom",
            speed: 400,
            mouseDrag: true,
            controls: false,
            autoplay: true,
            autoplayButtonOutput: false,
            responsive: {
                640: {
                    edgePadding: 20,
                    gutter: 20,
                    items: 1
                },
                700: {
                    edgePadding: 20,
                    gutter: 30,
                    items: 2
                },
                900: {
                    edgePadding: 20,
                    items: 4
                }
            }
        });
}

onMounted(() => {
    setTimeout(() => {
        initSlider()
    }, 200)
})

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
                    <div class="feature-slider">
                        <div class="mt-4 pt-2" v-for="product in similar_product" :key="product._id">
                            <div class="solution border rounded position-relative px-4 py-5 ">
                                <div class="product-wrapper">
                                    <div class="product">
                                        <!-- Thumb Start  -->
                                        <div class="thumb product-inner">
                                            <RouterLink :to="`/product/${product._id}`" class="image">
                                                <IKImage class="fit-image rounded" :path="`/products/${product.image}`"
                                                    alt="Product Image" />
                                            </RouterLink>
                                            <span class="badges" v-if="product.discount > 0">
                                                <span class='sale'>-{{ product.discount }}%</span>
                                            </span>
                                            <div class="action-wrapper">
                                                <a href="javascript:;" class="action" title="Thêm sản phẩm"><i
                                                        class="fa-duotone fa-plus-large"
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
                                </div>
                                <!-- Product End -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 

<style scoped>
@import "tiny-slider/dist/tiny-slider.css";
</style>