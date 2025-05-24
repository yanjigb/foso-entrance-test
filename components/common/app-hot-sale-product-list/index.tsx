import { LocaleKeys } from "@/@types/locales"
import ProdutCard from "@/components/ui/product-card"
import { IProduct } from "@/share/types/product"
import Image from "next/image"
import Link from "next/link"

interface Props {
    listProduct: IProduct[]
    dictionary: LocaleKeys
}

function AppHotSaleProductList(props: Props) {
    const { listProduct, dictionary } = props

    return (
        <div className='flex flex-col gap-6'>
            <div className='flex items-center justify-between'>
                <span className='text-2xl font-semibold'>{dictionary['Best seller product']}</span>

                <Link href="/" className='flex items-center gap-2'>
                    <span>
                        {dictionary['View all']}
                    </span>

                    <Image src="/svgs/icon-double-arrow-right.svg" width={20} height={20} alt='icon double right arrow' />
                </Link>
            </div>

            <div className="grid lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {
                    listProduct.map(product => (
                        <Link href={product.href || "/"}>
                            <ProdutCard
                                badeSale={false}
                                dictionary={dictionary}
                                title={product.title}
                                price={Number(product.price)}
                                image={product.image}
                                altText={product.altText!}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default AppHotSaleProductList