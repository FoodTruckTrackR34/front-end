import React from "react";
import styled from 'styled-components';

import { Link } from "react-router-dom";

const NavBar = () => {
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
      <Link to="/logout">Log Out</Link>
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
  background-color: white;

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
    text-shadow: 2px 2px #ececec;
    transition: .3s;
  }

  a:hover {
    color: #FFCC4D;
  }
`;

const StyledLink = styled.div`
  // border: solid 1px yellow;
  margin-left: 5%;
  font-size: 1.5em;

  a {
    text-decoration: none;
    color: #808285;
    text-shadow: 2px 2px #ececec;
    transition: .3s;
  }

  a:hover {
    color: #FFCC4D;
  }
`;
