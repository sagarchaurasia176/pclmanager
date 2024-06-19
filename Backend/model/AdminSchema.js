const mongoose = require("mongoose");

// Admin Schema apply
exports.AdminSchema = mongoose.Schema({
  AdminId: {
    type: String,
    required: true,
    unique: true,
    trim:true,
  },
  name: {
    type: String,
    required: true,
    max: 100,
    trim:true,

  },
  active: {
    type: Boolean,
    required: true,
  },
});
// exports the model here so we get
module.exports = mongoose.model("AdminSchema", AdminSchema);
