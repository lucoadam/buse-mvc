const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const Message = mongoose.model("Message");

exports.addMessage = async (req, res) => {
  try {
    const { receiver_id, body } = req.body;
    if (!receiver_id || !body) throw "Body was not sent properly.";
    message = new Message({ receiver_id, body, sender_id: req.id });
    await message.save();
    res.json({ message: "Message sent successfully 😋" });
  } catch (err) {
    res.status(400).json({
      message: err
    });
  }
};

exports.getMessage = async (req, res) => {
  const message = await Message.find();
  res.json({ post });
};
