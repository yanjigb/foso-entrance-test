export interface IProduct {
    id?: string
    title: string
    price: string | number
    image: string
    altText?: string
    percentDiscout?: number
    salePrice?: string | number
    href?: string
}