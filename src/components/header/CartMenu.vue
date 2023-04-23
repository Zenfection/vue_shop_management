<script setup>
import autoAnimate from "@formkit/auto-animate"

const store = useUserStore()
if (!store.user) {
    store.restoreState()
}

const dropdown = ref() // we need a DOM node
const show = ref(false)

const isLogged = ref(store.isAuthenticated ?? false)
const cart = ref(store.cart ?? [])

const totalMoney = computed(() => {
    let total = 0
    cart.value.forEach(item => {
        let discountPrice = item.product.price - (item.product.price * item.product.discount) / 100
        total += discountPrice * item.amount
    })
    return total
})

const fetchCartUser = async () => {
    try {
        const data = {
            username: store.user.username,
        };
        const response = await UserService.getCart(data);
        cart.value = response;
        store.setCart(response);
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    if (store.user) {
        fetchCartUser();
    }
    autoAnimate(dropdown.value)
})

watchEffect(() => {
    isLogged.value = store.isAuthenticated ?? false
})

const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
})

function discountPrice(price, discount) {
    return price - (price * discount) / 100
}

</script>


<template>
    <!--! Header Action Button Start -->
    <div class="header-action-btn header-action-btn-cart d-none d-sm-flex dropdown" ref="dropdown">
        <div class="cart-visible cursor-pointer" @click="show = !show">
            <i class="fa-duotone fa-bag-shopping fa-xl"></i>
            <span class="header-action-num" id="count-cart" v-if="store.user">
                {{ cart.length }}
            </span>
        </div>
        <!-- Header Cart Content Start -->
        <div class="header-cart-content dropdown-label" style="display: block" v-if="show">
            <!-- Cart Procut Wrapper Start  -->
            <div class="cart-product-wrapper dropdown-content" v-for="item in cart" :key="item._id">
                <div class="solution rounded cart-product-inner p-b-20 m-b-20 border-bottom product-inner">
                    <!-- Single Cart Product Start -->
                    <div class="single-cart-product">
                        <div class="cart-product-thumb">
                            <RouterLink :to="`/product/${item.product._id}`">
                                <IKImage class="rounded" :path="`/products/${item.product.image}`" alt="Cart Product"
                                    :width="100" />
                            </RouterLink>
                        </div>
                        <div class="cart-product-content">
                            <h3 class="title">
                                <RouterLink :to="`/product/${item._id}`">
                                    {{ item.product.name }}
                                </RouterLink>
                            </h3>
                            <div class="product-quty-price">
                                <span class="cart-quantity">
                                    Số lượng: <strong> {{ item.amount }} </strong>
                                </span>
                                <span class="price" v-if="item.product.discount > 0">
                                    <span class="new">
                                        {{ formatter.format(discountPrice(item.product.price, item.product.discount)) }}
                                    </span>
                                    <span class="old" style="text-decoration: line-through;color: #DC3545;opacity: 0.5;">
                                        {{ formatter.format(item.product.price) }}
                                    </span>
                                </span>
                                <span class="price" v-else>
                                    <span class="new">{{ formatter.format(item.product.price) }}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- Single Cart Product End -->

                    <!-- Product Remove Start -->
                    <div class="cart-product-remove">
                        <a href="javascript:;" class="remove-cart" onclick="deleteProductCart('<?php echo $id?>')"><i
                                class="fa-duotone fa-trash-can"></i></a>
                    </div>
                    <!-- Product Remove End -->

                </div>
            </div>
            <!-- Cart Procut Wrapper -->

            <!-- Cart Product Total Start -->
            <div class="cart-product-total p-b-20 m-b-20 border-bottom">
                <span class="value">Tổng tiền</span>
                <span class="value">
                    <strong>{{ formatter.format(totalMoney) }}</strong>
                </span>
            </div>
            <!-- Cart Product Total End -->

            <!-- Cart Product Button Start -->
            <div class="cart-product-btn m-t-20">
                <RouterLink to="" class="btn btn-outline-light btn-hover-primary w-100">Giỏ Hàng</RouterLink>
                <RouterLink to="" class="btn btn-outline-light btn-hover-primary w-100 m-t-20">Thanh Toán</RouterLink>
            </div>
            <!-- Cart Product Button End -->
        </div>
        <!-- Header Cart Content End -->
    </div>

    <MobileReponsitive />
</template>