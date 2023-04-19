<script setup>
useHead({
    title: 'Giới Thiệu',
})

const animation = {
    // fade left
    fadeLeft: {
        initial: {
            opacity: 0,
            x: 100,
        },
        enter: {
            opacity: 1,
            x: 0,
        },
    },
    // fade right
    fadeRight: {
        initial: {
            opacity: 0,
            x: -100,
        },
        enter: {
            opacity: 1,
            x: 0,
        },
    },
}

</script>

<template>
    <AboutSection  />

    <TeamSection />
</template>