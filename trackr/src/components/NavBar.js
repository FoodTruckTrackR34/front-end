import React from "react";
import styled from 'styled-components';

import { Link } from "react-router-dom";

const NavBar = () => {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  return (
    <StyledNavContainer>

      <StyledLogoContainer>
      <img src='https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f32f.svg' alt='Burrito Logo' />
      </StyledLogoContainer>

      <StyledHomeLink>
      <Link to="/">Home</Link>
      </StyledHomeLink>

      <StyledLink>
      <Link to="/login-form">Login</Link>
      </StyledLink>

      <StyledLink>
      <Link to="/register-form">Register</Link>
      </StyledLink>

      <StyledLink>
      <Link onClick={logout} to="/login-form">Log Out</Link>
      </StyledLink>
      
    </StyledNavContainer>
  );
};

export default NavBar;

const StyledNavContainer = styled.div`
  // border: solid 1px blue;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white; /*#FFE8B6*/

  img {
    height: 100px;
    width: 100px;
  }
`;

const StyledLogoContainer = styled.div`
  // border: solid 1px pink;
`;

const StyledHomeLink = styled.div`
  // border: solid 1px brown;
  margin-left: 3%;
  font-size: 1.5em;

  a {
    text-decoration: none;
    color: #808285;
    // text-shadow: 2px 2px #ececec;
    transition: .3s;
  }

  a:hover {
    color: #FFCC4D;
    // color: #DA3647;
  }
`;

const StyledLink = styled.div`
  // border: solid 1px yellow;
  margin-left: 5%;
  font-size: 1.5em;

  a {
    text-decoration: none;
    color: #808285;
    // text-shadow: 2px 2px #ececec;
    transition: .3s;
  }

  a:hover {
    color: #FFCC4D;
    //color: #DA3647;
  }
`;
