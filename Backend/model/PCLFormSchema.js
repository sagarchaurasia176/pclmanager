// Define the schema for team members
const mongoose = require('mongoose');

const TeamMemberSchema = new mongoose.Schema({
  FullName: { type: String, required: true, default: "" },
  role: { type: String, required: true, default: "" },
  Branch: { type: String, required: true, default: "" },
  UsnNumber: { type: String, required: true, default: "" },
  year: { type: String, required: true, default: "" },
});

// Define the schema for the RegisterPclForm
const RegisterPclFormSchema = new mongoose.Schema({
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
  ConferencePaper: { 
    type: Boolean,
    required: true,
    default: true,
  },
  JournalPatent: { type: Boolean,
    required: true,
    default: true,

  },
  Prototype: { type: Boolean,
    required: true,
    default: true,    
  },
  email: {
    type: String,
    required: true,
    // match: [/.+\@.+\..+/, 'Please enter a valid email address'],
  },
  teamMembers: [TeamMemberSchema],
});

module.exports = mongoose.model('New_Register_Students'  , RegisterPclFormSchema)