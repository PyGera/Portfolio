import React from "react"
import "./ProfileImg.scss"

interface Props {
    img: any
}

export default function ProfileImg(props: Props) {
    return <img alt="profile-img" src={props.img} className="profileImg" />;
}