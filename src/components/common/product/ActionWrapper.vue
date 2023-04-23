<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true
    }
})

const store = useUserStore()

const id = computed(() => props.id)

const addProduct = async (id, amount) => {
    let cart = store.cart
    // check if product is already in cart
    const data = {
        username: store.user.username,
        id_product: id,
        amount
    }
    console.log(data)
    const result = await UserService.addCart(data)
    if(result){
        // check if product is already in cart
        let index = cart.findIndex(item => item.product._id === id)
        if(index == -1){
            cart.push(result)
        } else {
            cart[index].amount += 1
        }
    }
    store.setCart(cart)
}
</script>

<template>
    <div class="action-wrapper">
        <a href="javascript:;" class="action" title="Thêm sản phẩm" @click="addProduct(id, 1)">
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