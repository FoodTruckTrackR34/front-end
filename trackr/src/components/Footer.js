import React from "react";
import styled from 'styled-components';

export default function Footer() {
  return (
    <StyledFooterContainer>
      <p>Food Truck TrackR</p>
      <span>© 2021 All Rights Reserved.</span>
    </StyledFooterContainer>
  );
}

const StyledFooterContainer = styled.div`
  // border: solid 1px red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2%;
  margin-top: 2%;
  background-color: #fff5de;

  p {
    font-weight: bold;
    margin-bottom: .5%;
  }
`;
