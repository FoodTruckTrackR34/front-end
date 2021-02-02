import "./App.css";
import React, { useState, useEffect } from "react";
import RegisterForm from "./components/RegisterForm";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

const initialUsers = [];

const initialDinerFormValues = {
  dinerUsername: "",
  dinerEmail: "",
  dinerPassword: "",
  dinerConfirmPassword: "",
  dinerZipcode: "",
  type: "",
};

const initialOperatorFormValues = {
  operatorUsername: "",
  operatorEmail: "",
  operatorPassword: "",
  operatorConfirmPassword: "",
  type: "",
};

const initialDinerDisabled = false;
const initialOperatorDisabled = false;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [dinerFormValues, setDinerFormValues] = useState(
    initialDinerFormValues
  );
  const [operatorFormValues, setOperatorFormValues] = useState(
    initialOperatorFormValues
  );
  const [dinerButton, setDinerButton] = useState(initialDinerDisabled);
  const [operatorButton, setOperatorButton] = useState(initialOperatorDisabled);

  const dinerInputChange = (name, value) => {
    setDinerFormValues({
      ...dinerFormValues,
      [name]: value,
    });
  };

  const operatorInputChange = (name, value) => {
    setOperatorFormValues({
      ...operatorFormValues,
      [name]: value,
    });
  };

  const dinerFormSubmit = () => {
    const newDiner = {
      dinerUsername: dinerFormValues.dinerUsername.trim(),
      dinerEmail: dinerFormValues.dinerEmail.trim(),
      dinerPassword: dinerFormValues.dinerPassword.trim(),
      dinerConfirmPassword: dinerFormValues.dinerConfirmPassword.trim(),
      dinerZipcode: dinerFormValues.dinerZipcode.trim(),
      type: "diner",
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
      type: "operator",
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
    <div className="App">
      <NavBar />
      <RegisterForm
        dinerChange={dinerInputChange}
        dinerDisabled={dinerButton}
        dinerFormSubmit={dinerFormSubmit}
        dinerValues={dinerFormValues}
        operatorChange={operatorInputChange}
        operatorDisabled={operatorButton}
        operatorFormSubmit={operatorFormSubmit}
        operatorValues={operatorFormValues}
      />
      <Footer />
    </div>
  );
}

export default App;
