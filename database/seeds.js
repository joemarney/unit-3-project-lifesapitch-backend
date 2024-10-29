const mongoose = require("mongoose");
require("dotenv/config");

// ! Models
const Campsite = require("../models/campsite");
const User = require("../models/user");

// ! Data
const campsiteData = require("./data/campsites");
const userData = require("./data/users");

async function plantSeed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connection established");
    const clearDb = await Campsite.deleteMany();
    console.log(`${clearDb.deletedCount} Campsites removed`);
    const clearUsers = await User.deleteMany();
    console.log(`${clearUsers.deletedCount} Users removed`);
    const users = await User.create(userData);
    console.log(`${users.length} Users added`);
    const owners = campsiteData.map((campsite) => {
      campsite.campsiteOwner = users[Math.floor(Math.random() * users.length)]._id;
      return campsite;
    });
    const campsite = await Campsite.create(owners);
    console.log(`${campsite.length} Campsites added`);
    await mongoose.connection.close();
    console.log("Database connection killed");
  } catch (error) {
    console.log(error);
  }
}

plantSeed();
