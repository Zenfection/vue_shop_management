<script setup>

import { toast } from 'vue3-toastify'; 

useHead({
    title: 'Đăng nhập',
})

const store = useUserStore();
const router = useRouter();

const username = ref(null);
const password = ref(null);

const toastLoginSucess = () => {
    toast.success('Đăng nhập thành công', {
        position: 'top-right',
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        draggable: true,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: 'button',
        icon: true,
        rtl: false,
    });
}

const toastLoginFailed = () => {
    toast.error('Đăng nhập thất bại', {
        position: 'top-right',
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        draggable: true,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: 'button',
        icon: true,
        rtl: false,
    });
}

const handleSubmit = async () => {
    try {
        const data = {
            username: username.value,
            password: password.value
        }
        const response = await UserService.login(data)

        if (response.user) {  // success
            toastLoginSucess()
            store.login(response.user)
            router.push('/')
        }
    } catch (error) {
        toastLoginFailed()
        console.log(error)
    }
};
</script>

<template>
    <div class="section section-margin login">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-8 m-auto" v-motion-fade>
                    <div class="login-wrapper">
                        <!-- Login Title & Content -->
                        <div class="section-content text-center m-b-30">
                            <h2 class="title m-b-10">Đăng nhập</h2>
                        </div>
                        <!--! Form Action  -->
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
                            <RouterLink to="register" id="register">Tạo tài khoản</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>