const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");
const Post = mongoose.model("Post");

exports.addComment = async (req, res) => {
  try {
    const { post_id, body } = req.body;
    if (!post_id || !body) throw "Body was not sent properly.";
    try {
      await Post.findOne({ _id: post_id });
    } catch (err) {
      throw "Post not found";
    }
    comment = new Comment({ post_id, body, user_id: req.id });
    await comment.save();
    res.json({ message: "Comment added successfully 😋" });
  } catch (err) {
    res.status(400).json({
      message: err
    });
  }
};

exports.getComment = async (req, res) => {
  const comment = await Comment.find({ post_id: req.params.post_id });
  res.json({ comment });
};
