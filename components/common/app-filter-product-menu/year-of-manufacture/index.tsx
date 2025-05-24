import { LocaleKeys } from "@/@types/locales"
import type { CollapseProps } from 'antd';
import { Checkbox, Collapse } from 'antd';

interface Props {
    dictionary: LocaleKeys
}

function YearOfManufacture(props: Props) {
    const { dictionary } = props

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: <span className="text-brand/500 font-bold text-xl">{dictionary['Year Of Manufacture']}</span>,
            children: <ul className="!px-0">
                <li className="flex items-center gap-2">
                    <Checkbox id="2021" />

                    <label htmlFor="2021" className="cursor-pointer">
                        2021 <span className="text-text/disabled">(24)</span>
                    </label>
                </li>
                <li className="flex items-center gap-2">
                    <Checkbox id="2020" />

                    <label htmlFor="2020" className="cursor-pointer">
                        2020
                        <span className="text-text/disabled">(24)</span>
                    </label>
                </li>
                <li className="flex items-center gap-2">
                    <Checkbox id="2019" />

                    <label htmlFor="2019" className="cursor-pointer">
                        2019
                        <span className="text-text/disabled">(24)</span>
                    </label>
                </li>
                <li className="flex items-center gap-2">
                    <Checkbox id="2018" />

                    <label htmlFor="2018" className="cursor-pointer">
                        2018
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

export default YearOfManufacture