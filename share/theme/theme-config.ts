import { theme, ThemeConfig } from 'antd'

export const themeConfig: ThemeConfig = {
    token: {
        colorPrimary: '#025FCA',
        colorBgLayout: '#F4F6F8',
        colorText: '#1C252E',
        colorTextBase: '#1C252E',
        colorPrimaryText: '#1C252E',
    },
    algorithm: theme.defaultAlgorithm,
    components: {
        Collapse: {
            headerBg: 'white',
            headerPadding: 0,
            contentPadding: 0,
        },
        Checkbox: {
            colorPrimary: '#E6F1FF'
        },
        Button: {
            defaultBg: '#0155C6',
            defaultColor: 'white',
            defaultHoverBg: '#0155C6',
            defaultActiveBg: '#0155C6',
            defaultActiveColor: 'white',
            defaultHoverColor: 'white',
            colorPrimaryHover: '#025FCA',
            colorPrimary: '#E6F1FF',
            colorPrimaryActive: '#025FCA',
        },
    },
}
