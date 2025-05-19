import type { LucideIcon } from "lucide-react"

export interface InfiniteScrollItemProps {
    icon: LucideIcon
    text: string
    index?: number
    totalItems?: number
}

const InfiniteScrollItem: React.FC<InfiniteScrollItemProps> = ({
    icon: Icon,
    text,
    index,
    totalItems,
}) => {
    const animationDelay = `calc(60s / ${totalItems} * (${totalItems} - ${index}) * -1)`

    return (
        <div
            className="absolute flex justify-center w-[600px] top-[40%] align-middle gap-2 animate-infinite-scroll"
            style={{ animationDelay }}>
            <Icon size={24} className="text-p-mix" />
            <p>{text}</p>
        </div>
    )
}

export default InfiniteScrollItem
