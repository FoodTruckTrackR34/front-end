import React, {useState, useEffect, useContext} from "react"
import Trucks from "./Trucks"
import DinerProfile from "./DinerProfile"
import SearchBar from "./SearchBar"
import {TrucksContext} from '../contexts/TrucksContext'
import {UserContext} from '../contexts/UserContext'
import { axiosWithAuth } from "../utils/axiosWithAuth"

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

export default function DinerDash() {
    const [trucks, setTrucks] = useState()
    const [searchCriteria, setSearchCriteria] = useState()
    const currentUser = useContext(UserContext)

    const fetchTrucks = () => {
        
        axiosWithAuth()
            .get('/api/trucks')
            .then(res => {
                console.log(res.data)
                debugger
                setTrucks(res.data)
            }
            )
            .catch(err => {
                console.log(err)
                setTrucks('Could not load trucks')
            })
        }  

    useEffect(() => {
        // fetchUser()
        fetchTrucks()
        console.log(trucks)
    }, [])

    return(
        <TrucksContext.Provider value={{trucks, setTrucks, searchCriteria, setSearchCriteria}}>
            <div className="dashboard-container">
                <SearchBar />    
                <DinerProfile/>
                <Trucks />
            </ div>
       </TrucksContext.Provider>
    )
}