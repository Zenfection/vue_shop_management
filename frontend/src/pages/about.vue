<script setup>
    useHead({
        title: 'Giới Thiệu', 
    })

</script>

<template>
    <!-- About Section Start -->
    <div class="section section-margin">
        <div class="container">
            <div class="row m-b-n30">

                <AboutThumb />

                <AboutContent />

            </div>
        </div>
    </div>
    <!-- About Section End -->

    <!-- Team section Start -->
    <div class="section section-margin">
        <div class="container">
            <div class="row row-cols-md-4 row-cols-sm-2 row-cols-1 m-b-n30 justify-content-center">
                <div class="col m-b-30" data-aos="fade-up" data-aos-duration="1000">

                    <AboutTeam />

                </div>
            </div>
        </div>
    </div>
    <!-- Team section End -->
</template>