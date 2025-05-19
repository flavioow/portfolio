import React, { Children, cloneElement, isValidElement } from "react"
import type { ReactElement, ReactNode } from "react"
import type { InfiniteScrollItemProps } from "./InfiniteScrollItem"

interface InfiniteScrollRootProps {
    children: ReactNode
}

export default function InfiniteScrollRoot({
    children,
}: InfiniteScrollRootProps) {
    const validChildren = Children.toArray(children).filter((child) =>
        isValidElement<InfiniteScrollItemProps>(child),
    ) as ReactElement<InfiniteScrollItemProps>[]

    const totalItems = validChildren.length

    return (
        <div className="w-full bg-primary/25 overflow-hidden py-16 relative whitespace-nowrap flex align-middle">
            {validChildren.map((child, index) =>
                cloneElement(child, {
                    index: index + 1,
                    totalItems: totalItems,
                }),
            )}
        </div>
    )
}
