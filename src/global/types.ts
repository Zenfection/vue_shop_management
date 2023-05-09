interface Category {
    _id: string
    category: string
    title: string
    image: string
    active: boolean
}

interface Product {
    _id: string
    name: string
    description: string
    price: number
    ranking: number
    image: string
    quantity: number
    discount: number
    category: string
}

interface FilterProduct {
    category?: string
    keyword?: string
    page?: number
    view?: string
}

export type { Category, Product, FilterProduct }