import React from "react"
import {graphql, useStaticQuery} from "gatsby";
import style from "./MyProjects.module.css"
import Project from "../Project/Project";
import {Col, Row, Container} from "react-bootstrap";

const MyProjects = () => {
    const query = useStaticQuery(graphql`
        query Projects {
            datoCmsHome {
                sections {
                    ... on DatoCmsMyprojectsSection {
                        title
                        description
                        projects {
                            name
                            logo {
                                url
                            }
                            link
                        }
                    }   
                }
            }
        }
    `)

    // const firstProject: any = []
    // for (let i = 0; i < query.datoCmsHome.sections[3].projects.length; i++) {
    //     let temp: any = []
    //     temp.push(query.datoCmsHome.sections[3].projects[i])
    //     if (!((i + 1) % 3)) {
    //         firstProject.push(temp)
    //         temp = []
    //     }
    // }


    const projects: Array<JSX.Element> = []

    let temp: any = []
    for (let i = 0; i < query.datoCmsHome.sections[3].projects.length; i++) {
        temp.push(<Col><Project logo={query.datoCmsHome.sections[3].projects[i].logo.url} description={query.datoCmsHome.sections[3].projects[i].name} link={query.datoCmsHome.sections[3].projects[i].link}/></Col>)
        if (!((i + 1) % 3) || i == (query.datoCmsHome.sections[3].projects.length - 1)) {
            projects.push(<Row>{temp}</Row>)
            temp = []
        }
    }

    console.log(projects)

    return (
        <div className={style.section}>
            <div className={style.title}>{query.datoCmsHome.sections[3].title}</div>
            <div className={style.description}>{query.datoCmsHome.sections[3].description}</div>
            <div className={style.projects}>{projects}</div>
        </div>
    )
}

export default MyProjects