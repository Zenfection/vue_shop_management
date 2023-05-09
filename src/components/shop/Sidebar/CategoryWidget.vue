<script setup lang="ts">

const categoryStore = useCategoryStore()
const productStore = useProductStore()
const router = useRouter()

categoryStore.restoreState()

const currentCategory = computed({
    get: () => useRoute().query.category || productStore.filter.category as string,
    set: (value: string) => {
        productStore.setFilter({ category: value })
        router.push({ query: productStore.filter })
    },
})

const categories = computed(() => categoryStore.categories || []);
</script>

<template>
    <div class="widget-list m-b-50">
        <h3 class="widget-title m-b-30">Danh Mục</h3>
        <div class="sidebar-body justify-content-start">
            <ul class="sidebar-list product-tab-nav">
                <li>
                    <a class="cursor-pointer" :class="{ 'active': currentCategory === undefined }"
                        @click="currentCategory = 'all'">
                        <i class="fa-duotone fa-border-all fa-xl"></i> Tất cả sản phẩm
                    </a>
                </li>
                <li v-for="item in categories" :key="item._id">
                    <a class="cursor-pointer" :class="{ 'active': currentCategory === item.category }"
                        @click="currentCategory = item.category">
                        <i class="fa-duotone fa-xl" :class="{
                            'fa-cake-slice': item.category === 'cake',
                            'fa-lollipop': item.category === 'candy',
                            'fa-burger-fries': item.category === 'fastfood',
                            'fa-cherries': item.category === 'fruit',
                            'fa-ice-cream': item.category === 'icecream'
                        }"></i>
                        {{ item.title }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>