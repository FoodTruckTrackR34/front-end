import axios from "axios"
import React, {useContext, useEffect, useState } from "react"
import { TrucksContext } from "../contexts/TrucksContext"
import {UserContext} from "../contexts/UserContext"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import styled from 'styled-components';

const initialFormValues = 

                        {cuisineType: "",
                        departureTimeString: "", //may change
                        imageOfTruck: "",
                        latitude: "",
                        longitude: "",
                        }

export default function OperatorProfile() {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const {trucks, setTrucks} = useContext(TrucksContext)
    const [isAdding, setIsAdding] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const [editingTruckId, setEditingTruckId] = useState(null)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [editFormValues, setEditFormValues] = useState({})
    const [infoDisplay, setInfoDisplay] = useState(false)
    const [profileUserTrucks, setProfileUserTrucks] = useState([])
    console.log(currentUser)
    console.log(trucks)

  

    const postNewTruck = (evt) => {
        let newTruck = {...formValues, user_id: Number(currentUser.user_id)}
        newTruck = {...newTruck,
             latitude: Number(formValues.latitude), 
             longitude: Number(formValues.longitude),
             departureTimeString: formValues.departureTimeString.toString() } //may change 
             //
        axiosWithAuth()
        .post("api/trucks", newTruck)
        .then( res => {
            axiosWithAuth()
            .get("/api/trucks")
            .then( res => {
                setTrucks(res.data)
            }
            )
            .catch(err => {
                console.log(err.response.data.message)
            })
        }
        )
        .catch(err => {
            console.log(err.response.data.message)
            console.log(newTruck)
        })
    }

    const handleAddTruck = (evt) => {
        evt.preventDefault();
        setIsAdding(false);
        postNewTruck();
    }

    const toggleDisplayAddForm = () => {
        setIsAdding(!isAdding)
    }
    const toggleInfoDisplay = () => {
        setInfoDisplay(!infoDisplay)
    }

    const handleChangeAdd = (evt) => {
        evt.preventDefault()
        const {name, value} = evt.target
        console.log(name)
        setFormValues({...formValues, [name]: value})
    }

    const handleChangeEdit = (evt) => {
        evt.preventDefault()
        const {name, value} = evt.target
      setEditFormValues({...editFormValues, [name]: value})
    }
    
    const handleEdit = (e, trk) => {
        e.preventDefault()
        setEditFormValues(trk)
        setIsEditing(!isEditing)
        setEditingTruckId(trk.truck_id)
    }

    const handleSubmitEdit = (e) => {
        e.preventDefault();
        console.log(editingTruckId)
        const putParam = {...editFormValues, user_id:Number(currentUser.user_id)} // truck_id:editingTruckId,
        axiosWithAuth()
        .put(`/api/trucks/${editingTruckId}`, putParam )
        .then(res => {
            axiosWithAuth()
            .get("/api/trucks")
            .then( res => {
                setTrucks(res.data)
            }
            )
            .catch(err => {
                console.log(err.response.data.message)
            })
        })
        .catch(err => {
            console.log(err.response.data.message)
            console.log(putParam)
        })
    }

    const handleDelete = (e, trk) => {
        // let changedTrucksArray = profileUserTrucks
        // changedTrucksArray[index] = {...profileUserTrucks[index], isDeleting: true}
        // setProfileUserTrucks(changedTrucksArray)
        axiosWithAuth()
        .delete(`/api/trucks/${trk.truck_id}`)
        .then(res => {
            axiosWithAuth()
            .get("/api/trucks")
            .then( res => {
                setTrucks(res.data)
            }
            )
            .catch(err => {
                console.log(err.response.data.message)
            })
        })
        .catch(err => {
            console.log(err.response.data.message)
        })
    }

        let currentUserTrucks = trucks.filter( (truck) => {
            return truck.user_id === Number(currentUser.user_id) 
        })

    //    setProfileUserTrucks( currentUserTrucks.map(truck => {
    //         return {...truck, isDeleting: false}
    //     })
    //    )
   console.log(profileUserTrucks)

    return(
        <div className="profile-container">
            {!currentUser ? <div>Loading user info...</div> :
            <div>
                <h1>Hi, <StyledUsername>{currentUser.username}</StyledUsername>!</h1>
                <h2> Account Type: <StyledRole>{currentUser.role}</StyledRole></h2>
                
                    Trucks Owned: <br/><br/>
           { isEditing && <form onSubmit={handleSubmitEdit}>
                    <StyledAddTruckInput>
                    <label>Truck Name <br />
                    <input onChange={handleChangeEdit} name="truckName" value={editFormValues.truckName} type="text" placeholder="Meals On Wheels"/>
                    </label>
                    </StyledAddTruckInput>

                    <StyledAddTruckInput>
                    <label>Truck Image URL <br />
                    <input onChange={handleChangeEdit} name="imageOfTruck" value={editFormValues.imageOfTruck} type="text" placeholder="truckphoto.com"/>
                    </label>
                    </StyledAddTruckInput>

                    <StyledAddTruckInput>
                    <label>Cuisine <br />
                    <input onChange={handleChangeEdit} name="cuisineType" value={editFormValues.cuisineType} type="text" placeholder="Italian"/>
                    </label>
                    </StyledAddTruckInput>

                    <StyledAddTruckInput>
                    <label>Current Location (Lat., Long.) <br />
                    <input onChange={handleChangeEdit} name="latitude" value={editFormValues.latitude} type="text" placeholder="37.818059"/><br/>
                    <input onChange={handleChangeEdit} name="longitude" value={editFormValues.longitude} type="text" placeholder="-122.477700"/>
                    </label>
                    </StyledAddTruckInput>

                    <StyledAddTruckInput>
                    <label>Departure Time <span onClick={toggleInfoDisplay}>ℹ️</span> <br />
                    {infoDisplay && <p>(when does the truck leave its current location?)</p>}
                    <input onChange={handleChangeEdit} name="departureTimeString" value={editFormValues.departureTimeString} type="datetime-local" placeholder=""/>
                    </label>
                    </StyledAddTruckInput>

                    <StyledAddTruckButton type='submit'>Submit Update</StyledAddTruckButton>
                    </form>
                    }
                    { currentUserTrucks.length === 0 ? <span> None yet, click below to add</span> :
                    currentUserTrucks.map((truck) => {
                        return(
                            <StyledOperatorTruck >
                                {/* {profileUserTrucks[i].isDeleting && <span>Are you sure you want to delete?</span>} */}
                            <h3>{truck.truckName}</h3>
                            <StyledEditSpan onClick={(e) => handleEdit(e, truck)}>edit</StyledEditSpan>
                            <StyledDeleteSpan onClick={(e) => handleDelete(e, truck)}>delete</StyledDeleteSpan>
                            </StyledOperatorTruck>
                        )
                    })}
                  
        
        {!isAdding && <StyledAddNewTruck onClick={toggleDisplayAddForm}>+ Add new truck</StyledAddNewTruck>}

        {isAdding && <form onSubmit={handleAddTruck}>
                    <StyledAddNewTruck onClick={toggleDisplayAddForm}>Hide Form</StyledAddNewTruck>

                    <StyledAddTruckInput>
                    <label>Truck Name <br />
                    <input onChange={handleChangeAdd} name="truckName" value={formValues.truckName} type="text" placeholder="Meals On Wheels"/>
                    </label>
                    </StyledAddTruckInput>

                    <StyledAddTruckInput>
                    <label>Truck Image URL <br />
                    <input onChange={handleChangeAdd} name="imageOfTruck" value={formValues.imageOfTruck} type="text" placeholder="truckphoto.com"/>
                    </label>
                    </StyledAddTruckInput>

                    <StyledAddTruckInput>
                    <label>Cuisine <br />
                    <input onChange={handleChangeAdd} name="cuisineType" value={formValues.cuisineType} type="text" placeholder="Italian"/>
                    </label>
                    </StyledAddTruckInput>

                    <StyledAddTruckInput>
                    <label>Current Location (Lat., Long.) <br />
                    <input onChange={handleChangeAdd} name="latitude" value={formValues.latitude} type="text" placeholder="37.818059"/><br/>
                    <input onChange={handleChangeAdd} name="longitude" value={formValues.longitude} type="text" placeholder="-122.477700"/>
                    </label>
                    </StyledAddTruckInput>

                    <StyledAddTruckInput>
                    <label>Departure Time <span onClick={toggleInfoDisplay}>ℹ️</span> <br />
                    {infoDisplay && <p>(when does the truck leave its current location?)</p>}
                    <input onChange={handleChangeAdd} name="departureTimeString" value={formValues.departureTimeString} type="datetime-local" placeholder=""/>
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
const StyledOperatorTruck = styled.div`
border: solid black 2px;
padding: 2%;
margin: 2%;
border-radius: 5px;


`

const StyledEditSpan = styled.span`
    border: solid #7DB65B 2px; 
    margin: 2%;
    color: #7DB65B;
    border-radius: 5px;
    `
const StyledDeleteSpan = styled.span`
    border: solid #DA3647 2px;
    margin: 2%;
    margin-bottom: 4%;
    color: #DA3647;
    border-radius: 5px;
    `