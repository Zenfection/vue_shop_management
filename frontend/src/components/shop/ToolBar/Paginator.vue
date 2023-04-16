<script setup>
const store = useProductStore()

const query = useRoute().query
const router = useRouter()

const page = ref(parseInt(query.page) || 1)

const total = computed(() => Math.ceil(store.countProduct / 9))

onMounted(() => {
    window.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                page.value = Math.max(1, page.value - 1)
                break
            case 'ArrowRight':
                page.value = Math.min(total.value, page.value + 1)
                break
        }
    })
})

watch(page, () => {
    store.setPage(page.value || 1)
    const update = { ...query, page: page.value }
    router.push({ query: update })
})
</script>

<template>
    <div class="shop-top-bar-right">
        <nav>
                <ul class="pagination">
                    <li class="page-item" v-if="page > 1">
                        <a href="javascript:;" class="page-link rounded-0" aria-label="Prev"
                            @click="page -= 1">
                            <span aria-hidden="true">
                                <i class="fa-duotone fa-arrow-left"></i>
                            </span>
                        </a>
                    </li>

                    <li class='page-item' v-for="index in total" :key="index">
                        <a href="javascript:;" class="page-link" :class="{ active: page === index}"
                            @click="page = index">
                            {{ index }}
                        </a>
                    </li>

                    <li class="page-item" v-if="page < total">
                        <a href="javascript:;" class="page-link rounded-0" aria-label="Next"
                            @click="page -= 1">
                            <span aria-hidden="true">
                                <i class="fa-duotone fa-arrow-right"></i>
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
    </div>
</template>