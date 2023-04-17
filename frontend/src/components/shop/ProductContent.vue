<script setup>
const storeProduct = useProductStore()
const storeCategory = useCategoryStore()

const page = computed(() => storeProduct.page)
const keyword = computed(() => storeProduct.keyword)
const category =  computed(() => storeCategory.currentCategory)

const fetchProduct = async () => {
    return new Promise(async (resolve) => {
        console.log(category.value)
        const response = await ProductService.getFilter({
            page: page.value,
            keyword: keyword.value,
            category: category.value,
            limit: 9
        });
        storeProduct.setCountProduct(response.total)
        resolve(response.data)
    });
}

const products = ref(await fetchProduct())

// watch page, keyword, category
watch([page, keyword, category], () => {
    fetchProduct().then((response) => {
        products.value = response
    })
})

// onMounted(() => {
//     fetchProduct().then((response) => {
//         products.value = response
//     })
// })


const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

function discountPrice(price, discount) {
    return price - (price * discount / 100);
}
</script>

<template>
    <div class="row shop_wrapper grid_3">
        <aos-vue class="col-lg-4 col-md-4 col-sm-6 product product-inner" v-for="product in products" :key="product._id" animation="fade-in" :duration="200" :once="true">  
            <div class="thumb">
                <RouterLink :to="`product/${product._id}`" class="image">
                    <IKImage class="fit-image p-10" :path="`/products/${product.image}`" alt="Product" width="300" />
                </RouterLink>

                <span class="badges" v-if="product.discount > 0">
                    <span class="sale">{{ product.discount }} %</span>
                </span>

                <div class="action-wrapper">
                    <a class="action" title="Thêm sản phẩm" onclick="addProductCart('<?php echo $id ?>', 1)">
                        <i class="fa-duotone fa-plus-large"></i>
                    </a>
                    <a class="action wishlist" title="Wishlist">
                        <i class="fa-duotone fa-heart"></i>
                    </a>
                    <a href="javascript:;" class="action cart" title="Cart" onclick="loadContent('viewcart')">
                        <i class="fa-duotone fa-cart-circle-plus"></i>
                    </a>
                </div>
            </div>

            <div class="content">
                <h5 class="title">
                    <RouterLink :to="`product/${product._id}`" class="product-title">
                        {{ product.name }}
                    </RouterLink>
                </h5>
                <span class="rating">
                    <Rating :rating="product.ranking" read-only :increment="0.5" />
                </span>
                <span class="price" v-if="product.discount > 0">
                    <span class="new">
                        {{ formatter.format(discountPrice(product.price, product.discount)) }}
                    </span>
                    <span class="old">{{ formatter.format(product.price) }}></span>
                </span>
                <span class="price" v-else>
                    <span class="new">{{ formatter.format(product.price) }}</span>
                </span>
                <p>{{ product.description }}</p>

                <!-- Cart Button Start -->
                <div class="cart-btn action-btn">
                    <div class="action-cart-btn-wrapper d-flex">
                        <div class="add-to-cart">
                        <a class="btn btn-primary btn-hover-dark rounded-0" style="width: 110%">Thêm Vào Giỏ</a>
                    </div>
                        <a href="#" title="Wishlist" class="action">
                            <i class="fa-duotone fa-heart"></i>
                        </a>
                    </div>
                </div>
                <!-- Cart Button End -->

                <!-- <div v-if="product.quantity == 0" class='ribbon bg-danger' style='top: -20px' onload="soldOutRibbon()">
                    Đã Bán Hết
                </div> -->
            </div>
        </aos-vue>
    </div>
</template>