const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()



//! ==================== Models ========================= ! //
const Campsite = require('../models/campsite')



// ! Middleware/Utilities
const verifyToken = require('../middleware/verify-token')


//! ==================== Index '/campsites' ========================= ! //
router.get('/', async (req, res) => {
    try {
        const campsites = await Campsite.find()
        return res.json(campsites)
    } catch (error) {
        console.log(error);
        console.log('Homepage isnt working');
    }
})

//! ==================== Show '/campsites/:campsiteId' ========================= ! //












//! ==================== Create '/campsites' ========================= ! //
router.post('', verifyToken, async (req, res) => {
    try {
        const campsite = await Campsite.create(req.body)
        console.log(req.user);
        return res.status(201).json(campsite)
    } catch (error) {
        console.log(error);
        console.log('Create isnt working');
    }
})











//! ==================== Update '/campsites/:campsiteId' ========================= ! //











//! ==================== Delete'/campsites/:campsiteId ========================= ! //











module.exports = router