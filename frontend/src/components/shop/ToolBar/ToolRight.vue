<script setup>
    const sortby = ref('default')
</script>

<template>
    <div class="shop-top-bar-right">
        <h4 class="title m-r-10">Sắp Xếp: </h4>
        <div class="shop-short-by">
            <select class="nice-select" aria-label=".form-select-sm example" v-model="sortby">
                <option value="default" :selected="sortby === 'default'">Mặc Định
                </option>
                <option value="selling" :selected="sortby === 'selling'">Bán chạy</option>
                <option value="price_asc" :selected="sortby === 'price_asc'">Giá tăng dần
                </option>
                <option value="price_desc" :selected="sortby === 'price_desc'">Giá giảm dần
                </option>
                <option value="best_discount" :selected="sortby === 'best_discount'">Giảm giá nhiều
                </option>
            </select>
        </div>
    </div>
</template>