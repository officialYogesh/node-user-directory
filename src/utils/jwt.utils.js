// require("dotenv").config();
const jwt = require("jsonwebtoken");

const signJwt = async (username, hashedPassword) => {
  return await jwt.sign({ username, hashedPassword }, process.env.JWT_KEY, {
    expiresIn: 900,
  });
};

const verifyJwt = async (token) => {
  try {
    const user = await jwt.verify(token, process.env.JWT_KEY);
    return user;
  } catch (error) {
    console.log("error", error.message);
    return { error };
  }
};

module.exports = {
  signJwt,
  verifyJwt,
};
