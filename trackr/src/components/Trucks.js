import React, { useEffect, useState, useContext } from 'react'
import {TrucksContext} from '../contexts/TrucksContext'
import { UserContext } from '../contexts/UserContext'
import users from '../dummy-data/users'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import TruckCard from './TruckCard'

export default function Trucks(props) {
    // const [isDiner, setIsDiner] = useState(false)
    // const [favorites, setFavorites] = useState([])
    const {trucks} = useContext(TrucksContext)
    const {currentUser, setCurrentUser} = useContext(UserContext)
    // useEffect( () => {
    //     setIsDiner(currentUser.role === "diner")
    //     setFavorites(currentUser.favoriteTrucks)
    // }, [])

  console.log(trucks)

    return (
        <div className="trucks-container">
        {!trucks ? <div>Loading...</div>:
            trucks.map( truck => {
                return (
                    <TruckCard key={truck.truck_id} truck={truck} />
                )
            })}

        </div>
        
    )
}