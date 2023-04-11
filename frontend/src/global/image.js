const _GIT_SOURCE = "https://raw.githubusercontent.com/Zenfection/phpmvc_shop_order/main"
const _CDN_IMAGE = "https://ik.imagekit.io/zenfection/shoporder/tr:w-"
const _CDN_IMAGE_50 = `${_CDN_IMAGE}50`
const _CDN_IMAGE_100 = `${_CDN_IMAGE}100`
const _CDN_IMAGE_150 = `${_CDN_IMAGE}150`
const _CDN_IMAGE_200 = `${_CDN_IMAGE}200`
const _CDN_IMAGE_250 = `${_CDN_IMAGE}250`
const _CDN_IMAGE_300 = `${_CDN_IMAGE}300`
const _CDN_IMAGE_350 = `${_CDN_IMAGE}350`
const _CDN_IMAGE_400 = `${_CDN_IMAGE}400`
const _CDN_IMAGE_450 = `${_CDN_IMAGE}450`
const _CDN_IMAGE_500 = `${_CDN_IMAGE}500`
const _CDN_IMAGE_550 = `${_CDN_IMAGE}550`
const _CDN_IMAGE_600 = `${_CDN_IMAGE}600`


const shape = []
for (let i = 1; i <= 8; i++) {
    shape.push(`${_GIT_SOURCE}/assets/images/shapes/shape-${i}.svg`)
}

const images = {
    aboutBackground : `${_CDN_IMAGE_550}/about.png`,
    homeBackground : `${_CDN_IMAGE_600}/home.png`,
    logo : `${_GIT_SOURCE}/assets/images/logo.png`,
    paymentLarge : `${_GIT_SOURCE}/assets/images/payment/payment_large.png`,
    team1 : `${_GIT_SOURCE}/assets/images/team/1.jpg`,
    shape : shape,
}

export default images