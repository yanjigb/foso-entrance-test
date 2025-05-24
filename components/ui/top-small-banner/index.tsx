import { LocaleKeys } from "@/@types/locales"
import Image from "next/image"
import Link from "next/link"

interface Props {
    dictionary: LocaleKeys
}

function TopSmallBanner(props: Props) {
    const { dictionary } = props

    return (
        <section className="min-h-7 w-full py-1 bg-gradient-to-r from-brand/600 via-brand/light to-brand/600">
            <div className="section-container flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image src="/svgs/icon-sale.svg" width={16} height={16} alt="sale" className="hidden md:block" />

                    <span className="text-white">
                        {dictionary['Enter code']} <b className="text-warning/main">NEWBIE</b> {dictionary['10% off your first purchase']}
                    </span>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Image src="/svgs/icon-phone-rounded.svg" width={16} height={16} alt="sale" />

                        <span className="text-white">
                            {dictionary.Hotline} <Link href="tel:+842837607607" target="_blank" className="font-bold text-warning/main"> 0283 760 7607</Link>
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Image src="/svgs/icon-phone-device.svg" width={16} height={16} alt="sale" />

                        <span className="text-white">
                            {dictionary['Download app']}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopSmallBanner