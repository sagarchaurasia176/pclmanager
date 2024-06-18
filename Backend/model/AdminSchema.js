const mongoose = require("mongoose");
// Admin Schema apply
exports.AdminSchema = mongoose.Schema({
  AdminId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    max: 100,
  },
});
// exports the model here so we get
module.exports = mongoose.model('AdminSchema', AdminSchema)

