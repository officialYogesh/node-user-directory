const bcrypt = require("bcrypt");
const { signJwt } = require("../utils/jwt.utils");

const doLogin = async (req, res, next) => {
  const username = "testUser";
  const password = "test@Password";

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const token = await signJwt(username, hashedPassword);
    res.status(200).json({
      token,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "Something went wrong, please try again!",
    });
  }
};

module.exports = {
  doLogin,
};
