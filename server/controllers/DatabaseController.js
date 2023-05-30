const db = require("../models/AccountModel");

const createAccount = async (req, res) => {
  const createAccount = await db.create(req.body);
  res.status(201).json(createAccount);
};

const loginAccount = async (req, res) => {
  res.status(200).json(req.body);
};

module.exports = {
  createAccount,
  loginAccount,
};
