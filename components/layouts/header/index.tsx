'use client'

import TopSmallBanner from "@/components/ui/top-small-banner"
import { Badge, Button, Input, Modal } from "antd"
import Image from "next/image"
import CategoryMenu from "./components/category-menu"
import { LocaleKeys } from "@/@types/locales"
import { useToggle } from "ahooks"
import AppSideCart from "@/components/common/app-side-cart"
import SignInForm from "@/components/forms/sign-in-form"

interface Props {
    dictionary: LocaleKeys
}

function Header(props: Props) {
    const { dictionary } = props
    const [openSideCart, { toggle: toggleSideCart }] = useToggle(false)
    const [openFormLogin, { toggle: toggleOpenFormLogin }] = useToggle(false)

    return (
        <header className="flex flex-col gap-6 w-full">
            <TopSmallBanner dictionary={dictionary} />

            <div className="w-[15.625rem] h-[6.9375rem] xl:hidden mx-auto">
                <Image src="/images/logo.png" width={250} height={111} alt="logo" className="w-full h-full object-contain" />
            </div>

            <section className="section-container text-text/primary">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="w-[15.625rem] h-[6.9375rem] hidden xl:block">
                        <Image src="/images/logo.png" width={250} height={111} alt="logo" className="w-full h-full object-contain" />
                    </div>

                    <div className="flex items-center justify-between gap-6 border-2 w-full md:!w-max p-2 grow xl:max-w-[46.25rem] rounded-full border-brand/600">
                        <div className="flex items-center justify-between flex-1 gap-2">
                            <Input placeholder={dictionary["Find products"]} className="!border-none !bg-transparent" />
                            <Image src="/svgs/icon-camera.svg" width={28} height={28} alt="camera" />
                        </div>

                        <Button shape="round" icon={<Image src="/svgs/icon-search.svg" width={26} height={27} alt="search" />} size="large" />
                    </div>

                    <div className="flex items-center justify-between gap-8 flex-shrink-0">
                        <Button type="text" className="flex items-center gap-2">
                            <Image src="/svgs/icon-circle-vn.svg" width={36} height={36} alt="icon vn" />
                            <span>VI</span>
                        </Button>

                        <Button onClick={toggleSideCart} type="text" className="flex items-center gap-2">
                            <Badge count={12} color="#FF5630">
                                <Image src="/svgs/icon-cart.svg" width={36} height={36} alt="icon vn" />
                            </Badge>
                            <span className="text-now hidden sm:inline-block">{dictionary.Cart}</span>
                        </Button>

                        <Button onClick={toggleOpenFormLogin} type="text" className="flex items-center gap-2">
                            <Image src="/svgs/icon-user.svg" width={36} height={36} alt="icon vn" />
                            <span>{dictionary.Account}</span>
                        </Button>
                    </div>
                </div>
            </section>

            <CategoryMenu dictionary={dictionary} />

            {openSideCart && <AppSideCart dictionary={dictionary} open={openSideCart} onClose={toggleSideCart} />}
            {openFormLogin &&
                <Modal
                    title={dictionary['Sign in']}
                    centered
                    open={openFormLogin}
                    footer={null}
                    onCancel={toggleOpenFormLogin}
                >
                    <SignInForm dictionary={dictionary} onSubmitForm={toggleOpenFormLogin} />
                </Modal>
            }
        </header>
    )
}

export default Header