const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("hello from the server");
});

app.use("/test", (req, res) => {
  res.send("hello from the server");
});
app.use("/", (req, res) => {
  res.send("hello from the /");
});

app.listen(3000, () => {
  console.log("Server is sucessfully running on port 3000");
});
