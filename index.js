//setup mongooDB
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/buse", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on("error", err => {
  console.log(err);
});
//imports all module here
require("./Models/User");
require("./Models/Post");
require("./Models/Comment");
require("./Models/Category");
require("./Models/SubCategory");
require("./Models/File");

const app = require("./app");
//start the server
app.listen(7000, () => {
  console.log("server started at 7000");
});
