const users = [{
            id: 0,
            role: "diner",
            username: "mikemurphy",
            password: "password",
            currentLocation: "60805",   // can be string with address, zipcode number, GPS coordinates as string
            favoriteTrucks: [0, 3, 5], // id
        },
        {
            id: 1,
            role: "operator",
            username: "anthony",
            password: "password",
            currentLocation: "02134",   // can be string with address, zipcode number, GPS coordinates as string
            trucksOwned: [
                        {id: 123, // unique truck id
                        imageOfTruck: "https://images.unsplash.com/photo-1565097158282-1094bd0fe46a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2QlMjB0cnVja3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                        cuisineType: "popcorn",
                        customerRatings: [4, 3, 2, 1]}
            ]},   
            {
             id: 2,
             role: "diner",
             username: "mikemurphy",
             password: "password",
             currentLocation: "60805",   // can be string with address, zipcode number, GPS coordinates as string
             favoriteTrucks: [123, 456, 789], // id
                        },
            {
                id: 3,
                role: "operator",
                username: "anthony",
                password: "password",
                currentLocation: "02134",   // can be string with address, zipcode number, GPS coordinates as string
                trucksOwned: [
                    {
                        id: 456,
                        imageOfTruck: "https://images.unsplash.com/photo-1565097158282-1094bd0fe46a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2QlMjB0cnVja3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                        cuisineType: "popcorn",
                        customerRatings: [4, 5, 2, 2]
                    },
                    {
                        id: 789,
                        imageOfTruck: "https://images.unsplash.com/photo-1565097158282-1094bd0fe46a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2QlMjB0cnVja3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                        cuisineType: "popcorn",
                        customerRatings: [4, 5, 2, 2]
                    }
            ]
    }]

    users.map(user => {
      if(user.trucksOwned) {
            user.trucksOwned.map((truck, i )=> {
                let total = 0;
                truck.customerRatings.forEach(rating => {
                    total += rating
                })
                let avg = total / truck.customerRatings.length //calculate average rating
                let newTruckObj = {...truck,                    // create new truck obj that includes avgCustomerRatings
                                    avgCustomerRatings: avg}
                let newTrucksOwnedArr = user.trucksOwned        // set new array equal to the previous array
                newTrucksOwnedArr[i] = newTruckObj              // replace element in array with the newtruckobj
                user.trucksOwned = newTrucksOwnedArr            // update the trucksOwned array
            })
        }
        return (
            user                                                // return user with the new trucks owned array
        )  
    } )

    export default users