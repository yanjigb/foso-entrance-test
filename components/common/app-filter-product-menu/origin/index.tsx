import { LocaleKeys } from "@/@types/locales"
import type { CollapseProps } from 'antd';
import { Checkbox, Collapse } from 'antd';

interface Props {
    dictionary: LocaleKeys
}

function Origin(props: Props) {
    const { dictionary } = props

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: <span className="text-brand/500 font-bold text-xl">{dictionary.Origin}</span>,
            children: <ul className="!px-0">
                <li className="flex items-center gap-2">
                    <Checkbox id="germany" />

                    <label htmlFor="germany" className="cursor-pointer">
                        {dictionary.Germany} <span className="text-text/disabled">(24)</span>
                    </label>
                </li>
                <li className="flex items-center gap-2">
                    <Checkbox id="japan" />

                    <label htmlFor="japan" className="cursor-pointer">
                        {dictionary.Japan}
                        <span className="text-text/disabled">(24)</span>
                    </label>
                </li>
                <li className="flex items-center gap-2">
                    <Checkbox id="china" />

                    <label htmlFor="china" className="cursor-pointer">
                        {dictionary.China}
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

export default Origin