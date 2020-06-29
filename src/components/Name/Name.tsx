import React from "react"
import "./Name.scss"

interface Props {
    name: string
}

export default function Name(props: Props) {
    return <div className="name">{props.name}</div>
}