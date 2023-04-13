<script setup>
let shapes = images.shape
let homeBackground = {
    src: images.homeBackground.src,
    alt: images.homeBackground.alt,
    width: images.homeBackground.width,
}

const userStore = UserStore()
userStore.restoreState()

const lettersEl = ref(null)
const isLogged = ref(userStore.isAuthenticated ?? false)

onMounted(() => {
    if (lettersEl.value) {
        lettersEl.value.innerHTML = lettersEl.value.textContent.replace(
            /([^\x00-\x80]|\w)/g,
            "<span class='letter'>$&</span>"
        )
        const widthLetter = lettersEl.value.getBoundingClientRect().width
        anime.timeline({
            loop: true
        })
            .add({
                targets: '.ml11 .line',
                scaleY: [0, 1],
                opacity: [0.5, 1],
                easing: 'easeOutExpo',
                duration: 700
            })
            .add({
                targets: '.ml11 .line',
                translateX: [0, widthLetter + 10],
                easing: 'easeOutExpo',
                duration: 700,
                delay: 100
            })
            .add({
                targets: '.ml11 .letter',
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 600,
                offset: '-=775',
                delay: (el, i) => 34 * (i + 1)
            })
            .add({
                targets: '.ml11',
                opacity: 0,
                duration: 1000,
                easing: 'easeOutExpo',
                delay: 1000
            })
    }
})
</script>

<template>
    <section class="hero-1 bg-white position-relative d-flex align-items-center justify-content-center overflow-hidden">
        <div class="shapes">
            <div v-for="(item, index) in shapes" :key="index" :class="`shape-${index + 1}`">
                <IKImage
                    :path="item"
                />
            </div>
        </div>

        <div class="container">
            <div class="row align-items-center text-center text-lg-start">
                <div class="col-lg-6 mt-4 pt-2" data-aos="fade-in">
                    <h6 class="text-primary mb-3 fw-hero">
                        Được phát triển bởi
                        <a href="https://facebook.com/zenfection" target="_blank">
                            <u><i class="fa-duotone fa-at"></i>Zenfection</u>
                        </a>
                    </h6>
                    <h1 class="ml11 mb-2">
                        <span class="text-wrapper">
                            <span class="line line1"></span>
                            <span class="letters pb-0 fw-hero" ref="lettersEl">Zen Shop Order</span>
                        </span>
                    </h1>
                    <h5 class="my-4 fw-hero">
                        <i class="fa-duotone fa-phone-volume"></i> Liên hệ với tôi nếu bạn có ý tưởng
                    </h5>

                    <p class="text-danger mb-2 fw-hero">
                        Sản phẩm được phát triển cả nhân nên có rất nhiều lỗi <br />
                        nếu bạn phát hiện hãy liên hệ với tôi bên trên.
                    </p>
                    <router-link v-if="isLogged" :to="{ name: 'shop' }" class="btn btn-primary mt-4">Mua Hàng
                        <i class="fa-duotone fa-cart-shopping-fast fa-xl"></i>
                    </router-link>
                    <router-link v-if="!isLogged" :to="{ name: 'login' }" class="btn btn-primary mt-4">Đăng Nhập
                        <i class="fa-duotone fa-arrow-right-to-bracket fa-xl"></i>
                    </router-link>
                </div>
                <div class="col-lg-6 mt-lg-4 pt-2 mt-5 d-lg-flex d-none" data-aos="fade-left">
                    <IKImage class="fit-image" :path="homeBackground.src" :alt="homeBackground.alt" :width="homeBackground.width" /> 
                </div>
            </div>
        </div>
        <!-- end container -->
    </section>
</template>