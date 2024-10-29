const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

//* ==================== Imports ========================= * //
const { showError, Forbidden, NotFound } = require("../utilities/errors");

//! ==================== Models ========================= ! //
const Campsite = require("../models/campsite");

// ! Middleware/Utilities
const verifyToken = require("../middleware/verify-token");

//! ==================== Index '/campsites' ========================= ! //
router.get("", async (req, res) => {
  try {
    const campsites = await Campsite.find();
    return res.json(campsites);
  } catch (error) {
    showError(error, res);
  }
});

//! ==================== Show '/campsites/:campsiteId' ========================= ! //
router.get("/:campsiteId", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.campsiteId)) {
      throw new NotFound("Invalid ID");
    }

    const campsite = await Campsite.findById(req.params.campsiteId);
    if (!campsite) {
      throw new NotFound("Campsite not found");
    }
    return res.json(campsite);
  } catch (error) {
    showError(error, res);
  }
});

//! ==================== Create '/campsites' ========================= ! //
router.post("", verifyToken, async (req, res) => {
  try {
    req.body.campsiteOwner = req.user._id;
    const campsite = await Campsite.create(req.body);
    console.log(req.user);
    campsite._doc.campsiteOwner = req.user;
    return res.status(201).json(campsite);
  } catch (error) {
    showError(error, res);
  }
});

//! ==================== Update '/campsites/:campsiteId' ========================= ! //
router.put("/:campsiteId", verifyToken, async (req, res) => {
  try {
    const campsite = await Campsite.findById(req.params.campsiteId);

    if (!campsite) throw new NotFound("Campsite not found");

    if (!campsite.campsiteOwner.equals(req.user._id)) {
      throw new Forbidden("You're not allowed to do that");
    }

    Object.assign(campsite, req.body);

    await campsite.save();

    return res.json(campsite);
  } catch (error) {
    showError(error, res);
  }
});
//! ==================== Delete'/campsites/:campsiteId ========================= ! //
router.delete("/:campsiteId", verifyToken, async (req, res) => {
  try {
    const campsite = await Campsite.findById(req.params.campsiteId);

    if (!campsite) throw new NotFound("Campsite not found");

    if (!campsite.campsiteOwner.equals(req.user._id)) {
      throw new Forbidden("You're not allowed to do that");
    }

    const campsiteToDelete = await Campsite.findByIdAndDelete(req.params.campsiteId);

    return res.json(campsiteToDelete);
  } catch (error) {
    showError(error, res);
  }
});

module.exports = router;
