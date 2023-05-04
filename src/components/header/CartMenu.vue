<script setup>

//* Store
const store = useUserStore()
if (!store.user) {
    store.restoreState()
}

//* Ref
const show = ref(false)

//* Computed
const cart = computed(() => store.cart)
const isLogged = computed(() => store.isAuthenticated)
const totalMoney = computed(() => store.totalMoney)

//* Function
const fetchCartUser = async () => {
    try {
        const data = {
            username: store.user.username,
        }
        const response = await UserService.getCart(data)
        cart.value = response
        store.setCart(response)
    } catch (error) {
        console.log(error)
    }
}

const removeCart = async (item) => {
    try {
        const data = {
            username: store.user.username,
            id_product: item.product._id,
            amount: item.amount,
        };
        const response = await UserService.removeCart(data);
        if (response) {
            cart.value.splice(cart.value.indexOf(item), 1);
        }
    } catch (error) {
        console.log(error);
    }
}

const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
})

function discountPrice(price, discount) {
    return price - (price * discount) / 100
}

onMounted(async() => {
    if (isLogged.value) {
        await fetchCartUser();
    }
})

</script>


<template>
    <!--! Header Action Button Start -->
    <div class="header-action-btn header-action-btn-cart d-none d-sm-flex">
        <div class="cart-visible cursor-pointer" @click="show = !show">
            <i class="fa-duotone fa-bag-shopping fa-xl"></i>
            <span class="header-action-num" v-if="isLogged">
                {{ cart.length }}
            </span>
        </div>
        <!-- Header Cart Content Start -->
        <ul class="header-cart-content" style="display: block" v-if="show" v-motion-fade v-auto-animate>
            <!-- Cart Procut Wrapper Start  -->
            <li class="cart-product-wrapper" v-for="item in cart" :key="item._id">
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
                        <a class="remove-cart" @click="removeCart(item)">
                            <i class="fa-duotone fa-trash-can" />
                        </a>
                    </div>
                    <!-- Product Remove End -->

                </div>
            </li>
            <!-- Cart Procut Wrapper -->

            <!-- Cart Product Total Start -->
            <div class="cart-product-total p-b-20 m-b-20 border-bottom">
                <span class="value">Tổng tiền</span>
                <span class="value">
                    <strong>{{ totalMoney }}</strong>
                </span>
            </div>
            <!-- Cart Product Total End -->

            <!-- Cart Product Button Start -->
            <div class="cart-product-btn m-t-20">
                <RouterLink to="" class="btn btn-outline-light btn-hover-primary w-100">Giỏ Hàng</RouterLink>
                <RouterLink to="/checkout" class="btn btn-outline-light btn-hover-primary w-100 m-t-20">Thanh Toán</RouterLink>
            </div>
            <!-- Cart Product Button End -->
        </ul>
        <!-- Header Cart Content End -->
    </div>

    <MobileReponsitive />
</template>