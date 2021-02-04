// username and password need to be present

// looking for username and password on the back end
// access key?
// send to back end via POST (onSubmit())
import React, { useState, useEffect, useContext } from "react";
import {UserContext} from "../contexts/UserContext"
import styled from "styled-components";
import loginSchema from "../validation/loginFormSchema";
import * as yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const initialLoginFormValues = {
  username: "",
  password: "",
};

const initialLoginFormErrors = {
  username: "",
  password: "",
};
const initialLoginDisabled = true;

export default function LoginForm() {
  const {currentUser, setCurrentUser} = useContext(UserContext) //testing
  const {push} = useHistory()

  const [loginFormValues, setLoginFormValues] = useState(
    initialLoginFormValues
  );
  const [loginButton, setLoginButton] = useState(initialLoginDisabled);
  const [loginFormErrors, setLoginFormErrors] = useState(
    initialLoginFormErrors
  );
  const [authError, setAuthError] = useState("")

  const loginInputChange = (name, value) => {
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => {
        setLoginFormErrors({
          ...loginFormErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setLoginFormErrors({
          ...loginFormErrors,
          [name]: err.errors[0],
        });
      });

    setLoginFormValues({
      ...loginFormValues,
      [name]: value,
    });
  };

  useEffect(() => {
    loginSchema.isValid(loginFormValues).then((valid) => {
      setLoginButton(!valid);
    });
  }, [loginFormValues]);

  /*
code that was pulled in from the main App.js component is up above    
    
    
    
    
    
    
code that was already in the Login.js component is placed below and everything is hooked up to work as before will be hooking the form to the backend using the POST upon form submit
    */
  const loginOnChange = (evt) => {
    const { name, value } = evt.target;
    loginInputChange(name, value);
  };

  const loginSubmit = (evt) => {
    evt.preventDefault();
    //axios needed
    axios
      .post(
        "https://food-truck-back-end-lambda.herokuapp.com/api/auth/login",
        loginFormValues
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('role', res.data.role);
        setCurrentUser(res.data.userData)
        res.data.role ==="diner" ?
        push("/diner-dashboard")  :
        push("/operator-dashboard")
      })
      .catch((err) => {
        debugger
        setAuthError(err.response.data.message);
      });
    //
    // console.log("success!");
    // this will be axios POST instead of console.log. Thats there just for testing and the form does work properly (just doesn't send any actual data)
  };

  return (
    <StyledLoginContainer>
      <h2>Login Here!</h2>
      <form onSubmit={loginSubmit}>
        <StyledInputDiv>
            <input
              type="text"
              name="username"
              value={loginFormValues.username}
              onChange={loginOnChange}
              placeholder='Username'
            ></input>

            <StyledLoginErrors>
              {loginFormErrors.username}
            </StyledLoginErrors>
        </StyledInputDiv>

        <StyledInputDiv>
            <input
              type="password"
              name="password"
              value={loginFormValues.password}
              onChange={loginOnChange}
              placeholder='Password'
            ></input>

            <StyledLoginErrors>
              {loginFormErrors.password}
            </StyledLoginErrors>

        </StyledInputDiv>
        <StyledLoginButton disabled={loginButton}>Login!</StyledLoginButton>
        <button disabled={loginButton}>Login!</button>
        <p> {authError} </p>
      </form>
      <p>
        Need an Account?
        <br />
        <Link to="/register-form">Register Here</Link>
      </p>
    </StyledLoginContainer>
  );
}

const StyledLoginContainer = styled.div`
  // border: solid 1px red;
  background-color: white;
  padding: 2%;
  border-radius: 15px;
  box-shadow: 0px 0px 12px black;
  width: 35%;

  input {
    margin: 0 0 3% 1%;
    padding: 1%;
  }
`;

const StyledLoginButton = styled.button`
  background-color: #FFCC4D;
    font-weight: bold;
    border: none;
    padding: 3% 7% 3% 7%;
    border-radius: 5px;
    color: #585858;
    margin-top: 2%;
    transition: .3s;
    cursor: pointer;
  }

  :hover {
    background-color:#77B255;
    color: white;
  }

  ${props => (props.disabled === true ? `background-color: #b7b7b7; color: black; cursor: default; :hover{background-color: #b7b7b7; color: black};` : null)}
`;

const StyledInputDiv = styled.div`
  // border: solid 1px blue;
`;

const StyledLoginErrors = styled.div`
  color: red;
`;
