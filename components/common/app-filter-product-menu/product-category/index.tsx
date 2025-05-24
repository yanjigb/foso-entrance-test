import { LocaleKeys } from "@/@types/locales"
import type { CollapseProps } from 'antd';
import { Checkbox, Collapse } from 'antd';

interface Props {
    dictionary: LocaleKeys
}

function ProductCategory(props: Props) {
    const { dictionary } = props


    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: <span className="text-brand/500 font-bold text-xl">{dictionary['Product category']}</span>,
            children: <ul className="!px-0">
                <li className="flex items-center gap-2">
                    <Checkbox id="danh-muc-san-pham" />
                    <label htmlFor="danh-muc-san-pham" className="cursor-pointer">
                        {dictionary['Engine air filter - Air Filter']} <span className="text-text/disabled">(24)</span>
                    </label>
                </li>
                <li className="flex items-center gap-2">
                    <Checkbox id="loc-nhien-lieu" />

                    <label htmlFor="loc-nhien-lieu" className="cursor-pointer">
                        {dictionary['Fuel filter - Fuel Filter']}
                        <span className="text-text/disabled">(24)</span>
                    </label>
                </li>
                <li className="flex items-center gap-2">
                    <Checkbox id="bo-loc-dau" />

                    <label htmlFor="bo-loc-dau" className="cursor-pointer">
                        {dictionary['Oil filter']}
                        <span className="text-text/disabled">(24)</span>
                    </label>
                </li>
                <li className="flex items-center gap-2">
                    <Checkbox id="unclassified" />

                    <label htmlFor="unclassified" className="cursor-pointer">
                        {dictionary['Unclassified']}
                        <span className="text-text/disabled">(24)</span>
                    </label>
                </li>
                <li className="flex items-center gap-2">
                    <Checkbox id="others" />

                    <label htmlFor="others" className="cursor-pointer">
                        {dictionary['Others']}
                        <span className="text-text/disabled">(24)</span>
                    </label>
                </li>
            </ul>,
        },
    ];

    return (
        <div className="border-t py-3">
            <Collapse
                items={items}
                defaultActiveKey={['1']}
                ghost
                expandIconPosition='end'
            />
        </div>
    )
}

export default ProductCategory