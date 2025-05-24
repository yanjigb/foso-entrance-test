import { cn } from "@/share/utils/cn"
import Image from "next/image"

interface Props {
    imageUrl: string
    alt?: string
    title: string
    description?: string
    className?: string
    widthImage?: number
    heightImage?: number
}

function ImageWithText(props: Props) {
    const { imageUrl, alt, title, description, widthImage = 48, heightImage = 48, className } = props

    return (
        <div className={cn("bg-white rounded-xl p-4 flex items-center gap-4", className)}>
            <Image src={imageUrl} width={widthImage} height={heightImage} alt={alt!} style={
                {
                    width: imageUrl,
                    height: imageUrl,
                    objectFit: 'cover'
                }
            } />

            <div className="flex flex-col gap-2">
                <span className="text-base font-bold text-text/primary">{title}</span>
                {description && <span className="text-text/disabled text-sm">{description}</span>}
            </div>
        </div>
    )
}

export default ImageWithText