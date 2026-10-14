const express = require("express");
const connectDB = require("./config/database");
const app = express();
app.use(express.json());
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  //creating new instance of the model
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User Added Succeesfully");
  } catch (err) {
    res.status(400).send("Error saving the user :" + err.message);
  }
});

//get /feed api = get all users from database

app.get("/getAllUsers", async (req, res) => {
  try {
    const user = await User.find({});
    if (user.length === 0) {
      res.status(400).send("user not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(500).send("something went wrong");
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.email;
  try {
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      res.status(400).send("user not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(500).send("something went wrong");
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete({ _id: userId });
    res.send("User deleted succesfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.patch("/user/:id", async (req, res) => {
  const userId = req.params.id;
  const data = req.body;
  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k),
    );

    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }

    if (req.body.skills.length > 5) {
      throw new Error("Max 5 skills are allowed");
    }
    await User.findByIdAndUpdate({ _id: userId }, data);
    res.send("User updated sucessfully");
  } catch (err) {
    res.status(400).send("Something went wrong" + err.message);
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
