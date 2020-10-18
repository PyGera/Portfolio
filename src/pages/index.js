import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.css"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import AboutUs from "../components/AboutUs/AboutUs";
import Sectors from "../components/Sectors/Sectors";
import MyProjects from "../components/MyProjects/MyProjects";
import Curriculum from "../components/Curriculum/Curriculum"
import StartProject from "../components/StartProject/StartProject"


const IndexPage = () => (
  <Layout>
    <Hero />
    <AboutUs />
    <Sectors />
    <MyProjects />
    <Curriculum />
    <StartProject />
  </Layout>
)

export default IndexPage
