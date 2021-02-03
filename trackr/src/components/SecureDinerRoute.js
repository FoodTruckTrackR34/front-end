import React from "react";
import { Redirect, Route } from "react-router-dom";

export function SecureDinerRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/login-form" />;
        }
      }}
    />
  );
}
