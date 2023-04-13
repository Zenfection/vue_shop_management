<template>
    <div class="section position-relative">
    <div class="container">
        <!-- Section Title & Tab Start -->
        <div class="row">
            <!-- Tab Start -->
            <div class="col-12">
                <ul class="product-tab-nav nav justify-content-center m-b-n15 p-b-40 title-border-bottom">
                    <li class="nav-item m-b-15"><a class="nav-link active" data-bs-toggle="tab" href="#top-product-ranking">Đánh giá cao</a></li>
                    <li class="nav-item m-b-15"><a class="nav-link" data-bs-toggle="tab" href="#top-product-discount">Giảm giá nhiều</a></li>
                    <li class="nav-item m-b-15"><a class="nav-link" data-bs-toggle="tab" href="#top-product-seller">Sản phẩm mua nhiều</a></li>
                </ul>
            </div>
            <!-- Tab End -->
        </div>
        <!-- Section Title & Tab End -->

        <!-- Products Tab Start -->
        <div class="row">
            <div class="col-12">
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="top-product-ranking">
                        <div class="row m-b-n40">
                            <!-- <?php
                            $this->render('products/list', $top_product_ranking, false);
                            ?> -->
                        </div>
                    </div>
                    <div class="tab-pane fade" id="top-product-discount">
                        <div class="row m-b-n40">
                            <!-- <?php
                            $this->render('products/list', $top_product_discount, false);
                            ?> -->
                        </div>
                    </div>
                    <div class="tab-pane fade" id="top-product-seller">
                        <div class="row m-b-n40">
                            <!-- <?php
                            $this->render('products/list', $top_product_seller, false);
                            ?> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Products Tab End -->
    </div>
</div>
</template>