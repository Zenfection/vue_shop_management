<script setup>
//* Store
const store = useUserStore()
const router = useRouter()

//* Refs
const customer = ref({
    fullname: store.user.fullname || '',
    phone: store.user.phone || '',
    email: store.user.email || '',
    address: store.user.address || '',
    province: store.user.province || '',
    district: store.user.district || '',
    ward: store.user.ward || ''
})

//* Computed
const cart = computed(() => store.cart ?? [])
const totalMoney = computed(() => store.totalMoney)

const provinces = ref([])
const districts = ref([])
const wards = ref([])

//* FUNCTION
async function loadDistricts(provinceCode) {
    districts.value = await PCVNService.getDistricts(provinceCode)
    wards.value = [] // reset wards
}

async function loadWards(districtCode) {
    wards.value = await PCVNService.getWards(districtCode)
}

onMounted(async () => {
    provinces.value = await PCVNService.getProvinces()

    let province = customer.value.province
    if(province){
        const provinceCode = provinces.value.find((item) => item.name === province)?.code
        if(provinceCode){
            await loadDistricts(provinceCode)
            let district = customer.value.district
            if (district) {
                const districtCode = districts.value.find((item) => item.name === district)?.code
                if (districtCode) {
                    await loadWards(districtCode)
                }
            }
        }
    }
})

watch(() => customer.value.province, async (province) => {
    const provinceCode = provinces.value.find((item) => item.name === province)?.code
    if (provinceCode) {
        await loadDistricts(provinceCode)
    }
})

watch(() => customer.value.district, async (district) => {
    const districtCode = districts.value.find((item) => item.name === district)?.code
    if (districtCode) {
        await loadWards(districtCode)
    }
})

const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
})

function discountPrice(price, discount) {
    return price - (price * discount) / 100
}

const orderSubmit = async() => {
    const data = {
        username: store.user.username,
        customer: customer.value,
        total_price: store.totalMoney,
        products: cart.value.map((item) => ({
            id: item.id_product,
            amount: item.amount,
            price: item.product.price,
            discount: item.product.discount,
            name: item.product.name,
            image: item.product.image
        }))
    }

    console.log(JSON.stringify(data, null, 2))
    try{
        const response = await OrderService.createOrder(data)
        if(response){
            alert('Đặt Hàng Thành Công')
            store.clearCart()
            // emit event to cartMenu
            router.push('/account')
        }
    } catch (error){
        alert('Đặt Hàng Thất Bại')
        console.log(error)
    }
}
</script>

<template>
<div class="section section-margin">
    <div class="container">
        <div class="row m-b-n20">
            <div class="col-lg-7 col-12 m-b-20" v-motion-slide-left>
                <!-- Checkbox Form Start -->
                <div class="checkbox-form">
                    <!-- ? Form Title  -->
                    <h3 class="title">Hoá Đơn Chi Tiết</h3>

                    <!-- ? Form Start -->
                    <FormKit
                        type="form"
                        :actions="false"
                    >
                    <div class="row">
                        <!-- ? Fullname Field -->
                        <div class="col-md-6">
                            <div class="checkout-form-list">
                            <FormKit 
                                v-model="customer.fullname"
                                type="text" 
                                label="Họ và Tên" 
                                prefix-icon="info"
                                name="fullname"
                                validation="required|length:5,20" 
                                validation-visibility="dirty" 
                                :validation-messages="{
                                    matches: 'Họ và tên không được để trống',
                                }" 
                                :floating-label="false"
                            />
                            </div>
                        </div>

                        <!-- ? Phone Field -->
                        <div class="col-md-6">
                            <div class="checkout-form-list">
                                <FormKit 
                                    v-model="customer.phone"
                                    type="tel" 
                                    prefix-icon="telephone"
                                    label="Số điện thoại"
                                    mask="(###)-###-####"
                                    name="phone" 
                                    validation="required|matches:/^[0-9]{10}$/"
                                    validation-visibility="dirty" 
                                    :validation-messages="{
                                        matches: 'Số điện thoại không hợp lệ',
                                    }" 
                                    :floating-label="false"
                                />
                            </div>
                        </div>

                        <!-- ? Email Field -->
                        <div class="col-md-6">
                            <div class="checkout-form-list">
                                <FormKit
                                    v-model="customer.email"
                                    type="email"
                                    prefix-icon="email"
                                    label="Email"
                                    name="email"
                                    validation="required|email|ends_with:.com"
                                    validation-visibility="live" 
                                    :floating-label="false"
                                />
                            </div>
                        </div>

                        <!-- ? Address Field -->
                        <div class="col-md-6">
                            <div class="checkout-form-list">
                                <FormKit
                                    v-model="customer.address"
                                    type="text"
                                    prefix-icon="text"
                                    label="Địa chỉ"
                                    name="address"
                                    validation="required|length:5,100"
                                    validation-visibility="dirty" 
                                    :floating-label="false"
                                />
                            </div>
                        </div>

                        <!-- ? Province, Disstrict, Ward Field -->
                        <div class="col-md-4">
                        <FormKit
                            v-model="customer.province"
                            type="select"
                            label="Chọn Tỉnh"
                            name="province"
                            :options="provinces.map((item) => item.name)"
                        />
                    </div>
                    <div class="col-md-4">
                        <FormKit
                            v-model="customer.district"
                            value="district"
                            type="select"
                            label="Chọn Quận"
                            name="district"
                            :options="districts.map((item) => item.name)"
                        />
                    </div>

                    <div class="col-md-4">
                        <FormKit
                            v-model="customer.ward"
                            type="select"
                            label="Chọn Huyện"
                            name="ward"
                            :options="wards.map((item) => item.name)"
                        />
                    </div>

                    </div>

                    <div class="order-button-payment">
                            <button class="btn btn-primary btn-hover-light rounded w-100" type="button" @click="orderSubmit">Đặt Hàng</button>
                    </div>
                    </FormKit>
                    
                </div>
            </div>

            <div class="col-lg-5 col-12 m-b-20" v-motion-slide-right>
                <!-- Your Order Area Start -->
                <div class="your-order-area border">
                    <!-- Title Start -->
                    <h3 class="title">Đơn hàng của bạn</h3>
                    <!-- Title End -->

                    <!-- Your Order Table Start -->
                    <div class="your-order-table table-responsive">
                        <table class="table">
                            <!-- Table Head Start -->
                            <thead>
                                <tr class="cart-product-head">
                                    <th class="cart-product-name text-start">Sản phẩm</th>
                                    <th class="cart-product-total text-end pe-4">Tổng tiền</th>
                                </tr>
                            </thead>
                            <!-- Table Head End -->

                            <!-- Table Body Start -->
                            <tbody>
                                    <tr class="cart_item" v-for="item in cart" :key="item._id">
                                        <td class="cart-product-name text-start ps-0"> {{ item.product.name }}
                                            <strong class="product-quantity"> × {{ item.amount }}</strong>
                                        </td>
                                        <td class="cart-product-total text-end pe-4">
                                            <span class="amount">{{ formatter.format(discountPrice(item.product.price, item.product.discount)) }}</span>
                                        </td>
                                    </tr>
                            </tbody>
    

                            <!-- Table Footer Start -->
                            <tfoot>
                                <tr class="cart-subtotal">
                                    <th class="text-start ps-0">Tổng đơn hàng</th>
                                    <td class="text-end pe-4">
                                        <strong><span class="amount">{{ totalMoney }}</span></strong>
                                    </td>
                                </tr>
                            </tfoot>
                            <!-- Table Footer End -->

                        </table>
                    </div>
                    <!-- Your Order Table End -->

                    <!-- Payment Accordion Order Button Start -->
                    <div class="payment-accordion-order-button">
                        <div class="payment-accordion">
                            <div class="single-payment">
                                <h5 class="panel-title m-b-15">
                                    <a class="collapse-off" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        Thanh toán
                                    </a>
                                </h5>
                                <div class="collapse show" id="collapseExample">
                                    <div class="card card-body rounded">
                                        <p>Chức năng thanh toán online hiện chưa phát triển, bạn chỉ có thể sử dụng thanh toán COD</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- Payment Accordion Order Button End -->
                </div>
                <!-- Your Order Area End -->
            </div>
        </div>
    </div>
</div>
<!-- Checkout Section End -->
</template>