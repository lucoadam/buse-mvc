const mongoose = require("mongoose");
//create Schema
const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is requiered"
    },
    category_id: {
      type: String,
      trim: true,
      required: "Name is requiered"
    }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("SubCategory", subCategorySchema);
