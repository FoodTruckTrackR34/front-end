import React, { useState } from "react";

const SearchBar = () => {
  const [values, setValues] = useState("");

  const changeHandle = (e) => {
    setValues(e.target.value);
  };
  return (
    <form>
      <label htmlFor="search-bar">Search </label>
      <input id="search-bar" value={values} onChange={changeHandle} />
    </form>
  );
};
export default SearchBar;
