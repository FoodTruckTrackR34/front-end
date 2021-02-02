import './App.css';
import React, { useState, useEffect } from 'react';
import RegisterForm from './components/RegisterForm';
import { Switch, Route } from 'react-router-dom';
import * as yup from 'yup';
import dinerSchema from './validation/dinerFormSchema';

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

const initialDinerDisabled = true;
const initialOperatorDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [dinerFormValues, setDinerFormValues] = useState(initialDinerFormValues);
  const [dinerFormErrors, setDinerFormErrors] = useState(initialDinerFormErrors);
  const [operatorFormValues, setOperatorFormValues] = useState(initialOperatorFormValues);
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
      ...dinerFormValues, [name]: value
    });
  };

  useEffect(() => {
    dinerSchema.isValid(dinerFormValues)
    .then((valid) => {
      setDinerButton(!valid);
    })
  }, [dinerFormValues]);

  const operatorInputChange = (name, value) => {
    setOperatorFormValues({
      ...operatorFormValues, [name]: value
    });
  };

  const dinerFormSubmit = () => {
    const newDiner = {
      dinerUsername: dinerFormValues.dinerUsername.trim(),
      dinerEmail: dinerFormValues.dinerEmail.trim(),
      dinerPassword: dinerFormValues.dinerPassword.trim(),
      dinerConfirmPassword: dinerFormValues.dinerConfirmPassword.trim(),
      dinerZipcode: dinerFormValues.dinerZipcode.trim(),
      role: 'diner',
      favoriteTrucks: []
    };

    setUsers([...users, newDiner]);
    setDinerFormValues(initialDinerFormValues);
    // postNewDiner(newDiner);
  };

  // const postNewDiner = (newDiner) => {
  //   axios
  //   .post('https://reqres.in/api/users', newDiner)
  //   .then((res) => {
  //     setUsers([...users, res.data]);
  //     setDinerFormValues(initialDinerFormValues);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  const operatorFormSubmit = () => {
    const newOperator = {
      operatorUsername: operatorFormValues.operatorUsername.trim(),
      operatorEmail: operatorFormValues.operatorEmail.trim(),
      operatorPassword: operatorFormValues.operatorPassword.trim(),
      operatorConfirmPassword: operatorFormValues.operatorConfirmPassword.trim(),
      role: 'operator',
      ownedTrucks: []
    };

    setUsers([...users, newOperator]);
    setOperatorFormValues(initialOperatorFormValues);
    // postNewOperator(newOperator);
  };

  // const postNewOperator = (newOperator) => {
  //   axios
  //   .post('https://reqres.in/api/users', newOperator)
  //   .then((res) => {
  //     setUsers([...users, res.data]);
  //     setOperatorFormValues(initialOperatorFormValues);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  return (
    <Switch>
      <Route path='/register-form'>
        <RegisterForm dinerChange={dinerInputChange} dinerDisabled={dinerButton} dinerFormSubmit={dinerFormSubmit} dinerValues={dinerFormValues} operatorChange={operatorInputChange} operatorDisabled={operatorButton} operatorFormSubmit={operatorFormSubmit} operatorValues={operatorFormValues} />
      </Route>
    </Switch>
  );
}

export default App;
