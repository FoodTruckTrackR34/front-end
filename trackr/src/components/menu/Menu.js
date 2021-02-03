import React, { useState } from "react";

const menuInitialValues = {
  itemName: "",
  itemDescription: "",
  itemPhoto: [],
  itemPrice: null,
  customerRatings: [],
  customerRatingAvg: function Average() {
    let avg = this.customerRatings.reduce((acc, index) => {
      return acc + index;
    }, 0);

    const average = avg / this.customerRatings.length;
    return average.toFixed(2);
  },
};

const menuObj = [
  {
    id: null,
    itemName: "Burger",
    itemDescription: " fire food for the tummy",
    itemPhoto: [],
    itemPrice: 15.99,
    customerRatings: [4, 2, 2, 5],
    customerRatingAvg: function Average() {
      let avg = this.customerRatings.reduce((acc, index) => {
        return acc + index;
      }, 0);

      const average = avg / this.customerRatings.length;
      return average.toFixed(2);
    },
  },
  {
    itemName: "Fish Fillet",
    itemDescription: " fire food for the tummy",
    itemPhoto: [],
    itemPrice: 5.99,
    customerRatings: [1, 2, 5],
    customerRatingAvg: function () {
      const avg = this.customerRatings.reduce(function (acc, index) {
        return acc + index;
      }, 0);
      const average = avg / this.customerRatings.length;
      return average.toFixed(2);
    },
  },
  {
    itemName: "Sirlion Steak",
    itemDescription: " fire food for the tummy",
    itemPhoto: [],
    itemPrice: 55.99,
    customerRatings: [4, 3],
    customerRatingAvg: function () {
      const avg = this.customerRatings.reduce(function (acc, index) {
        return acc + index;
      }, 0);
      const average = avg / this.customerRatings.length;
      return average.toFixed(2);
    },
  },
];

function Menu() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [menuItem, setMenuItem] = useState(menuInitialValues);

  const expandHandler = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="menu-list">
      <h4>Menu List</h4>
      <ol>
        {menuObj.map((menu) => {
          // console.log(menu);
          return (
            <li>
              <img src="../" alt="random" />
              <h5> Name: {menu.itemName} </h5>
              <p className="menu-price">Price: {menu.itemPrice} </p>
              <p className="menu-rating">
                Rating:{menu.customerRatings.length} 🤍🤍🤍🤍🤍
              </p>
              {!isExpanded && <span onClick={expandHandler}>More...</span>}
              {isExpanded && (
                <div>
                  <p className="menu-averageRating">
                    Customer Rating: {menu.customerRatingAvg()}/5
                  </p>
                  <p className="menu-description">
                    Description:{menu.itemDescription}
                  </p>
                  <br />
                  <span onClick={expandHandler}>Less...</span>
                </div>
              )}
              <br />
              ------------------------------------------
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Menu;
