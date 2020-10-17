import {graphql, Link, useStaticQuery} from "gatsby"
import React from "react"
import { Navbar as BNavbar, Container } from "react-bootstrap"
import Button from "../Button/Button";
import "./Navbar.css"


const Navbar = () => {
    const query = useStaticQuery(graphql`
        query nav {
            datoCmsNavbar {
                logo {
                    url
                }
            }
        }
    `)

    return (
        <BNavbar>
            <Container>
                <BNavbar.Brand>
                    <img
                        src={query.datoCmsNavbar.logo.url}
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </BNavbar.Brand>
                <BNavbar.Collapse className="justify-content-end">
                    <Button className="btn-nav">Say Hello</Button>
                </BNavbar.Collapse>
            </Container>
        </BNavbar>
    )
}

export default Navbar
