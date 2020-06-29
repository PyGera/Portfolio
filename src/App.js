import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Social, Project } from "./components/components"
import { Landing, Projects, CV } from "./routes/routes"



import './App.css';

import config from "./config.json"


function App() {

    let socials = []

    config.socials.forEach(e => {
        socials.push(<Social social={e.social} icon={e.icon} link={e.link} />)
    })


    let projects = []

    config.projects.forEach(e => {
        projects.push(<Project title={e.title} description={e.description} period={e.period} link={e.link} src={e.src} />)
    })

    return(
        <Router>
            <Switch>
                <Route path="/cv">
                    <CV linkItalian={config.cv.it} linkEnglish={config.cv.en} />
                </Route>
                <Route path="/projects">
                    <Projects projects={projects} />
                </Route>
                <Route path="/">
                    <Landing name={config.name} profession={config.profession} socials={socials} profileImg={config.profileImg} />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
