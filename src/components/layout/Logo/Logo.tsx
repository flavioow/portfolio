import Link from "next/link"
import React from "react"

export const Logo = () => {
    return (
        <div className="grid place-items-center transition-all duration-300 ease-in-out group">
            <svg
                width="400"
                height="600"
                viewBox="0 0 400 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Logo !size-8">
                <defs>
                    <mask id="mask">
                        <rect
                            x="-600"
                            y="0"
                            width="400"
                            height="600"
                            fill="white"
                            className="mask-rect transition-[x] duration-700 ease-in-out group-hover:[x:0]"
                        />
                    </mask>
                </defs>

                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M300 200C355.229 200 400 155.229 400 100C400 44.7715 355.229 0 300 0H100C44.7715 0 0 44.7715 0 100V500C0 555.229 44.7715 600 100 600C155.229 600 200 555.229 200 500C200 444.771 155.229 400 100 400H300C355.229 400 400 355.229 400 300C400 244.771 355.229 200 300 200ZM100 350H300C327.614 350 350 327.614 350 300C350 272.386 327.614 250 300 250H100C72.3857 250 50 272.386 50 300C50 327.614 72.3857 350 100 350Z"
                    className="fill-[var(--color-muted-foreground)]"
                />

                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M300 200C355.229 200 400 155.229 400 100C400 44.7715 355.229 0 300 0H100C44.7715 0 0 44.7715 0 100V500C0 555.229 44.7715 600 100 600C155.229 600 200 555.229 200 500C200 444.771 155.229 400 100 400H300C355.229 400 400 355.229 400 300C400 244.771 355.229 200 300 200ZM100 350H300C327.614 350 350 327.614 350 300C350 272.386 327.614 250 300 250H100C72.3857 250 50 272.386 50 300C50 327.614 72.3857 350 100 350Z"
                    className="fill-[var(--color-foreground)]"
                    mask="url(#mask)"
                />
            </svg>
        </div>
    )
}
