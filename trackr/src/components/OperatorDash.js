import React, { useEffect, useState } from "react"
import Trucks from "./Trucks"
import OperatorProfile from "./OperatorProfile"

const currentUserData = {
    id: 1,
    role: "operator",
    username: "anthony",
    password: "password",
    currentLocation: "02134",   // can be string with address, zipcode number, GPS coordinates as string
    trucksOwned: [
                {id: 123, // unique truck id
                imageOfTruck: "https://images.unsplash.com/photo-1565097158282-1094bd0fe46a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2QlMjB0cnVja3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                cuisineType: "popcorn",
                customerRatings: [4, 3, 2, 1]}
    ]}

export default function OperatorDash() {
    const [currentUser, setCurrentUser] = useState()

    const fetchUser = () => {
        setCurrentUser(currentUserData)}

    useEffect(() => {
        fetchUser()
    }, [])

    return(
        <div className="dashboard-container">
        <OperatorProfile currentUser={currentUser}/>
        <Trucks />
        </ div>
    )
}