const _GIT_SOURCE = "https://raw.githubusercontent.com/Zenfection/phpmvc_shop_order/main"

const _CDN_IMAGE = "https://ik.imagekit.io/zenfection/shoporder/tr:w-"
export const _CDN_IMAGE_50 = `${_CDN_IMAGE}50`
export const _CDN_IMAGE_100 = `${_CDN_IMAGE}100`
export const _CDN_IMAGE_150 = `${_CDN_IMAGE}150`
export const _CDN_IMAGE_200 = `${_CDN_IMAGE}200`
export const _CDN_IMAGE_250 = `${_CDN_IMAGE}250`
export const _CDN_IMAGE_300 = `${_CDN_IMAGE}300`
export const _CDN_IMAGE_350 = `${_CDN_IMAGE}350`
export const _CDN_IMAGE_400 = `${_CDN_IMAGE}400`
export const _CDN_IMAGE_450 = `${_CDN_IMAGE}450`
export const _CDN_IMAGE_500 = `${_CDN_IMAGE}500`
export const _CDN_IMAGE_550 = `${_CDN_IMAGE}550`
export const _CDN_IMAGE_600 = `${_CDN_IMAGE}600`

export const aboutBackground = `${_CDN_IMAGE_550}/about.png`
export const homeBackground = `${_CDN_IMAGE_600}/home.png`
export const logoURL = `${_GIT_SOURCE}/assets/images/logo.png`
export const paymentImg = `${_GIT_SOURCE}/assets/images/payment/payment_large.png`

const shape = []
for (let i = 1; i <= 8; i++) {
    shape.push(`${_GIT_SOURCE}/assets/images/shapes/shape-${i}.svg`)
}
export { shape }

export const team1 = `${_GIT_SOURCE}/assets/images/team/1.jpg`


export const sliders = [
    {
        icon: "fa-duotone fa-rabbit-running fa-3x",
        title: "Tốc độ ưu việt",
        description: `Không cần phải <span class='fw-semibold fs-15 text-dark'>refresh</span> lại trang khi sử dụng`
    },
    {
        icon: "fa-duotone fa-users-viewfinder fa-3x",
        title: "Sử dụng đơn giản",
        description: `Thiết kế sử dụng dựa trên<span class="fw-semibold fs-15 text-dark">
        trải nghiệm thực tế</span>`
    },
    {
        icon: "fa-duotone fa-binary-lock fa-3x",
        title: "Mã hóa mật khẩu",
        description: `Sử dụng <span class="fw-semibold fs-15 text-dark">
        SHA516</span> để mã hóa mật
        khẩu của người dùng`
    },
    {
        icon: "fa-duotone fa-fork-knife fa-3x",
        title: "Hàng hóa đa dạng",
        description: `Mua bán nhiều sản phẩm và có thể <span class="fw-semibold fs-15 text-dark">thêm mới</span>`
    },
    {
        icon: "fa-duotone fa-filters fa-3x",
        title: "Bộ lọc thông minh",
        description: `Bộ lọc sản phẩm do chính <span class="fw-semibold fs-15 text-dark"> Zen</span> phát triển`,
    },
    {
        icon: "fa-duotone fa-box-circle-check fa-3x",
        title: "Xem lại đơn hàng",
        description: `Theo dõi <span class="fw-semibold fs-15 text-dark"> đơn
        hàng</span> cá nhân vừa
        đặt dễ dàng`
    },
    {
        icon: "fa-duotone fa-basket-shopping fa-3x",
        title: "Giỏ hàng thông minh",
        description: `<span class="fw-semibold fs-15 text-dark">Thêm, sửa,
        xóa</span> sản phẩm với
        hiệu suất nhanh chóng`
    },
    {
        icon: "fa-duotone fa-eye-low-vision fa-3x",
        title: "Không lấy dữ diệu",
        description: `Cam kết không lấy bất cứ<span class="fw-semibold fs-15 text-dark">
        dữ liệu</span>
        của người dùng`
    }
]