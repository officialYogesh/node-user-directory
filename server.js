const app = require("./src/app");

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log("Server started on port: " + port);
});
