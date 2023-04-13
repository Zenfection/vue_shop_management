<script setup>
import { RouterLink } from 'vue-router';


const userStore = UserStore()
userStore.restoreState()

const isLogged = ref(userStore.isAuthenticated ?? false)

watchEffect(() => {
    isLogged.value = userStore.isAuthenticated ?? false
})
</script>

<template>
    <RouterLink v-if="isLogged" to="account" class='header-action-btn header-action-btn-wishlist'>
        <i class='fa-duotone fa-user-gear fa-xl'></i>
    </RouterLink>

    <RouterLink v-if="!isLogged" to="login" id='logged' class='header-action-btn header-action-btn-wishlist'>
        <i class='fa-duotone fa-user fa-xl'></i>
    </RouterLink>
</template>