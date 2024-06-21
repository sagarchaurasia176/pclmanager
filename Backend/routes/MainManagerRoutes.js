const express = require("express");
const router = express.Router();
// import the controllers here so we get here like
const { Student } = require("../controller/Student");
const { Guide } = require("../controller/Guide");
const { MainAdmin } = require("../controller/MainAdmin");
router.post("/Student", Student);
router.post("/Guide", Guide);
router.post("/MainAdmin", MainAdmin);

// module.exports apply, so we get
module.exports = router;
