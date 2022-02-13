const { verifyJwt } = require("../utils/jwt.utils");

const checkAuth = async (req, res, next) => {
  const token = req.header("x-auth-token");

  // CHECK IF WE EVEN HAVE A TOKEN
  if (!token) {
    return res.status(401).json({
      errors: [
        {
          msg: "No token found",
        },
      ],
    });
  }

  try {
    const user = verifyJwt(token);
    req.user = user;
    next();
  } catch (error) {
    console.log("error", error.message);
    res.status(400).json({
      errors: [
        {
          msg: "Invalid Token",
        },
      ],
    });
  }
};

module.exports = checkAuth;
