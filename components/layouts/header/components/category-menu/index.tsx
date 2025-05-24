import { LocaleKeys } from '@/@types/locales';
import Image from 'next/image';
import Link from 'next/link';
import AppMegamenu from '@/components/common/app-megamenu';
import { MockCategory } from '@/share/mocks/mock-category';
import AppMobileCategoryMenu from '@/components/common/app-mobile-category-menu';

interface Props {
    dictionary: LocaleKeys
}

function CategoryMenu(props: Props) {
    const { dictionary } = props

    return (
        <div className='section-container flex flex-col xl:flex-row gap-6 xl:gap-0 xl:items-center lg:justify-between'>
            <div className='flex !items-start md:!items-center flex-col md:flex-row md:justify-between xl:justify-normal gap-3'>
                <AppMegamenu dictionary={dictionary} subCategoryList={MockCategory} />
                <AppMobileCategoryMenu dictionary={dictionary} />

                <div className='flex items-center mx-auto md:mx-0 gap-5'>
                    <Link href="/" className='text-text/primary text-xs sm:text-base'>{dictionary['About us']}</Link>
                    <Link href="/" className='text-text/primary text-xs sm:text-base'>{dictionary['Post']}</Link>
                    <Link href="/" className='text-text/primary text-xs sm:text-base'>{dictionary['Catalog']}</Link>
                    <Link href="/" className='text-text/primary text-xs sm:text-base'>{dictionary['Contact']}</Link>
                </div>
            </div>

            <div className='flex items-center justify-center xl:justify-normal gap-5 flex-wrap'>
                <div className='flex items-center gap-2'>
                    <Image src="/svgs/icon-clock.svg" width={20} height={20} alt='clock' />
                    <span>{dictionary['Support 24/7']}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Image src="/svgs/icon-hand-hold-money.svg" width={20} height={20} alt='clock' />
                    <span>{dictionary['Free shipping']}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Image src="/svgs/icon-truck-shipping.svg" width={20} height={20} alt='clock' />
                    <span>{dictionary['Fast shipping 2h']}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Image src="/svgs/icon-circle-refresh.svg" width={20} height={20} alt='clock' />
                    <span>{dictionary['30 days return']}</span>
                </div>
            </div>
        </div>
    )
}

export default CategoryMenu