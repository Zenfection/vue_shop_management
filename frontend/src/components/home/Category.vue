<script setup>
const categories = ref(null)
const categoryStore = CategoryStore()

const getCategories = async () => {
    try {
        if(await categoryStore.existState()){
            await categoryStore.restoreState();
            categories.value = categoryStore.allCategories;
        } else {
            const response = await CategoryService.getAll();
            if (response) {
                categories.value = response;
            }
            categoryStore.saveState(categories.value);
        }
    } catch (error) {
        console.error(error);
    }
}

onMounted(() => {
    getCategories();
});
</script>

<template>
    <div class="section section-margin">
        <div class="container">
            <h2>Loại Đồ Ăn</h2>
            <!-- Banners Start -->
            <div class="row row-cols-md-3 row-cols-sm-2 row-cols-1 m-b-n30">
                <div class="col m-b-30" data-aos="fade-in" v-for="category in categories" :key="category.name">
                    <div class="banner hover-style" v-if="category.active">
                        <RouterLink to="">
                            <IKImage :path="category.image" class="fit-image p-10" alt="Banner Image" width="450" />
                        </RouterLink>
                    </div>
                </div>
            </div>
            <!-- Banners End -->
        </div>
    </div>
</template>