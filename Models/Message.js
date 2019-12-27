const mongoose = require("mongoose");
//create Schema
const messageSchema = new mongoose.Schema(
  {
    sender_id: {
      type: String,
      trim: true,
      required: "Sender identifier is requiered"
    },
    body: {
      type: String,
      trim: true,
      required: "Body is required"
    },
    receiver_id: {
      type: String,
      trim: true,
      required: "Receiver identifier is required"
    }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("Message", messageSchema);
