import React from "react"
import Trucks from "./Trucks"
import DinerProfile from "./DinerProfile"

export default function DinerDash() {

    return(
        <div className="dashboard-container">
        <DinerProfile />
        <Trucks />
        </ div>
    )
}