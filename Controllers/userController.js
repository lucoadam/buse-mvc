const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const User = mongoose.model("User");
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) throw "Body was not sent properly.";
    if (!name.includes(" ")) throw "Full name is required. ";
    const emailRegex = /@yahoo.com|@gmail.com|@hotmail.com/;
    if (!emailRegex.test(email)) throw "Email is not supported";
    if (password.length < 6) throw "Password must be at least 6 Character long";
    let user = await User.findOne({ email: email });
    if (user) throw "Email with same user already exists";
    user = new User({ email, name, password: md5(password) });
    await user.save();
    res.json({ message: "Registered 😋" });
  } catch (err) {
    res.status(400).json({
      message: err
    });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw "Body was not sent properly.";
    let user = await User.findOne({ email: email, password: md5(password) });
    if (!user) throw "Email and password doesnot match";
    //json web tokens
    const token = jwt.sign({ id: user._id }, "34568thfdcfr5gr");
    res.json({ message: "Login Successful", token });
  } catch (err) {
    res.status(400).json({
      message: err
    });
  }
};
exports.getprofile = async (req, res) => {
  const user = await User.findById(req.id);
  res.json({ message: "Hi " + user.name, user });
};
exports.getAllProfile = async (req, res) => {
  const allUser = await User.find();
  res.json({ allUser });
};
exports.logout = async (req, res) => {
  req.logout();
  req.flash("success_msg", "You are Successful");
  res.redirect(user / this.login);
};
