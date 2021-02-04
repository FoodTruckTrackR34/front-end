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
    itemPhoto: [
      "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/lotus-burger-lead.jpg",
    ],
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
    itemPhoto: [
      "https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/mccormick/s/800/saucy-lemon-fish-filets.jpg",
    ],
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
    itemPhoto: [
      "https://www.lecremedelacrumb.com/wp-content/uploads/2020/07/sirloin-steak-7sm-10-500x500.jpg",
    ],
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
    itemPhoto: [
      "https://www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785.jpg",
    ],
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
    itemPhoto: [
      "https://skinnyms.com/wp-content/uploads/2015/09/Savory-Lemon-White-Fish-Fillets.jpg",
    ],
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
    itemPhoto: [
      "https://images-na.ssl-images-amazon.com/images/I/51SeQyjS3NL.jpg",
    ],
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
