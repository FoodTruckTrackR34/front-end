import React from "react";
import { Redirect, Route } from "react-router-dom";

export function SecureRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        debugger
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/login-form" />;
        }
      }}
    />
  );
}
