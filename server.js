const createApp = require("./src/app");
const connect = require("./src/utils/connect.utils");

const port = process.env.PORT || 3000;

const app = createApp();

connect().then(() => {
  app.listen(port, async () => {
    console.log(`App is running on port: ${port}`);
  });
});

module.exports = app;
