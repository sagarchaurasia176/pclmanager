const express = require("express");
const routes = express.Router();
const {FormGetController,FormController , LoginController } = require("../controller/FormController");
// In form controller I send the data to db
routes.post("/Registered", FormController);
// student data get
routes.get("/StudentData", FormGetController);
// login data
routes.post("/Login", LoginController);
// exports the data
module.exports = routes;
