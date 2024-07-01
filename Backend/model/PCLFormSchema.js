// Define the schema for team members
const mongoose = require("mongoose");

const TeamMemberSchema = new mongoose.Schema({
  FullName: { type: String, default: "" },
  role: { type: String, required: true, default: "" },
  Branch: { type: String, default: "" },
  UsnNumber: { type: String, default: "" },
  year: { type: String, default: "" },
});

// Define the schema for the RegisterPclForm
const RegisterPclFormSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  ConferencePaper: {
    type: Boolean,
    default: false,
  },
  JournalPatent: {
    type: Boolean,
    default: false,
  },
  Prototype: { type: Boolean, default: false },
  email: {
    type: String,
  },
  teamMembers: [TeamMemberSchema],
});

module.exports = mongoose.model("RegisteredStudents", RegisterPclFormSchema);
