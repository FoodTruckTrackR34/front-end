import './App.css';
import React, { useState, useEffect } from 'react';
import RegisterForm from './components/RegisterForm';
import { Switch, Route, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import dinerSchema from './validation/dinerFormSchema';
import operatorSchema from './validation/operatorFormSchema';
import DinerDash from "./components/DinerDash"
import OperatorDash from "./components/OperatorDash"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import axiosWithAuth from "./utils/axiosWithAuth"
import axios from 'axios'


const initialUsers = [];

const initialDinerFormValues = {
  dinerUsername: '',
  dinerEmail: '',
  dinerPassword: '',
  dinerConfirmPassword: '',
  dinerZipcode: ''
};

const initialDinerFormErrors = {
  dinerUsername: '',
  dinerEmail: '',
  dinerPassword: '',
  dinerConfirmPassword: ''
};

const initialOperatorFormValues = {
  operatorUsername: '',
  operatorEmail: '',
  operatorPassword: '',
  operatorConfirmPassword: ''
};

const initialOperatorFormErrors = {
  operatorUsername: '',
  operatorEmail: '',
  operatorPassword: '',
  operatorConfirmPassword: ''
};


const initialDinerDisabled = true;
const initialOperatorDisabled = true;

function App() {
  const history = useHistory()
  const [users, setUsers] = useState(initialUsers);
  const [dinerFormValues, setDinerFormValues] = useState(initialDinerFormValues);
  const [dinerFormErrors, setDinerFormErrors] = useState(initialDinerFormErrors);
  const [operatorFormValues, setOperatorFormValues] = useState(initialOperatorFormValues);
  const [operatorFormErrors, setOperatorFormErrors] = useState(initialOperatorFormErrors);
  const [dinerButton, setDinerButton] = useState(initialDinerDisabled);
  const [operatorButton, setOperatorButton] = useState(initialOperatorDisabled);

  const dinerInputChange = (name, value) => {
    yup
      .reach(dinerSchema, name)
      .validate(value)
      .then(() => {
        setDinerFormErrors({
          ...dinerFormErrors, [name]: ''
        });
      })
      .catch((err) => {
        setDinerFormErrors({
          ...dinerFormErrors, [name]: err.errors[0]
        });
    });

    setDinerFormValues({
      ...dinerFormValues,
      [name]: value,
    });
  };

  useEffect(() => {
    dinerSchema.isValid(dinerFormValues)
    .then((valid) => {
      setDinerButton(!valid);
    })
  }, [dinerFormValues]);

  const operatorInputChange = (name, value) => {
    yup
      .reach(operatorSchema, name)
      .validate(value)
      .then(() => {
        setOperatorFormErrors({
          ...operatorFormErrors, [name]: ''
        });
      })
      .catch((err) => {
        setOperatorFormErrors({
          ...operatorFormErrors, [name]: err.errors[0]
        });
    });

    setOperatorFormValues({
      ...operatorFormValues,
      [name]: value,
    });
  };

  useEffect(() => {
    operatorSchema.isValid(operatorFormValues)
    .then((valid) => {
      setOperatorButton(!valid);
    })
  }, [operatorFormValues]);

  const dinerFormSubmit = () => {
    const newDiner = {
      username: dinerFormValues.dinerUsername.trim(),
      email: dinerFormValues.dinerEmail.trim(),
      password: dinerFormValues.dinerPassword.trim(),
      // dinerConfirmPassword: dinerFormValues.dinerConfirmPassword.trim(),
      // dinerZipcode: dinerFormValues.dinerZipcode.trim(),
      role: 'diner',
    };

    setUsers([...users, newDiner]);
    setDinerFormValues(initialDinerFormValues);
    postNewDiner(newDiner);


  };

  const postNewDiner = (newDiner) => {
    axios
    .post('https://food-truck-back-end-lambda.herokuapp.com/api/auth/register', newDiner)
    .then((res) => {
      console.log(res)
      history.push('/diner-dashboard')
      //setDinerFormValues(initialDinerFormValues);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const operatorFormSubmit = () => {
    const newOperator = {
      username: operatorFormValues.operatorUsername.trim(),
      email: operatorFormValues.operatorEmail.trim(),
      password: operatorFormValues.operatorPassword.trim(),
      role: 'operator',
    };

    setUsers([...users, newOperator]);
    setOperatorFormValues(initialOperatorFormValues);
    postNewOperator(newOperator);
  };

  const postNewOperator = (newOperator) => {
    axios
    .post('https://food-truck-back-end-lambda.herokuapp.com/api/auth/register', newOperator)
    .then((res) => {
      console.log(res)
      history.push('/operator-dashboard')
      //setDinerFormValues(initialDinerFormValues);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/register-form'>
          <RegisterForm dinerChange={dinerInputChange} dinerDisabled={dinerButton} dinerFormSubmit={dinerFormSubmit} dinerValues={dinerFormValues} operatorChange={operatorInputChange} operatorDisabled={operatorButton} operatorFormSubmit={operatorFormSubmit} operatorValues={operatorFormValues} dinerErrors={dinerFormErrors} operatorErrors={operatorFormErrors}/>
        </Route>
        <Route path="/diner-dashboard" component={DinerDash} />
    
        <Route path="/operator-dashboard" component = {OperatorDash} />
       
    </Switch>
    <Footer />
    </div>
  );
}

export default App;