<script setup>

const userStore = UserStore()
userStore.restoreState()

const isLogged = ref(userStore.isAuthenticated ?? false)

watchEffect(() => {
    isLogged.value = userStore.isAuthenticated ?? false
})
</script>

<template>
    <router-link v-if="isLogged" :to="{ name: 'account' }" class='header-action-btn header-action-btn-wishlist'>
        <i class='fa-duotone fa-user-gear fa-xl'></i>
    </router-link>

    <router-link v-if="!isLogged" :to="{ name: 'login' }" id='logged' class='header-action-btn header-action-btn-wishlist'>
        <i class='fa-duotone fa-user fa-xl'></i>
    </router-link>
</template>