import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.css"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import AboutUs from "../components/AboutUs/AboutUs";
import Sectors from "../components/Sectors/Sectors";
import MyProjects from "../components/MyProjects/MyProjects";


const IndexPage = () => (
  <Layout>
    <Hero />
    <AboutUs />
    <Sectors />
    <MyProjects />
  </Layout>
)

export default IndexPage
