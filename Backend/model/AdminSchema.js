const mongoose = require("mongoose");

// Admin Schema apply
const AdminSchema = mongoose.Schema({
  AdminId: {
    type: String,
    required: true,
    trim:true,
  },
  name: {
    type: String,
    required: true,
    max: 20,
    trim:true,

  },

});
// exports the model here so we get
module.exports = mongoose.model("AdminSchema", AdminSchema);
