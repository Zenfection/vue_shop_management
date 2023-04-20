

<template>
    <div class="section section-margin">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 offset-lg-0 col-md-8 offset-md-2">
                        <!-- ?? Image Product -->
                        <Skeletor class="w-100 rounded" height="400px"/>
                </div>
                <div class="col-lg-7">
                    <div class="product-summery position-relative">
                        <!--?? Product Head -->
                        <div class="product-head m-b-15">
                            <Skeletor class='product-title' height="30px" width="200px"/>
                        </div>

                        <!--?? Rating  -->
                        <span class="rating justify-content-start m-b-10">
                            <Skeletor height="30px" width="120px"/>
                        </span>

                        <!--?? Price Box  -->
                        <span class="price-box m-b-10">
                            <Skeletor height="30px" width="150px"/>
                        </span>

                        <!--?? Product Quantity  -->
                        <div class="product-inventroy m-b-15">
                            <span class='inventroy-title'> <strong>Có sẵn: </strong></span>
                            <span class='inventory-varient'> 
                                <Skeletor height="30px" width="100px"/>
                            </span>
                        </div>

                        <!--?? Description  -->
                        <p class='desc-content m-b-25'>
                            <Skeleton height="20px" width="150px"/>
                        </p>

                        <!--?? Quantity Box -->
                        <div class="quantity d-flex align-items-center m-b-25">
                            <span class="m-r-10"><strong>Số lượng: </strong></span>
                            <div class="cart-plus-minus">
                                <input class="cart-plus-minus-box" value="1" type="text" id="qty">
                                <div class="dec qtybutton">-</div>
                                <div class="inc qtybutton">+</div>
                            </div>
                        </div>

                        <!-- Cart Button -->
                        <div class="cart-btn action-btn m-b-30">
                            <div class="action-cart-btn-wrapper d-flex">
                                <div class="add-to-cart cursor-pointer">
                                    <a class="btn btn-primary btn-hover-dark rounded" style="width: 110%">Thêm Vào Giỏ</a>
                                </div>
                                <!-- <a href="#" title="Wishlist" class="heart"><i class="fa-duotone fa-heart fa-xl"></i></a> -->
                            </div>
                        </div>

                        <SocialShare />

                        <!-- Payment  -->
                        <div class="payment-option m-t-20 d-flex">
                            <span><strong>Thanh Toán: </strong></span>
                            <Payment />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>