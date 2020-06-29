import React from "react"
import "./Project.scss"

interface Props {
    src: string,
    title: string,
    description: string,
    period: string,
    link: string
}

export default function Project(props: Props) {
    return (
        <a href={props.link}>
            <div className="projectCard">
                <div className="image-box">
                    <img src={props.src} alt="project-img" className="projectImg" />
                </div>
                <div className="projectTitle">{props.title}</div>
                <div className="projectDescription">{props.description}</div>
                <div className="projectPeriod">{props.period}</div>
            </div>
        </a>
    );
}