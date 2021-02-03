import React, { useEffect, useState, useContext } from 'react'
import {TrucksContext} from '../contexts/TrucksContext'
import users from '../dummy-data/users'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import TruckCard from './TruckCard'

// const allOperatorData = users.filter(user => {
//               return  user.role === "operator"
// })
// let allTruckData = []
// allOperatorData.forEach( oper => {
//                         oper.trucksOwned.forEach( truck => {
//                             allTruckData.push(truck)
//                         })
// })

// const currentUserData = {
//     id: 2,
//     role: "diner",
//     username: "mikemurphy",
//     password: "password",
//     currentLocation: "60805",   // can be string with address, zipcode number, GPS coordinates as string
//     favoriteTrucks: [123, 789] // id
//                }

const allOperatorData = users.filter(user => {
              return  user.role === "operator"
})
// let allTruckData = []
// allOperatorData.forEach( oper => {
//                         oper.trucksOwned.forEach( truck => {
//                             allTruckData.push(truck)
//                         })
// })

const currentUserData = {
    id: 2,
    role: "diner",
    username: "mikemurphy",
    password: "password",
    currentLocation: "60805",   // can be string with address, zipcode number, GPS coordinates as string
    favoriteTrucks: [123, 789] // id
               }

export default function Trucks(props) {
    const [currentUser, setCurrentUser] = useState(currentUserData)
    const [isDiner, setIsDiner] = useState(false)
    const [favorites, setFavorites] = useState([])
    const trucks = useContext(TrucksContext)

    useEffect( () => {
        setIsDiner(currentUser.role === "diner")
        setFavorites(currentUser.favoriteTrucks)
    }, [])

  

    return (
        <div className="trucks-container">
        <h1>Hello from trucks</h1>
        {!trucks ? <div>Loading...</div>:
            trucks.map( truck => {
                return (
                    <TruckCard key={truck.id} truck={truck} isDiner={currentUser.role === "diner"} favorites={favorites} setFavorites={setFavorites}/>
                )
            })}

        </div>
        
    )
}