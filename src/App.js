import React from 'react';
import ReactDOM from 'react-dom';
import profileImg from "./pp.jpeg";
import CanSatImg from "./cansat.png";
import TrashBotImg from "./tb.jpeg";
import GieriLangImg from "./gl.png";
import './App.css';

const name = "Federico Gerardi";
const profession = "Software Developer";

let page = 0;

function ProfileImg() {
    return (
        <img alt="profileImg" src={profileImg} className="profileImg" />
    );
}

function Name() {
    return (
        <div className="name">{name}</div>
    );
}

function Profession() {
    return (
        <div className="profession">{profession}</div>
    );
}

function Button(props) {
    return (
        <button className="btn" onClick={props.onClick}>{props.value}</button>
    );
}

function Social(props) {
    return (
        <a href={props.link}><i className={props.icon + " " + props.social + " icons"}></i></a>
    );
}

function gotoProjects() {

    ReactDOM.render(<Projects />, document.getElementById("root"))
}

function gotoLanding() {
    ReactDOM.render(<Landing />, document.getElementById("root"))
}

//TODO: Create an array of objects with all socials, add every social in a JSX var and insert it in Landing

function Landing() {
  return (
      <div id="landing" className="windows">
        <ProfileImg />
        <Name />
        <Profession />
        <Button onClick={gotoProjects} value="Progetti"/>
        <br />
        <Button value="Scarica il CV" />
        <br />
        <Social social="facebook" icon="fab fa-facebook" link="https://www.facebook.com/federico.gerardi.77" />
        <Social social="twitter" icon="fab fa-twitter" link="https://twitter.com/_gieri_" />
        <Social social="instagram" icon="fab fa-instagram" link="https://www.instagram.com/federicogerardi.py/" />
        <Social social="linkedin" icon="fab fa-linkedin" link="https://www.linkedin.com/in/federico-gerardi-81407a1a1/" />
        <Social social="telegram" icon="fab fa-telegram" link="https://t.me/PyGera" />
        <Social social="github" icon="fab fa-github" link="https://github.com/PyGera" />
      </div>
  );
}

function Project(props) {
    return (
        /*<table>
            <tr>
                <td class="td_img"><img className="projectImg" src={props.src} alt="projectImg" /></td>
                <td className="projectWrites">
                    <div className="projectTitle">{props.title}</div>
                    <div>{props.description}</div>
                </td>
            </tr>
        </table>*/
        <div className="projectCard">
            <div className="image-box">
                <img src={props.src} alt="project image" className="projectImg" />
            </div>
            <div className="projectTitle">{props.title}</div>
            <div className="projectDescription">{props.description}</div>
            <div className="projectPeriod">{props.period}</div>
        </div>

    );
}

function Projects() {
    return (
        <div className="windows">
            <i className="fas fa-arrow-left icons freccia" onClick={gotoLanding}></i>
            <div className="title">Progetti</div>
            <br />
            <Project src={GieriLangImg} title="GieriLang" description="Personale" period="2019-Now"/>
            <Project src={TrashBotImg} title="TrashBot" description="ITIS E. Fermi" period="2019-Now"/>
            <Project src={CanSatImg} title="CanSat" description="ASI" period="2019"/>
        </div>
    );
}

export default Landing;
