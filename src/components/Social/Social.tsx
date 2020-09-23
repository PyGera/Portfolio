import React from "react"
import "./Social.scss"

interface Props {
    link: string,
    icon: string,
    social: string,
    color: string
}

export default function Social(props: Props) {
    return (
        <a href={props.link}><i style={{color: props.color}} className={props.icon + " " + props.social + " icons"}></i></a>
    );
}