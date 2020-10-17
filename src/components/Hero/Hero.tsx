import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import style from "./Hero.module.css"

const Hero = () => {
    const query = useStaticQuery(graphql`
        query Hero {
            datoCmsHome {
                sections {
                    ...on DatoCmsHeroSection {
                        title
                        description
                        profile {
                            url
                        }
                    }
                }
            }
        }
    `)

    return (
        <div className={style.section}>
            <div className={style.title}>{query.datoCmsHome.sections[0].title}</div>
            <div className={style.description}>{query.datoCmsHome.sections[0].description}</div>
            <div className={style.imgContainer}><img className={style.img} src={query.datoCmsHome.sections[0].profile.url} alt="me" /></div>
        </div>
    )
}

export default Hero;