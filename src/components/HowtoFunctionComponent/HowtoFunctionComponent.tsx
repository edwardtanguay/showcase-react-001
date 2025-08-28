import type React from "react"

type Props = {
    message: string;
}

export const HowtoFunctionComponent: React.FunctionComponent<Props> = ({message}:Props) => {
    return (
        <p>Message: {message}</p>
    )
}