const createServer = require("./utils/server.utils");
const connect = require("./utils/connect.utils");

const port = process.env.PORT || 3000;

const app = createServer();

connect().then(() => {
  app.listen(port, async () => {
    console.log(`App is running on port: ${port}`);
  });
});

module.exports = app;
