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
      res.status(201).json({
        token: genJWT(user._id),
      });
    } else {
      res.json({ message: "Invalid User Datas." });
    }
  } catch (err) {}
};

const loginAccount = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  const user = await AccountModel.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      token: genJWT(user._id),
    });
  } else {
    res.json({ message: "Invalid credentials." });
  }
};

const profileDetails = async (req, res) => {
  const { _id, username, email } = AccountModel.findById(req.user.id);
  res.send("Succesfully loaded");
};

const genJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  createAccount,
  loginAccount,
  profileDetails,
};
