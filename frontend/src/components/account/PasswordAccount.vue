<template>
    <div class="tab-pane fade" id="account-password" role="tabpanel">
        <div class="myaccount-content">
            <h3 class="title"> Thay đổi mật khẩu</h3>
            <div class="account-details-form">
                <form id="changePassForm" novalidate>
                    <fieldset>
                        <div class="single-input-item m-b-15">
                            <label for="current_pwd" class="required m-b-10">Mật Khẩu Hiện tại</label>
                            <input type="password" name="current_pwd" id="current_pwd" placeholder="Nhập Mật Khẩu"
                                class="form-control" />
                        </div>
                        <div class="row m-b-n15">
                            <div class="col-lg-6">
                                <div class="single-input-item m-b-15">
                                    <label for="new_pwd" class="required m-b-10">Mật khẩu mới</label>
                                    <input type="password" name="new_pwd" id="new_pwd" placeholder="Nhập Mật Khẩu"
                                        class="form-control" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="single-input-item m-b-15">
                                    <label for="confirm_pwd" class="required m-b-10">Xác Nhận Mật Khẩu</label>
                                    <input type="password" name="confirm_pwd" id="confirm_pwd" placeholder="Nhập Mật Khẩu"
                                        class="form-control" />
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div class="single-input-item single-item-button m-t-30">
                        <button type="button" class="btn btn btn-primary btn-hover-dark rounded-0">Lưu Thay Đổi</button>
                    </div>
                </form>
            </div>
        </div>
</div></template>