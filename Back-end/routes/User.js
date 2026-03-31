const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET USERS
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// DELETE USER
router.delete("/user/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User Deleted" });
});

module.exports = router;