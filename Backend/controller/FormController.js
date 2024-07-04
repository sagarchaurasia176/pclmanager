// Test the database connection
const RegisteredStudents = require("../model/PCLFormSchema");

exports.FormController = async (req, res) => {
  try {
    // destruct the data first
    const { title, email,  description , teamMembers } = req.body;
    // email checksx`
    let emailChecks = await RegisteredStudents.findOne({ email });
    if (emailChecks) {
      return res.status(401).json({
        success: false,
        message: "email is already existed",
      });
    }
    //otherwise create the data here
    const formStoredLogic = await RegisteredStudents.create({
      title,
      email, 
      description,
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

// receive data get the data of student into student table
exports.FormGetController = async (req, res) => {
  try {
    // create the field in db
    const formStoredLogic = await RegisteredStudents.find({});
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

// login controller apply here throught secret project code here
exports.LoginController = async (req, res) => {
  try {
    const { email } = req.body;
    const emailExisting = await RegisteredStudents.findOne({ email: email });
    // fetch the data from the useres
    //validation on email and password
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "PLease fill all the details carefully",
      });
    }
    //if not a registered user
    if (!emailExisting) {
      return res.status(401).json({
        success: false,
        message: "your email is not registered",
      });
    }
    const loginData = RegisteredStudents.create({ email });
    // passed the response here so we get like
    res.status(200).json({
      success: true,
      data: loginData,
      message: "Login succesful !",
    });
  } catch (er) {
    res.status(500).json({
      success: false,
      message: "Internal server error !",
      Error: er.message,
    });
  }
};
