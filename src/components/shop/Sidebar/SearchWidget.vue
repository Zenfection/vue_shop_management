<script setup>

const store = useProductStore()

const query = useRoute().query
const router = useRouter()

const keyword = ref(store.keyword)

watch(keyword, (value) => {
    store.setKeyword(value)
    const update = { ...query, keyword: value }
    router.push({ query: update })
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