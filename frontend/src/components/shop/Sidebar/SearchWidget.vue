<script setup>
    const keyword = ref('')

    const store = useProductStore()

    watch(keyword, (value) => {
        store.setKeyword(value)
    })
</script>

<template>
    <div class="widget-list m-b-50">
        <div class="search-box">
            <input type="text" class="form-control" placeholder="Nhập tên sản phẩm" aria-label="Nhập tên sản phẩm"
                v-model="keyword" style="font-size: 14px;">
            <button class="search-icon" type="button">
                <i class="fa-duotone fa-magnifying-glass"></i>
            </button>
        </div>
    </div>
</template>