<script setup>
useHead({
    title: 'Mua Hàng',
})

</script>

<template>
    <div class="section section-margin">
        <div class="container">
            <div class="row flex-row-reverse">
                <div class="col-lg-9 col-12">

                    <ToolBar />
                    
                    <Suspense>
                        <template #default>
                            <ProductContent />
                        </template>

                        <template #fallback>
                            <ProductContentSkeleton :total="9" />
                        </template>
                    </Suspense>
                </div>

                <SideBar />


            </div>
        </div>
    </div>
</template>