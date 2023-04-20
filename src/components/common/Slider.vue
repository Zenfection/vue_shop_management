<script setup>

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

</script>

<template>
    <VueTinySlider :options="options" ref="slider" @indexChanged="onIndexChange">
        <slot></slot>
    </VueTinySlider>
</template>