const mongoose = require("mongoose");
// Guide schema
exports.GuideSchema = mongoose.Schema({
  GuideId: {
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
module.exports = mongoose.model("GuideSchema", GuideSchema);
