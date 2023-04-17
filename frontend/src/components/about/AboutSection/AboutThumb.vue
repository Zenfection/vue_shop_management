<script setup>
let aboutBackground = {
    src: images.aboutBackground.src,
    alt: images.aboutBackground.alt,
    width: images.aboutBackground.width,
}

</script>

<template>
    <aos-vue class="col-md-6 pe-lg-5 p-r-15 m-b-30" animation="fade-right" :duration="700">
        <!-- About Thumb Start -->
        <div class="about-thumb">
            <IKImage class="fit-image" :path="aboutBackground.src" :width="aboutBackground.width"
                :alt="aboutBackground.alt" />
        </div>
        <!-- About Thumb End -->
    </aos-vue>
</template>