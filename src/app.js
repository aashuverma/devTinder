const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Aashu",
    lastName: "Verma",
    age: 33,
    gender: "female",
    emailId: "Aashu@gmail.com",
    password: "Aashu123",
  });
  try {
    await user.save();
    res.send("User Added Succeesfully");
  } catch (err) {
    res.status(400).send("Error saving the user :" + err.message);
  }
});
connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(3000, () => {
      console.log("Server is sucessfully running on port 3000");
    });
  })
  .catch((err) => console.error("Database cannot be connected"));
