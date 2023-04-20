<template>
    <div class="tab-pane fade" id="account-info" role="tabpanel">
        <div class="myaccount-content">
            <h3 class="title"> Chi Tiết Tài Khoản</h3>
            <div class="account-details-form">
                <form id="changeInfoForm" novalidate>
                    <div class="single-input-item m-b-15">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="single-input-item m-b-15">
                                    <label for="full-name" class="required m-b-10">Họ và Tên</label>
                                    <input type="text" id="fullname" name="fullname" placeholder="Nhập họ và tên"
                                        value="<?php echo $fullname ?>" class="form-control" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="single-input-item m-b-15">
                                    <label for="last-name" class="required m-b-10">Số điện thoại</label>
                                    <input type="text" id="phone" name="phone" placeholder="Chưa có số điện thoại"
                                        value="<?php echo $phone ?>" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-input-item m-b-15">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="single-input-item m-b-15">
                                    <label for="display-name" class="required m-b-10">UserName</label>
                                    <input readonly class="form-control" type='text' id='display-name'
                                        placeholder='<?php echo $user ?>' />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="single-input-item m-b-15">
                                    <label for="email" class="required m-b-10">Email</label>
                                    <input type="email" class="form-control" name="email" id="email"
                                        placeholder="Nhập Email" value="<?php echo $email ?>" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="single-input-item m-b-15">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="checkout-form-list">
                                    <label for="province" class="form-label">Tỉnh Thành</label>
                                    <select class="nice-select" id="province" name="province" onchange="loadCity()">
                                        <!-- <?php
                                                                    if ($province != "") {
                                                                        echo "<option value='" . $province . "' selected>" . $province . "</option>";
                                                                    }
                                                                    foreach ($province_data as $key => $value) {
                                                                        if ($value['name'] != $province) {
                                                                            echo "<option value='" . $value['name'] . "'>" . $value['name'] . "</option>";
                                                                        }
                                                                    }
                                                                    ?> -->
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="checkout-form-list">
                                    <label for="city" class="form-label">Thành phố/Quận/Huyện</label>
                                    <select class="nice-select" id="city" name="city" onchange="loadWard()">
                                        <!-- <?php
                                                                    if ($city != "") {
                                                                        echo "<option value='" . $city . "' selected>" . $city . "</option>";
                                                                    }
                                                                    foreach ($city_data as $key => $value) {
                                                                        if ($value['full_name'] != $city) {
                                                                            echo "<option value='" . $value['full_name'] . "'>" . $value['full_name'] . "</option>";
                                                                        }
                                                                    }
                                                                    ?> -->
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="checkout-form-list">
                                    <label for="ward" class="form-label">Phường/Xã</label>
                                    <select class="nice-select" id="ward" name="ward">
                                        <!-- <?php
                                                                    if ($ward != "") {
                                                                        echo "<option value='" . $ward . "' selected>" . $ward . "</option>";
                                                                    }
                                                                    foreach ($ward_data as $key => $value) {
                                                                        if ($value['name'] != $city) {
                                                                            echo "<option value='" . $value['full_name'] . "'>" . $value['full_name'] . "</option>";
                                                                        }
                                                                    }
                                                                    ?> -->
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="single-input-item m-b-15">
                        <label for="address" class="required m-b-5">Địa Chỉ</label>
                        <input type="text" name="address" id="address" placeholder="Nhập địa chỉ"
                            value="<?php echo $address ?>" class="form-control" />
                    </div>
                    <div class="single-input-item single-item-button m-t-30">
                        <button type="button" class="btn btn btn-primary btn-hover-dark rounded-0">Lưu Thay Đổi</button>
                    </div>
                </form>
        </div>
    </div>
</div></template>