import axios from "axios"
import React, {useContext, useEffect, useState } from "react"
import { TrucksContext } from "../contexts/TrucksContext"
import {UserContext} from "../contexts/UserContext"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import styled from 'styled-components';

const initialFormValues = 

                        {cuisineType: "",
                        departureTime: "",
                        imageOfTruck: "",
                        latitude: "",
                        longitude: "",
                        }

export default function OperatorProfile() {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const {trucks, setTrucks} = useContext(TrucksContext)
    const [isEditing, setIsEditing] = useState(false)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [infoDisplay, setInfoDisplay] = useState(false)
    console.log(currentUser)
    console.log(trucks)

  

    const postNewTruck = (evt) => {
        const newTruck = {...formValues, user_id: Number(currentUser.user_id)}
        axiosWithAuth()
        .post("api/trucks", newTruck)
        .then( res => {
            console.log(res)
            console.log(newTruck)
        }
        )
        .catch(err => {
            console.log(err.response.data.message)
            console.log(newTruck)
        })
    }

    const handleAddTruck = (evt) => {
        evt.preventDefault();
        setIsEditing(false);
        postNewTruck();
        //api call to add truck
        //
    }

    const toggleDisplayAddForm = () => {
        setIsEditing(!isEditing)
    }
    const toggleInfoDisplay = () => {
        setInfoDisplay(!infoDisplay)
    }

    const handleChange = (evt) => {
        evt.preventDefault()
        const {name, value} = evt.target
        console.log(name)
        setFormValues({...formValues, [name]: value})
    }

        const currentUserTrucks = trucks.filter( (truck) => {
            return truck.user_id === currentUser.user_id 
        })

        // const fakeUserTrucks = [] //{truckName: "this truck"}, {truckName: "that truck"}
   

    return(
        <div className="profile-container">
            {!currentUser ? <div>Loading user info...</div> :
            <div>
                <h1>Hi, <StyledUsername>{currentUser.username}</StyledUsername>!</h1>
                <h2> Account Type: <StyledRole>{currentUser.role}</StyledRole></h2>
                <ul>
                    Trucks Owned:
                    { currentUserTrucks.length === 0 ? <span> None yet, click below to add</span> :
                    currentUserTrucks.map(truck => {
                        return(
                            <div>
                            <h3>{truck.truckName}</h3>
                            {/* <span onClick={handleEdit}>edit</span><span onClick={handleDelete}>delete</span> */}
                            </div>
                        )
                    })}
                </ul>    
        
        {!isEditing && <StyledAddNewTruck onClick={toggleDisplayAddForm}>+ Add new truck</StyledAddNewTruck>}

        {isEditing && <form onSubmit={handleAddTruck}>
                    <StyledAddNewTruck onClick={toggleDisplayAddForm}>Hide Form</StyledAddNewTruck>

                    <StyledAddTruckInput>
                    <label>Truck Name <br />
                    <input onChange={handleChange} name="truckName" value={formValues.truckName} type="text" placeholder="Meals On Wheels"/>
                    </label>
                    </StyledAddTruckInput>

                    <StyledAddTruckInput>
                    <label>Truck Image URL <br />
                    <input onChange={handleChange} name="imageOfTruck" value={formValues.imageOfTruck} type="text" placeholder="truckphoto.com"/>
                    </label>
                    </StyledAddTruckInput>

                    <StyledAddTruckInput>
                    <label>Cuisine <br />
                    <input onChange={handleChange} name="cuisineType" value={formValues.cuisineType} type="text" placeholder="Italian"/>
                    </label>
                    </StyledAddTruckInput>

                    <StyledAddTruckInput>
                    <label>Current Location (Lat., Long.) <br />
                    <input onChange={handleChange} name="latitude" value={formValues.latitude} type="text" placeholder="37.818059"/><br/>
                    <input onChange={handleChange} name="longitude" value={formValues.longitude} type="text" placeholder="-122.477700"/>
                    </label>
                    </StyledAddTruckInput>

                    <StyledAddTruckInput>
                    <label>Departure Time <span onClick={toggleInfoDisplay}>ℹ️</span> <br />
                    {infoDisplay && <p>(when does the truck leave its current location?)</p>}
                    <input onChange={handleChange} name="departureTime" value={formValues.departureTime} type="datetime-local" placeholder=""/>
                    </label>
                    </StyledAddTruckInput>

                    <StyledAddTruckButton type='submit'>Add New Truck</StyledAddTruckButton>
                </form>
            }
             
            </div>}
        </ div>
    )
}

// users[3].trucksOwned[1].menu[5].customerRatingAvg

const StyledUsername = styled.span`
    color: #FFCC4D;
`;

const StyledRole = styled.span`
    color: #7DB65B;
`;

const StyledAddNewTruck = styled.button`
    color: white;
    background-color: #C1694F;
    border: none;
    padding: 3% 7% 3% 7%;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5%;
`;

const StyledAddTruckInput = styled.div`
    // border: solid 1px black;
    margin-bottom: 5%;

    input {
        padding: 1.5%;
        font-size: .9em;
    }

    label {
        font-weight: bold;
    }
`;

const StyledAddTruckButton = styled.button`
    color: white;
    background-color: #DA3647;
    border: none;
    padding: 3% 7% 3% 7%;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5%;
`;
