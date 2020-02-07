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

function Landing() {
  return (
      <div className="landing">
        <ProfileImg />
        <Name />
        <Profession />
        <Button value="Progetti"/>
        <br />
        <Button value="Scarica il CV" />
      </div>
  );
}

function App() {
  return (
    <Landing />
  );
}

export default App;
