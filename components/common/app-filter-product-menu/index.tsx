import { LocaleKeys } from "@/@types/locales"
import { cn } from "@/share/utils/cn"
import { Space } from "antd"
import Image from "next/image"
import ProductCategory from "./product-category"
import RangePrice from "./range-price"
import Brand from "./brand"
import Origin from "./origin"
import YearOfManufacture from "./year-of-manufacture"

interface Props {
    dictionary: LocaleKeys
    className?: string
}

function AppFilterProductMenu(props: Props) {
    const { dictionary, className } = props

    return (
        <Space.Compact direction="vertical" className={cn("p-3 rounded-lg h-max bg-white", className)}>
            <div className="flex items-center gap-3 py-3">
                <Image src="/svgs/icon-filter.svg" width={32} height={32} alt="filter" />
                <span className="text-brand/500 font-bold text-2xl">{dictionary.Filter}</span>
            </div>

            <ProductCategory dictionary={dictionary} />
            <RangePrice dictionary={dictionary} />
            <Brand dictionary={dictionary} />
            <YearOfManufacture dictionary={dictionary} />
            <Origin dictionary={dictionary} />
        </Space.Compact>
    )
}

export default AppFilterProductMenu