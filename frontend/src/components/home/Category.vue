<template>
    <div class="section section-margin">
    <div class="container">
        <h2>Loại Đồ Ăn</h2>
        <!-- Banners Start -->
        <div class="row row-cols-md-3 row-cols-sm-2 row-cols-1 m-b-n30">
            <!-- <?php
            $countCategory = count($category);
            foreach($category as $key => $value){
                if($value['active'] != 1){
                    continue;
                }
                $id = $value['id_category'];
                $title = $value['title'];
                $image = $value['image'];
                ?> -->
                <div class="col m-b-30" data-aos="fade-in">
                    <!-- <a href="javascript:;" class="banner hover-style" onclick="loadContent('shop/<?php echo $id?>')">
                        <img class="fit-image p-10" src="<?php echo _CDN_IMAGE_450 . '/category/' . $image ?>" alt="Banner Image">
                    </a> -->
                </div>
                <!-- <?php
            }
            ?> -->
        </div>
        <!-- Banners End -->
    </div>
</div>
</template>