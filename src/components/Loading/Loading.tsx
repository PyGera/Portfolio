import React from "react"
import { ScaleLoader } from "react-spinners"
import "./Loading.scss" 

export default () => (
    <div className="Loading">
        <ScaleLoader height={35} width={4} radius={1} margin={3} />
    </div>
)