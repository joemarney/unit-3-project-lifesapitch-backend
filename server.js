const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

//! ==================== Middleware ========================= ! //

app.use(express.json());
<<<<<<< HEAD
app.use(morgan("dev"));
app.use(cors({ origin: process.env.FRONT_END_URL }));
=======
app.use(morgan('dev'))
app.use(cors({ origin: process.env.FRONT_END_URL }))


>>>>>>> 3c6f956289132c0500ad952c8363c6354f2fd43c

//! ==================== Controllers ========================= ! //

const authRouters = require("./controllers/auth");
const campsitesRouters = require("./controllers/campsites");

//! ==================== Routers ========================= ! //

app.use("/auth", authRouters);
app.use("/campsites", campsitesRouters);

//! ==================== Homepage '/' ========================= ! //

app.listen(port, () => {
  console.log("The express app is ready!");
});
