<template>
    <div class="col-lg-5 d-none d-lg-block navbar navbar-expand-lg" data-aos="fade-in" data-aos-duration="1000">
        <div class="main-menu">
            <ul>
                <li class="nav-item">
                    <RouterLink to="/" exact-active-class="active" active-class="active">
                        Trang Chủ
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="about" exact-active-class="active" active-class="active">
                        Giới Thiệu
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="shop" exact-active-class="active" active-class="active">
                        Shop
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="contact" exact-active-class="active"
                        active-class="active">
                        Liên Hệ
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>