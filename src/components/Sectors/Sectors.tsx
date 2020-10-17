import React from "react"
import style from "./Sectors.module.css"
import {graphql, useStaticQuery} from "gatsby";
import Sector from "../Sector/Sector";
import { Container, Row, Col } from "react-bootstrap";

const Sectors = () => {
    const query = useStaticQuery(graphql`
        query Sectors {
            datoCmsHome {
                sections {
                    ... on DatoCmsSectorsSection {
                        sectors {
                            icon {
                                url
                            }
                            title
                            description
                            topicTitle
                            topicDescription
                            toolsTitle
                            toolsDescription
                        }
                    }
                }
            }
        }
    `)

    console.log(query)

    const sectors: Array<JSX.Element> = []

    // query.datoCmsHome.sections[2].sectors.forEach((e: any) => {
    //     sectors.push(<Col><Sector icon={e.icon.url} title={e.title} description={e.description} topic_title={e.topicTitle} topic_description={e.topicDescription} tools_title={e.toolsTitle} tools_description={e.toolsDescription} /></Col>)
    // })

    for (let i = 0; i < query.datoCmsHome.sections[2].sectors.length; i++) {
        if (i == 0) {
            sectors.push(<Col><Sector className="first" icon={query.datoCmsHome.sections[2].sectors[i].icon.url} title={query.datoCmsHome.sections[2].sectors[i].title} description={query.datoCmsHome.sections[2].sectors[i].description} topic_title={query.datoCmsHome.sections[2].sectors[i].topicTitle} topic_description={query.datoCmsHome.sections[2].sectors[i].topicDescription} tools_title={query.datoCmsHome.sections[2].sectors[i].toolsTitle} tools_description={query.datoCmsHome.sections[2].sectors[i].toolsDescription} /></Col>)
        }
        else if (i == (query.datoCmsHome.sections[2].sectors.length - 1)) {
            sectors.push(<Col><Sector className="last" icon={query.datoCmsHome.sections[2].sectors[i].icon.url} title={query.datoCmsHome.sections[2].sectors[i].title} description={query.datoCmsHome.sections[2].sectors[i].description} topic_title={query.datoCmsHome.sections[2].sectors[i].topicTitle} topic_description={query.datoCmsHome.sections[2].sectors[i].topicDescription} tools_title={query.datoCmsHome.sections[2].sectors[i].toolsTitle} tools_description={query.datoCmsHome.sections[2].sectors[i].toolsDescription} /></Col>)
        }
        else {
            sectors.push(<Col><Sector icon={query.datoCmsHome.sections[2].sectors[i].icon.url} title={query.datoCmsHome.sections[2].sectors[i].title} description={query.datoCmsHome.sections[2].sectors[i].description} topic_title={query.datoCmsHome.sections[2].sectors[i].topicTitle} topic_description={query.datoCmsHome.sections[2].sectors[i].topicDescription} tools_title={query.datoCmsHome.sections[2].sectors[i].toolsTitle} tools_description={query.datoCmsHome.sections[2].sectors[i].toolsDescription} /></Col>)
        }
    }


    return (
        // <Container fluid="md">
            <div className={style.section}>
                <div className={style.littleSection}>
                    <Row>
                        {sectors}
                    </Row>
                </div>
            </div>
        // </Container>
    )
}

export default Sectors