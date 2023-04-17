<script setup>

const store = useProductStore()
const countProduct = computed(() => store.countProduct)

const query = useRoute().query
const router = useRouter()
const view = ref(store.view)

const updateView = (value) => {
    view.value = value,
    router.push({ query: { ...query, view: value } })
}

</script>

<template>
    <div class="shop-top-bar-left">
        <div class="shop_toolbar_btn">
            <button data-role="grid_3" type="button" class="btn-grid-3" title="Grid" :class="{ 'active': view === 'grid' }"
                @click="updateView('grid')">
                <i class="fa-duotone fa-grid-dividers"></i>
            </button>

            <button data-role="grid_list" type="button" class="btn-list" title="List" :class="{ 'active': view === 'list' }"
                @click="updateView('list')">
                <i class="fa-duotone fa-align-justify"></i>
            </button>
        </div>
        <div class="shop-top-show">
            <span>Tổng cộng có {{ countProduct }} sản phẩm</span>
        </div>
    </div>
</template>