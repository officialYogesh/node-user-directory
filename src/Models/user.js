const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      index: { unique: true },
    },
    name: String,
    address: String,
    dob: String,
    state: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
