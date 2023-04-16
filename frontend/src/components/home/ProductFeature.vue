<script setup>
const tabs = [
    {
        id: 'top-product-ranking',
        filter: 'ranking',
        active: true
    },
    {
        id: 'top-product-discount',
        filter: 'discount',
        active: false
    },
    {
        id: 'top-product-seller',
        filter: 'sold',
        active: false
    }
]
</script>

<template>
    <div class="section position-relative">
        <div class="container">
            <!-- Product Tabs -->
            <div class="row">
                <div class="col-12">
                    <ul class="product-tab-nav nav justify-content-center m-b-n15 p-b-40 title-border-bottom">
                        <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="tab" href="#top-product-ranking">Đánh giá cao</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#top-product-discount">Giảm giá nhiều</a>
                        </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#top-product-seller">Sản phẩm mua nhiều</a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Product Tab Content -->
        <div class="row">
            <div class="col-12">
                <div class="tab-content">
                    <div v-for="(tab, index) in tabs" :key="index" class="tab-pane fade"
                        :class="{ 'show active': tab.active }" :id="tab.id">
                        <div class="row row-cols-3 g-4">
                            <Suspense>
                                <template #default>
                                    <TopProduct :filter="tab.filter" />
                                </template>
                                <template #fallback>
                                    <TopProductSkeleton :total="8" />
                                </template>
                            </Suspense>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>