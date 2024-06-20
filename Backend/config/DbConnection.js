const mongoose = require("mongoose");
// import the dotenv files
require("dotenv").config();
// call the functions in this ways also
exports.userAuthDbConnectionSetup = () => {
  mongoose
    .connect(process.env.PMS_DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("db connected succesfully !");
    })
    .catch(() => {
      console.log("error in db connections !");
      process.exit(1);
    });
};
