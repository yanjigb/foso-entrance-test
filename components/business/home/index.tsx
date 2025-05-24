'use client'

import { LocaleKeys } from "@/@types/locales"
import AppBreadcums from "@/components/common/app-breadcums"
import Header from "@/components/layouts/header"
import { IBreadcums } from "@/share/types/breadcums"
import { RouteNames } from "@/share/types/route-names"
import Image from "next/image"
import CarouselProductList from "./components/carousel-product-list"
import ProductList from "./components/product-list"
import Footer from "@/components/layouts/footer"
import { MockProduct } from "@/share/mocks/mock-product"
import Link from "next/link"

interface Props {
    dictionary: LocaleKeys
}

function Home(props: Props) {
    const { dictionary } = props

    const BreadcumsLinkList: IBreadcums[] = [
        {
            path: RouteNames.HOME,
            name: dictionary.Home
        },
        {
            path: RouteNames.PRODUCT,
            name: dictionary.Product
        }
    ]

    return (
        <div>
            <Header dictionary={dictionary} />

            <div className="section-container mt-6 flex flex-col gap-8">
                <AppBreadcums routeList={BreadcumsLinkList} dictionary={dictionary} />

                <div>
                    <Link href={RouteNames.HOME}>
                        <Image src="/images/banner.png" width={1440} height={550} alt="banner" className="object-cover" />
                    </Link>
                    <CarouselProductList dictionary={dictionary} listProduct={MockProduct} />
                </div>

                <ProductList dictionary={dictionary} />
            </div>

            <Footer dictionary={dictionary} />
        </div>
    )
}

export default Home