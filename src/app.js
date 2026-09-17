const express = require("express");

const app = express();
const { authAdmin, userAuth } = require("./middlewares/auth");

app.use("/admin", authAdmin);

app.post("/user/login", (req, res) => {
  res.send("login api called");
});

app.get("/user", userAuth, (req, res) => {
  res.send("User data sent");
});

app.get("/admin/getAlldata", (req, res) => {
  res.send("All data sent");
});

app.listen(3000, () => {
  console.log("Server is sucessfully running on port 3000");
});
