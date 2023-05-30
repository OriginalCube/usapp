const express = require("express");
const router = express.Router();
const {
  createAccount,
  loginAccount,
} = require("../controllers/DatabaseController");

router.post("/register", createAccount);

router.post("/login", loginAccount);

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update account ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete account ${req.params.id}` });
});

module.exports = router;
