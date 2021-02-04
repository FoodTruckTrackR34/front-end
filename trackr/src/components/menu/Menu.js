import React, { useState } from "react";
import MenuItem from "./MenuItem";

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
    id: 0,
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
    id: 1,
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
    id: 2,
    itemName: "Sirlion Steak",
    itemDescription: " fire food for the tummy",
    itemPhoto: [],
    itemPrice: 55.99,
    customerRatings: [4, 3, 4, 1],
    customerRatingAvg: function () {
      const avg = this.customerRatings.reduce(function (acc, index) {
        return acc + index;
      }, 0);
      const average = avg / this.customerRatings.length;
      return average.toFixed(2);
    },
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
    itemName: "Sirlion Steak",
    itemDescription: " fire food for the tummy",
    itemPhoto: [],
    itemPrice: 55.99,
    customerRatings: [4, 3, 4, 1],
    customerRatingAvg: function Average() {
      const avg = this.customerRatings.reduce(function (acc, index) {
        return acc + index;
      }, 0);
      const average = avg / this.customerRatings.length;
      return average.toFixed(2);
    },
  },
];

function Menu() {
  const [menuItem, setMenuItem] = useState(menuInitialValues);

  return (
    <div className="menu-list">
      <h4>Menu List</h4>
      <div>
        <ol>
          {menuObj.map((menu) => {
            // console.log(menu);
            return (
              <li
                style={{
                  textDecoration: "none",
                  width: "20%",
                  margin: "0 auto",
                }}
              >
                <MenuItem key={menu.id} menu={menu} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Menu;
