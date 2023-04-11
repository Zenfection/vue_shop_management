<template>
    <div class="col-12 col-sm-6 col-lg-3 m-b-40">
        <div class="single-footer-widget">
            <h2 class="widget-title">Tính Năng</h2>
            <ul class="widget-list">
                <li><router-link :to="{ name: 'shop' }">Mua Hàng</router-link></li>
                <li><router-link :to="{ name: 'account' }">Dashboard</router-link></li>
            </ul>
        </div>
    </div>
</template>