import React from "react"
import { Link } from "react-router-dom"

import "./CV.scss"

interface Props {
    linkItalian: string,
    linkEnglish: string
}

export default (props:Props) => (
    <div className="windows">
        <Link to="/">
            <i className="fas fa-arrow-left icons freccia"></i>
        </Link>
        <div className="title">Curriculum Vitae</div>
        <br />
        <div className="desc">My CV is avaible in Italian and in English</div>
        
        <a href={props.linkItalian}>
            <div className="cv-link">
                <img alt="it-flag" className="cv-link__img" src="/assets/flags/Italy.png" />
                <div className="cv-link__title">Italian CV</div>
            </div>
        </a>

        <a href={props.linkEnglish}>
            <div className="cv-link">
                <img alt="en-flag" className="cv-link__img" src="/assets/flags/United-Kingdom.png" />
                <div className="cv-link__title">English CV</div>
            </div>
        </a>
        
    </div>
)