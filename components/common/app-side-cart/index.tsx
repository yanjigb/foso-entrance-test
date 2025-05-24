import { LocaleKeys } from "@/@types/locales"
import { Button, Drawer, DrawerProps, Empty, Typography } from "antd"

interface Props extends DrawerProps {
    dictionary: LocaleKeys
}

function AppSideCart(props: Props) {
    const { open, onClose, dictionary } = props

    return (
        <Drawer
            title={dictionary.Cart}
            placement="right"
            closable={{ 'aria-label': 'Close Button' }}
            onClose={onClose}
            open={open}
            {...props}
        >
            <Empty
                description={dictionary['Your cart is empty']}
            >
                <Button>Shopping Now</Button>
            </Empty>
        </Drawer>
    )
}

export default AppSideCart