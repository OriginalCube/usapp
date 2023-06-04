const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const accountSchema = mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    username: { type: String, unique: true },
    password: String,
    email: { type: String, unique: true },
    number: String,
    birthday: String,
  },
  { Timestamp: true }
);

module.exports = mongoose.model("account", accountSchema);
