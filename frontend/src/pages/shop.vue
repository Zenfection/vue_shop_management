<script setup>
useHead({
    title: 'Mua Hàng',
})

const store = useProductStore()

const page = computed(() => store.page)
const keyword = computed(() => store.keyword)
const filter = computed(() => store.filter)
</script>

<template>
    <div class="section section-margin">
        <div class="container">
            <div class="row flex-row-reverse">
                <div class="col-lg-9 col-12" data-aos="fade-in" data-aos-duration="500">

                    <ToolBar />
                    
                    <Suspense>
                        <template #default>
                            <ProductContent :page="page" :keyword="keyword"/>
                        </template>

                        <template #fallback>
                            <ProductContentSkeleton :total="9" />
                        </template>
                    </Suspense>



                    <Paginator :page="page"></Paginator>

                </div>

                <SideBar />
            </div>
        </div>
    </div>
</template>