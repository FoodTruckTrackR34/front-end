import React, {useContext} from "react"
import {UserContext} from '../contexts/UserContext'
import {TrucksContext} from '../contexts/TrucksContext'
import styled from 'styled-components';

export default function DinerProfile() {
    const {currentUser} = useContext(UserContext)
    const {trucks} = useContext(TrucksContext)
    console.log(currentUser)
    console.log(trucks)

    return(
        <div className="profile-container">
        {!currentUser ? <div>Loading user info...</div> :
            <div>
                <h1>Hi, <StyledUsername>Placeholder{currentUser.username}</StyledUsername>!</h1>
                <h2> Account Type: <StyledRole>placeholder{currentUser.role}</StyledRole></h2>
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