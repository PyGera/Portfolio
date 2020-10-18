import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import style from "./Curriculum.module.css"
import { Col, Container, Row } from "react-bootstrap"
import Button from "../Button/Button"

const Curriculum = () => {
  const query = useStaticQuery(graphql`
    query Curriculum {
        datoCmsHome {
            sections {
                ... on DatoCmsCurriculumSection {
                    title
                    description
                    linkit
                    linken
                }
            }
        }
    }
  `)

  return (
    <div className={style.section}>
      <div className={style.title}>{query.datoCmsHome.sections[4].title}</div>
      <div className={style.description}>{query.datoCmsHome.sections[4].description}</div>
      <a href={query.datoCmsHome.sections[4].linkit}><Button className={style.button}>Italian CV</Button></a>
      <a href={query.datoCmsHome.sections[4].linken}><Button className={style.button + " " + (query.datoCmsHome.sections[4].linken? "": style.disabled)}>English CV</Button></a>
    </div>
  )
}

export default Curriculum