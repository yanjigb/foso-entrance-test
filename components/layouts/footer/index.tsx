import { LocaleKeys } from "@/@types/locales"
import ImageWithText from "@/components/ui/image-with-text"
import { Button } from "antd"
import Image from "next/image"
import Link from "next/link"

interface Props {
    dictionary: LocaleKeys
}

function Footer(props: Props) {
    const { dictionary } = props

    return (
        <footer className="mt-8">
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 py-10 section-container">
                <ImageWithText imageUrl="/svgs/icon-circle-wallet.svg" title="Miễn phí vận chuyển" description="Với hoá đơn từ 1 triệu" />
                <ImageWithText imageUrl="/svgs/icon-circle-support.svg" title="Hỗ trợ 24/7" description="Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm" />
                <ImageWithText imageUrl="/svgs/icon-circle-truck-shipping.svg" title="Giao hàng nhanh 2h" description="Trong vòng bán kính 10km nội thành TP HCM" />
                <ImageWithText imageUrl="/svgs/icon-circle-package.svg" title="30 ngày đổi trả" description="Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển" />
            </div>

            <div className="bg-brand/50 py-9">
                <div className="section-container flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Image src="/svgs/icon-pin-map.svg" width={48} height={48} alt="pin map" />
                        <p className="!mt-0">Xem hệ thống 88 cửa hàng trên toàn quốc</p>
                    </div>

                    <Button size="large" variant="outlined" shape="round" className="!py-4 !bg-white">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl font-semibold text-brand/600">Xem ngay</span>
                            <Image src="/svgs/icon-arrow-right.svg" width={24} height={24} alt="arrow right" />
                        </div>
                    </Button>
                </div>
            </div>

            <div className="section-container py-24 flex flex-col lg:flex-row items-start gap-12 md:gap-[7.2919rem]">
                <div className="max-w-[35rem] flex flex-col gap-5">
                    <span className="font-semibold text-xl text-text/primary">Viet Hung Auto Production Trading Joint Stock Company</span>

                    <div className="flex flex-col">
                        <Link className="md:w-max text-text/secondary" href="tax:0305094228">Tax code: 0305094228</Link>
                        <Link className="md:w-max text-text/secondary" href="https://www.google.com/maps/place/13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam">Address: 13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.</Link>
                        <Link className="md:w-max text-text/secondary" href="tel:283 760 7607">Phone number: 0283 760 7607</Link>
                        <span className="md:w-max text-text/secondary">Opening hour: 09:00 - 22:00 from Mon - Fri</span>
                    </div>

                    <Image src="/svgs/badge-bo-cong-thuong.svg" width={200} height={75.67} alt="bo cong thuong" />
                </div>

                <div className="flex items-start justify-between gap-12 md:gap-[7.2919rem] flex-wrap">
                    <div className="flex flex-col gap-5">
                        <span className="font-semibold text-xl text-text/primary">Sitemap</span>

                        <div className="flex flex-col gap-3">
                            <Link className="w-max text-text/secondary" href="/">About</Link>
                            <Link className="w-max text-text/secondary" href="/">Article</Link>
                            <Link className="w-max text-text/secondary" href="/">Cart</Link>
                            <Link className="w-max text-text/secondary" href="/">Contact</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <span className="font-semibold text-xl text-text/primary">Legal</span>

                        <div className="flex flex-col gap-3">
                            <Link className="w-max text-text/primary flex items-center gap-2" href="/">
                                <Image src="/svgs/line.svg" width={19} height={2} alt="line" />
                                Privacy policy
                            </Link>
                            <Link className="w-max text-text/secondary" href="/">Cookie policy</Link>
                            <Link className="w-max text-text/secondary" href="/">Delivery policy</Link>
                            <Link className="w-max text-text/secondary" href="/">FAQs</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <span className="font-semibold text-xl text-text/primary">Legal</span>

                        <div className="flex flex-col gap-3">
                            <Button size="large" variant="outlined" className="!py-[0.6875rem] !bg-text/primary !h-16 !flex !items-center !gap-[1.0625rem]">
                                <Image src="/svgs/icon-ch-play.svg" width={30} height={30} alt="chplay" />

                                <div className="flex flex-col items-start text-white">
                                    <span>Get it on</span>
                                    <span className="font-semibold">Google Play Store</span>
                                </div>
                            </Button>

                            <Button size="large" variant="outlined" className="!py-[0.6875rem] !h-16 !flex !items-center !gap-[1.0625rem] !bg-brand/500">
                                <Image src="/svgs/icon-ch-play.svg" width={30} height={30} alt="chplay" />

                                <div className="flex flex-col items-start text-white">
                                    <span>Get it on</span>
                                    <span className="font-semibold">Google Play Store</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer