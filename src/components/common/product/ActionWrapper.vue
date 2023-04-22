<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true
    }
})

const store = useUserStore()

const id = computed(() => props.id)

const addProduct = (id) => {
    // cart store include: _id, amount, product[id, name, price, discount, image, ranking]
    let cart = store.cart
    // check if product is already in cart
    let index = cart.findIndex(item => item.product._id === id)
    if(index == -1){
        // if not, add product to cart
        
    } else {
        // if yes, increase amount
        cart[index].amount += 1
    }
}
</script>

<template>
    <div class="action-wrapper">
        <a href="javascript:;" class="action" title="Thêm sản phẩm" @click="addProduct(id)">
            <i class="fa-duotone fa-plus-large" />
        </a>
        <a href="javascript:;" class="action wishlist" title="Wishlist">
            <i class="fa-duotone fa-heart" />
        </a>
        <RouterLink to="" class="action cart" title="Cart">
            <i class="fa-duotone fa-cart-circle-plus" />
        </RouterLink>
    </div>
</template>