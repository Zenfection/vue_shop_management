<script setup lang="ts">

const productStore = useProductStore()
const router = useRouter()

const keyword = computed({
    get: () => useRoute().query.keyword || productStore.filter.keyword as string,
    set: (value: string) => {
        console.log(value)
        productStore.setFilter({ keyword: value })
        console.log(productStore.filter)
        router.push({ query: productStore.filter })
    },
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