const mongoose = require("mongoose");
// Guide schema
const GuideSchema = mongoose.Schema({
  Guides: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
});
module.exports = mongoose.model("GuideSchema", GuideSchema);
