import { LocaleKeys } from "@/@types/locales"
import { formatNumber } from "@/share/utils/formatter"
import { Button, Card } from "antd"
import Image from "next/image"

interface Props {
    dictionary: LocaleKeys
    title: string
    salePrice?: number
    badeSale?: boolean
    price: number
    percentDiscount?: number
    image: string
    altText: string
    badgeText?: string
}

function ProdutCard(props: Props) {
    const { dictionary, title, salePrice = 0, badeSale = true, price, percentDiscount = 0, image, altText, badgeText } = props

    return (
        <Card
            className="hover:!border hover:!border-brand/500 h-full"
            hoverable
            cover={
                <div className="p-2 mx-auto max-w-[14.8125rem] max-h-[14.8125rem]">
                    <Image alt={altText} src={image} width={237} height={237} className="w-full h-full object-cover" />
                </div>
            }
            classNames={{
                body: '!p-2 sm:p-6'
            }}
        >
            <div className="flex flex-col gap-2 sm:gap-4">
                {
                    badeSale && (
                        <div className="rounded-full flex items-center w-max gap-2 py-[0.125rem] px-[0.6rem] sm:px-[0.625rem] bg-gradient-to-b from-warning/light to-warning/main">
                            <Image src="/svgs/icon-circle-fire.svg" width={16} height={16} alt="icon-circle-fire" />

                            <span className="text-error/dark text-xs sm:text-base">
                                {badgeText || dictionary['Extremely shocking price']}
                            </span>
                        </div>
                    )
                }

                <p className="line-clamp-2 !mt-0">{title}</p>

                {
                    salePrice ? (
                        <>
                            <span className="text-error/dark text-lg sm:text-xl leading-6 font-medium">{formatNumber(salePrice)} đ</span>

                            <div className="flex items-center gap-[0.625rem]">
                                <span className="text-text/disabled text-sm line-through leading-6 font-normal">{formatNumber(price)} đ</span>
                                {percentDiscount && <span className="text-error/dark text-xs leading-6 font-medium">-{percentDiscount}%</span>}
                            </div>
                        </>
                    ) : (
                        <span className="text-error/dark text-lg sm:text-xl leading-6 font-medium">{formatNumber(price)} đ</span>
                    )
                }

                <Button type="primary" className="!text-brand/600 hover:!text-white">
                    Buy now
                </Button>
            </div>
        </Card>
    )
}

export default ProdutCard