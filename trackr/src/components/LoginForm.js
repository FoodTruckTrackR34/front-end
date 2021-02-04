// username and password need to be present

// looking for username and password on the back end
// access key?
// send to back end via POST (onSubmit())
import React, { useState, useEffect } from "react";
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
  const { push } = useHistory();

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
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);

        // axios
        //.get()
        // get array of users
        // filter through array and return user if loginFormValues.username === user.username
        // if user.role === "diner"
        res.data.role === "diner"
          ? push("/diner-dashboard")
          : push("/operator-dashboard");
        // setLoginFormValues(initialLoginFormValues);
      })
      .catch((err) => {
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
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={loginFormValues.username}
              onChange={loginOnChange}
            ></input>
            <StyledLoginErrors>{loginFormErrors.username}</StyledLoginErrors>
          </label>
        </StyledInputDiv>

        <StyledInputDiv>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={loginFormValues.password}
              onChange={loginOnChange}
            ></input>
            <StyledLoginErrors>{loginFormErrors.password}</StyledLoginErrors>
          </label>
        </StyledInputDiv>
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
  border: solid 1px red;

  input {
    margin: 0 0 1% 0.3%;
  }
`;

const StyledInputDiv = styled.div`
  // border: solid 1px blue;
`;

const StyledLoginErrors = styled.div`
  color: red;
`;
