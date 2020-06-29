import React from "react"
import "./Social.scss"

interface Props {
    link: string,
    icon: string,
    social: string
}

export default function Social(props: Props) {
    return (
        <a href={props.link}><i className={props.icon + " " + props.social + " icons"}></i></a>
    );
}