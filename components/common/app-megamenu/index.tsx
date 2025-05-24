import { LocaleKeys } from '@/@types/locales';
import ImageWithText from '@/components/ui/image-with-text';
import { IMegamenu } from '@/share/types/megamenu';
import { ISubCategoryList } from '@/share/types/sub-categories';
import { cn } from '@/share/utils/cn';
import { Menu } from 'antd';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import AppHotSaleProductList from '../app-hot-sale-product-list';
import { RouteNames } from '@/share/types/route-names';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
    dictionary: LocaleKeys
    subCategoryList: ISubCategoryList[]
    className?: string
}

function AppMegamenu(props: Props) {
    const { dictionary, subCategoryList, className } = props
    const [activeSubcategory, setActiveSubcategory] = useState<ISubCategoryList | null>(null);

    const categories: IMegamenu[] = useMemo(() => [
        {
            key: dictionary['Product category'],
            title: (
                <div className='flex items-center gap-2 mr-1'>
                    <Image src="/svgs/icon-hamburger-menu.svg" width={18} height={18} alt="menu" />
                    <span className='text-white'>{dictionary['Product category']}</span>
                </div>
            ),
            subCategoryList
        },
    ], [])

    return (
        <div className="lg:block hidden">
            <Menu
                expandIcon={<ChevronDown className='!size-4 !text-white' />}
                rootClassName='!bg-transparent w-full md:w-fit'
            >
                {categories.map((category) => (
                    <Menu.SubMenu
                        key={category.key}
                        title={category.title}
                        className='bg-brand/dark relative'
                        onTitleMouseEnter={() => setActiveSubcategory(category.subCategoryList[0] || null)}
                    >
                        <div className='flex absolute -left-[130%] top-12 bg-white rounded-b-xl overflow-hidden'>
                            {/* Subcategories */}
                            <Menu mode='inline' className='!border-none !bg-transparent'>
                                {category.subCategoryList.map((subcat) => (
                                    <Menu.Item
                                        key={subcat.key}
                                        className={
                                            cn(
                                                'hover:!border-l-2 !box-border !min-w-[268px] hover:!border-brand/dark !flex items-center !pl-4 !rounded-none min-h-[4.5rem]',
                                                subcat.key === activeSubcategory?.key && "!border-l-2 !border-brand/dark"
                                            )
                                        }
                                        onMouseEnter={() => setActiveSubcategory(subcat)}
                                    >
                                        <div className='flex items-center gap-3 min-w-[231.7px]'>
                                            <Image src={subcat.image!} width={40} height={40} alt={subcat.altText!} />

                                            <div className='flex items-center justify-between w-[179px]'>
                                                <span className={cn(subcat.key === activeSubcategory?.key && "text-brand/700 font-bold")}>{subcat.title}</span>
                                                <ChevronRight />
                                            </div>
                                        </div>
                                    </Menu.Item>
                                ))}
                            </Menu>

                            {/* Products for active subcategory */}
                            <div className='md:min-w-[550px] lg:min-w-[720px] xl:min-w-[1112px] p-4 bg-layout/bg flex flex-col gap-6'>
                                <div className='grid grid-cols-3 gap-4 pb-7'>
                                    <Link href={RouteNames.HOME}>
                                        <ImageWithText imageUrl="/images/oil-filter-category-logo.png" title='bo loc gio' widthImage={70} heightImage={70} alt='' />
                                    </Link>

                                    <Link href={RouteNames.HOME}>
                                        <ImageWithText imageUrl="/images/air-filter-category-logo.png" title='bo loc gio' widthImage={70} heightImage={70} alt='' />
                                    </Link>

                                    <Link href={RouteNames.HOME}>
                                        <ImageWithText imageUrl="/images/air-filter-category-logo.png" title='bo loc gio' widthImage={70} heightImage={70} alt='' />
                                    </Link>

                                    <Link href={RouteNames.HOME}>
                                        <ImageWithText imageUrl="/images/oil-filter-category-logo.png" title='bo loc gio' widthImage={70} heightImage={70} alt='' />
                                    </Link>

                                    <Link href={RouteNames.HOME}>
                                        <ImageWithText imageUrl="/images/air-filter-category-logo.png" title='bo loc gio' widthImage={70} heightImage={70} alt='' />
                                    </Link>

                                    <Link href={RouteNames.HOME}>
                                        <ImageWithText imageUrl="/images/air-filter-category-logo.png" title='bo loc gio' widthImage={70} heightImage={70} alt='' />
                                    </Link>
                                </div>

                                <div className='max-w-[100dvw] overflow-auto'>
                                    {activeSubcategory && (
                                        <AppHotSaleProductList dictionary={dictionary} listProduct={activeSubcategory.products} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </Menu.SubMenu>
                ))}
            </Menu>
        </div>
    )
}

export default AppMegamenu