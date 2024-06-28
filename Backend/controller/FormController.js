// Test the database connection
const RegisterPclForm = require("../model/PCLFormSchema");
exports.FormController = async (req, res) => {
  try {
    // destruct the data first
    const {
      title,
      description,
      conferencePaper,
      journalPatent,
      prototype,
      teamMembers,
    } = req.body;
    // create the field in db
    const formStoredLogic = await RegisterPclForm.create({
      title,
      description,
      conferencePaper,
      journalPatent,
      prototype,
      teamMembers,
    });

    // usn securcity apply here 


    res.status(200).json({
      success: true,
      message: "data stored succesfully!",
      data: formStoredLogic,
    });
  } catch (er) {
    res.status(500).json({
      success: false,
      message: "Internal server error !",
    });
  }
};
