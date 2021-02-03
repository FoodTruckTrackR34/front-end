import React from "react"

export default function OperatorProfile(props) {
    const {currentUser} = props

    return(
        <div className="profile-container">
            Operator Profile
            <h1>Hi, {currentUser.username}!</h1>
            <ul>
                Trucks Owned:
                {/* {forEac<li></li>} */}
            </ul>
        </ div>
    )
}