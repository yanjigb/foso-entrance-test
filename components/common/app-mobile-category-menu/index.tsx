'use client'

import { LocaleKeys } from "@/@types/locales"
import { Button, Collapse, Drawer, Image, Menu } from "antd"
import { useToggle } from "ahooks"
import { MockCategory } from "@/share/mocks/mock-category"
import CollapsePanel from "antd/es/collapse/CollapsePanel"
import Link from "next/link"

interface Props {
    dictionary: LocaleKeys
}

function AppMobileCategoryMenu(props: Props) {
    const { dictionary } = props
    const [openCategoryMenu, { toggle: toggleOpenCategoryMenu }] = useToggle(false)
    const items = [
        {
            key: '1',
            label: <span className="text-brand/500 font-bold text-xl">{dictionary['Oil filter']}</span>,
            children: <ul className="!px-0">
                <li className="flex items-center gap-2">

                    <label htmlFor="asakashi" className="cursor-pointer">
                        Asakashi <span className="text-text/disabled">(24)</span>
                    </label>
                </li>
                <li className="flex items-center gap-2">

                    <label htmlFor="bosch" className="cursor-pointer">
                        Bosch
                        <span className="text-text/disabled">(24)</span>
                    </label>
                </li>
                <li className="flex items-center gap-2">

                    <label htmlFor="huyndai" className="cursor-pointer">
                        Huyndai
                        <span className="text-text/disabled">(24)</span>
                    </label>
                </li>
            </ul>,
        },
    ];

    return (
        <div className="w-full md:w-max">
            <Button className="!py-4 !w-full" onClick={toggleOpenCategoryMenu}>
                <div className='flex items-center gap-2 mr-1'>
                    <Image src="/svgs/icon-hamburger-menu.svg" width={18} height={18} alt="menu" />
                    <span className='text-white'>{dictionary['Product category']}</span>
                </div>
            </Button>

            <Drawer
                placement="left"
                width={500}
                onClose={toggleOpenCategoryMenu}
                open={openCategoryMenu}
                classNames={{
                    body: '!py-1'
                }}
            >
                <Menu
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    className="!w-full"
                >
                    <Collapse
                        ghost
                        expandIconPosition='end'
                    >
                        {
                            MockCategory.map(item => (
                                <CollapsePanel className="!py-2" key={item.key} header={item.title}>
                                    <div className="flex flex-col gap-2">
                                        {
                                            item.products.map(product => (
                                                <Link href={product.href!}>{product.title}</Link>
                                            ))
                                        }
                                    </div>
                                </CollapsePanel>
                            ))
                        }
                    </Collapse>
                </Menu>
            </Drawer>
        </div>
    )
}

export default AppMobileCategoryMenu