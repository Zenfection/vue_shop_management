<template>
    <HeroIntro />

    <Slider />

    <Suspense>
        <template #default>
            <Category />
        </template>
        <template #fallback>
            <CategorySkeleton :width="350" :height="300" :total="6" />
        </template>
    </Suspense>

    <ProductFeature />
</template>

