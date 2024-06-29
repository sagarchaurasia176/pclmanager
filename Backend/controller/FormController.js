// Test the database connection
const New_Register_Students = require("../model/PCLFormSchema");

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
      teamMembers,
    } = req.body;
    // email checks
    let emailChecks = await New_Register_Students.findOne({ email });
    if (!email) {
      return res.status(401).json({
        success: false,
        message: "email already exist !",
      });
    }
    const formStoredLogic = await New_Register_Students.create({
      title,
      description,
      conferencePaper,
      journalPatent,
      prototype,
      email,
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
exports.FormDataController = async (req, res) => {
  try {
    // create the field in db
    const formStoredLogic = await New_Register_Students.find();
    res.status(200).json({
      success: true,
      data: formStoredLogic,
      message: "Form Registered Successfully!",
    });
  } catch (er) {
    res.status(500).json({
      success: false,
      message: " error in fetching time!",
      Error: er.message,
    });
  }
};
