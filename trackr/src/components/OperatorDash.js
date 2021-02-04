import React, { useEffect, useState } from "react"
import Trucks from "./Trucks"
import SearchBar from "./SearchBar"
import OperatorProfile from "./OperatorProfile"
import {TrucksContext} from '../contexts/TrucksContext'
import axios from "axios"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import styled from 'styled-components';

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
    const [trucks, setTrucks] = useState()
    const [currentUser, setCurrentUser] = useState()

    const fetchUser = () => {
        setCurrentUser(currentUserData)}

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
                setTrucks('Could not load trucks')
            })
        }  

    useEffect(() => {
        fetchUser()
        fetchTrucks()
        console.log(trucks)
    }, [])
    // get trucks from api .then(setTrucks(res.data)).catch(setTrucks("Could not load trucks"))

    return(
        <TrucksContext.Provider value={trucks}>
 
            <SearchBar /> 

            <StyledDashboardContainer>
                <StyledOperatorProfileContainer>  
                    <OperatorProfile currentUser={currentUser}/>
                </StyledOperatorProfileContainer>

                <StyledTrucksContainer>
                    <Trucks />
                </StyledTrucksContainer>
            </StyledDashboardContainer>

        </TrucksContext.Provider>
    )
}

const StyledDashboardContainer = styled.div`
    //border: solid 1px red;
    display: flex;
    justify-content: center;
`;

const StyledOperatorProfileContainer = styled.div`
    // border: solid 1px blue;
    border-right: solid 1px lightgray;
    padding: 5%;
    width: 30%;
`;

const StyledTrucksContainer = styled.div`
    // border: solid 1px green;
    border-left: solid 1px lightgray;
    padding: 5%;
    width: 60%;
`;