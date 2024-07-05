// Test the database connection
const RegisteredStudents = require("../model/PCLFormSchema");

exports.FormController = async (req, res) => {
  try {
    // destruct the data first
    const { title, description, email, teamMembers } = req.body;
    // email checks
    let emailChecks = await RegisteredStudents.findOne({ email });
    if (emailChecks) {
      return res.status(401).json({
        success: false,
        message: "email already exist !",
      });
    }
    //otherwise create the data here
    const formStoredLogic = await RegisteredStudents.create({
      title,
      description,
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
exports.FormGetController = async (req, res) => {
  try {
    // create the field in db
    const formStoredLogic = await RegisteredStudents.find();
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

exports.LoginController = async (req, res) => {
  try {
    const { email } = req.body;
    // Check if email is provided
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Please provide an email address.",
      });
    }
    // Check if the user is registered
    const existingStudent = await RegisteredStudents.findOne({ email: email });
    if (!existingStudent) {
      return res.status(401).json({
        success: false,
        message: "This email is not registered.",
      });
    }
    // Successful login
    res.status(200).json({
      success: true,
      data: existingStudent,
      message: "Login successful!",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};
