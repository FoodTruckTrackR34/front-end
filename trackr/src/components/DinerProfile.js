import React, {useContext, useState} from "react"
import {UserContext} from '../contexts/UserContext'
import {TrucksContext} from '../contexts/TrucksContext'
import styled from 'styled-components';
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function DinerProfile() {
    const {currentUser} = useContext(UserContext)
    const {trucks} = useContext(TrucksContext)
    const [formValues, setFormValues] = useState({latitude:'',longitude:''}) 
    console.log(currentUser)
    console.log(trucks)

    const putLocation = (lat,lng) => {
        const putParam = {
            latitude:Number(lat),
            longitude:Number(lng),
            username: currentUser.username
        }
        axiosWithAuth()
        .put("/api/auth/diner-location", putParam)
        .then(res => {
            console.log(res.data)
            // setCurrentUser(...currentUser,
            //     [latitude]: )
        })
        .catch(err => {
            console.log(err)
            console.log(putParam)
        })

    } 

    const handleUpdateLocation = (evt) => {
        evt.preventDefault();
        putLocation(formValues.latitude, formValues.longitude)
    }
    const handleChange = (evt) => {
        setFormValues({...formValues,
            [evt.target.name]: evt.target.value
        })
    }

    return(
        <div className="profile-container">
        {!currentUser ? <div>Loading user info...</div> :
            <div>
                <h1>Hi, <StyledUsername>{currentUser.username}</StyledUsername>!</h1>
                <h2> Account Type: <StyledRole>{currentUser.role}</StyledRole></h2>
                <h3>Current Location: {currentUser.latitude !== "null" ? currentUser.latitude : "Not Provided"} {currentUser.longitude !== "null" ? currentUser.longitude : ''}</h3>
                <form onSubmit={handleUpdateLocation}>
                <div>
                <h3> Update Current Location: </h3>
                <label>
                Latitude Coordinates (ex. 37.7749):
                    <input type="number" name="latitude" value={formValues.latitude} onChange={handleChange}/>
                </label>
                </div>
                <div>
                <label>
                    Longitude Coordinates (ex. 122.4194)<br/>
                    <input type="number" name="longitude" value={formValues.longitude} onChange={handleChange}/><br/>
                </label>
                </div>
                <button type="submit">Update Location</button>
                </form>
                <br/>
                <div>Maybe list of favorite trucks goes here?</div>
            </div>}
        </ div>
    )
}

const StyledUsername = styled.span`
    color: #FFCC4D;
`;

const StyledRole = styled.span`
    color: #7DB65B;
`;