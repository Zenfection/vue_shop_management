<script setup>

const store = useCategoryStore()
store.restoreState()

const query = useRoute().query
const router = useRouter()

const currentCategory = ref(store.currentCategory)
const categories = ref(store.categories)

watch(currentCategory, (value) => {
    store.setCurrentCategory(value)
    const update = { ...query, category: value }
    router.push({ query: update })
})

</script>

<template>
    <div class="widget-list m-b-50">
        <h3 class="widget-title m-b-30">Danh Mục</h3>
        <div class="sidebar-body justify-content-start">
            <ul class="sidebar-list product-tab-nav">
                <li>
                    <a class="cursor-pointer" :class="{ 'active': currentCategory === 'all' }" @click="currentCategory = 'all'">
                        <i class="fa-duotone fa-border-all fa-xl"></i> Tất cả sản phẩm
                    </a>
                </li>
                <li v-for="item in categories" :key="item._id">
                    <a class="cursor-pointer" :class="{ 'active': currentCategory === item.category }" @click="currentCategory = item.category">
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