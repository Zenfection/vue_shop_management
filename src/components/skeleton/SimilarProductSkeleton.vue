<script setup>

const props = defineProps({
    total: {
        type: Number,
        required: true
    },
})

const slider = ref(null)

const options = {
    loop: true,
    navPosition: 'bottom',
    speed: 400,
    mouseDrag: true,
    controls: false,
    autoplay: true,
    autoplayButtonOutput: false,
    responsive: {
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 1
        },
        700: {
            edgePadding: 20,
            gutter: 30,
            items: 2
        },
        900: {
            edgePadding: 20,
            items: 4
        }
    }
}

function onIndexChange(info) {
    console.log(info);
}

const total = computed(() => props.total)
</script>

<template>
    <div class="service-section section section-margin">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-12">
                    <div class="section-title text-center">
                        <h3 class="title">Sản phẩm tương tự</h3>
                    </div>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-lg-12">
                    <VueTinySlider :options="options" ref="slider" @indexChanged="onIndexChange">
                        <div class="mt-4 pt-2" v-for="index of total" :key="index">
                            <div class="solution border rounded position-relative px-4 py-5">
                                <div class="product-wrapper">
                                    <div class="product">
                                        <!-- Thumb Start  -->
                                        <div class="thumb product-inner">
                                            <div class="image">
                                                <Skeletor class="fit-image rounded" height="250" width="250" />
                                            </div>
                                            <span class="badges">
                                                <span class="sale">
                                                    <Skeletor height="20" width="30" />
                                                </span>
                                            </span>
                                        </div>
                                        <!-- Thumb End  -->

                                        <!-- Content Start  -->
                                        <div class="content">
                                            <h5 class="title d-flex justify-content-center">
                                                <Skeletor class="product-title" height="20" width="150" />
                                            </h5>
                                            <span class="rating">
                                                <Skeletor height="20" width="100" />
                                            </span>
                                            <span class="price">
                                                <Skeletor height="20" width="100" />
                                            </span>
                                        </div>
                                        <!-- Content End  -->
                                    </div>
                                </div>
                                <!-- Product End -->
                            </div>
                        </div>
                    </VueTinySlider>
                </div>
            </div>
        </div>
    </div>
</template>
