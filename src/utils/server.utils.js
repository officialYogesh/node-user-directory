require("dotenv").config();
const express = require("express");

const routes = require("../Routes/routes");
const corsMiddleware = require("../Middleware/cors.middleware");

const createServer = () => {
  const app = express();

  app.use(express.json());

  app.use(corsMiddleware);

  routes(app);

  return app;
};

module.exports = createServer;
