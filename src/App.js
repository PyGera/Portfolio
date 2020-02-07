import React from 'react';
import profileImg from "./pp.jpeg";
import './App.css';

const name = "Federico Gerardi";
const profession = "Software Developer";


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

//TODO: Create an array of objects with all socials, add every social in a JSX var and insert it in Landing

function Landing() {
  return (
      <div className="landing">
        <ProfileImg />
        <Name />
        <Profession />
        <Button value="Progetti"/>
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

function App() {
  return (
    <Landing />
  );
}

export default App;
