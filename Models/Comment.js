const mongoose = require("mongoose");
//create Schema
const commentSchema = new mongoose.Schema(
  {
    post_id: {
      type: String,
      trim: true,
      required: "Post identifier is requiered"
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
module.exports = mongoose.model("Comment", commentSchema);
