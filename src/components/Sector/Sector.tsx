import React from "react"
import style from "./Sector.module.css"
import {graphql, useStaticQuery} from "gatsby";

interface Props {
    icon: string,
    title: string,
    description: string,
    topic_title: string,
    topic_description: string,
    tools_title: string,
    tools_description: string,
    className ?: string
}

const Sector = (props: Props) => {
    const topics: Array<JSX.Element> = []
    props.topic_description.split("\n").forEach(e => {
        topics.push(<div>{e}</div>)
    })

    const tools: Array<JSX.Element> = []
    props.tools_description.split("\n").forEach(e => {
        tools.push(<div>{e}</div>)
    })

    return (
        <div className={style.sector + " " + props.className}>
            <div><img className={style.img} src={props.icon}  alt={props.title}/></div>
            <div className={style.title}>{props.title}</div>
            <div className={style.description}>{props.description}</div>
            <div className={style.topicTitle}>{props.topic_title}</div>
            <div className={style.topicDescription}>{topics}</div>
            <div className={style.toolsTitle}>{props.tools_title}</div>
            <div className={style.toolsDescription}>{tools}</div>
        </div>
    )
}

export default Sector