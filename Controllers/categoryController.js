const mongoose = require("mongoose");
const Category = mongoose.model("Category");

exports.addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) throw "Body was not sent properly.";
    category = new Category({ name });
    await category.save();
    res.json({ message: "Category added successfully 😋" });
  } catch (err) {
    res.status(400).json({
      message: err
    });
  }
};

exports.getCategory = async (req, res) => {
  const category = await Category.find();
  res.json({ category });
};
