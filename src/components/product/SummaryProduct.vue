<script setup>

const store = useUserStore()

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
})

const product = computed(() => props.product)
const quantity = ref(1)

const decrementQty = () => {
    if (quantity.value > 1) {
        quantity.value--
    }
}

const incrementQty = () => {
    quantity.value++
}

const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

function discountPrice(price, discount) {
    return price - (price * discount / 100);
}

const addCart = async() => {
    try {
        const data = {
            username: store.user.username,
            id_product: product.value._id,
            amount: quantity.value,
        };
        const response = await UserService.addCart(data);   
        // check if product is already in cart
        let index = store.cart.findIndex(item => item.product._id === product.value._id)
        if(index == -1){
            store.cart.push(response)
        } else {
            store.cart[index].amount += 1
        }
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <div class="section section-margin">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 offset-lg-0 col-md-8 offset-md-2">
                    <div class="product-details-img">
                        <!-- ?? Image Product -->
                        <div class="single-product-img swiper-container product-gallery-top">
                            <div class="swiper-wrapper popup-gallery">
                                <IKImage class='w-100' :path="`/products/${product.image}`" alt='Product'
                                    style="padding-right: 25%;" />
                            </div>
                        </div>

                        <!--?? Product Thumb -->
                        <!-- <div class="single-product-thumb swiper-container product-gallery-thumbs">
                            <div class="swiper-button-next swiper-nav-button"><i
                                    class="fa-duotone fa-angle-right fa-xl"></i></div>
                            <div class="swiper-button-prev swiper-nav-button"><i class="fa-duotone fa-angle-left fa-xl"></i>
                            </div>
                        </div> -->
                    </div>

                </div>
                <div class="col-lg-7">
                    <div class="product-summery position-relative">
                        <!--?? Product Head -->
                        <div class="product-head m-b-15">
                            <h2 class='product-title'>{{ product.name }}</h2>
                        </div>

                        <!--?? Rating  -->
                        <span class="rating justify-content-start m-b-10">
                            <Rating :rating="product.ranking" read-only :increment="0.5" />
                        </span>

                        <!--?? Price Box  -->
                        <span class="price-box m-b-10">
                            <span class="price" v-if="product.discount > 0">
                                <span class="regular-price">
                                    {{ formatter.format(discountPrice(product.price, product.discount)) }}
                                </span>
                                <span class="old-price">{{ formatter.format(product.price) }}</span>
                            </span>
                            <span class="price" v-else>
                                <span class="regular-price">
                                    {{ formatter.format(product.price) }}
                                </span>
                            </span>
                        </span>

                        <!--?? Product Quantity  -->
                        <div class="product-inventroy m-b-15">
                            <span class='inventroy-title'> <strong>Có sẵn: </strong></span>
                            <span class='inventory-varient'> {{ product.quantity }} trong kho</span>
                        </div>

                        <!--?? Description  -->
                        <p class='desc-content m-b-25'>{{ product.description }}.</p>

                        <!--?? Quantity Box -->
                        <div class="quantity d-flex align-items-center m-b-25">
                            <span class="m-r-10"><strong>Số lượng: </strong></span>
                            <div class="cart-plus-minus">
                                <input class="cart-plus-minus-box" v-model="quantity" type="text">
                                <div class="dec qtybutton" @click="decrementQty">-</div>
                                <div class="inc qtybutton" @click="incrementQty">+</div>
                            </div>
                        </div>

                        <!-- Cart Button -->
                        <div class="cart-btn action-btn m-b-30">
                            <div class="action-cart-btn-wrapper d-flex">
                                <div class="add-to-cart cursor-pointer">
                                    <a class="btn btn-primary btn-hover-dark rounded" @click="addCart">Thêm Hàng</a>
                                </div>
                                <!-- <a href="#" title="Wishlist" class="heart"><i class="fa-duotone fa-heart fa-xl"></i></a> -->
                            </div>
                        </div>

                        <SocialShare />

                        <!-- Payment  -->
                        <div class="payment-option m-t-20 d-flex">
                            <span><strong>Thanh Toán: </strong></span>
                            <Payment />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>