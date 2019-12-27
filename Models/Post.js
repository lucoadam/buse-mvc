const mongoose = require("mongoose");
//create Schema
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: "Title is requiered"
    },
    body: {
      type: String,
      trim: true,
      required: "Body is required"
    },
    user_id: {
      type: String,
      trim: true,
      required: "User identifier is required"
    }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("Post", postSchema);
