import React from "react"
import { Link } from "react-router-dom"
import "./Button.scss"

interface Props {
    onClick ?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined,
    href: string,
    value: string
}

export default function Button(props: Props) {
    return (
        <div>
            {props.href?
                (
                    <Link to={props.href}>
                        <button className="btn" onClick={props.onClick}>{props.value}</button>
                    </Link>
                )
            :
                (
                    <button className="btn" onClick={props.onClick}>{props.value}</button>
                )
            }
        </div>
    );
}