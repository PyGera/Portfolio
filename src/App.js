import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Social, Project, Loading } from "./components/components"
import { Landing, Projects, CV } from "./routes/routes"



import './App.css';

import firebase from "firebase"

import { FirestoreProvider, FirestoreDocument, FirestoreCollection } from "@react-firebase/firestore"

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID
}


function App() {

    let flagSocial = true
    const [socials, setSocials] = useState([])

    let flagProjects = true
    const [projects, setProjects] = useState([])

    const [linkItalian, setLinkItalian] = useState('')
    const [linkEnglish, setLinkEnglish] = useState('')


    return(
        <FirestoreProvider {...config} firebase={firebase}>
            <Router>
                <Switch>
                    <Route path="/cv">
                        <CV linkItalian={linkItalian} linkEnglish={linkEnglish} />
                    </Route>
                    <Route path="/projects">
                        <Projects projects={projects} />
                    </Route>
                    <Route path="/">

                        {/* Getting Link to English CV */}
                        <FirestoreDocument path="CV/en">
                            {d => {
                                if (d.value !== undefined) setLinkEnglish(d.value.link)
                            }}
                        </FirestoreDocument>

                        {/* Getting Link to Italian CV */}
                        <FirestoreDocument path="CV/it">
                            {d => {
                                if (d.value !== undefined) setLinkItalian(d.value.link)
                            }}
                        </FirestoreDocument>

                        {/* Getting Projects */}
                        <FirestoreCollection path="Project">
                            {d => {
                                if (d.value !== null && flagProjects) {
                                    d.value.sort(function(a, b){
                                        return b.position-a.position
                                    })
                                    d.value.forEach(e => {
                                        projects.push(<Project src={e.src} title={e.title} description={e.description} period={e.period} link={e.link} />)
                                    });
                                    flagProjects = false
                                }
                            }}
                        </FirestoreCollection>

                        {/* Getting Socials */}
                        <FirestoreCollection path="Social">
                            {d => {
                                if (d.value !== null && flagSocial) {
                                    d.value.sort(function(a, b){
                                        return a.position-b.position
                                    })
                                    d.value.forEach(e => {
                                        socials.push(<Social link={e.link} icon={e.icon} social={e.social} />)
                                    });
                                    flagSocial = false
                                }
                            }}
                        </FirestoreCollection>

                        {/* Getting User */}
                        <FirestoreDocument path="User/Me">
                            {d => {
                                return d.isLoading? (<Loading />) : (d.value !== undefined? (<Landing name={d.value.name} profession={d.value.profession} socials={socials} profileImg={d.value.img} />): (<Loading />))
                            }}
                        </FirestoreDocument> 

                    </Route>
                </Switch>
            </Router>
        </FirestoreProvider>   
    )
}

export default App;
