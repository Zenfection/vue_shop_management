const shape = []
for (let i = 1; i <= 8; i++) {
    shape.push(`/shapes/shape-${i}.svg`)
}

const images = {
    aboutBackground : {
        src: `/about.png`,
        alt: `About Background`,
        width: 550,
    }, 
    homeBackground : {
        src: `/home.png`,
        alt: `Home Background`,
        width: 600
    }, 
    logo : `/logo.png`,
    paymentLarge : `/payment/payment_large.png`,
    team1 : {
        src: `/team/1.jpg`,
        alt: `Team 1`,
        height: 270,
    },
    shape : shape,
}

export default images