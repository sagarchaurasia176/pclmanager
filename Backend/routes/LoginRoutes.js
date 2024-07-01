const express = require("express");
const routes = express.Router();

// import the controller here so we get
const {FormController,FormGetController , LoginController} = require("../controller/FormController");
// In form controller I send the data to db
routes.post("/FormController", FormController);
// student data get
routes.get("/StudentData", FormGetController);
// login data
routes.post("/Login", LoginController);

// exports the data
module.exports = routes;
