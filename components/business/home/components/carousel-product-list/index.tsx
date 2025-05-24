'use client'

import { LocaleKeys } from "@/@types/locales"
import ProdutCard from "@/components/ui/product-card"
import { IProduct } from "@/share/types/product"
import { cn } from "@/share/utils/cn"
import { Button, Carousel } from "antd"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import { Settings } from "react-slick"

const carouselSettings: Settings = {
    dots: false,
    slidesToShow: 5,
    draggable: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

interface Props {
    dictionary: LocaleKeys
    listProduct: IProduct[]
}

function CarouselProductList(props: Props) {
    const { dictionary, listProduct } = props
    const carouselRef = useRef<any>(null)

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev()
        }
    }

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next()
        }
    }

    return (
        <div className="p-5 sm:p-12 bg-brand/600">
            <div className="relative">
                <Carousel {...carouselSettings} ref={carouselRef}>
                    {
                        listProduct.map(item => (
                            <div className="px-2" key={item.id}>
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
                            </div>
                        ))
                    }
                </Carousel>

                <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
                    <Button
                        type="primary"
                        shape="circle"
                        onClick={handlePrev}
                        className={cn(
                            "!bg-brand/50 border !text-black shadow-sm",
                            "h-8 w-8 flex items-center justify-center -ml-2",
                        )}
                    >
                        <ChevronLeft />
                    </Button>

                    <Button
                        type="primary"
                        shape="circle"
                        onClick={handleNext}
                        className={cn(
                            "!bg-brand/50 border !text-black shadow-sm",
                            "h-8 w-8 flex items-center justify-center -mr-2",
                        )}
                    >
                        <ChevronRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CarouselProductList