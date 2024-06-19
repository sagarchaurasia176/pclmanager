const mongoose = require("mongoose");
// Guide schema
exports.GuideSchema = mongoose.Schema({
  GuideId: {
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
module.exports = mongoose.model("GuideSchema", GuideSchema);
