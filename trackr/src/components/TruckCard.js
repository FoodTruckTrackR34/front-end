// TruckCard has the ability to expand if isExpanded === true

import React, { useContext, useEffect,  useState } from "react";
import {useHistory} from 'react-router-dom'
import { TrucksContext } from "../contexts/TrucksContext";
import { UserContext } from "../contexts/UserContext";
import styled from 'styled-components';
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function TruckCard(props) {
  // const {truck, isDiner, favorites, setFavorites, key} = props
  const [isExpanded, setIsExpanded] = useState(false);
  const { truck } = props;
  const { currentUser, currentTruck, setCurrentTruck } = useContext(UserContext);
  // const isDiner = role === "diner";
  const isDiner = true
  const isFavorite = true;
  const { push } = useHistory();

  // const [isFavorite, setIsFavorite] = useState(false)

  // const favoriteMatch = favorites.filter(favorite => {
  //     return (
  //     favorite === truck.id)
  // })

  // useEffect( () => {

  // console.log(favoriteMatch.length)
  //     setIsFavorite(favoriteMatch.length !== 0) // if favoriteMatch is an empty array, setIsFavorite to true - else, false
  // }, [favorites])

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  // const handleAddToFavorites = () => {
  //     setFavorites([...favorites,
  //                 truck.id])
  //                 // post request
  // }

  // const handleRemoveFromFavorites = () => {
  //     setFavorites([...favorites,
  //                 truck.id])

  //                 // delete request

  //   const handleRemoveFromFavorites = () => {
  //     setFavorites([...favorites, truck.id]);

  //     // delete request
  //   };
  axiosWithAuth()
  .get(`/api/trucks/get-truck-rating-avg`)
  .then(res=>{
      console.log(res)
  })
  .catch(err=>{
      console.log(err.response.data.message)
  })

  return (
    <StyledTruckCardContainer>
      <h1>{truck.truckName}{/*truck.truckName 'string'*/} </h1>
      <img src={truck.imageOfTruck} /> {/*truck.imgURL 'string'*/}
      <h3>Cuisine: {truck.cuisineType} </h3>
      <h4>
        Average Customer Rating: {}/5{" "}
        {/*average of an array of ratings .reduce over customerRatings.value / customerRatings.length*/}{" "}
      </h4>
      <p>
        Current Location of Truck: 123 Main St. San Francisco, CA{" "}
        {/*truck.currentLocation*/}{" "}
      </p>
      <p>Departure Time: 6:00pm PST {/*truck.departureTime*/} </p>
      <a onClick={() => {setCurrentTruck(truck); push(`/menu-items/${truck.truck_id}`)}}>
        <StyledViewMenuItems>View Menu Items</StyledViewMenuItems>
        {" "}
        {/*.map over menuItems array ... expand this on same page? or new page?*/}{" "}
      </a>
      <br />
      <br />
      <span>If the role is diner...</span>
      <a href="">
        Been here? Leave a Review!{" "}
        {/*link to a page with a form that adds the review to the customer ratings array?*/}{" "}
      </a>
      
      <p>
        ❤️ one of your faves! -or- ♡ add to faves{" "}
        {/* this will be generated based on code below */}{" "}
      </p>
      {
        !isDiner ? (
          <></>
        ) : isFavorite ? (
          <h5> ❤️ one of your faves </h5> //onClick ={handleRemoveFromFavorites}
        ) : (
          <h5> ♡ add to faves </h5>
        ) //onClick={handleAddToFavorites}
      }
      {/* ^^ Only display click to add to favorites if user is role === "diner", state managed in Trucks.js */}
      {!isExpanded && (
        <h5 onClick={handleExpand}> Click here to see more details</h5>
      )}
      {/* ^^ Only display "click to see more" when the card is not expanded */}
      {isExpanded && (
        <div className="expanded-details-container">
          <img src={truck.imageOfTruck} alt="this food truck" />
          <h5 onClick={handleExpand}> Click here to hide </h5>
        </div>
      )}
      {/* ^^ Only display the above when the card IS expanded */}
      {/* ^^ Only display the above when the card IS expanded */}
      </StyledTruckCardContainer>
  );
      }

// create a component titled Menu which maps over all menu items and creates a subcomponent titled MenuItemCard for each item.
// Menu is visible when truckcard isExpanded
// MenuItemCard can also be expanded ~stretch~

const StyledTruckCardContainer = styled.div`
  // border: solid 1px red;
  margin-bottom: 4%;
  box-shadow: 0px 0px 10px gray;
  padding: 5%;

  img {
    width: 90%;
  }
`;

const StyledViewMenuItems = styled.button`
  color: white;
  background-color: #DA3647;
  border: none;
  padding: 2% 5% 2% 5%;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 5%;
`;
