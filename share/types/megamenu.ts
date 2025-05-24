import { ISubCategoryList } from "./sub-categories";

export interface IMegamenu {
    key?: string | number
    title: string | React.ReactNode
    subCategoryList: ISubCategoryList[]
}