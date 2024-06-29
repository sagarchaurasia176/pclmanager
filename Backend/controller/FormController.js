// Test the database connection
const RegisterPclForm = require("../model/PCLFormSchema");
const bcrypt = require("bcrypt");
exports.FormController = async (req, res) => {
  try {
    // destruct the data first
    const {
      title,
      description,
      conferencePaper,
      journalPatent,
      prototype,
      email,
      password,
      teamMembers,
    } = req.body;
    let emailChecks = await RegisterPclForm.findOne({ email });
    if (!email || !password) {
      return res.status(401).json({
        success: false,
        message: "please fill  the email and password  field !",
      });
    }

    if (!email) {
      return res.status(401).json({
        success: false,
        message: "email already exist !",
      });
    }
    // password hash apply here
    let passwordHash;
    try {
      passwordHash = await bcrypt.hash(password, 10);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Error inn hashing Password",
        Error: err.message,
      });
    }
    const formStoredLogic = await RegisterPclForm.create({
      title,
      description,
      conferencePaper,
      journalPatent,
      prototype,
      email,
      password: passwordHash,
      teamMembers,
    });
    res.status(200).json({
      success: true,
      data: formStoredLogic,
      message: "Form Registered Successfully!",
    });
  } catch (er) {
    res.status(500).json({
      success: false,
      message: "Internal server error !",
      Error: er.message,
    });
  }
};


// receive data get the data of student
exports.LoginController = async (req, res) => {
  try {
    // destruct the data first
    const {
      title,
      description,
      conferencePaper,
      journalPatent,
      prototype,
      email,
      password,
      teamMembers,
    } = req.body;
    // create the field in db
    const formStoredLogic = await RegisterPclForm.find({});
    res.status(200).json({
      success: true,
      data: formStoredLogic,
      message: "Form Registered Successfully!",
    });
  } catch (er) {
    res.status(500).json({
      success: false,
      message: "Internal server error !",
      Error: er.message,
    });
  }
};
