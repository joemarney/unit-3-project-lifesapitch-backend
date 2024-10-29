const mongoose = require("mongoose");

// ! Comment Schema
const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    user: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

// ! Rating Schema
const ratingSchema = new mongoose.Schema(
  {
    toilets: Number,
    showers: Number,
    campingSpace: Number,
    valueForMoney: Number,
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// ! Campsite Schema
const campsiteSchema = new mongoose.Schema({
  title: { type: String, required: ["Please provide a title", true] },
  cost: { type: Number, required: ["Please provide a cost", true] },
  location: { type: String, required: ["Please provide a location", true] },
  description: String,
  fires: Boolean,
  toilets: Boolean,
  showers: Boolean,
  camperVans: Boolean,
  campsiteOwner: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
  comments: [commentSchema],
  rating: [ratingSchema],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

// ! Model
const Campsite = mongoose.model("Campsite", campsiteSchema);

module.exports = Campsite;
