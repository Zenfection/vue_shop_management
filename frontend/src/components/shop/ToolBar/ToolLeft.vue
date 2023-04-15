<script setup>
const store = useProductStore()
const countProduct = ref(null)

onMounted(async() => {
    try { 
        const response = await ProductService.getCount();
        countProduct.value = response.value;
        store.setCountProduct(countProduct.value)
    } catch (exception) {
        console.log(exception)
    }
})
</script>

<template>
    <div class="shop-top-bar-left">
        <div class="shop_toolbar_btn">
            <button data-role="grid_3" type="button" class="btn-grid-3 active" title="Grid">
                <i class="fa-duotone fa-grid-dividers"></i>
            </button>
            <button data-role="grid_list" type="button" class="btn-list" title="List">
                <i class="fa-duotone fa-align-justify"></i>
            </button>
        </div>
        <div class="shop-top-show">
            <span>Tổng cộng có {{ countProduct }} sản phẩm</span>
        </div>
    </div>
</template>