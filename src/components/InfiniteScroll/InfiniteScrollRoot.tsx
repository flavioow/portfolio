import React from "react"
import type { ReactNode } from "react"
import InfiniteScrollItem from "./InfiniteScrollItem"

interface InfiniteScrollRootProps {
    children: ReactNode
}

export default function InfiniteScrollRoot({ children }: InfiniteScrollRootProps) {
    const totalItems = React.Children.count(children)

    return (
        <div className="w-full bg-primary/25 overflow-hidden py-16 relative whitespace-nowrap flex align-middle">
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child as React.ReactElement, {
                    index: index + 1,
                    totalItems: totalItems,
                })
            )}
        </div>
    )
}
