const cors = require("cors");

const corsOptions = {
  origin: "*",
  methods: ['GET','POST','DELETE','PUT']
};

module.exports = cors(corsOptions);
