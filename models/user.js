const mongoose = require('mongoose');


//! User Schema

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    campsiteOwner: { type: Boolean },
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User