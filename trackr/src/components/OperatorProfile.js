import React from "react"

export default function OperatorProfile(props) {
    const {currentUser} = props

    return(
        <div className="profile-container">
            Operator Profile
            <h1>Hi, $username$ !</h1>
            <h2> Account Type: $user.role$ </h2>
            <ul>
                Trucks Owned:
                <a>add new truck</a>


                <li>$truck1$</li>}
            </ul>
        </ div>
    )
}

// users[3].trucksOwned[1].menu[5].customerRatingAvg
