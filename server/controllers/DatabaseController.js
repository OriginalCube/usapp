const db = require("../models/AccountModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const AccountModel = require("../models/AccountModel");

const createAccount = async (req, res) => {
  const { firstname, lastname, username, password, email, number, birthday } =
    req.body;
  try {
    const userExist = await db.findOne({ email });
    if (userExist) {
      res.json({ message: "Email is already in use!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userCreate = AccountModel.create({
      firstname,
      lastname,
      username,
      password: hashedPassword,
      email,
      number,
      birthday,
    });

    if (user) {
      res.status(201).json(userCreate);
    } else {
      res.json({ message: "Invalid User Datas." });
    }
  } catch (err) {}
};

const loginAccount = async (req, res) => {
  const { username, password } = req.body;
  const user = AccountModel.findOne({ username });
  if (user) {
    res.send("user exist!");
  } else {
    res.send("does not exist");
  }
};

module.exports = {
  createAccount,
  loginAccount,
};
