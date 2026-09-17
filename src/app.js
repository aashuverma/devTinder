const express = require("express");

const app = express();

// app.get("/user/:userId", (req, res) => {
//   console.log(req.params);
//   res.send({ firstName: "Akshay", lastName: "Saini" });
// });

// app.get("/abc", (req, res) => {
//   console.log(req.query);
//   res.send({ firstName: "Akshay", lastName: "Saini" });
// });

app.get(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user1!!");
    // res.send("1st response");
    next();
  },

  (req, res, next) => {
    console.log("Handling the route user2!!");

    // res.send("2nd Response");
    next();
  },

  (req, res, next) => {
    console.log("Handling the route user3!!");

    res.send("3rd Response");
    // next();
  },
);

app.listen(3000, () => {
  console.log("Server is sucessfully running on port 3000");
});
