const mongoose = require("mongoose");
//create Schema
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required"
    }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("Category", categorySchema);
