import React, { useState, useContext, useEffect } from "react";
// import {UserContext} from '.../contexts/UserContext'
import {useParams} from 'react-router-dom'
import MenuItem from "./MenuItem";
import { TrucksContext } from "../../contexts/TrucksContext";
import { UserContext } from "../../contexts/UserContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import styled from 'styled-components';

const menuInitialValues = {
  itemName: "",
  itemDescription: "",
  itemPhoto: '',
  itemPrice: null,
};

 // customerRatings: [],
  // customerRatingAvg: function Average() {
  //   let avg = this.customerRatings.reduce((acc, index) => {
  //     return acc + index;
  //   }, 0);

  //   const average = avg / this.customerRatings.length;
  //   return average.toFixed(2);
  // },


// const menus = [
//   {
//     id: 0,
//     itemName: "Burger",
//     itemDescription: " fire food for the tummy",
//     itemPhoto: [
//       "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/lotus-burger-lead.jpg",
//     ],
//     itemPrice: 15.99,
//     customerRatings: [4, 2, 2, 5],
//     customerRatingAvg: function Average() {
//       let avg = this.customerRatings.reduce((acc, index) => {
//         return acc + index;
//       }, 0);

//       const average = avg / this.customerRatings.length;
//       return average.toFixed(2);
//     },
//   },
//   {
//     id: 1,
//     itemName: "Fish Fillet",
//     itemDescription: " fire food for the tummy",
//     itemPhoto: [
//       "https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/mccormick/s/800/saucy-lemon-fish-filets.jpg",
//     ],
//     itemPrice: 5.99,
//     customerRatings: [1, 2, 5],
//     customerRatingAvg: function () {
//       const avg = this.customerRatings.reduce(function (acc, index) {
//         return acc + index;
//       }, 0);
//       const average = avg / this.customerRatings.length;
//       return average.toFixed(2);
//     },
//   },
//   {
//     id: 2,
//     itemName: "Sirlion Steak",
//     itemDescription: " fire food for the tummy",
//     itemPhoto: [
//       "https://www.lecremedelacrumb.com/wp-content/uploads/2020/07/sirloin-steak-7sm-10-500x500.jpg",
//     ],
//     itemPrice: 55.99,
//     customerRatings: [4, 3, 4, 1],
//     customerRatingAvg: function () {
//       const avg = this.customerRatings.reduce(function (acc, index) {
//         return acc + index;
//       }, 0);
//       const average = avg / this.customerRatings.length;
//       return average.toFixed(2);
//     },
//   },
//   {
//     id: 3,
//     itemName: "Burger",
//     itemDescription: " fire food for the tummy",
//     itemPhoto: [
//       "https://www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785.jpg",
//     ],
//     itemPrice: 15.99,
//     customerRatings: [4, 2, 2, 5],
//     customerRatingAvg: function Average() {
//       let avg = this.customerRatings.reduce((acc, index) => {
//         return acc + index;
//       }, 0);

//       const average = avg / this.customerRatings.length;
//       return average.toFixed(2);
//     },
//   },
//   {
//     id: 4,
//     itemName: "Fish Fillet",
//     itemDescription: " fire food for the tummy",
//     itemPhoto: [
//       "https://skinnyms.com/wp-content/uploads/2015/09/Savory-Lemon-White-Fish-Fillets.jpg",
//     ],
//     itemPrice: 5.99,
//     customerRatings: [1, 2, 5],
//     customerRatingAvg: function () {
//       const avg = this.customerRatings.reduce(function (acc, index) {
//         return acc + index;
//       }, 0);
//       const average = avg / this.customerRatings.length;
//       return average.toFixed(2);
//     },
//   },
//   {
//     id: 5,
//     itemName: "Sirlion Steak",
//     itemDescription: " fire food for the tummy",
//     itemPhoto: [
//       "https://images-na.ssl-images-amazon.com/images/I/51SeQyjS3NL.jpg",
//     ],
//     itemPrice: 55.99,
//     customerRatings: [4, 3, 4, 1],
//     customerRatingAvg: function Average() {
//       const avg = this.customerRatings.reduce(function (acc, index) {
//         return acc + index;
//       }, 0);
//       const average = avg / this.customerRatings.length;
//       return average.toFixed(2);
//     },
//   },
// ];

function Menu() {
  // const [menuItem, setMenuItem] = useState(menuInitialValues);
  const {id} = useParams()
  const { trucks } = useContext(TrucksContext) // should access via Context, but for time's sake, going to access via API call
  const [formValues, setFormValues] = useState(menuInitialValues)
  // const [trucks, setTrucks] = useState([])
  const {menus, setMenus, currentUser, currentTruck, setCurrentTruck} = useContext(UserContext)
  const [isAdding, setIsAdding] = useState(false)
  
  console.log(currentUser)
  console.log(currentTruck)

  // useEffect(() => {

  //   axiosWithAuth()
  //   .get('/api/trucks')
  //   .then(res => {
  //     setTrucks(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
    // setCurrentTruck(fetchCurrentTruck[0])
  // }, [])
  
  console.log(trucks, "from menu")
  //console.log(currentTruck, 'currentTruck')

  // let fetchCurrentTruck = 

  // console.log(fetchCurrentTruck[0])
 


  const toggleDisplayAddForm = () => {
    setIsAdding(!isAdding)
}

const postNewMenu = () => {

  setFormValues({...formValues, itemPrice: Number(formValues.itemPrice) })
  console.log(formValues)
  axiosWithAuth()
  .post(`/api/menus/${id}`, formValues)
  .then(res => {
    console.log(res.data)
    axiosWithAuth()
    .get(`/api/menus`)
    .then(res=> {
      console.log(res.data)
      setMenus(res.data)
    })
    .catch(err=> {
      console.log(err)
    })
  })
  .catch(err => {
    console.log(err.response.data.message)
    console.log(formValues)
  })
}

const handleAddMenuItem = (evt) => {
  evt.preventDefault();
  setIsAdding(false);
  postNewMenu();
}

const handleChangeAdd = (evt) => {
  evt.preventDefault()
  const {name, value} = evt.target
  console.log(name)
  setFormValues({...formValues, [name]: value})
}

const thisTrucksMenu = menus.filter(menu => {
  
  return menu.truck_id == id
  })


  console.log(thisTrucksMenu, "thistrucks menu")
  return (
    <div className="menu-list">
      <h4>Menu List</h4>
      <div>
        <ol>
        {thisTrucksMenu.length !== 0 ? thisTrucksMenu.map((menu) => {
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
          }) :
          <span>No Menu Here... yet</span>}
          {/* <span>{currentUser.user_id}</span> */}
        </ol>
      </div>
      {!isAdding && currentTruck.user_id === Number(currentUser.user_id) ? <StyledAddNewMenu onClick={toggleDisplayAddForm}>+ Add New Menu Item</StyledAddNewMenu> :
      <></>}

{isAdding && currentTruck.user_id === Number(currentUser.user_id) ?
            <form onSubmit={handleAddMenuItem}>
            <StyledAddNewMenu onClick={toggleDisplayAddForm}>Hide Form</StyledAddNewMenu>

            <StyledAddMenuItemInput>
            <label>Menu Item Name <br />
            <input onChange={handleChangeAdd} name="itemName" value={formValues.itemName} type="text" placeholder="Chicken Parm"/>
            </label>
            </StyledAddMenuItemInput>

            <StyledAddMenuItemInput>
            <label>Menu Item Image URL <br />
            <input onChange={handleChangeAdd} name="itemPhoto" value={formValues.itemPhoto} type="text" placeholder="foodphoto.com"/>
            </label>
            </StyledAddMenuItemInput>

            <StyledAddMenuItemInput>
            <label>Item Price <br />
            <input onChange={handleChangeAdd} name="itemPrice" value={formValues.itemPrice} type="number" placeholder="9"/><br/>
            </label>
            </StyledAddMenuItemInput>

            <StyledAddMenuItemInput>
            <label>Description
            <input onChange={handleChangeAdd} name="itemDescription" value={formValues.itemDescription} type="text" placeholder="Gooey, cheesy breaded chicken with red sauce"/>
            </label>
            </StyledAddMenuItemInput>

            <StyledAddMenuItemButton type='submit'>Add Menu Item</StyledAddMenuItemButton>
        </form> :
        <></>
    }

    </div>
  );
}

const StyledAddNewMenu = styled.button`
    color: white;
    background-color: #C1694F;
    border: none;
    padding: 3% 7% 3% 7%;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5%;
`;

const StyledAddMenuItemInput = styled.div`
    // border: solid 1px black;
    margin-bottom: 5%;

    input {
        padding: 1.5%;
        font-size: .9em;
    }

    label {
        font-weight: bold;
    }
`;

const StyledAddMenuItemButton = styled.button`
    color: white;
    background-color: #DA3647;
    border: none;
    padding: 3% 7% 3% 7%;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5%;
`;

export default Menu;
