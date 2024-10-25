const mongoose = require('mongoose');

//! User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: ['Please provide a username', true], unique: true },
    password: { type: String, required: ['Please provide a password', true] },
    email: { type: String, required: ['Please provide an email', true], unique: true },
    campsiteOwner: Boolean,
    profilePhoto: String,
},
    {
        // virtual fields to allow 'likes and ratings' to be added to their account
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true
    }
);

userSchema.virtual('likedCampsites', {
    ref: 'Campsite',
    localField: '_id',
    foreignField: 'likes'
})

userSchema.virtual('ratingsPosted', {
    ref: 'Campsite',
    localField: '_id',
    foreignField: 'rating.user'
})

// ! Model

const User = mongoose.model('User', userSchema);

module.exports = User