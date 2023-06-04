const jwt = require("jsonwebtoken");
const Account = require("../models/AccountModel");

const protect = async (req, res, next) => {
  let token;
  console.log(req.headers.token);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    console.log(req.headers.authorization);
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log(decoded);
      req.user = await Account.findById(decoded.id).select("-password");

      next();
    } catch (err) {
      console.log(err);
    }
  }
  if (!token) {
    res.send("Not Token.");
  }
};

module.exports = { protect };
