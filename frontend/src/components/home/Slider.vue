<script setup>
    import { contents } from '@/global/index.js'
    import { onMounted } from 'vue';
    import { tns } from "tiny-slider/src/tiny-slider"

    onMounted(() => {
        tns({
        container: '.feature-slider',
        loop: true,
        navPosition: "bottom",
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
    });
    })
</script>

<template>
    <section class="service-section">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-12 mb-4">
                    <h4 class="fw-semibold mb-3 fw-hero">Chức Năng Nổi Bật</h4>
                    <h5 class="text-secondary fw-normal fw-hero">Liệt kê các nổi bật trong trang web</h5>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-lg-12">
                    <div class="feature-slider">
                        <div v-for="slider in contents.sliders" :key="slider.title">
                            <div class="mt-4 pt-2">
                                <div class="solution border rounded position-relative px-4 py-5 ">
                                    <div class="sw-1 mb-4 sol-icon">
                                        <i :class="slider.icon"></i>
                                    </div>
                                    <h5 class="lh-base fs-16 mb-2">{{ slider.title }}</h5>
                                    <a class="text-secondary" v-html="slider.description"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
    @import "tiny-slider/dist/tiny-slider.css";
</style>