// Define the schema for team members
const mongoose = require("mongoose");

const TeamMemberSchema = new mongoose.Schema({
  FullName: { type: String, default: "" },
  role: { type: String, default: "" },
  Branch: { type: String, default: "" },
  UsnNumber: { type: String, default: "" },
  year: { type: String, default: "" },
});

const RegisterPclFormSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "",
  },
  description:{
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  teamMembers: [TeamMemberSchema],
});

module.exports = mongoose.model("RegisteredStudents", RegisterPclFormSchema);
