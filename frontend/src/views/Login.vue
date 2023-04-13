<script setup>

import { useRouter } from 'vue-router';
import { UserService } from '@/services/server.service.js'

const userStore = UserStore();
const router = useRouter();

const username = ref(null);
const password = ref(null);

const handleSubmit = async () => {
    try {
        const data = {
            username: username.value,
            password: password.value
        };
        const response = await UserService.login(data);
        if (response.user) {
            userStore.login(response.user)
            router.push({ name: 'home' });
        }
    } catch (error) {
        console.log(error);
    }
};
</script>

<template>
    <div class="section section-margin login" data-aos="fade-right">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-8 m-auto">
                    <div class="login-wrapper">
                        <!-- Login Title & Content -->
                        <div class="section-content text-center m-b-30">
                            <h2 class="title m-b-10">Đăng nhập</h2>
                        </div>
                        <!-- Form Action  -->
                        <form id="loginForm" @submit.prevent="handleSubmit">
                            <div class="single-input-item m-b-10">
                                <label for="description" class="form-label">Tài Khoản</label>
                                <input type="text" name="username" v-model="username" class="form-control" id="username"
                                    placeholder="Username">
                            </div>

                            <div class="single-input-item m-b-10">
                                <label for="description" class="form-label">Mật khẩu</label>
                                <input type="password" name="password" v-model="password" class="form-control" id="password"
                                    placeholder="Nhập mật khẩu...">
                            </div>
                            <div class="single-input-item m-b-15">
                                <div class="login-reg-form-meta m-b-n15">
                                    <button class="btn btn btn-gray-deep btn-hover-primary m-b-15" type="submit">Xác
                                        nhận</button>
                                </div>
                            </div>
                        </form>
                        <div class="register">
                            <router-link :to="{ name: 'register' }" id="register">Tạo tài khoản</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>