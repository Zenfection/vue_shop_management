<script setup>
    const store = useUserStore()
    const router = useRouter()

    useHead({
        title: 'Trang Chủ',
    })

    const logout = () => {
        store.logout()
        router.push('/')
    }
</script>

<template>
<!-- My Account Section Start -->
<div class="section section-margin">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <!-- My Account Page Start -->
                <div class="myaccount-page-wrapper">
                    <div class="row">
                        <!-- My Account Tab Menu Start -->
                        <div class="col-lg-3 col-md-4" v-motion-slide-left>
                            <div class="myaccount-tab-menu nav" role="tablist">
                                <a href="#dashboard" class="active" data-bs-toggle="tab">
                                    <i class="fa-duotone fa-grid-horizontal"/>Dashboard
                                </a>
                                <a href="#orders" data-bs-toggle="tab">
                                    <i class="fa-duotone fa-cart-flatbed-boxes"/> Đơn Hàng
                                </a>
                                <a href="#payment-method" data-bs-toggle="tab">
                                    <i class="fa-duotone fa-credit-card"/> Thanh Toán
                                </a>
                                <a href="#account-info" data-bs-toggle="tab">
                                    <i class="fa-duotone fa-user-pen"/> Chi Tiết
                                </a>
                                <a href="#account-password" data-bs-toggle="tab"><i class="fa-duotone fa-key-skeleton" /> Mật Khẩu</a>
                                <a @click="logout">
                                    <i class="fa-duotone fa-arrow-right-from-bracket" /> Đăng Xuất
                                </a>
                            </div>
                        </div>
                        <!-- My Account Tab Menu End -->

                        <!-- My Account Tab Content Start -->
                        <div class="col-lg-9 col-md-8" v-motion-slide-right>
                            <div class="tab-content" id="myaccountContent">

                                <DashboardAccount />

                                <OrdersAccount />

                                <PaymentAccount />

                                <InfoAccount />

                                <PasswordAccount />
                            </div>
                        </div>
                        <!-- My Account Tab Content End -->
                    </div>
                </div>
                <!-- My Account Page End -->
            </div>
        </div>
    </div>
</div>
</template>