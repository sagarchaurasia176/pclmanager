const express = require("express");
const router = express.Router();

// import the controllers here so we get here like
const { Student } = require("../controller/Student");
// const { Guide } = require("../controller/Guide");
const { Admin } = require("../controller/Admin");
// const { Guide } = require("../controller/Guide");
// const { Admin } = require("../controller/Admin");

// now intialized with the routes here so we get, so you just send the request here
router.post("/Student", Student);
// router.post("/Guide", Guide);
router.post("/Admin", Admin);

// module.exports apply, so we get
module.exports = router;
