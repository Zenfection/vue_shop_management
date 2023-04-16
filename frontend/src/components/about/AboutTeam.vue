<script setup>
    let team1 = {
        src: images.team1.src,
        alt: images.team1.alt,
        height: images.team1.height,
    }
</script>

<template>
    <div class="single-team-wrapper">
        <div class="thumb">
            <RouterLink to="contact">
                <IKImage class="fit-image" :path="team1.src" :alt="team1.alt" :height="team1.height" />
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
</template>