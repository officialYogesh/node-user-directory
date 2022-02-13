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

  const { error, user } = await verifyJwt(token);
  if (error) {
    return res.status(400).json({
      errors: [
        {
          msg: "Invalid Token",
        },
      ],
    });
  }
  req.user = user;
  next();
};

module.exports = checkAuth;
