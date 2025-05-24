import { IProduct } from "./product";

export interface ISubCategoryList {
    key?: number | string
    image?: string
    altText?: string
    title: string
    children?: React.ReactNode
    products: IProduct[]
}