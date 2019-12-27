const express = require("express");
const app = express();

//enable json support
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//include routes
app.use("/user", require("./Routes/user"));

module.exports = app;
