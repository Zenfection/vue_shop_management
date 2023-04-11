<script setup>
    import { images } from '@/global/index.js'
</script>

<template>
    <div class="col-md-6 text-center text-md-end order-1 order-md-2 m-b-20">
        <div class="payment">
            <a href="#">
                <img :src="images.paymentLarge" alt="Payment">
            </a>
        </div>
    </div>
</template>