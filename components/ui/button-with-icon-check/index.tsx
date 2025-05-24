import { Button, ButtonProps } from "antd"
import Image from "next/image"

interface Props extends ButtonProps {
    text: string
    active?: boolean
}

function ButtonWithIconCheck(props: Props) {
    const { text, active = false } = props

    return active ? (
        <Button {...props} size="large" className="!border !border-brand/500 max-w-[6.3125rem] h-10 rounded-[0.5rem] text-[0.875rem] !text-brand/600 text-sm flex items-center justify-center !font-semibold relative !bg-white">
            {text}

            <div className="absolute top-0 right-0 h-[1.625rem] w-[1.5625rem] rounded-tr-[0.4375rem]"
                style={{ background: 'linear-gradient(46deg, transparent 49.5%, #0373F3 50%)' }}>
                <Image src="/svgs/icon-check.svg" alt="check" width={7} height={7} className='absolute top-1 right-1' />
            </div>
        </Button>
    ) : (
        <Button {...props} size="large" variant="outlined" className="max-w-[6.3125rem] !bg-white !text-text/primary">
            {text}
        </Button>
    )
}

export default ButtonWithIconCheck