// mongo db itegration
const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = () => {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
  }).then(()=>{
    console.log("db connected succesfully....")
  }).catch((er)=>{
    console.log("error in db connection" , er);
  });
};
module.exports = dbConnection;