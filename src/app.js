require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./Routes/users.routes");
const authRouter = require("./Routes/auth.routes");

const checkAuth = require("./Middleware/checkAuth.middleware");
// const corsMiddleware = require("./Middleware/cors.middleware");
const createTestUserData = require("../createUserData");

const app = express();
const dbURI = process.env.MONGO_DB_URI;

// app.use(cors(corsOptions))

// app.use(function (req, res, next) {
//   console.log("req.headers", req.headers);
//   res.header("Access-Control-Allow-Methods", "POST");
//   res.header("access-control-allow-origin", "www.google.com");
//   next();
// });

app.use(express.json());
// app.options("*", corsMiddleware);
// app.use(corsMiddleware);

mongoose
  .connect(dbURI, { dbName: process.env.DB_NAME })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err.message));

createTestUserData();

app.use("/auth", authRouter);
app.use("/users", checkAuth, userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({
    message: "No such route exists",
  });
});

module.exports = app;
