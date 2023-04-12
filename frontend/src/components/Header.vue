<script setup>
    import NavMenu from './header/NavMenu.vue'
    import Logo from './header/Logo.vue'
    import Search from './header/Search.vue'
    import UserMenu from './header/UserMenu.vue'
    import Cart from './header/CartMenu.vue'
    import Mobile from './header/MobileReponsitive.vue'
</script>

<template>
    <div class="header-bottom">
        <div class="header-sticky">
            <div class="container">
                <div class="row align-items-center position-relative">
                    
                    <Logo/>
                    
                    <NavMenu/>
    
                    <div class="col-lg-4 col-md-8 col-6">
                        <div class="header-actions" id="header">
                            <Search/>

                            <UserMenu/>

                            <Cart />

                            <Mobile />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>