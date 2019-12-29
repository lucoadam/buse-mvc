const mongoose = require("mongoose");
const SubCategory = mongoose.model("SubCategory");

exports.addSubCategory = async (req, res) => {
  try {
    const { name, category_id } = req.body;
    if (!name || !category_id) throw "Body was not sent properly.";
    subCategory = new SubCategory({ name, category_id });
    await subCategory.save();
    res.json({ message: "subCategory added successfully 😋" });
  } catch (err) {
    res.status(400).json({
      message: err
    });
  }
};

exports.getSubCategory = async (req, res) => {
  const subCategory = await SubCategory.find();
  res.json({ subCategory });
};
