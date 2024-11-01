const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//* ==================== Imports =========================

const User = require("../models/user");
const { showError, Unauthorized } = require("../utilities/errors");

//! ==================== Sign Up =========================

router.post("/signup", async (req, res) => {
  try {
    const { username, password, confirmPassword, email } = req.body;

    if (password !== confirmPassword) {
      throw new Unauthorized("Passwords don't match");
    }

    const userInDb = await User.findOne({ username: username });

    if (userInDb) {
      throw new Unauthorized("User already exists");
    }

    req.body.password = bcrypt.hashSync(password, 12);

    const user = await User.create(req.body);

    const payload = {
      username: user.username,
      _id: user._id,
      campsiteOwner: user.campsiteOwner,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    return res.status(201).json({ user: payload, token });
  } catch (error) {
    showError(error, res);
  }
});

//! ==================== Sign In =========================

router.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    console.log(user);

    if (!user) {
      throw new Unauthorized("User was not found");
    }

    const passwordExist = bcrypt.compareSync(password, user.password);

    if (!passwordExist) {
      throw new Unauthorized("Password was incorrect");
    }

    const payload = {
      username: user.username,
      _id: user._id,
      campsiteOwner: user.campsiteOwner,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    return res.json({ user: payload, token });
  } catch (error) {
    showError(error, res);
  }
});

module.exports = router;
