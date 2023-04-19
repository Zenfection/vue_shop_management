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

                    <ToolBar v-motion-fade />
                    
                    <Suspense>
                        <template #default>
                            <ProductContent v-motion-fade />
                        </template>

                        <template #fallback>
                            <ProductContentSkeleton :total="9"  />
                        </template>
                    </Suspense>
                </div>

                <SideBar v-motion-fade />


            </div>
        </div>
    </div>
</template>