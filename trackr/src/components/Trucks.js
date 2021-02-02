import React, { useEffect, useState } from 'react'
import users from '../dummy-data/users'
import TruckCard from './TruckCard'

const allOperatorData = users.filter(user => {
              return  user.role === "operator"
})
let allTruckData = []
allOperatorData.forEach( oper => {
                        oper.trucksOwned.forEach( truck => {
                            allTruckData.push(truck)
                        })
})

const currentUserData = {
    id: 2,
    role: "diner",
    username: "mikemurphy",
    password: "password",
    currentLocation: "60805",   // can be string with address, zipcode number, GPS coordinates as string
    favoriteTrucks: [123, 789] // id
               }

export default function Trucks(props) {
    const [trucks, setTrucks] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const [isDiner, setIsDiner] = useState(false)
    const [favorites, setFavorites] = useState([])
    
    const runEffect = async () => {
         setCurrentUser(currentUserData)
         setTrucks(allTruckData)
    }

    useEffect(() => {
        runEffect()
        setIsDiner(currentUser.role === "diner")
        setFavorites(currentUser.favoriteTrucks)
    }, [])

  

    return (
        <div className="trucks-container">
        <h1>Hello from trucks</h1>
            {trucks.map( truck => {
                return (
                    <TruckCard key={truck.id} truck={truck} isDiner={currentUser.role === "diner"} favorites={currentUser.favoriteTrucks} setFavorites={setFavorites}/>
                )
            })}

        </div>
        
    )
}