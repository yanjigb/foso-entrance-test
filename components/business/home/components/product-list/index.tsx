'use client'

import { LocaleKeys } from "@/@types/locales"
import AppFilterProductMenu from "@/components/common/app-filter-product-menu"
import ButtonWithIconCheck from "@/components/ui/button-with-icon-check"
import ProdutCard from "@/components/ui/product-card"
import { Select, Space } from "antd"
import { useState } from "react"
import { MockProduct } from "@/share/mocks/mock-product"

interface Props {
    dictionary: LocaleKeys
}

function ProductList(props: Props) {
    const { dictionary } = props
    const OptionPrice = [
        "Giá: Thấp → Cao",
        "Giá: Cao → Thấp",
    ]
    const [rangePriceOption, setRangePriceOption] = useState<string>(OptionPrice[0])

    const [activeOption, setActiveOption] = useState<Record<string, boolean>>({
        LienQuan: true,
        BanChay: false,
        MoiNhat: false,
        NoiBat: false,
    });

    const onToggleIsChoosen = (key: string) => {
        setActiveOption((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div className="flex flex-col lg:flex-row gap-5">
            <AppFilterProductMenu dictionary={dictionary} className="lg:basis-1/5" />

            <div className="lg:basis-4/5 flex flex-col gap-7">
                <div className="flex flex-col xl:flex-row gap-3 xl:items-center xl:justify-between">
                    <span className="text-xl font-semibold">
                        {dictionary['Product List']}
                    </span>

                    <Space className="flex flex-col lg:flex-row !items-start lg:!items-center md:!gap-3 lg:!gap-6">
                        <span className="text-base font-medium">
                            {dictionary['Sort by']}
                        </span>

                        <Space className="flex items-center !gap-3 flex-wrap">
                            <ButtonWithIconCheck
                                text="Lien quan"
                                active={activeOption.LienQuan}
                                onClick={() => onToggleIsChoosen('LienQuan')}
                            />
                            <ButtonWithIconCheck
                                text="Ban chay"
                                active={activeOption.BanChay}
                                onClick={() => onToggleIsChoosen('BanChay')}
                            />
                            <ButtonWithIconCheck
                                text="Moi nhat"
                                active={activeOption.MoiNhat}
                                onClick={() => onToggleIsChoosen('MoiNhat')}
                            />
                            <ButtonWithIconCheck
                                text="Noi bat"
                                active={activeOption.NoiBat}
                                onClick={() => onToggleIsChoosen('NoiBat')}
                            />

                            <Select
                                variant="borderless"
                                value={rangePriceOption}
                                onChange={setRangePriceOption}
                                options={OptionPrice.map(price => ({ value: price, label: price }))}
                            />
                        </Space>
                    </Space>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                    {
                        MockProduct.map(item => (
                            <ProdutCard
                                key={item.id}
                                dictionary={dictionary}
                                title={item.title}
                                percentDiscount={item.percentDiscout}
                                price={Number(item.price)}
                                salePrice={Number(item.salePrice)}
                                image={item.image}
                                altText={item.altText!}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductList