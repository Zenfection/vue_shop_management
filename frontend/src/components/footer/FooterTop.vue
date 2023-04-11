<script setup>
    import Feature from "./top/Feature.vue";
    import QuickAction from "./top/QuickAction.vue";
    import SocialLink from "./top/SocialLink.vue";
    import Support from "./top/Support.vue";
</script>

<template>
    <div class="footer-top bg-name-bright section-padding">
        <div class="container">
            <div class="row m-b-n40">
                <SocialLink/>
                
                <Feature/>
                
                <Support/>
                
                <QuickAction/>
            </div>
        </div>
    </div>
</template>