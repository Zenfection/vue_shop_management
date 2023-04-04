<script setup>
import { shape, homeBackground } from '@/config.js'
import { ref, onMounted, computed } from 'vue';
import anime from 'animejs';

const lettersEl = ref(null);

const widthLetter = computed(() => {
    if (lettersEl.value) {
        return lettersEl.value.getBoundingClientRect().width;
    }
});

onMounted(() => {
    if (lettersEl.value) {
        lettersEl.value.innerHTML = lettersEl.value.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
    }

    anime.timeline({
        loop: true
    })
        .add({
            targets: '.ml11 .line',
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700
        })
        .add({
            targets: '.ml11 .line',
            translateX: [0, widthLetter + 10],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
        }).add({
            targets: '.ml11 .letter',
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: (el, i) => 34 * (i + 1)
        }).add({
            targets: '.ml11',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
});

</script>

<template>
    <!-- start hero -->
    <section class="hero-1 bg-white position-relative d-flex align-items-center justify-content-center overflow-hidden">
        <div class="shapes">
            <div v-for="(item, index) in shape" :key="index" :class="`shape-${index + 1}`">
                <img :src="item" alt="shape">
            </div>
        </div>

        <div class="container">
            <div class="row align-items-center text-center text-lg-start">
                <div class="col-lg-6 mt-4 pt-2" data-aos="fade-in">
                    <h6 class="text-primary mb-3 fw-hero">Được phát triển bởi
                        <a href="https://facebook.com/zenfection" target="_blank">
                            <u><i class="fa-duotone fa-at"></i>Zenfection</u>
                        </a>
                    </h6>
                    <h1 class="ml11 mb-2" ref="lettersEl" >
                        <span class="text-wrapper">
                            <span class="line line1"></span>
                            <span class="letters pb-0 fw-hero">Zen Shop Order</span>
                        </span>
                    </h1>
                    <h5 class="my-4 fw-hero">
                        <i class="fa-duotone fa-phone-volume"></i> Liên hệ với tôi nếu bạn có ý tưởng
                    </h5>

                    <p class="text-danger mb-2 fw-hero">Sản phẩm được phát triển cả nhân nên có rất nhiều lỗi <br> nếu bạn
                        phát hiện hãy liên hệ với tôi bên trên.</p>
                    <!-- <?php
                    if (!empty($user)) {
                    ?>
                        <a href="javascript:;" class="btn btn-primary mt-4" onclick="loadContent('shop')">Mua Hàng
                            <i class="fa-duotone fa-cart-shopping-fast fa-xl"></i>
                            </a>
                        <?php
                        } else {
                        ?>
                            <a href="javascript:;" class="btn btn-primary mt-4" onclick="loadContent('login')">Đăng Nhập
                                <i class="fa-duotone fa-arrow-right-to-bracket fa-xl"></i>
                            </a>
                        <?php
                        }
                        ?> -->
                </div>
                <div class="col-lg-6 mt-lg-4 pt-2 mt-5 d-lg-flex d-none" data-aos="fade-left">
                    <img class="fit-image" :src="homeBackground" alt="home Image">
                </div>
            </div>
        </div>
        <!-- end container -->
    </section>
    <!-- end hero -->

    <!-- start solution -->
    <section class="service-section">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-12 mb-4">
                    <h4 class="fw-semibold mb-3 fw-hero">Chức Năng Nổi Bật</h4>
                    <h5 class="text-secondary fw-normal fw-hero">Liệt kê các nổi bật trong trang web </h5>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-lg-12">
                    <div class="feature-slider">
                        <div>
                            <div class="mt-4 pt-2">
                                <div class="solution border rounded position-relative px-4 py-5 ">
                                    <div class="sw-1 mb-4 sol-icon">
                                        <i class="fa-duotone fa-rabbit-running fa-3x"></i>
                                    </div>
                                    <h5 class="lh-base fs-16 mb-2">Tốc độ ưu việt</h5>
                                    <a class="text-secondary">Không cần phải <span
                                            class="fw-semibold fs-15 text-dark">refresh</span> lại trang khi sử dụng</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="mt-4 pt-2">
                                <div class="solution border rounded position-relative px-4 py-5">
                                    <div class="sw-1 mb-4 sol-icon">
                                        <i class="fa-duotone fa-users-viewfinder fa-3x"></i>
                                    </div>
                                    <h5 class="lh-base fs-16 mb-2">Sử dụng đơn giản</h5>
                                    <a class="text-secondary">Thiết kế sử dụng dựa trên<span
                                            class="fw-semibold fs-15 text-dark"> trải nghiệm thực tế</span></a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="mt-4 pt-2">
                                <div class="solution border rounded position-relative px-4 py-5">
                                    <div class="sw-1 mb-4 sol-icon">
                                        <i class="fa-duotone fa-binary-lock fa-3x"></i>
                                    </div>
                                    <h5 class="lh-base fs-16 mb-2">Mã hóa mật khẩu</h5>
                                    <a class="text-secondary">Sử dụng <span class="fw-semibold fs-15 text-dark">
                                            SHA516</span> để mã hóa mật khẩu của người dùng</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="mt-4 pt-2">
                                <div class="solution border rounded position-relative px-4 py-5">
                                    <div class="sw-1 mb-4 sol-icon">
                                        <i class="fa-duotone fa-fork-knife fa-3x"></i>
                                    </div>
                                    <h5 class="lh-base fs-16 mb-2">Hàng hóa đa dạng</h5>
                                    <a class="text-secondary">Mua bán nhiều sản phẩm và có thể<span
                                            class="fw-semibold fs-15 text-dark"> thêm mới</span></a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="mt-4 pt-2">
                                <div class="solution border rounded position-relative px-4 py-5">
                                    <div class="sw-1 mb-4 sol-icon">
                                        <i class="fa-duotone fa-filters fa-3x"></i>
                                    </div>
                                    <h5 class="lh-base fs-16 mb-2">Bộ lọc thông minh</h5>
                                    <a class="text-secondary">Bộ lọc sản phẩm do chính <span
                                            class="fw-semibold fs-15 text-dark"> Zen</span> phát triển</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="mt-4 pt-2">
                                <div class="solution border rounded position-relative px-4 py-5">
                                    <div class="sw-1 mb-4 sol-icon">
                                        <i class="fa-duotone fa-box-circle-check fa-3x"></i>
                                    </div>
                                    <h5 class="lh-base fs-16 mb-2">Xem lại đơn hàng</h5>
                                    <a class="text-secondary">Theo dõi <span class="fw-semibold fs-15 text-dark"> đơn
                                            hàng</span> cá nhân vừa đặt dễ dàng</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="mt-4 pt-2">
                                <div class="solution border rounded position-relative px-4 py-5">
                                    <div class="sw-1 mb-4 sol-icon">
                                        <i class="fa-duotone fa-basket-shopping fa-3x"></i>
                                    </div>
                                    <h5 class="lh-base fs-16 mb-2">Giỏ hàng thông minh</h5>
                                    <a class="text-secondary"><span class="fw-semibold fs-15 text-dark">Thêm, sửa,
                                            xóa</span> sản phẩm với hiệu suất nhanh chóng</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="mt-4 pt-2">
                                <div class="solution border rounded position-relative px-4 py-5">
                                    <div class="sw-1 mb-4 sol-icon">
                                        <i class="fa-duotone fa-eye-low-vision fa-3x"></i>
                                    </div>
                                    <h5 class="lh-base fs-16 mb-2">Không lấy dữ diệu</h5>
                                    <a class="text-secondary">Cam kết không lấy bất cứ<span
                                            class="fw-semibold fs-15 text-dark"> dữ liệu</span> của người dùng</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end solution -->

    <!-- Category Section Start -->

    <!-- Category Section End -->

    <!-- Product Section Start -->

    <!-- Product Section End -->
</template>
