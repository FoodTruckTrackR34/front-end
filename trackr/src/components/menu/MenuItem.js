import React, { useState } from "react";
import "../../App.css";
export default function MenuItem(props) {
  const { menu } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [updateRating, setUpdateRating] = useState([]); //menu.customerRatings);

  const expandHandler = () => {
    setIsExpanded(!isExpanded);
  };

  const submitRatings = (e) => {
    e.preventDefault();
    let base;
    for (let i = 0; i < 5; i++) {
      base = e.target[i];
      if (base.checked) {
        console.log(base.value);
      }
    }
    setUpdateRating(...updateRating, base.value);
  };

  /*
this is a attempt at the hovering heart to be the rating it does not seem likely that I will get it but I will def try anyways
*/

  //End of my crucifix and attempting to dive into the unknown maybe it work maybe not IDK
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      {console.log(menu)}
      <img
        style={{ width: "400px" }}
        src={menu.itemPhoto}
        alt={menu.itemName}
      />
      <h5> Name: {menu.itemName} </h5>
      <p className="menu-price">Price: {menu.itemPrice} </p>
      <div className="menu-rating">
        <span>Rate:</span>
        <form className="heart-rate" onSubmit={submitRatings}>
          <label className="full" htmlFor="hearts1">
            1
            <input type="radio" id="hearts1" name="rating" value="1" />
          </label>
          <label className="full" htmlFor="hearts2">
            2
            <input type="radio" id="hearts2" name="rating" value="2" />
          </label>
          <label className="full" htmlFor="hearts3">
            3
            <input type="radio" id="hearts3" name="rating" value="3" />
          </label>
          <label className="full" htmlFor="hearts4">
            4
            <input type="radio" id="hearts4" name="rating" value="4" />
          </label>
          <label className="full" htmlFor="hearts5">
            5
            <input type="radio" id="hearts5" name="rating" value="5" />
          </label>
          <button type="submit" id="btn">
            Submit
          </button>
        </form>
      </div>

      {!isExpanded && <p onClick={expandHandler}>More...</p>}
      {isExpanded && (
        <div>
          <p>Ratings:{menu.customerRatings.length}</p>
          <p className="menu-averageRating">
            Customer Rating: {menu.customerRatingAvg()}/5
          </p>
          <p className="menu-description">Description:{menu.itemDescription}</p>
          <br />
          <span onClick={expandHandler}>Less...</span>
        </div>
      )}
    </div>
  );
}
