import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/login-form">Login</Link>
      <br />
      <Link to="/logout">Log Out</Link>
    </>
  );
};

export default NavBar;
