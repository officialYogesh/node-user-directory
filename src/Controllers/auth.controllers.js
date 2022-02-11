const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const doLogin = async (req, res, next) => {
  const username = "testUser";
  const password = "test@Password";

  const hashedPassword = await bcrypt.hash(password, 10);

  const token = await JWT.sign(
    { username, hashedPassword },
    process.env.JWT_KEY,
    { expiresIn: 900 }
  );

  res.status(200).json({
    token,
  });
};

module.exports = {
  doLogin,
};
