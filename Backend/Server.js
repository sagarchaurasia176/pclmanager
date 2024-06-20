const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;
// listen port apply here
app.listen(PORT, () => {
  console.log(`server is running at port" ${PORT}`);
});
// passed the middlware here so we get
app.use(express.json());
// call the db here by requires => and connnect with the userAuthDbConnectioon();
require("./config/DbConnection").userAuthDbConnectionSetup();

// routes import and mount here
const routes = require("./routes/MainManagerRoutes");
app.use("/PclManager", routes);

app.get("/", (req, res) => {
  res.send(` Backend server running at ${PORT}`);
});
