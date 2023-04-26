<script setup>

const store = useCategoryStore()

const getCategories = async () => {
    return new Promise(async (resolve) => {
        if (store.existState()) {
            store.restoreState();
            resolve(store.categories);
        } else {
            try {
                const response = await CategoryService.getAll();
                store.saveState(response);
                resolve(response);
            } catch (error) {
                console.error(error);
            }
        }
    });
}

const categories = ref(await getCategories())
</script>

<template>
    <div class="section section-margin">
        <div class="container">
            <h2>Loại Đồ Ăn</h2>
            <!-- Banners Start -->
            <div class="row row-cols-md-3 row-cols-sm-2 row-cols-1 m-b-n30">
                <div class="col m-b-30" v-for="item in categories" :key="item.name" v-motion-fade-visible-once>
                    <div class="banner hover-style" v-if="item.active">
                        <RouterLink :to="`/shop?category=${item.category}`" @click="store.currentCategory = item.category">
                            <IKImage :path="item.image" class="fit-image p-10" alt="Banner Image" width="450" />
                        </RouterLink>
                    </div>
                </div>
            </div>
            <!-- Banners End -->
        </div>
    </div>
</template>