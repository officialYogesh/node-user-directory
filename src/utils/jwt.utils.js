// require("dotenv").config();
const jwt = require("jsonwebtoken");

const signJwt = async (username, hashedPassword) => {
  return await jwt.sign({ username, hashedPassword }, process.env.JWT_KEY, {
    expiresIn: 900,
  });
};

const verifyJwt = async (token) => {
  return await jwt.verify(token, process.env.JWT_KEY);
};

module.exports = {
  signJwt,
  verifyJwt,
};
