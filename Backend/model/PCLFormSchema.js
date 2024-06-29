// Test the database connection
const mongoose = require("mongoose");

// Define a nested schema for team members
const TeamMemberSchema = mongoose.Schema({
  FullName: { type: String, default: "", required: true },
  role: { type: String, default: "", required: true },
  Branch: { type: String, default: "", required: true },
  UsnNumber: { type: String, default: "", required: true },
  year: { type: String, default: "", required: true },
});

const RegisterPclForm = mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 30,
  },
  description: {
    type: String,
    required: true,
    maxLength: 100,
  },
  ConferencePaper: { type: Boolean, default: false },
  JournalPatent: { type: Boolean, default: false },
  Prototype: { type: Boolean, default: false },
  email:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },

  TeamMemberSchema: [TeamMemberSchema],
});

module.exports = mongoose.model(' RegisterPclForm' ,  RegisterPclForm );