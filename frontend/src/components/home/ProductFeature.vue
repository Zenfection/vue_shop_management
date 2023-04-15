<script setup>

let top_ranking = 'ranking'
let top_discount = 'discount'
let top_sold = 'sold'
</script>


<template>
<div class="section position-relative">
    <div class="container">
        <!-- Product Tabs -->
        <div class="row">
            <div class="col-12">
                <ul class="product-tab-nav nav justify-content-center pt-4 pb-2 border-bottom">
                    <li class="nav-item">
                        <a class="nav-link active" data-bs-toggle="tab" href="#top-product-ranking">Đánh giá cao</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#top-product-discount">Giảm giá nhiều</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#top-product-seller">Sản phẩm mua nhiều</a>
                    </li>
                </ul>
            </div>
        </div>
        
        <!-- Product Tab Content -->
        <div class="row">
            <div class="col-12">
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="top-product-ranking">
                        <div class="row row-cols-3 g-4">
                            <TopProduct :filter="top_ranking" />
                        </div>
                    </div>
                    <div class="tab-pane fade" id="top-product-discount">
                        <div class="row row-cols-3 g-4">
                            <TopProduct :filter="top_discount" />
                        </div>
                    </div>
                    <div class="tab-pane fade" id="top-product-seller">
                        <div class="row row-cols-3 g-4">
                            <TopProduct :filter="top_sold" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>