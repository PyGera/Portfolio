import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../Button/Button"
import style from "./StartProject.module.css"

const StartProject = () => {
  const query = useStaticQuery(graphql`
    query StartProject {
        datoCmsHome {
            sections {
                ... on DatoCmsStartprojectSection {
                    title
                    description
                }
            }
        }
    }
  `)

  return (
    <Container>
      <div className={style.section}>
        <Row>
          <Col><div className={style.title}>{query.datoCmsHome.sections[5].title}</div></Col>
          <Col><div className={style.description}>{query.datoCmsHome.sections[5].description}</div></Col>
          <Col><div className={style.buttonContainer}><Button className={style.button}>Let's do this</Button></div></Col>
        </Row>
      </div>
    </Container>
  )
}

export default StartProject