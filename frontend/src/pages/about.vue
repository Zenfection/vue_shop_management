<script setup>
    useHead({
        title: 'Giới Thiệu', 
    })
    let aboutBackground = {
        src: images.aboutBackground.src,
        alt: images.aboutBackground.alt,
        width: images.aboutBackground.width,
    }

    let team1 = {
        src: images.team1.src,
        alt: images.team1.alt,
        height: images.team1.height,
    }

</script>

<template>
    <!-- About Section Start -->
    <div class="section section-margin">
        <div class="container">
            <div class="row m-b-n30">
                <div class="col-md-6 pe-lg-5 p-r-15 m-b-30" data-aos="fade-right" data-aos-duration="1000">
                    <!-- About Thumb Start -->
                    <div class="about-thumb">
                        <IKImage class="fit-image" :path="aboutBackground.src" :width="aboutBackground.width" :alt="aboutBackground.alt" />
                    </div>
                    <!-- About Thumb End -->
                </div>
                <div class="col-md-6 align-self-center m-b-30" data-aos="fade-left" data-aos-duration="1500">
                    <!-- About Content Start -->
                    <div class="about-content">
                        <h2 class="title">Dự án Web bán thức ăn vặt</h2>
                        <p>
                            Đây là dự web cơ bản được viết bằng PHP thuần, chủ yếu là để học tập và các công nghệ
                            dùng dưới đây.
                        </p>
                        <ul class="about-content-list">
                            <li>
                                <span><i class="fa-brands fa-bootstrap fa-xl"></i></span> Bootstrap 5
                            </li>
                            <li>
                                <span><i class="fa-brands fa-js fa-xl"></i></span> Jquery Ajax
                            </li>
                            <li>
                                <span><i class="fa-brands fa-php fa-xl"></i></span> PHP MVC
                            </li>
                        </ul>
                        <RouterLink to="contact" class="btn btn-primary btn-hover-dark">Liên
                            Hệ</RouterLink>
                    </div>
                    <!-- About Content End -->
                </div>
            </div>
        </div>
    </div>
    <!-- About Section End -->

    <!-- Team section Start -->
    <div class="section section-margin">
        <div class="container">
            <div class="row row-cols-md-4 row-cols-sm-2 row-cols-1 m-b-n30 justify-content-center">
                <div class="col m-b-30" data-aos="fade-up" data-aos-duration="1000">
                    <!-- Single Team Wrapper Start -->
                    <div class="single-team-wrapper">
                        <div class="thumb">
                            <RouterLink to="contact">
                                <IKImage class="fit-image" :path="team1.src" :alt="team1.alt" :height="team1.height"/>
                            </RouterLink>
                            <!-- Social Shear Start -->
                            <div class="social-share">
                                <a title="Facebook" href="https://facebook.com/zenfection" target="_blank">
                                    <i class="fa-brands fa-facebook fa-xl" style="padding-top: 4px"></i>
                                </a>
                                <a title="Github" href="https://github.com/zenfection1412" target="_blank">
                                    <i class="fa-brands fa-github fa-xl" style="padding-top: 4px"></i>
                                </a>
                                <a title="Linkedin" href="https://linkedin.com/in/zenfection" target="_blank">
                                    <i class="fa-brands fa-linkedin fa-xl" style="padding-top: 4px"></i>
                                </a>
                                <a title="Pinterest" href="https://pinterest.com/zenfection" target="_blank">
                                    <i class="fa-brands fa-pinterest fa-xl" style="padding-top: 4px"></i>
                                </a>
                                <a title="Instagram" href="https://instagram.com/zenfection" target="_blank">
                                    <i class="fa-brands fa-instagram fa-xl" style="padding-top: 4px"></i>
                                </a>
                            </div>
                            <!-- Social Shear End -->
                        </div>
                        <div class="content">
                            <h4 class="title">Lê Tuấn Kiệt</h4>
                            <h4 class="subtitle">Trưởng dự án</h4>
                        </div>
                    </div>
                    <!-- Single Team Wrapper End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Team section End -->
</template>