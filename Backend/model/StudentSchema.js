const mongoose = require("mongoose");
exports.StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  Usn: {
    type: String,
    required: true,
    trim: true,
  },
  Branch: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("StudentSchema", StudentSchema);
