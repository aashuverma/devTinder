const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://aashu:0127Varnit@ecommerce-cluster.hepi54n.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
