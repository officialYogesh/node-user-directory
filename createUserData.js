const User = require("./src/Models/user");

const createTestUserData = () => {
  User.countDocuments((error, count) => {
    if (error) {
      console.log("error", error);
    } else {
      if (count > 0) return;

      User.insertMany(
        [
          {
            id: 1,
            name: "Leanne Graham",
            address: "Kulas Light",
            dob: "17-10-1990",
            state: "Maharashtra",
          },
          {
            id: 2,
            name: "Ervin Howell",
            address: "Victor Plains",
            dob: "01-01-1992",
            state: "Goa",
          },
          {
            id: 3,
            name: "Clementine Bauch",
            address: "Douglas Extension",
            dob: "23-06-1996",
            state: "Himachal Pradesh",
          },
          {
            id: 4,
            name: "Patricia Lebsack",
            address: "Hoeger Mall",
            dob: "16-08-1998",
            state: "Madhya Pradesh",
          },
          {
            id: 5,
            name: "Chelsey Dietrich",
            address: "Skiles Walks",
            dob: "28-09-1990",
            state: "Manipur",
          },
          {
            id: 6,
            name: "Mrs. Dennis Schulist",
            address: "Norberto Crossing",
            dob: "07-10-1980",
            state: "Sikkim",
          },
          {
            id: 7,
            name: "Kurtis Weissnat",
            address: "Rex Trail",
            dob: "18-03-1992",
            state: "Rajasthan",
          },
          {
            id: 8,
            name: "Nicholas Runolfsdottir V",
            address: "Ellsworth Summit",
            dob: "26-06-1979",
            state: "Uttarakhand",
          },
          {
            id: 9,
            name: "Glenna Reichert",
            address: "Dayna Park",
            dob: "19-12-1991",
            state: "Orissa",
          },
          {
            id: 10,
            name: "Clementina DuBuque",
            address: "Kattie Turnpike",
            dob: "20-02-1994",
            state: "Delhi",
          },
        ],
        (error) => {
          if (error) {
            console.log("error", error);
          } else {
            console.log("Successfully Added Users");
          }
        }
      );
    }
  });
};

module.exports = createTestUserData;
