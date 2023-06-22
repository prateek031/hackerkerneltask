const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/hktt")
  .then(function () {
    console.log("database connected!");
  })
  .catch(function (error) {
    console.log(error.message);
  });
