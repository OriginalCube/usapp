const db = require("../models/AccountModel");

const createAccount = async (req, res) => {
  try {
    const { email, username } = req.body;
    const usernameExist = await db.findOne({ username });
    const emailExist = await db.findOne({ email });
    if (!usernameExist && !emailExist) {
      const createAccount = await db.create(req.body);
      res.status(200).json({ message: "Successfully Created Account!" });
    } else {
      res.json({ message: "User already exist!" });
    }
  } catch (err) {}
};

const loginAccount = async (req, res) => {
  try {
    const userExist = await db.findOne(req.body);
    if (!userExist) {
      console.log("does not exist");
      res.json({ message: "User does not exist!" });
    } else {
      res.status(200).json({ message: "User does exist." });
    }
  } catch (err) {
    console.log("db error");
  }
};

module.exports = {
  createAccount,
  loginAccount,
};
