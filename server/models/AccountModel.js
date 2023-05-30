const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String,
  email: String,
  number: String,
  birthday: String,
});

module.exports = mongoose.model("account", accountSchema);
