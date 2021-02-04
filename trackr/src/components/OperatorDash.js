import React, { useEffect, useState } from "react"
import Trucks from "./Trucks"
import SearchBar from "./SearchBar"
import OperatorProfile from "./OperatorProfile"
import {TrucksContext} from '../contexts/TrucksContext'
import axios from "axios"
import { axiosWithAuth } from "../utils/axiosWithAuth"


export default function OperatorDash() {
    const [trucks, setTrucks] = useState([])

        const fetchTrucks = () => {
        
        axiosWithAuth()
            .get('/api/trucks')
            .then(res => {
                console.log(res.data)
                setTrucks(res.data)
            }
            )
            .catch(err => {
                console.log(err)
            })
        }  

    useEffect(() => {
        fetchTrucks()
        console.log(trucks)
    }, [])
    // get trucks from api .then(setTrucks(res.data)).catch(setTrucks("Could not load trucks"))

    return(
        <div className="dashboard-container">
        <TrucksContext.Provider value={{trucks, setTrucks}}>
            <SearchBar />    
            <OperatorProfile />
            <Trucks />
        </TrucksContext.Provider>
        </ div>
    )
}