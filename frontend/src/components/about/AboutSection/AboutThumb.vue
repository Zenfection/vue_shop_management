<script setup>
import { TransitionFade } from '@morev/vue-transitions';
let aboutBackground = {
    src: images.aboutBackground.src,
    alt: images.aboutBackground.alt,
    width: images.aboutBackground.width,
}

</script>

<template>
    <transition-fade>
        <div class="col-md-6 pe-lg-5 p-r-15 m-b-30" v-motion-slide-left>
            <!-- About Thumb Start -->
            <div class="about-thumb">
                <IKImage class="fit-image" :path="aboutBackground.src" :width="aboutBackground.width"
                    :alt="aboutBackground.alt" />
            </div>
            <!-- About Thumb End -->
        </div>
    </transition-fade>
</template>