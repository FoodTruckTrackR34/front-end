// username and password need to be present

// looking for username and password on the back end 
// access key?
// send to back end via POST (onSubmit())
import React from 'react';
import styled from 'styled-components';

export default function LoginForm ({ values, loginChange, loginFormSubmit, loginDisabled, errors }) {

    const loginOnChange = (evt) => {
        const { name, value } = evt.target;
        loginChange(name, value);
    };

    const loginSubmit = (evt) => {
        evt.preventDefault();
        loginFormSubmit();
    };

    return (
        <StyledLoginContainer>
            <h2>Login Here!</h2>
            <form onSubmit={loginSubmit}>
                <StyledInputDiv>
                <label>Username:
                    <input
                    type='text'
                    name='loginUsername'
                    value={values.loginUsername}
                    onChange={loginOnChange}>
                    </input>
                    <StyledLoginErrors>{errors.loginUsername}</StyledLoginErrors>
                </label>
                </StyledInputDiv>

                <StyledInputDiv>
                <label>Password:
                    <input
                    type='password'
                    name='loginPassword'
                    value={values.loginPassword}
                    onChange={loginOnChange}>
                    </input>
                    <StyledLoginErrors>{errors.loginPassword}</StyledLoginErrors>
                </label>
                </StyledInputDiv>
                <button disabled={loginDisabled}>Login!</button>
            </form>
        </StyledLoginContainer>
    );
}

const StyledLoginContainer = styled.div`
    border: solid 1px red;

    input {
        margin: 0 0 1% .3%;
    }
`;

const StyledInputDiv = styled.div`
    // border: solid 1px blue;
`;

const StyledLoginErrors = styled.div`
    color: red;
`;