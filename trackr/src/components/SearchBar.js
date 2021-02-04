import React, { useState } from "react";
import styled from 'styled-components';

const initialCuisine = true;
const initialRatings = false;
const initialProximity = false;

const SearchBar = () => {
  const [values, setValues] = useState("");
  const [cuisineInput, setCuisineInput] = useState(initialCuisine);
  const [ratingsInput, setRatingsInput] = useState(initialRatings);
  const [proximityInput, setProximityInput] = useState(initialProximity);

  const changeHandle = (e) => {
    setValues(e.target.value);
  };

  const cuisineClick = (evt) => {
    evt.preventDefault();
    setCuisineInput(true);
    setRatingsInput(false);
    setProximityInput(false);
    setValues('');
  };

  const ratingsClick = (evt) => {
    evt.preventDefault();
    setCuisineInput(false);
    setRatingsInput(true);
    setProximityInput(false);
    setValues('');
  };

  const proximityClick = (evt) => {
    evt.preventDefault();
    setCuisineInput(false);
    setRatingsInput(false);
    setProximityInput(true);
    setValues('');
  };

  return (
    <StyledSearchBarContainer>
      <form>

        <StyledCuisineContainer active={cuisineInput}>
          {/* <label htmlFor="search-bar">Search by Cuisine </label> */}
          <input id="search-bar" value={values} onChange={changeHandle} placeholder='Search by Cuisine Type (ex. Korean BBQ)'/>
          <span>Click these to search by <StyledRatingsButton onClick={ratingsClick}>truck ratings</StyledRatingsButton> or by <StyledProximityButton onClick={proximityClick}>truck proximity</StyledProximityButton></span>
        </StyledCuisineContainer>

        <StyledRatingsContainer active={ratingsInput}>
          <input type='number' id="search-bar" value={values} onChange={changeHandle} placeholder='Search by Truck Rating'/>
          <span>Click these to search by <StyledCuisineButton onClick={cuisineClick}>cuisine type</StyledCuisineButton> or by <StyledProximityButton onClick={proximityClick}>truck proximity</StyledProximityButton></span>
        </StyledRatingsContainer>

        <StyledProximityContainer active={proximityInput}>
          <input id="search-bar" value={values} onChange={changeHandle} placeholder='Search by Proximity (enter location)'/>
          <span>Click these to search by <StyledCuisineButton onClick={cuisineClick}>cuisine type</StyledCuisineButton> or by <StyledRatingsButton onClick={ratingsClick}>truck ratings</StyledRatingsButton></span>
        </StyledProximityContainer>

      </form>
    </StyledSearchBarContainer>
  );
};
export default SearchBar;

const StyledSearchBarContainer = styled.div`
  // border: solid 1px yellow;
  padding: 3%;

  input {
    padding: .5%;
    margin-right: 1%;
    font-size: .9em;
    width: 30%;
  }
`;

const StyledCuisineContainer = styled.div`
  // border: solid 1px black;

  ${props => (props.active === true ? null : `display: none;`)}
`;

const StyledRatingsContainer = styled.div`
  // border: solid 1px black;

  ${props => (props.active === true ? null : `display: none;`)}
`;

const StyledProximityContainer = styled.div`
  // border: solid 1px black;

  ${props => (props.active === true ? null : `display: none;`)}
`;

const StyledCuisineButton = styled.button`
  color: #4d4d4d;
  background-color: #FFCC4D;
  border: none;
  padding: .5% 1% .5% 1%;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledRatingsButton = styled.button`
  color: white;
  background-color: #C1694F;
  border: none;
  padding: .5% 1% .5% 1%;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledProximityButton = styled.button`
  color: white;
  background-color: #7DB65B;
  border: none;
  padding: .5% 1% .5% 1%;
  border-radius: 5px;
  cursor: pointer;
`;
