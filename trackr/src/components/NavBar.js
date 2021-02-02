import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { SecureRoute } from "../components/PrivateRoute";

const NavBar = () => {
  return (
    <>
      <Link>Home</Link>
      <br />
      <Link>Login</Link>
      <br />
      <Link>Log Out</Link>

      <Switch>
        <Route />
        <SecureRoute />
      </Switch>
    </>
  );
};
export default NavBar;
