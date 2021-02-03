// TruckCard has the ability to expand if isExpanded === true
import React, { useEffect, useState } from "react"



export default function TruckCard(props) {
    const {truck, isDiner, favorites, setFavorites, key} = props
    const [isExpanded, setIsExpanded] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

       const favoriteMatch = favorites.filter(favorite => {
                           return (
                                favorite === truck.id)
    })

    useEffect( () => {
 
    console.log(favoriteMatch.length)
        setIsFavorite(favoriteMatch.length !== 0) // if favoriteMatch is an empty array, setIsFavorite to true - else, false
    }, [favorites])


    const handleExpand = () => {
        setIsExpanded(!isExpanded)
    }
    const handleAddToFavorites = () => {
        setFavorites([...favorites,
                    truck.id])
                    // post request
    }

    const handleRemoveFromFavorites = () => {
        setFavorites([...favorites,
                    truck.id])

                    // delete request
    }

    return(
        <div className="truckCard-container">
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ <br/>
            This is a truck with id: {truck.truck_id}
            <h3> Name of Truck </h3>
            <h4> Cuisine: {truck.cuisineType}</h4>
            <h4> Rating: {truck.avgCustomerRatings}/5 </h4>
            {!isDiner ? <></> :
           isFavorite ? <h5 onClick ={handleRemoveFromFavorites}> ❤️ one of your faves </h5> :
           <h5 onClick={handleAddToFavorites}> ♡ add to faves </h5>
            } 
            {/* ^^ Only display click to add to favorites if user is role === "diner", state managed in Trucks.js */}
            {!isExpanded && <h5 onClick={handleExpand}> Click here to see more details</h5>}
            {/* ^^ Only display "click to see more" when the card is not expanded */}
            {isExpanded && 
            <div className="expanded-details-container" >
            <img src = {truck.imageOfTruck} alt="this food truck"/>
            <h5 onClick={handleExpand}> Click here to hide </h5>
            </div>}
             {/* ^^ Only display the above when the card IS expanded */}
             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        </div>
    )
}