import { LocaleKeys } from "@/@types/locales"
import type { CollapseProps } from 'antd';
import { Checkbox, Collapse } from 'antd';

interface Props {
    dictionary: LocaleKeys
}

function Brand(props: Props) {
    const { dictionary } = props

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: <span className="text-brand/500 font-bold text-xl">{dictionary.Brand}</span>,
            children: <ul className="!px-0">
                <li className="flex items-center gap-2">
                    <Checkbox id="asakashi" />

                    <label htmlFor="asakashi" className="cursor-pointer">
                        Asakashi <span className="text-text/disabled">(24)</span>
                    </label>
                </li>
                <li className="flex items-center gap-2">
                    <Checkbox id="bosch" />

                    <label htmlFor="bosch" className="cursor-pointer">
                        Bosch
                        <span className="text-text/disabled">(24)</span>
                    </label>
                </li>
                <li className="flex items-center gap-2">
                    <Checkbox id="huyndai" />

                    <label htmlFor="huyndai" className="cursor-pointer">
                        Huyndai
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

export default Brand