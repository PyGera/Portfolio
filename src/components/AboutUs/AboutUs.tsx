import React from "react"
import {graphql, useStaticQuery} from "gatsby";
import style from "./AboutUs.module.css"

const AboutUs = () => {
    const query = useStaticQuery(graphql`
        query AboutUs {
            datoCmsHome {
                sections {
                    ... on DatoCmsAboutMeSection {
                        title
                        description
                    }
                }
            }
        }
    `)

    return (
        <div className={style.section}>
            <div className={style.title}>{query.datoCmsHome.sections[1].title}</div>
            <div className={style.description}>{query.datoCmsHome.sections[1].description}</div>
        </div>
    )
}

export default AboutUs