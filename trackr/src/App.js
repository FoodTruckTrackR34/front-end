import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { Switch, Route, useHistory } from "react-router-dom";
import * as yup from "yup";
import dinerSchema from "./validation/dinerFormSchema";
import operatorSchema from "./validation/operatorFormSchema";
import axios from "axios";
import DinerDash from "./components/DinerDash";
import OperatorDash from "./components/OperatorDash";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { SecureOpRoute } from "./components/SecureOpRoute";
import { SecureDinerRoute } from "./components/SecureDinerRoute";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import {UserContext} from './contexts/UserContext'
import styled from 'styled-components';

 

const initialUsers = [];

const initialDinerFormValues = {
  dinerUsername: "",
  dinerEmail: "",
  dinerPassword: "",
  dinerConfirmPassword: "",
  dinerZipcode: "",
};

const initialDinerFormErrors = {
  dinerUsername: "",
  dinerEmail: "",
  dinerPassword: "",
  dinerConfirmPassword: "",
};

const initialOperatorFormValues = {
  operatorUsername: "",
  operatorEmail: "",
  operatorPassword: "",
  operatorConfirmPassword: "",
};

const initialOperatorFormErrors = {
  operatorUsername: "",
  operatorEmail: "",
  operatorPassword: "",
  operatorConfirmPassword: "",
};

const initialDinerDisabled = true;
const initialOperatorDisabled = true;

function App() {
  const history = useHistory();
  const [users, setUsers] = useState(initialUsers);
  const [dinerFormValues, setDinerFormValues] = useState(
    initialDinerFormValues
  );
  const [dinerFormErrors, setDinerFormErrors] = useState(
    initialDinerFormErrors
  );
  const [operatorFormValues, setOperatorFormValues] = useState(
    initialOperatorFormValues
  );
  const [operatorFormErrors, setOperatorFormErrors] = useState(
    initialOperatorFormErrors
  );
  const [dinerButton, setDinerButton] = useState(initialDinerDisabled);
  const [operatorButton, setOperatorButton] = useState(initialOperatorDisabled);
  const [currentUser, setCurrentUser] = useState({})

  const dinerInputChange = (name, value) => {
    yup
      .reach(dinerSchema, name)
      .validate(value)
      .then(() => {
        setDinerFormErrors({
          ...dinerFormErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setDinerFormErrors({
          ...dinerFormErrors,
          [name]: err.errors[0],
        });
      });

    setDinerFormValues({
      ...dinerFormValues,
      [name]: value,
    });
  };

  useEffect(() => {
    dinerSchema.isValid(dinerFormValues).then((valid) => {
      setDinerButton(!valid);
    });
  }, [dinerFormValues]);

  const operatorInputChange = (name, value) => {
    yup
      .reach(operatorSchema, name)
      .validate(value)
      .then(() => {
        setOperatorFormErrors({
          ...operatorFormErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setOperatorFormErrors({
          ...operatorFormErrors,
          [name]: err.errors[0],
        });
      });

    setOperatorFormValues({
      ...operatorFormValues,
      [name]: value,
    });
  };

  useEffect(() => {
    operatorSchema.isValid(operatorFormValues).then((valid) => {
      setOperatorButton(!valid);
    });
  }, [operatorFormValues]);

  const dinerFormSubmit = () => {
    const newDiner = {
      username: dinerFormValues.dinerUsername.trim(),
      email: dinerFormValues.dinerEmail.trim(),
      password: dinerFormValues.dinerPassword.trim(),
      role: "diner",
    };

    setUsers([...users, newDiner]);
    setDinerFormValues(initialDinerFormValues);
    postNewDiner(newDiner);
  };

  const postNewDiner = (newDiner) => {
    axios
      .post(
        "https://food-truck-back-end-lambda.herokuapp.com/api/auth/register",
        newDiner
      )
      .then((res) => {
        console.log(res);
        //localStorage.setItem('token', res.data.payload);
        history.push("/login-form"); //unless we can get token
        //setDinerFormValues(initialDinerFormValues);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const operatorFormSubmit = () => {
    const newOperator = {
      username: operatorFormValues.operatorUsername.trim(),
      email: operatorFormValues.operatorEmail.trim(),
      password: operatorFormValues.operatorPassword.trim(),
      role: "operator",
    };

    setUsers([...users, newOperator]);
    setOperatorFormValues(initialOperatorFormValues);
    postNewOperator(newOperator);
  };

  const postNewOperator = (newOperator) => {
    axios
      .post(
        "https://food-truck-back-end-lambda.herokuapp.com/api/auth/register",
        newOperator
      )
      .then((res) => {
        console.log(res);
        history.push("/login-form");
        //setDinerFormValues(initialDinerFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <NavBar />
      <Menu />
      <Switch>
        <Route path="/register-form">
          <RegisterForm
            dinerChange={dinerInputChange}
            dinerDisabled={dinerButton}
            dinerFormSubmit={dinerFormSubmit}
            dinerValues={dinerFormValues}
            operatorChange={operatorInputChange}
            operatorDisabled={operatorButton}
            operatorFormSubmit={operatorFormSubmit}
            operatorValues={operatorFormValues}
            dinerErrors={dinerFormErrors}
            operatorErrors={operatorFormErrors}
          />
        </Route>

      <UserContext.Provider value={{currentUser, setCurrentUser}}>
        <Route  path="/login-form">
          <LoginForm />
        </Route>
        <SecureDinerRoute path="/diner-dashboard" component={DinerDash}/>
        <SecureOpRoute path="/operator-dashboard">
          <OperatorDash />
        </SecureOpRoute>
        <Route exact path="/">
          <StyledBigImage>
            <LoginForm />
          </StyledBigImage>
        </Route>
     </UserContext.Provider>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

const StyledBigImage = styled.div`
  // border: solid 1px red;
  border-top: solid 2px #FFCC4D;
  border-bottom: solid 2px #FFCC4D;
  background: url('https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAyNzI5MjY4NTUz/hungry-food-trucks-istock_000021186450large-2.jpg');
  height: 50vh;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
