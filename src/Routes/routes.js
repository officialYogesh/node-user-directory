const authRouter = require("./auth.routes");
const userRouter = require("./users.routes");

const checkAuth = require("../Middleware/checkAuth.middleware");

const routes = (app) => {
  app.use("/auth", authRouter);
  app.use("/users", checkAuth, userRouter);

  app.use(function (req, res, next) {
    res.status(404).json({
      message: "No such route exists",
    });
  });
};

module.exports = routes;
