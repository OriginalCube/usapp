const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const AccountModel = require("../models/AccountModel");

const createAccount = async (req, res) => {
  const porfilePicture = ["profile1", "profile2", "profile3", "profile4"];
  const { firstname, lastname, username, password, email, number, birthday } =
    req.body;
  try {
    const userExist = await AccountModel.findOne({ email });
    if (userExist) {
      res.json({ message: "Account Already Exist!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const randomPicture = Math.floor(
      Math.random() * (porfilePicture.length - 1)
    );
    const createUser = AccountModel.create({
      firstname,
      lastname,
      username,
      picture: porfilePicture[randomPicture],
      password: hashedPassword,
      email,
      number,
      birthday,
    });

    if (createUser) {
      res.status(201).json({
        token: genJWT(createUser._id),
      });
    } else {
      res.json({ message: "Invalid User Data." });
    }
  } catch (err) {}
};

const loginAccount = async (req, res) => {
  const { username, password } = req.body;
  const user = await AccountModel.findOne({ username });
  try {
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({ token: genJWT(user._id) });
    } else {
      res.json({ message: "Invalid Credentials." });
    }
  } catch (err) {
    console.log(err);
    res.json({ message: "Invalid credentials." });
  }
};

const profileDetails = async (req, res) => {
  const userDetails = await AccountModel.findById(req.user.id);
  const userDetail = {
    username: userDetails.username,
    picture: userDetails.picture,
  };
  console.log("Profile details");
  res.json(userDetail);
};

const genJWT = (id) => {
  return jwt.sign({ id }, process.env.KITAPP_SECRET, { expiresIn: "30d" });
};

module.exports = {
  createAccount,
  loginAccount,
  profileDetails,
};
