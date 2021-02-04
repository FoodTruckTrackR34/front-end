import React, { useEffect, useState } from "react"
import Trucks from "./Trucks"
import SearchBar from "./SearchBar"
import OperatorProfile from "./OperatorProfile"
import {TrucksContext} from '../contexts/TrucksContext'
import axios from "axios"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import styled from 'styled-components';


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
        <TrucksContext.Provider value={{trucks, setTrucks}}>
 
            <SearchBar /> 

            <StyledDashboardContainer>
                <StyledOperatorProfileContainer>  
                    <OperatorProfile />
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