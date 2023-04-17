<template>
    <aos-vue class="col-md-6 align-self-center m-b-30" animation="fade-left" :duration="600">
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
    </aos-vue>
</template>