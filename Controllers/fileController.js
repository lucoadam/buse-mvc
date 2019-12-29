const mongoose = require("mongoose");
const File = mongoose.model("File");

exports.addFile = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) throw "Body was not sent properly.";
    file = new File({ name });
    await file.save();
    res.json({ message: "Category added successfully 😋" });
  } catch (err) {
    res.status(400).json({
      message: err
    });
  }
};

exports.getFile = async (req, res) => {
  const file = await File.find();
  res.json({ file });
};
