<script setup>



const store = useProductStore()

const props = defineProps({
    page: {
        type: Number,
        required: true
    }
})
const total = computed(() => Math.ceil(store.countProduct / 9))


onMounted(() => {
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft' && props.page > 1) {
            store.setPage(props.page - 1)
        }
        if (event.key === 'ArrowRight' && props.page < total.value) {
            store.setPage(props.page + 1)
        }
    })
})

watch(() => props.page, (value) => {
    store.setPage(value)
})
</script>

<template>
    <div class="shop_toolbar_wrapper justify-content-center m-t-50">
        <div class="shop-top-bar-right">
            <nav>
                <ul class="pagination">
                    <li class="page-item" v-if="page > 1">
                        <a href="javascript:;" class="page-link rounded-0" aria-label="Prev" @click="page - 1">
                            <span aria-hidden="true">
                                <i class="fa-duotone fa-arrow-left"></i>
                            </span>
                        </a>
                    </li>

                    <li class='page-item' v-for="index in total" :key="index">
                        <a href="javascript:;" class="page-link" :class="{ active: page === index }" @click="page = index">
                            {{ index }}
                        </a>
                    </li>
                    <li class="page-item" v-if="page < total">
                        <a href="javascript:;" class="page-link rounded-0" aria-label="Next" @click="page + 1">
                            <span aria-hidden="true">
                                <i class="fa-duotone fa-arrow-right"></i>
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>