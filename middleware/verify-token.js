const jwt = require("jsonwebtoken");

// ! Model
const User = require("../models/user");

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) throw new Error("Token not present in authorisation header");

        const payload = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(payload._id);

        if (!user) throw new Error("User does not exist");

        req.user = user;

        next();
    } catch (error) {
        console.log(error);
        console.log('Verify token isnt work')
    }
}

module.exports = verifyToken