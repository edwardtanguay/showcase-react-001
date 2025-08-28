import type React from "react"

type Props = {
    children: React.ReactNode;
    title: string;
    description?: string;
}

export const HowtoWrapper = ({ children, title, description = "" }: Props) => {
    return (
        <div>
            <h2 className="bg-gray-300 mb-2 py-1 px-2">
                <div className="text-2xl">{title}</div>
                <div className="italic">{description}</div>
            </h2>
            {children}
        </div>
    )
}