<script setup>
const storeCategory = useCategoryStore()
const category = computed(() => storeCategory.currentCategory)

const products = ref({})

onMounted(async () => {
    const response = await ProductService.getFilter({
        category: category.value,
    });
    products.value = response.data
})

</script>

<template>
    <div class="service-section section section-margin">
    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col-12">
                <div class="section-title text-center">
                    <h3 class="title">Sản phẩm tương tự</h3>
                </div>
            </div>
        </div>
            <div class="row text-center">
                <div class="col-lg-12">
                    <div class="feature-slider">
                        <!-- <?php
                            $count = count($similar_product);
                            for ($i = 0; $i < $count; $i++) {
                                $row = $similar_product[$i];
                                $id = $row['id_product'];
                                $name = $row['name'];
                                $price = $row['price'];
                                $discount = $row['discount'];
                                $ranking = $row['ranking'];
                            $image = $row['image'];

                            if ($id == $product_detail['id_product']) {
                                continue;
                            }
                        ?> -->
                    <div class="mt-4 pt-2">
                        <div class="solution border rounded position-relative px-4 py-5 ">
                            <div class="product-wrapper">
                                    <div class="product">
                                        <!-- Thumb Start  -->
                                        <div class="thumb product-inner" id="product<?php echo $id ?>">
                                            <a href="javascript:;" class="image"
                                                onclick="loadDetailProduct(<?php echo $id ?>)">
                                                <img class="fit-image rounded"
                                                    src="<?php echo _CDN_IMAGE_250 . '/products/' . $image ?>" />
                                            </a>
                                            <!-- <?php
                                                    if ($discount > 0) {
                                                        $discount_price = $price - ($price * $discount / 100);
                                                    ?>
                                                        <span class="badges">
                                                            <span class='sale'>-<?php echo (int)$discount ?>%</span>
                                                        </span>
                                                    <?php
                                                }
                                                ?> -->
                                            <div class="action-wrapper" id="wrapper<?php echo $id ?>">
                                                <a href="javascript:;" class="action" title="Thêm sản phẩm"><i
                                                    class="fa-duotone fa-plus-large"
                                                    onclick="addProductCart('<?php echo $id ?>', 1)"></i></a>
                                            <a href="javascript:;" class="action wishlist" title="Wishlist"><i
                                                    class="fa-duotone fa-heart"></i></a>
                                            <a href="javascript:;" class="action cart" id="viewcart" title="Cart"><i
                                                    class="fa-duotone fa-cart-circle-plus"></i></a>
                                        </div>
                                    </div>
                                    <!-- Thumb End  -->

                                    <!-- Content Start  -->
                                        <div class="content">
                                            <!-- <h5 class="title"><?php echo $name ?></a></h5> -->
                                            <!-- <span class="rating">
                                                        <?php rating($ranking, 'fa-solid fa-star text-warning', 'fa-duotone fa-star-half-stroke text-warning', 'fa-solid fa-star text-secondary') ?>
                                                    </span> -->
                                            <span class="price">
                                                <!-- <?php
                                                        if ($discount > 0) {
                                                        ?>
                                                        <span class="new"><?php echo number_price($discount_price) ?></span>
                                                        <span class="old"><?php echo number_price($price) ?></span>
                                                        <?php
                                                        } else {
                                                        ?>
                                                            <span class='new'><?php echo number_price($price) ?></span>
                                                        <?php
                                                        }
                                                        ?> -->
                                            </span>
                                        </div>
                                        <!-- Content End  -->
                                    </div>
                                </div>
                                <!-- Product End -->
                            </div>
                        </div>
                        <!-- <?php
                            }
                            ?> -->
                    </div>
            </div>
        </div>
    </div>
</div></template> 