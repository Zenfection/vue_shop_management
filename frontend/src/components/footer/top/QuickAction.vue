<template>
    <div class="col-12 col-sm-6 col-lg-3 m-b-40">
        <div class="single-footer-widget">
            <h2 class="widget-title">Thao Tác Nhanh</h2>
            <ul class="widget-list">
                <li><router-link :to="{ name: 'login' }">Đăng nhập</router-link></li>
                <li><router-link :to="{ name: 'register' }">Đăng ký</router-link></li>
                <li><router-link :to="{ name: 'cart' }">Xem Giỏ Hàng</router-link></li>
                <li><a>Thanh Toán</a></li>
            </ul>
        </div>
    </div>
</template>