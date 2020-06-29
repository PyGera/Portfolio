import React from "react"
import "./Profession.scss"

interface Props {
    profession: string
}

export default function Profession(props: Props) {
    return <div className="profession">{props.profession}</div>
}