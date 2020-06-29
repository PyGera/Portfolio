import React from "react"
import {
    ProfileImg,
    Name,
    Profession,
    Button
} from "../../components/components"

interface Props {
    profileImg: string,
    name: string,
    profession: string,
    socials: any,

}

export default function Landing(props: Props) {
    return (
        <div id="landing" className="windows">
            <ProfileImg img={props.profileImg} />
            <Name name={props.name} />
            <Profession profession={props.profession} />
            <Button href="/projects" value="Projects"/>
            <Button href="/cv" value="Curriculum Vitae" />
            { props.socials }
      </div>
    )
}