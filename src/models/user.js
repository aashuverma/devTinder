const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
      minLength: 4,
      maxLength: 50,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validata(value) {
        if (!["male", "female", "other"].includes(value)) {
          throw new Error("Invalid email address " + value);
        }
      },
    },
    about: {
      type: String,
      default: "This is default about of the user",
    },
    photoUrl: {
      type: String,
      default: "https://geographyandyou.com/images/user-profile.png",
    },
    skills: {
      type: [String],
    },
  },
  { timestamp: true },
);

module.exports = mongoose.model("User", userSchema);
