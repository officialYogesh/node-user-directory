const express = require("express");

const app = express();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({
    message: "No such route exists",
  });
});

module.exports = app;
