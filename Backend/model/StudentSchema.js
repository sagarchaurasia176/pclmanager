const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  Usn: {
    type: String,
    required: true,
    trim: true,
    max: 10,
  },
  Branch: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("StudentSchema", StudentSchema);
