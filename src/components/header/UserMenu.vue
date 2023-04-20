<script setup>

const store = useUserStore()
if(!store.user){
    store.restoreState()
}

const isLogged = ref(store.isAuthenticated ?? false)

watchEffect(() => {
    isLogged.value = store.isAuthenticated ?? false
})
</script>

<template>
    <RouterLink v-if="isLogged" to="/account" class='header-action-btn header-action-btn-wishlist' tabindex="0">
        <i class='fa-duotone fa-user-gear fa-xl'></i>
    </RouterLink>

    <RouterLink v-if="!isLogged" to="/login" class='header-action-btn header-action-btn-wishlist' tabindex="0">
        <i class='fa-duotone fa-user fa-xl'></i>
    </RouterLink>
</template>