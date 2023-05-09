<script setup lang="ts">

const cartStore = useCategoryStore()
const productStore = useProductStore()

const categories = ref(await cartStore.fetchCategories())

const currentCategory = (category: string) => {
    productStore.filter.category = category
}
</script>

<template>
    <div class="section section-margin">
        <div class="container">
            <h2>Loại Đồ Ăn</h2>
            <!-- Banners Start -->
            <div class="row row-cols-md-3 row-cols-sm-2 row-cols-1 m-b-n30">
                <div class="col m-b-30" v-for="item in categories" :key="item._id" v-motion-fade-visible-once>
                    <div class="banner hover-style" v-if="item.active">
                        <RouterLink :to="`/shop?category=${item.category}`" @click="currentCategory(item.category)">
                            <IKImage :path="item.image" class="fit-image p-10" alt="Banner Image" width="450" />
                        </RouterLink>
                    </div>
                </div>
            </div>
            <!-- Banners End -->
        </div>
    </div>
</template>