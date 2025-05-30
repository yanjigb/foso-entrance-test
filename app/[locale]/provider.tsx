'use client'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider, FloatButton, Image, Layout } from 'antd'
import { Toaster } from 'sonner'
import { UpOutlined } from '@ant-design/icons';

import { themeConfig } from '@/share/theme/theme-config'
import { PropsWithChildren } from 'react'

export default function Provider({ children }: PropsWithChildren) {
    return (
        // Extract antd styles to avoid Flash Of Unstyled Content (FOUC)
        <AntdRegistry>
            <ConfigProvider theme={themeConfig}>
                <Layout>
                    {children}
                </Layout>
                <Toaster position="bottom-right" richColors />
                <FloatButton.BackTop icon={<UpOutlined className='text-sm' />} />
            </ConfigProvider>
        </AntdRegistry>
    )
}
