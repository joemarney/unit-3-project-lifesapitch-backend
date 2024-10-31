const serverless = require("serverless-http");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

//! ==================== Middleware ========================= ! //

app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: process.env.FRONT_END_URL }));

//! ==================== Controllers ========================= ! //

const authRouters = require("../../controllers/auth");
const campsitesRouters = require("../../controllers/campsites");

//! ==================== Routers ========================= ! //

app.use("/auth", authRouters);
app.use("/campsites", campsitesRouters);

// ! Server

const startServers = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connection established");
  } catch (error) {
    console.log(error);
  }
};

startServers();

module.exports.handler = serverless(app);
