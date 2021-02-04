import React, {useContext} from "react"
import {UserContext} from '../contexts/UserContext'
import {TrucksContext} from '../contexts/TrucksContext'

export default function DinerProfile() {
    const {currentUser} = useContext(UserContext)
    const {trucks} = useContext(TrucksContext)
    console.log(currentUser)
    console.log(trucks)

    return(
        <div className="profile-container">
        {!currentUser ? <div>Loading user info...</div> :
        <div>Hello {currentUser.username}</div>}
        </ div>
    )
}