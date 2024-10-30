const bcrypt = require("bcryptjs");

module.exports = [
  {
    username: "joe",
    password: bcrypt.hashSync("1", 10),
    email: "joe@email.com",
    campsiteOwner: true,
    profilePhoto: "https://placehold.co/60x60",
  },
  {
    username: "finn",
    password: bcrypt.hashSync("pass", 10),
    email: "finn@email.com",
    campsiteOwner: true,
    profilePhoto: "https://placehold.co/60x60",
  },
];
