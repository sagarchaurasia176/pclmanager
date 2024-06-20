const mongoose = require("mongoose");
// Admin Schema apply
const AdminSchema = mongoose.Schema({
  Admin: {
    type: String,
    required: true,
    trim: true,
    max: 10,
  },
  name: {
    type: String,
    required: true,
    max: 10,
    trim: true,
  },
});
// exports the model here so we get
module.exports = mongoose.model("AdminSchema", AdminSchema);
