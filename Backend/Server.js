const express = require("express");
const app = express();
require("dotenv").config();
// connect with the postgrees db
app.use(express.json());
// call the db postgress here
// port applied here
const port = process.env.PORT_NUM || 8000;
// listen at this ports
app.listen(port, () => {
  console.log(`"server running at this port" ${port}`);
});
// app.get apply here
app.get("/", (req, res) => {
  res.send("backend running find");
});
