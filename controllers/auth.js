const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


//* ==================== Imports =========================

const User = require('../models/user')









//! ==================== Sign Up =========================


router.post("/signUp", async (req, res) => {
    try {

        const { username, password, confirmPassword, email } = req.body;

        if (password !== confirmPassword) {
            console.log("Passwords dont match");
            return res.status(406).json({ message: "Unauthorized" });
        }

        const userInDb = await User.findOne({username: username});

        if (userInDb) {
            console.log("This user already exists");
            return res.status(406).json({ message: "Unauthorized" });
        }

        req.body.hashedPassword = bcrypt.hashSync(password, 12);

        const user = await User.create(req.body);

        const payload = {
            username: user.username,
            _id: user._id,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });

        console.log(user);

        return res.status(200).json({ user: payload, token });

    } catch (error) {
        console.log(error);
        console.log("Sign up isnt working");
    }
});




//! ==================== Sign In =========================


router.post('/signin', async (req, res) => {

    
})






//! ==================== Sign Out =========================
// local.storage.remove(token)










module.exports = router