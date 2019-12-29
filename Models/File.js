const mongoose = require("mongoose");
//create Schema
const fileSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      trim: true,
      required: "URL is requiered"
    },
    sub_category_id: {
      type: String,
      trim: true,
      required: "Category is required"
    }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("File", fileSchema);
