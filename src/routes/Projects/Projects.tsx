import React from "react"
import { Link } from "react-router-dom"
import "./Projects.scss"


interface Props {
    projects: any
}

export default function Projects(props: Props) {
    return (
        <div className="windows">
            <Link to="/">
                <i className="fas fa-arrow-left icons freccia"></i>
            </Link>
            <div className="title">Projects</div>
            <br />
            {props.projects}
        </div>
    );
}