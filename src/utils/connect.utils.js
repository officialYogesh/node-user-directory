const mongoose = require("mongoose");

const connect = async () => {
  const dbURI = process.env.MONGO_DB_URI;

  try {
    let dbName = process.env.DB_NAME;
    if (process.env.NODE_ENV === "test") dbName = dbName + "-test";
    await mongoose.connect(dbURI, { dbName });
    console.log("DB connected");
  } catch (error) {
    console.log("Could not connect to db");
    process.exit(1);
  }
};

module.exports = connect;
