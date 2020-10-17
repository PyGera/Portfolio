import React from "react"
import style from "./Project.module.css"
import Button from "../Button/Button";

interface Props {
    logo: string,
    description: string,
    link: string
}

const Project = (props: Props) => {
    return (
        <div className={style.parent}>
            <div className={style.card} style={{backgroundImage: `url(${props.logo})`}}>
                <div className={style.things}>
                    <div className={style.description}>{props.description}</div>
                    <a href={props.link}><Button className={style.button}>Visit Website ></Button></a>
                </div>
            </div>
        </div>
    )
}

export default Project