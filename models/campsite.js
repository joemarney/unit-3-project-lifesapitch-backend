const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    user: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

const ratingSchema = new mongoose.Schema(
  {
    toiletRating: { type: Number, required: true },
    showerRating: { type: Number, required: true },
    campingSpace: { type: Number, required: true },
    valueForMoney: { type: Number, required: true },
    user: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

const campsiteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cost: { type: Number, required: true },
  location: { type: String, required: true },
  comments: [commentSchema],
  rating: [ratingSchema],
  campsiteOwner: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
});

const Campsites = mongoose.model("Campsites", campsiteSchema);

module.exports = Campsites;
