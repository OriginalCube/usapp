const express = require("express");
const router = express.Router();
const {
  createAccount,
  loginAccount,
  profileDetails,
} = require("../controllers/DatabaseController");

const { protect } = require("../middleware/authMiddleware");

router.post("/register", createAccount);

router.post("/login", loginAccount);

router.get("/profile", protect, profileDetails);

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update account ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete account ${req.params.id}` });
});

module.exports = router;
