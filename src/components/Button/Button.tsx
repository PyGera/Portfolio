import React from "react"
import "./Button.css"

interface Props {
    className ?: string,
    children: string,
}

const Button = (props: Props) => (
    <button style={{outline: "none"}} className={`button ${props.className}`}>{props.children}</button>
)

export default Button