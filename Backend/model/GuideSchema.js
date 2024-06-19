const mongoose = require("mongoose");
// Guide schema
const GuideSchema = mongoose.Schema({
  GuideId: {
    type: String,
    required: true,
    unique: true,
    trim:true,
    max:20

  },
  name: {
    type: String,
    required: true,
    max: 20,
    trim:true,
  },
  active: {
    type: Boolean,
    required: true,
  },
});
module.exports = mongoose.model("GuideSchema", GuideSchema);
