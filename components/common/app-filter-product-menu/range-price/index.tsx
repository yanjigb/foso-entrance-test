import { LocaleKeys } from "@/@types/locales"
import type { CollapseProps } from 'antd';
import { Button, Checkbox, Collapse, Space } from 'antd';

interface Props {
    dictionary: LocaleKeys
}

function RangePrice(props: Props) {
    const { dictionary } = props

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: <span className="text-brand/500 font-bold text-xl">{dictionary['Range price']}</span>,
            children: <Space direction="vertical" className="w-full">
                <Button className="!border border-black !bg-transparent !text-text/primary" block variant="outlined">
                    {dictionary.Below} 100,000 đ
                </Button>
                <Button className="!border border-black !bg-transparent !text-text/primary" block variant="outlined">
                    100,000 đ - 300,000 đ
                </Button>
                <Button className="!border border-black !bg-transparent !text-text/primary" block variant="outlined">
                    300,000 đ - 500,000 đ
                </Button>
                <Button className="!border border-black !bg-transparent !text-text/primary" block variant="outlined">
                    {dictionary.Over} 500,000 đ
                </Button>
            </Space>,
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

export default RangePrice