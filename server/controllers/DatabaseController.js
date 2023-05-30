const createAccount = async (req, res) => {
  res.status(201).json(req.body);
};

const loginAccount = async (req, res) => {
  res.status(200).json(req.body);
};

module.exports = {
  createAccount,
  loginAccount,
};
