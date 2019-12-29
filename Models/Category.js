const mongoose = require("mongoose");
//create Schema
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is requiered"
    }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("Category", categorySchema);
